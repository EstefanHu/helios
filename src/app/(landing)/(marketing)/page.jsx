import Link from 'next/link';
import styles from './marketing.module.scss';

export const metadata = {
  title: 'The Helios Project',
  description: 'Helios is an online tool for assisting in maintaining consistent mindfulness practices.',
  keywords: ['Journal', 'Write', 'Mindfulness'],
};

export default function Marketing() {
  return (
    <div className={styles.wrapper}>
      <section>
        <div className={styles.hero}>
          <span>
            <h1>
              <span>prjkt</span>:Helios
            </h1>
            <p>the journal that grows with you</p>
          </span>
        </div>
      </section>

      {/* TODO: Add socket to monitor written words */}
      <section className={styles.secondary}>
        <div className={styles.details}>
          <h1>Life changes. So should your Journal.</h1>

          <article>
            <div>
              <h2>create custom entries</h2>
              <p>
                Enrich your journaling experience by tagging, linking, and adding Marginalia to your entries. Focus your
                sessions with topical directives or events. Associate resources, mark up your sentences, compose epic
                logs! Or, you can just write.
              </p>
              <Link href='/start'>begin journey</Link>
            </div>
            <div></div>
          </article>

          <article>
            <div></div>
            <div>
              <h2>gain meaningful insights</h2>
              <p>
                Reflect on previous entries. Make space to dive deep into your charged motives. Reference previous
                accomplishments. And for complex challenges, start a journey.
              </p>
              <Link href='/start'>begin journey</Link>
            </div>
          </article>

          <article>
            <div>
              <h2>dynamically alter your journaling style</h2>
              <p></p>
              <Link href='/start'>begin journey</Link>
            </div>
            <div></div>
          </article>

          <article>
            <div></div>
            <div>
              <h2>export your archive anytime</h2>
              <p></p>
              <Link href='/start'>begin journey</Link>
            </div>
          </article>
        </div>
      </section>

      <section></section>

      <section className={styles.tertiary}>
        <div className={styles.offer}></div>
      </section>

      <section>
        <div className={styles.quote}>
          <p>&quot;Preserve your memories, keep them well, what you forget you can never retell.&quot;</p>

          <h3>- Louisa May Alcott</h3>

          <Link href='/start'>begin journey</Link>
        </div>
      </section>

      <section className={styles.secondary}>
        <div className={styles.faq}>
          <span className={styles.header}>
            <h2 className={styles.facts}>faq</h2>
            <h2 className={styles.helios}>:Helios</h2>
          </span>

          <div className={styles.bullet}>
            <h3>What is :Helios?</h3>
            <p>
              Helios is an assisted journaling experience that empowers you to consistently write, reflect, and draw
              insights about your daily experience. By leveraging the power of the internet you gain the ability to
              control and contribute to your own personal <Link href='/roadmap#archive'>archive</Link>.
            </p>
          </div>

          <div className={styles.bullet}>
            <h3>Who controls my Entries?</h3>
            <p>
              Everything you create, you own. While we do encrypt everything by default, if at any time you decide you
              want to completely clean out your digital footprint from :Helios you can. With our{' '}
              <Link href='/roadmap#farewall'>farewell protocall</Link> you will be able to evict your data from :Helios
              servers and download your entries for your safekeeping.
            </p>
          </div>

          <div className={styles.bullet}>
            <h3>How much does it cost?</h3>
            <p>
              Helios is a free to use service with paid an upgradable feature list. We are, however, a fully self funded
              passion project and will only be able to keep our doors open for as long as we keep making a positive
              impact on our community. If you wish to see this project continue, consider supporting us by spreading the
              word.
            </p>
          </div>

          <div className={styles.bullet}>
            <h3>Can I contribute?</h3>
            <p>
              Of course! We have a list of open roles <Link href='/careers'>here</Link>. If you are looking to
              contribute in a capacity that isn’t listed, feel free to contact us regarding contributions. Looking to
              support us financially? You can do so through our <Link href='/support'>support</Link> page!
            </p>
          </div>

          <div className={styles.bullet}>
            <h3>What&apos;s next?</h3>
            <p>
              Oh so much! For the time being, :Helios is being developed by a handful of passionate travelers to learn
              more about the team) in our free time but we have drafted a wish list of features and possible timelines
              here. If you would like to learn more about our team checkout our <Link href='/about'>about</Link> page.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.cta}>
          <h1>your journey awaits</h1>
          <Link href='/start'>begin</Link>
        </div>
      </section>
    </div>
  );
}
