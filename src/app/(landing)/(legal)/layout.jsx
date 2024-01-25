import Link from 'next/link';
import styles from './LegalLayout.module.scss';

const DOCUMENTS = [
  {
    link: '/tos',
    text: 'Terms of Service',
  },
  {
    link: '/privacy',
    text: 'Privacy Policy',
  },
  {
    link: '/publisher_agreement',
    text: 'Publisher Agreement',
  },
  {
    link: '/content_guidelines',
    text: 'Content Guidelines',
  },
  {
    link: '/dispute',
    text: 'Copyright Dispute Policy',
  },
  {
    link: '/repeat_infringer',
    text: 'Repeat Infringer Policy',
  },
  {
    link: '/ccpa',
    text: 'CCPA Policy',
  },
];

export default function layout({ children }) {
  return (
    <div className={styles.legalWrapper}>
      <nav>
        <h1>Documents</h1>

        {DOCUMENTS.map(({ link, text }) => (
          <Link key={text} href={link}>
            <p className={styles.documentLink}>{text}</p>
          </Link>
        ))}
      </nav>

      {children}
    </div>
  );
}
