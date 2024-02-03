import { getEntry } from '@/app/actions/entries.js';
import { getEntries } from '@/app/actions/entries.js';
import viewer from './viewer.module.scss';
import layout from '../../layout.module.scss';

export async function generateStaticParams() {
  // TODO: replace user id
  const entries = await getEntries(1);

  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function Page({ params }) {
  const entryResponse = await getEntry(params.slug);
  const entry = entryResponse[0];

  return (
    <section className={viewer.viewerContainer}>
      <div className={viewer.viewerDetails}>
        <div className={viewer.createdTimeDate}>
          <span>
            {entry.created_at.toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <span>{entry.created_at.toLocaleTimeString('en-us', { timeStyle: 'short' })}</span>
        </div>
        <div className={viewer.editGroup}>
          <button>edit</button>
          <span className={layout.italicLight}>
            last edited {entry.updated_at.toLocaleDateString('en-us', { month: 'short', day: 'numeric' })}
          </span>
        </div>
      </div>
      <h1 className={layout.title}>{entry.title}</h1>
      <p className={layout.bodyText}>{entry.body}</p>
    </section>
  );
}
