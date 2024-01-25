import Link from 'next/link';
import styles from './marketing.module.scss';

export const metadata = {
  title: 'Helios - A guided journaling experience',
  description: 'Helios is an online tool for assisting in maintaining consistent mindfulness practices.',
  keywords: ['Journal', 'Write', 'Mindfulness'],
};

const FAQ_BULLETS = [
  {
    header: 'What is :Helios?',
    content:
      ':Helios is a collaborative storytelling platform that allows writers to develop the habit of writing and telling their stories. Our no tech solution removes the hassles of the internet so you can focus on telling your stories to the world!',
  },
  {
    header: 'Who can see what I write?',
    content:
      'Everything, by default, is encrypted and private. This is to ensure that you stay unimpeded while writing your first drafts. Then, if you want to, share your work to the your community for feedback and reviews.',
  },
  {
    header: 'Who owns what I write?',
    content:
      'You do! Everything you create, everything you write will always remain yours. We make it easy for you to create stories and communities that belong to you.',
  },
  {
    header: 'Why daily entries?',
    content:
      'Many authors evangelize the benifits of a regular writing habit for their craft and their health. For further insight you can read about Julia Cameron and Morning Pages.',
  },
];

export default function Marketing() {
  return (
    <div className={styles.wrapper}>
      <section>
        <div className={styles.hero}>
          <h1>prjkt:Helios</h1>
          <p>a guided journaling experience</p>
        </div>
      </section>

      <section className={styles.secondary}>
        <div className={styles.details}>
          <h1>Ever wished that your journal grew with you?</h1>
        </div>
      </section>

      <section className={styles.offer}></section>

      <section className={styles.tertiary}>
        <div className={styles.quote}>
          <p>&quot;Preserve your memories, keep them well, what you forget you can never retell.&quot;</p>

          <h3>- Louisa May Alcott</h3>

          <Link href='/register'>begin journey</Link>
        </div>
      </section>

      <section className={styles.secondary}>
        <div className={styles.faq}>
          <span className={styles.header}>
            <h2 className={styles.facts}>faq</h2>
            <h2 className={styles.helios}>:Helios</h2>
          </span>

          {FAQ_BULLETS.map(({ header, content }) => (
            <div key={header} className={styles.bullet}>
              <h3>{header}</h3>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className={styles.cta}>
          <h1>begin your journey</h1>
          <Link href='/start'>start</Link>
        </div>
      </section>
    </div>
  );
}
