import { getEntry } from "@/app/actions/entries"
import { getEntries } from "@/app/actions/entries"
import styles from './viewer.module.scss';
import slugify from "slugify";

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   // TODO: replace user id
//   const entries = await getEntries(1).then((res) => res.json())
 
//   return entries.map((entry) => ({
//     slug: slugify(entry.title)
//   }))
// }

export default async function Page({ params }) {
  const entryResponse = await getEntry(params.slug)
  const entry = entryResponse[0]
  
  return (
    <section className={styles.viewerContainer}>
      <section className={styles.viewerDetails}>
          <div className={styles.createdTimeDate}>
            <span className={styles.date}>{entry.created_at.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span>|
            <span className={styles.date}>{entry.created_at.toLocaleTimeString('en-us', { timeStyle: 'short' })}</span>
          </div>
          <div className={styles.edit}>
            <button className={styles.editButton}>Edit</button>
            <span className={styles.editedText}>last edited {entry.updated_at.toLocaleDateString('en-us', { month:"short", day:"numeric"})}</span>
          </div>
      </section>

      <section className={styles.viewerHeader}>
        <h1 className={styles.title}>{entry.title}</h1>
      </section>

      <section className={styles.body}>
        <p>{entry.body}</p>
      </section>
    </section>
  )
}