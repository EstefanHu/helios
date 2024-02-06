import Logout from './Logout';
import styles from './Profile.module.scss';
import ProfileElement from './ProfileElement';

export default function Profile() {
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
          <p>
            <span>traveler:</span> <ProfileElement property='firstname' /> <ProfileElement property='lastname' />
          </p>

          <p>
            <span>email:</span> <ProfileElement property='emailaddress' />
          </p>

          <p>
            <span>email confirmed:</span> <ProfileElement property='emailconfirmed' />
          </p>
        </div>

        <div className={styles.account}>
          <p>billing: </p>
        </div>
      </section>

      <Logout />
    </div>
  );
}
