import Link from 'next/link';
import styles from '../LegalLayout.module.scss';

export const metadata = { title: 'Helios | CCPA' };

export default function Page() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalSection}>
        <h1>CCPA Policy</h1>

        <p>Last Updated: January 1, 2024</p>

        <p>
          This CCPA Policy is incorporated by reference into the Helios Privacy Policy. While the framework used here is
          based in the provisions of the California Consumer Privacy Act of 2018 (“CCPA”), we provide the rights
          described here to all our users. If you are a California resident, please note that the processing of certain
          personal data about you may be subject to the California Consumer Privacy Act (“CCPA”) and other applicable
          California state privacy laws. Any capitalized terms not defined in this CCPA Policy have the same meaning
          given to them in our Privacy Policy, Terms of Use, and/or the CCPA.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>No Sale of Personal Information</h2>

        <p>We do not sell personal information.</p>
      </div>

      <div className={styles.legalSection}>
        <h2>Individual Rights</h2>

        <p>
          The CCPA provides California consumers with several individual rights with respect to Personal Information.
          Note that these rights apply to individual consumers, not to companies. This section describes those rights in
          detail and provides information on how to exercise those rights.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Exercising Your Rights</h2>

        <p>
          To exercise any of the rights described in this section, please contact us at{' '}
          <Link className={styles.noWrap} href='mailto:privacy@helios-journal.com'>
            privacy@helios-journal.com
          </Link>{' '}
          with (i) a complete description of your request, including the specific right(s) you wish to exercise and (ii)
          sufficient information about you so we can confirm that your request is a verifiable customer request,
          including at a minimum your name and email address. Once we have received your verifiable consumer request, we
          will respond consistent with applicable law.
        </p>

        <p>
          Please note that you may also designate an authorized agent to make a request on your behalf. In order for us
          to process a request from your authorized agent, we must (i) confirm that the agent is a natural person or
          business entity registered with the Secretary of State that you have authorized to act on your behalf, (ii)
          receive from you a copy of the written authorization that provides the authorized agent to act on your behalf,
          and (iii) verify your identity by asking you to provide us sufficient information in order to do so.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Your Right to Know</h2>

        <p>
          You have a right to know what personal information we use, disclose, or sell. We provide that information here
          in our CCPA policy as well as in our <Link href='/privacy'>privacy policy</Link>.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Access and Data Portability Rights</h2>

        <p>
          You have a right to request information about our collection, use, and disclosure of your personal information
          over the prior 12 months, and ask that we provide you with the following information:
        </p>

        <p className={styles.list}>
          Categories of and specific pieces of personal information we have collected about you.
        </p>

        <p className={styles.list}>Categories of sources from which we collect personal information.</p>

        <p className={styles.list}>
          Categories of and specific pieces of personal information we have collected about you.
        </p>

        <p className={styles.list}>Purposes for collecting, using, or selling personal information.</p>

        <p className={styles.list}>Categories of third parties with which we share personal information.</p>

        <p className={styles.list}>Categories of personal information disclosed about you for a business purpose.</p>

        <p className={styles.list}>
          If applicable, categories of personal information sold about you and the categories of third parties to which
          the personal information was sold, by category or categories of personal information for each third party to
          which the personal information was sold.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Deletion Rights</h2>

        <p>
          You have the right to request that we delete Personal Information about you that we have collected, subject to
          certain exceptions.
        </p>

        <p>
          You may also access, edit, or delete certain of your Personal Information through your account settings.
          Please review our <Link href='/privacy'>Privacy Policy</Link>, in the section titled “What Personal
          Information can I access?,” for more details.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>The Right to Opt Out</h2>

        <p>
          You have the right to opt out of the sale of your personal information. Were we ever to sell personal
          information, we would provide information on our opt out process here.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Non-Discrimination Rights</h2>

        <p>
          You have the right not to receive discriminatory treatment for the exercise of your rights under the CCPA.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Personal Data Collected</h2>

        <p>
          The list below describes the category of Personal Information we collect by reference to the categories
          specified by the CCPA:
        </p>

        {/* TODO: Add LIST */}

        <p>
          Please see our <Link href='/privacy'>Privacy Policy</Link> for more information on tracking technologies we
          use for automatic data collection. We will not collect additional categories of personal information or use
          the personal information we collected for materially different, unrelated, or incompatible purposes without
          providing notice.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Use of Personal Information</h2>

        <p>
          In the last 12 months, we have used or disclosed certain Personal Information we collected for the following
          business purposes:
        </p>

        {/* TODO: Add LIST */}

        <p>
          We may further disclose each category of Personal Information to our affiliates, to our professional advisors,
          in connection with our compliance and protection activities and in connection with business transfers as
          described in our Privacy Policy.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Changes to this CCPA Policy</h2>

        <p>
          We reserve the right to amend this CCPA Policy at our discretion and at any time. When we make changes to this
          CCPA Policy, we will post the updated notice on the Website and update the CCPA Policy effective date at the
          top of the page. By accessing or using the Website and/or the Services, you acknowledge that you have read
          this CCPA Policy and, to the extent it applies to you, that you agree to the practices described in this CCPA
          Policy.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Contact Us</h2>

        <p>
          You may contact us by emailing us at{' '}
          <Link className={styles.noWrap} href='mailto:privacy@helios-journal.com'>
            privacy@helios-journal.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
