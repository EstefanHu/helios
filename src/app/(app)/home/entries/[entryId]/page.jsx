import { getEntry } from "@/app/actions/entries"
import Link from "next/link"
import styles from './viewer.module.scss';


export default async function Page({ params }) {
  const entryResponse = await getEntry(params.entryId)
  const entry = entryResponse[0]
  
  return (
    <section className={styles.viewerContainer}>
      <div className="viewer-nav">
        {/* <Link href="/home">back to list</Link> */}
      </div>
      
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