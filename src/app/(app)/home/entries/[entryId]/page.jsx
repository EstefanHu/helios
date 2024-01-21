import { getEntry } from "@/app/actions/entries"
import Link from "next/link"
import styles from './viewer.module.scss';


export default async function Page({ params }) {
  const entry = await getEntry(params.entryId)
  return (
    <section className={styles.viewerContainer}>
      <div className="viewer-nav">
        {/* <Link href="/home">back to home</Link> */}
      </div>
      
      <section className={styles.viewerDetails}>
          <span>{entry[0].created_at.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span>
        </section>

      <section className={styles.viewerHeader}>
        <h1 className={styles.title}>{entry[0].title}</h1>
      </section>

      <section className={styles.body}>
        <p>{entry[0].body}</p>
      </section>
    </section>
  )
}