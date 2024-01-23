import Logout from './Logout';
import styles from './Profile.module.scss';

export default function Profile() {
  // TODO: grab seeker from context
  const seeker = {};

  return (
    <div>
      <div className={styles.profileBreakdown}>
        <p>name: {seeker.name}</p>
      </div>

      <div className={styles.billingBreakdown}>
        <p>billing: </p>
      </div>

      <Logout />
    </div>
  );
}
