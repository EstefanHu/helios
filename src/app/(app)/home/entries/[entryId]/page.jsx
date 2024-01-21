 
import { getEntry } from "@/app/actions/entries"

export default async function Page({ params }) {
  const entry = await getEntry(params.entryId)
  return (
    <>
    <h1>{entry[0].title}</h1>
    <br />
    <p>{entry[0].body}</p>
    </>
  )
}