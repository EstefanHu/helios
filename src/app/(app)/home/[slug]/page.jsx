import { getEntry } from '@/app/actions/entries.js';
import { getEntries } from '@/app/actions/entries.js';
import styles from './viewer.module.scss';

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
    <section className={styles.viewerContainer}>
      <div className={styles.viewerDetails}>
        <div className={styles.createdTimeDate}>
          <span>
            {entry.created_at.toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          |<span>{entry.created_at.toLocaleTimeString('en-us', { timeStyle: 'short' })}</span>
        </div>
        <div className={styles.edit}>
          <button className={styles.editButton}>edit</button>
          <span className={styles.editedText}>
            last edited {entry.updated_at.toLocaleDateString('en-us', { month: 'short', day: 'numeric' })}
          </span>
        </div>
      </div>

      <div className={styles.viewerHeader}>
        <h1 className={styles.title}>{entry.title}</h1>
      </div>

      <div className={styles.body}>
        <p>{entry.body}</p>
      </div>
    </section>
  );
}
