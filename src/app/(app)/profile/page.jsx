import Logout from './Logout';
import styles from './Profile.module.scss';

export default function Profile() {
  // TODO: grab seeker from context
  const seeker = {};

  return (
    <div className={styles.profileWrapper}>
      <h2>settings</h2>
      <section>
        <div className={styles.settings}>
          <span>
            <h3>target word count</h3>
          </span>

          <span>
            <h3>reminders</h3>
          </span>
        </div>
      </section>

      <h2>account</h2>
      <section>
        <div className={styles.profile}>
          <p>name: {seeker.name}</p>
        </div>

        <div className={styles.account}>
          <p>billing: </p>
        </div>
      </section>

      <Logout />
    </div>
  );
}
