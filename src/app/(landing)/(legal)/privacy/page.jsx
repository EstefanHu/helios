import Link from 'next/link';
import styles from '../LegalLayout.module.scss';

export const metadata = { title: 'Privacy Policy' };

export default function Page() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalSection}>
        <h1>Privacy Policy</h1>

        <p>Last Updated: January 1, 2024</p>

        <p>
          Helios knows you care about how your personal information is used and shared, and we take your privacy
          seriously. This Privacy Policy outlines how we collect, use, and share your personally identifiable
          information (&quot;Personal Information&quot;) through our website (
          <Link href='/'>www.helios-journal.com</Link>) and our services. Please read it carefully.
        </p>

        <p>
          Remember that your use of Helios is at all times subject to the <Link href='/tos'>Terms of Service</Link>,
          which incorporates this Privacy Policy. Any terms we use in this Privacy Policy without defining them have the
          definitions given to them in the <Link href='/tos'>Terms of Service</Link>.
        </p>

        <p>
          This Privacy Policy includes additional notices that may apply to you if you are a California consumer. Please
          see the section further below titled &quot;Additional Notices for California Residents&quot; for more details.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>What does this Privacy Policy cover?</h2>

        <p>
          This Privacy Policy details how we collect, receive, use, store, share, transfer and process your Personal
          Information. It also describes the choices you have regarding the use of your Personal Information, as well as
          your rights and how you execute these rights.
        </p>

        <p>
          This Privacy Policy only applies to the processing of your Personal Information by Helios as a data
          controller, meaning where we process your Personal Information for our purposes. This Privacy Policy does not
          apply to any processing of your Personal Information by Helios as a data processor on behalf of a Publisher.
          Publishers will have their own privacy practices governing their use of Personal Information as outlined in
          their own terms of use and/or privacy policies.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Will Helios ever change this Privacy Policy?</h2>

        <p>
          We&lsquo;re constantly trying to improve our services, so we may need to change this Privacy Policy from time
          to time as well, but we will alert you to changes by placing a notice on our site, by sending you an email,
          and/or by some other means.
        </p>

        <p>
          Please note that if you&lsquo;ve opted not to receive legal notice emails from us (or you haven&lsquo;t
          provided us with your email address), those legal notices will still govern your use of Helios, and you are
          still responsible for reading and understanding them.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>What Information does Helios collect?</h2>

        <p>
          We collect and process Personal Information about you when you interact with us and our services, as well as
          when you subscribe to any of our paid or unpaid services. This may include:
        </p>

        <p className={styles.list}>your first and last name;</p>

        <p className={styles.list}>your email address;</p>

        <p className={styles.list}>your phone number;</p>

        <p className={styles.list}>
          your payment details (including billing address, credit card details, where you make a purchase from us);
        </p>

        <p className={styles.list}>your location and/or mailing address;</p>

        <p className={styles.list}>your photograph;</p>

        <p className={styles.list}>your marketing preferences, including any consents you have given us;</p>

        <p className={styles.list}>
          information related to the browser or device you use to access our website (including your IP address);
        </p>

        <p className={styles.list}>
          any information we collect online from you and maintain in association with your account, such as your
          username and password;
        </p>

        <p className={styles.list}>your subscription status with Helios stories;</p>

        <p className={styles.list}>any other information you provide us when communicating with us.</p>

        <p>
          We also collect information on the use of our website via Cookies. Please view the section &quot;Cookies&quot;
          below for more information.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>How does Helios use your Personal Information?</h2>

        <p>We process this Personal Information for the following purposes:</p>

        <p className={styles.list}>
          To establish and fulfill a contract with you, for example when you subscribe to a subscription Service. This
          may include verifying your identity, taking payments, communicating with you, providing customer service;
        </p>

        <p className={styles.list}>
          As required by Helios to enable our business and pursue our legitimate interests. In particular we use you
          Personal Information for the following purposes:
        </p>

        <p className={styles.doubleList}>
          to provide services you have requested, and respond to any communications, comments or complaints you send us;
        </p>

        <p className={styles.doubleList}>
          to monitor the use of our services and to help us monitor, improve and protect our services, content and
          website;
        </p>

        <p className={styles.doubleList}>allow you to create, maintain, customize and secure your account with us;</p>

        <p className={styles.doubleList}>to personalize our services for you;</p>

        <p className={styles.doubleList}>
          to monitor any user accounts to prevent, investigate and/or report fraud, misrepresentation, terrorism,
          security incidents or crime in accordance with applicable law;
        </p>

        <p className={styles.doubleList}>to invite you to take part in surveys or market research.</p>

        <p className={styles.doubleList}>
          Where our use of Personal Information is made pursuant to a balancing of our legitimate interests with your
          privacy interest, we will provide more information about our balancing analysis and process on request. Please
          send any such requests to{' '}
          <Link className={styles.noWrap} href='mailto:privacy@helios-journal.com'>
            privacy@helios-journal.com
          </Link>
          .
        </p>

        <p className={styles.list}>
          Compliance with applicable laws and protection of Helios&lsquo;s legitimate business interests and legal
          rights, including but not limited to use in connection with legal claims, compliance, regulatory,
          investigative purposes (including disclosure of such information in connection with legal process or
          litigation).
        </p>

        <p className={styles.list}>
          In addition, we will send you, based on your consent (if required), direct marketing communication in relation
          to our relevant services, or other services provided by us, our affiliates and carefully selected partners.
          You can withdraw your consent at any time (&quot;opt out&quot;); see the section &quot;What are your
          rights?&quot; below. In case of electronic direct marketing you can opt out by following the instructions in
          the communication.
        </p>

        <p className={styles.list}>
          In certain cases, we may also share some Personal Information with third parties, but only as described in
          this Privacy Policy.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>How will Helios share the Personal Information it receives?</h2>

        <p>We may share your Personal Information with third parties as described below:</p>

        <p className={styles.list}>
          <b>Affiliates:</b> We may disclose your Personal Information to our subsidiaries and/or corporate affiliates
          for the purposes as described above.
        </p>

        <p className={styles.list}>
          <b>Publishers:</b> when you subscribe to a Publisher&lsquo;s story, we provide them the information necessary
          (including your name and email address) to provide you their story or stories. Please note that Publishers
          control their own stories; accordingly, when you interact with a Publisher&lsquo;s story in a way that
          requires your personal information, including when commenting on a story that you have not subscribed to, that
          personal information is provided directly to the Publisher.
        </p>

        <p className={styles.list}>
          <b>Our Service Providers:</b> We share your Personal Information with third party service providers that
          provide services on our behalf; for example, we use Stripe (a third party payment provider) to receive and
          process your credit card transactions for us. Such third parties further include, but are not limited to,
          providers of: website hosting; maintenance services; email services; security services; content delivery
          networks; customer support operations and software services; traffic and usage analytics services; and cloud
          storage and computing services.
        </p>

        <p className={styles.list}>
          <b>Other users:</b> If your user profile allows it, you may choose to populate certain user profile
          information, including, without limitation, your name, subscriptions, publications, location, and any image
          content. Any user profile information uploaded may be displayed to other users to facilitate user interaction
          within the services (including when you post comments or upload images or videos through the services). Your
          account privacy settings may allow you to limit the other users who can see the Personal Information in your
          user profile and/or what information in your user profile is visible to others. Your username may also be
          displayed to other users if and when and other users can contact you through comments.
        </p>

        <p className={styles.list}>
          <b>Prospective sellers or buyers:</b> We may share and/or transfer customer information in connection with the
          sale or merger of our business or assets (subject to local laws). Also, if we go out of business, enter
          bankruptcy, or go through some other change of control.
        </p>

        <p className={styles.list}>
          <b>Government authorities and/or law enforcement officials:</b> If required for the purposes as described in
          this Privacy Policy, if mandated by law or if required for the legal protection of our legitimate interests in
          compliance with applicable laws we may share Personal Information with competent regulatory, prosecuting, tax
          or governmental authorities, courts or other tribunals in any jurisdiction or markets, domestic or foreign.
        </p>

        <p>
          In certain cases, we may anonymize your Personal Information in such a way that you can no longer be
          identified as an individual, and we reserve the right to use and share such anonymized information to trusted
          partners not specified here. However, we never disclose aggregated or de-identified information in a manner
          that could identify you as an individual.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Where will we send your Personal Information?</h2>

        <p>
          Helios is established in the US and uses service providers established both in the US and in other countries
          to process Personal Information as described in this Privacy Policy. As such, your Personal Information may be
          shared internationally.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Is Personal Information about you secure?</h2>

        <p>
          Your account is protected by a password for your privacy and security. You must prevent unauthorized access to
          your account and Personal Information by selecting and protecting your password appropriately and limiting
          access to your computer or device and browser by signing off after you have finished accessing your account.
        </p>

        <p>
          We endeavor to protect the privacy of your account and other Personal Information we hold in our records, but
          unfortunately, we cannot guarantee complete security. Unauthorized entry or use, failure of the services, or
          other factors may compromise the security of user information at any time.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>What are your rights?</h2>

        <p>
          Depending on applicable local laws, you may be entitled to ask Helios for a copy of your Personal Information,
          to correct it, erase or restrict its processing, or to ask us to transfer some of this information to other
          organizations. You may also have rights to object to some processing activities or to request restriction of
          some processing activities. Where we have asked for your consent to process your Personal Information, you may
          also have the right to withdraw this consent. These rights may be limited in some situations or in accordance
          with applicable law – for example, we cannot delete your Personal Information when we can demonstrate that we
          have a legal obligation to retain it. In some instances, this may mean that we are able to retain data even if
          you withdraw your consent or you delete your account.
        </p>

        <p>
          Where we require Personal Information to comply with legal or contractual obligations, then provision of such
          information is mandatory: if such information is not provided, then we will not be able to manage our
          contractual relationship, or to meet obligations placed on us. In all other cases, provision of requested
          personal data is optional. Please note we will always inform you where the provision of your Personal
          Information is mandatory or optional.
        </p>

        <p>
          We hope that we can satisfy any queries you may have about the way we process your Personal Information. If
          you have any concerns about how we process your Personal Information, or would like to opt out of marketing,
          you can get in touch at{' '}
          <Link className={styles.noWrap} href='mailto:privacy@helios-journal.com'>
            privacy@helios-journal.com
          </Link>
          .
        </p>

        <p>
          If you are a California consumer, please see the section further below titled &quot;Additional Notices for
          California Residents&quot; for more notices regarding your Personal Information.
        </p>

        <p>
          <i>You can access, edit, or delete some personal information by yourself</i>
        </p>

        <p>
          Through your account settings, you may access, and, in some cases, edit or delete the following information
          you&lsquo;ve provided to us:
        </p>

        <p className={styles.list}>name and password</p>

        <p className={styles.list}>email address</p>

        <p className={styles.list}>user profile information, including images you may have uploaded to the site</p>

        <p>
          The information you can view, update, and delete may change as the services change. If you&lsquo;d like to
          delete your account, you can do so from your <Link href='/profile'>account page</Link>.
        </p>

        <p>
          If you have any questions about viewing or updating information we have on file about you, please contact us
          at{' '}
          <Link className={styles.noWrap} href='mailto:privacy@helios-journal.com'>
            privacy@helios-journal.com
          </Link>
          .
        </p>

        <p>
          <i>You can unsubscribe from our marketing communications</i>
        </p>

        <p>
          You may unsubscribe from our marketing communications by clicking on the &quot;unsubscribe&quot; link located
          on the bottom of our e-mails, updating your communication preferences or by contacting us at{' '}
          <Link className={styles.noWrap} href='mailto:privacy@helios-journal.com'>
            privacy@helios-journal.com
          </Link>
          .
        </p>

        <p>
          We remind you that this Privacy Policy does not apply to any processing of your Personal Information by Helios
          as a data processor on behalf of a Publisher. A Publisher&lsquo;s own terms and policies govern its use of
          Personal Information it collects on the Publisher&lsquo;s subdomain on the services, including their own
          marketing emails and other communications.
        </p>

        <p>
          <i>You have the right to complain to your local data protection authority</i>
        </p>

        <p>
          In the event you have unresolved concerns, please note that you have the right to complain to a data
          protection authority. Contact details for data protection authorities in the EEA, Switzerland and certain
          non-European countries are available{' '}
          <Link href='https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm'>
            here
          </Link>
          .
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>How long will Helios retain your data?</h2>

        <p>
          We retain information about you only for as long as reasonably necessary to fulfill the purposes for which it
          was collected. We may retain your Personal Information for a longer period in the event of a complaint or if
          we reasonably believe there is a prospect of litigation in respect to our relationship with you.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Automated individual decision-making, including profiling</h2>

        <p>
          We do not process your Personal Information for automated individual decision-making, including profiling.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Cookies</h2>

        <p>
          We use cookies on our website. Cookies are small text files sent by a web server to your web browser and saved
          locally on your computer. The cookie allows the server to uniquely identify the browser on each page. Cookies
          do not cause any harm to your computer and do not contain viruses.
        </p>

        <p>We use the following categories of cookies on our website:</p>

        <p>
          <i>Category 1: Strictly Necessary Cookies</i>
        </p>

        <p>
          These cookies are essential in order to enable you to move around the website and use its features. Without
          these cookies, services you have asked for such as remembering your login details or data provided for a
          purchase cannot be provided.
        </p>

        <p>
          <i>Category 2: Performance Cookies</i>
        </p>

        <p>
          These cookies collect information on how people use our website. The data stored by these cookies never shows
          personal details from which your individual identity can be established.
        </p>

        <p>
          <i>Category 3: Functionality Cookies</i>
        </p>

        <p>
          These cookies remember choices you make such as the country you visit our website from, language and search
          parameters. These can then be used to provide you with an experience more appropriate to your selections and
          to make the visits more tailored and pleasant.
        </p>

        {/* TODO: LIST MAH COOKIESS */}

        <p>
          <i>Publisher cookies</i>
        </p>

        <p>
          In addition to the cookies Helios uses, Publishers on Helios may choose to set certain tracking and analytics
          cookies, subject to the Publisher&lsquo;s own terms and policies. These Publisher cookies may include cookies
          set by third parties such as Twitter, Facebook, and Google.
        </p>

        <p>
          <i>Disabling and opting-out of cookies</i>
        </p>

        <p>
          Current versions of web browsers offer enhanced user controls regarding the placement and duration of both
          first and third party cookies. Search for &quot;cookies&quot; under your web browser&lsquo;s &quot;Help
          menu&quot; for more information on cookie management features available to you. You can enable or disable
          cookies by modifying the settings in your browser. You can also find out how to do this, and find more
          information on cookies at <Link href='www.allaboutcookies.org'>www.allaboutcookies.org</Link>. However, if you
          choose to disable cookies in your browser, you may be unable to complete certain activities on our websites or
          to correctly access certain parts of it. If you would like more information about interest-based advertising,
          including how to opt-out of these cookies, please visit{' '}
          <Link href='http://youronlinechoices.eu/'>http://youronlinechoices.eu/</Link>.
        </p>

        <p>
          <i>Information Collected From Other Websites and Do Not Track Policy</i>
        </p>

        <p>
          Through cookies we place on your browser or device, we may collect information about your online activity
          after you leave our website. Just like any other usage information we collect, this information allows us to
          improve the services and customize your online experience, and otherwise as described in this Privacy Policy.
          Your browser may offer you a &quot;Do Not Track&quot; option, which allows you to signal to operators of
          websites and web applications and services (including behavioral advertising services) that you do not wish
          such operators to track certain of your online activities over time and across different websites. Our
          services do not support Do Not Track requests at this time, which means that we collect information about your
          online activity both while you are using the services and after you leave our services.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Questions about this policy?</h2>

        <p>The data controller for this processing is Helios.</p>

        <p>
          If you have any questions or concerns regarding our privacy policies, please send us a detailed message to{' '}
          <Link className={styles.noWrap} href='mailto:privacy@helios-journal.com'>
            privacy@helios-journal.com
          </Link>
          .
        </p>

        <p>We will try to resolve your concerns.</p>
      </div>

      <div className={styles.legalSection}>
        <h2>Additional Notices for California Residents</h2>

        <p>
          Helios has prepared additional disclosures and notices consistent with the California Consumer Privacy Act
          (CCPA). <Link href='/ccpa'>Our CCPA Policy</Link>, the terms of which are incorporated by reference into this
          Privacy Policy, can be found <Link href='/ccpa'>here</Link>.
        </p>
      </div>
    </div>
  );
}
