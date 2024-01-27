import Link from 'next/link';
import styles from '../LegalLayout.module.scss';

export const metadata = { title: 'Helios | Terms of Service' };

export default function Page() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalSection}>
        <h1>Terms of Service</h1>
        <p>Effective date: January 1, 2024</p>
      </div>

      <div className={styles.legalSection}>
        <h2>Welcome to :Helios!</h2>

        <p>
          These Terms of Service are a binding contract between you and Helios (&quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;). It contains the rules and restrictions that govern your use of Helios&lsquo;s products and
          services (referred to below simply as &quot;Helios&quot;). If you have any questions, comments, or concerns
          regarding these Terms or our products and services, please contact us at{' '}
          <Link className={styles.noWrap} href='mailto:tos@helios-journal.com'>
            tos@helios-journal.com
          </Link>
          .
        </p>

        <p>
          Using Helios in any way means that you agree to all of these Terms, and these Terms will remain in effect
          while you use Helios. These Terms include everything in this document, as well as those in the{' '}
          <Link href='/privacy'>Privacy Policy</Link>. If you don&lsquo;t agree to all of the following, you may not use
          or access Helios in any manner.
        </p>

        <p>
          You represent and warrant that you are of legal age to form a binding contract (or if not, that you&lsquo;ve
          received your parent&lsquo;s or guardian&lsquo;s permission to use Helios and that your parent or guardian
          agrees to these Terms on your behalf).
        </p>

        <p>
          If you&lsquo;re agreeing to these Terms on behalf of an organization or entity, you represent and warrant that
          you are authorized to agree to these Terms on that organization or entity&lsquo;s behalf and bind them to
          these Terms (in which case, the references to &quot;you&quot; and &quot;your&quot; throughout this document
          refer to that organization or entity).
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Creating an Account on Helios</h2>

        <p>
          You may be required to sign up for an account and select a password. You promise to provide us with accurate,
          complete, and up-to-date registration information about yourself.
        </p>

        <p>
          You agree that you will only use Helios for your own personal or organizational use, and not on behalf of or
          for the benefit of any third party. You may not transfer your account to anyone else without our prior written
          permission.
        </p>

        <p>
          You may not select as your Helios account name a name that you don&lsquo;t have the right to use, or another
          person&lsquo;s name with the intent to impersonate that person. Helios reserves the right to refuse
          registration of or cancel a Helios account name at its discretion.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Posting Content on Helios</h2>

        <p>
          First and foremost, you own what you create. Any original content you post, upload, share, store, or otherwise
          provide to Helios remains yours and is protected by copyright and any other applicable intellectual property
          laws.
        </p>

        <p>
          That includes posts, short stories, articles, subscriber lists, any other text or photos you upload to your
          subdomain on Helios, and any information that you provide to obtain a Helios username and account. It also
          includes any comments posted on any current or future discussion board features on Helios.
        </p>

        <p>
          Anything posted, uploaded, shared, stored, or otherwise provided through Helios is referred to as a
          &quot;Post&quot; in these Terms. There are a few rules that apply to all Posts:
        </p>

        <p className={styles.list}>
          Don&lsquo;t Infringe: Your Posts should not violate someone else&lsquo;s (including Helios&lsquo;s) rights.
          Don&lsquo;t copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload,
          display, license, sell, commercialize or otherwise exploit for any purpose any content not owned by you unless
          you have prior consent from the owner of that content.
        </p>

        <p className={styles.list}>
          Limited License to Us: In order to display your Posts on Helios, and to allow other users to enjoy them, you
          grant us certain rights in your Posts:
        </p>

        <p className={styles.list}>
          Operating Helios: You hereby grant Helios a license to translate, modify, reproduce, and otherwise act with
          respect to your Posts to enable us to provide, improve, and notify you about new features within Helios. You
          understand and agree that we may need to make changes to your Posts to conform and adapt those Posts to the
          technical requirements of networks, devices, services, or media, and this license includes the rights to do
          so. For example, we may need to modify your story to make sure it is viewable on an iPhone as well as a
          computer.
        </p>

        <p className={styles.list}>
          Public Posts: If you share a Post with other users on Helios, then you grant us the license above, as well as
          a license to display, perform, and distribute your Post. Also, you grant all other users of Helios a license
          to access the Post, and to use and exercise all rights in it, as permitted by the functionality of Helios.
        </p>

        <p className={styles.list}>
          Term of License: You agree that the licenses you grant are royalty-free, perpetual, irrevocable, and
          worldwide. This is a license only – your ownership in Posts is not affected.
        </p>

        <p>
          We reserve the right to remove any content from Helios at any time, for any reason (including, but not limited
          to, if someone alleges you contributed that content in violation of these Terms), in our sole discretion, and
          without notice.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Intellectual Property and Reporting Infringement</h2>

        <p>
          We respect others&lsquo; intellectual property rights, and we reserve the right to delete or disable content
          alleged to be infringing, and to terminate the accounts of repeat alleged infringers. You promise to abide by
          copyright notices, trademark rules, information, and other restrictions you may receive from us or that are
          posted on Helios.
        </p>

        <p>
          You understand that we own Helios. These Terms don&lsquo;t grant you any right, title or interest in Helios,
          or our trademarks, logos, and other intellectual property.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Acceptable Use Policy</h2>

        <p>
          You are responsible for all your activity in connection with Helios! Make sure that you use Helios in a manner
          that complies with the law. If your use of Helios is prohibited by applicable laws, then you aren&lsquo;t
          authorized to use Helios. We can&lsquo;t and won&lsquo;t be responsible for you using Helios in a way that
          breaks the law.
        </p>

        <p>You also agree that you will not contribute any Post or otherwise use Helios in a manner that:</p>

        <p className={styles.list}>
          Is fraudulent or threatening, or in any way violates Helios&lsquo;s Content Guidelines;
        </p>

        <p className={styles.list}>
          Jeopardizes the security of your Helios account or anyone else&lsquo;s (such as allowing someone else to log
          into Helios as you, or sharing your account or password with someone);
        </p>

        <p className={styles.list}>
          Attempts, in any manner, to obtain the password, account, or other security information of any other user;
        </p>

        <p className={styles.list}>
          Violates the security of any computer network, or cracks any passwords or security encryption codes;
        </p>

        <p className={styles.list}>
          Runs Maillist, Listserv, any form of auto-responder or &quot;spam&quot; on Helios, or any processes that run
          or are activated while you are not logged into Helios, or that otherwise interferes with the proper working of
          Helios (including placing an unreasonable load on Helios&lsquo;s infrastructure);
        </p>

        <p className={styles.list}>
          &quot;Crawls,&quot; &quot;scrapes,&quot; or &quot;spiders&quot; any page, data, or portion of Helios (through
          use of manual or automated means);
        </p>

        <p className={styles.list}>Copies or stores any significant portion of the content on Helios;</p>

        <p className={styles.list}>
          Decompiles, reverse engineers, or otherwise attempts to obtain the source code or underlying ideas or
          information of or relating to Helios.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Other Users and Third-Parties</h2>

        <p className={styles.list}>
          Posts: Posts posted to Helios are the sole responsibility of the person or organization from whom such content
          originated. You access all such content at your own risk. We aren&lsquo;t liable for any errors or omissions
          in any Post and you hereby release us from any damages or loss you might suffer in connection with a Post.
        </p>

        <p className={styles.list}>
          Other Users on Helios: Your interactions with organizations and individuals found on or through Helios,
          including payment for editing, and any other terms, conditions, warranties or representations associated with
          such dealings, are solely between you and such organizations and individuals. You agree that Helios shall not
          be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings. We
          can&lsquo;t guarantee the identity of any users with access to Helios and are not responsible for which users
          gain access to our products and services.
        </p>

        <p className={styles.list}>
          Third-Party Content: Helios may contain links or connections to third party websites or services that are not
          owned or controlled by us. Helios has no control over, and assumes no responsibility for, the content,
          accuracy, privacy policies, or practices of or opinions expressed in any third-party websites. You release and
          hold us harmless from any and all liability arising from your use of any third-party website or service.
        </p>

        <p>
          In the event that you have a dispute with one or more other users of Helios or with a third party, you release
          us, our officers, employees, agents, and successors from claims, demands, and damages of every kind or nature,
          known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or in any way related to
          such disputes and/or Helios.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Limitation of Liability</h2>

        <h2>
          To the fullest extent allowed by applicable law, under no circumstances and under no legal theory shall
          Helios, its licensors, or its suppliers be liable to you or to any other person for:
        </h2>

        <h2 className={styles.list}>Any indirect, special, incidental, or consequential damages of any kind, or</h2>

        <h2 className={styles.list}>
          Any amount, in the aggregate, in excess of the greater of (1) $100 or (2) the amounts paid and/or payable by
          you to us in connection with Helios in the twelve-month period preceding the applicable claim.
        </h2>
      </div>

      <div className={styles.legalSection}>
        <h2>No Warranties</h2>

        <h2>
          Helios is provided to you on an &quot;as-is&quot; basis. This means we provide it to you without any express
          or implied warranties of any kind. That includes any implied warranties of merchantability, warranties of
          fitness for a particular purpose, non-infringement, or any warranty that the use of Helios will be
          uninterrupted or error-free. Accordingly, we do not:
        </h2>

        <h2 className={styles.list}>
          Make any representations or warranties about any content contained in or accessed through Helios, and we will
          not be responsible for the accuracy, copyright compliance, legality, or decency of material contained on our
          products and services.
        </h2>

        <h2 className={styles.list}>
          Make any representations or warranties regarding suggestions or recommendations of products or services
          offered or purchased through Helios. Products and services purchased or offered through Helios are provided
          &quot;as-is&quot; and without any warranty of any kind from Helios.
        </h2>
      </div>

      <div className={styles.legalSection}>
        <h2>Paid Subscriptions on Helios</h2>

        <p>
          If you publish stories through Helios, you are a Publisher. If you subscribe to Publisher stories, you are a
          Reader. Readers subscribe to stories directly through the Publisher&lsquo;s subdomain on Helios.
        </p>

        <p>
          A Publisher may offer their stories for free or for a subscription fee, to be determined in the
          Publisher&lsquo;s discretion. Readers may choose to subscribe to Publisher stories on Helios and agree to
          incur any applicable subscription fees.
        </p>

        <p>
          Publishers will set prices for their newsletters, and may change the prices at their sole discretion through
          their Publisher account, though no price changes shall apply retroactively.
        </p>

        <p>
          In the event that a Reader has a dispute with a Publisher, you agree that Helios is under no obligation to
          become involved other than to direct any inquiries regarding a Publisher&lsquo;s newsletter to the appropriate
          Publisher pursuant to the Publisher Agreement. To learn more about how Helios manages its relationships with
          Publishers, you should check out the Publisher Agreement.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Terminating Your Account</h2>

        <p>
          Helios is free to terminate (or suspend access to) your use of Helios, or your account, for any reason at our
          discretion. We will try to provide advance notice to you prior to our terminating your account so that you are
          able to retrieve any important Posts you may have uploaded to your account, but we may not do so if we
          determine it would be impractical, illegal, not in the interest of someone&lsquo;s safety or security, or
          otherwise harmful to the rights or property of Helios.
        </p>

        <p>
          Helios also allows you to delete your account at any time.{' '}
          <b>If you&lsquo;d like to delete your account, you can do so from your account page.</b> When you delete your
          account, any Posts associated with that account will also be deleted. However, any Post that you have made
          public may remain available.
        </p>

        <p>
          You understand and agree that it may not be possible to completely delete your content from Helios&lsquo;s
          records or backups, and that your Posts may remain viewable elsewhere to the extent that they were copied or
          stored by other users. Please refer to our <Link href='/privacy'>Privacy Policy</Link> to understand how we
          treat information you provide to us after you have stopped using Helios.
        </p>

        <p>
          You agree that some of the obligations in these Terms will be in force even after you terminate your account.
          All of the following terms will survive termination: any obligation you have to pay us or indemnify us, any
          limitations on our liability, any terms regarding ownership or intellectual property rights, terms regarding
          disputes between us, and any other terms that, by their nature, should survive termination of these Terms.
        </p>

        <p>
          If you have deleted your account by mistake, contact us immediately at{' '}
          <Link className={styles.noWrap} href='mailto:tos@helios-journal.com'>
            tos@helios-journal.com
          </Link>{' '}
          – we will try to help, but unfortunately, we can&lsquo;t promise that we can recover or restore anything.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Privacy on Helios</h2>

        <p>
          Helios takes your privacy very seriously. For the current Helios Privacy Policy, please click{' '}
          <Link href='/privacy'>here</Link>.
        </p>

        <p>
          The Children&lsquo;s Online Privacy Protection Act (&quot;COPPA&quot;) requires that online service providers
          obtain parental consent before they knowingly collect personally identifiable information online from
          children. We do not knowingly collect or solicit personally identifiable information from children under 16;
          if you are a child under 16, please do not attempt to register for Helios or send any personal information
          about yourself to us. If we learn we have collected personal information from a child under 16, we will delete
          that information as quickly as possible. If you believe that a child under 16 may have provided us personal
          information, please contact us at{' '}
          <Link className={styles.noWrap} href='mailto:tos@helios-journal.com'>
            tos@helios-journal.com
          </Link>
          .
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Changes to Helios</h2>

        <p>
          We&lsquo;re always trying to improve Helios, so our products and services may change over time. We may suspend
          or discontinue any part of Helios, or we may introduce new features or impose limits on certain features or
          restrict access to parts or all of Helios. We&lsquo;ll try to give you notice when we make a material change
          to Helios that would adversely affect you, but this isn&lsquo;t always possible or practical.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Changes to the Terms</h2>

        <p>
          We are constantly trying to improve our products and services, so these Terms may need to change along with
          Helios. We reserve the right to change the Terms at any time, but if we do, we will bring it to your attention
          by placing a notice on the website, by sending you an email, and/or by some other means.
        </p>

        <p>
          If you don&lsquo;t agree with the new Terms, you are free to reject them; unfortunately, that means you will
          no longer be able to use Helios. If you use Helios in any way after a change to the Terms is effective and
          notice has been provided, that means you agree to all of the changes.
        </p>

        <p>
          Except for changes by us as described here, no other amendment or modification of these Terms will be
          effective unless in writing and signed by both you and us.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Violations of the Terms</h2>

        <p>
          Failure to follow any of these Terms shall constitute a breach of these Terms, which may result in immediate
          termination of your account. Helios has the sole right to decide whether you are in violation of any of the
          restrictions set forth in these Terms.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2>Miscellaneous Terms</h2>

        <p>
          The above covers most of the questions that we typically receive about Helios. We have grouped provisions that
          come up less frequently below:
        </p>

        <p className={styles.list}>
          Indemnification: To the fullest extent allowed by applicable law, you agree to indemnify and hold Helios, its
          affiliates, officers, agents, employees, and partners harmless from and against any and all claims,
          liabilities, damages (actual and consequential), losses and expenses (including attorneys&lsquo; fees) arising
          from or in any way related to any third party claims relating to (a) your use of Helios (including any actions
          taken by a third party using your account), and (b) your violation of these Terms. In the event of such a
          claim, suit, or action, we will attempt to provide notice to the contact information we have for your account
          (provided that failure to deliver such notice shall not eliminate or reduce your indemnification obligations
          hereunder).
        </p>

        <p className={styles.list}>
          Assignment: You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or
          your Helios account, in any way (by operation of law or otherwise) without our prior written consent. We may
          transfer, assign, or delegate these Terms and our rights and obligations without consent.
        </p>

        <p className={styles.list}>
          Choice of Law: These Terms are governed by and will be construed under applicable federal law and the laws of
          the State of Washington, without regard to the conflicts of laws provisions thereof.
        </p>

        <p className={styles.list}>
          Arbitration and Class Action Waiver: Any dispute arising from or relating to the subject matter of these Terms
          shall be finally settled by arbitration in King County, Washington, in accordance with the Streamlined
          Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (&quot;JAMS&quot;) then
          in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and
          commercial contract disputes, who shall be selected from the appropriate list of JAMS arbitrators in
          accordance with the Streamlined Arbitration Rules and Procedures of JAMS. Judgment upon the award so rendered
          may be entered in a court having jurisdiction, or application may be made to such court for judicial
          acceptance of any award and an order of enforcement, as the case may be. Notwithstanding the foregoing, you
          and Helios shall have the right to institute an action in a court of proper jurisdiction for injunctive or
          other equitable relief pending a final decision by the arbitrator. For all purposes of these Terms, you
          consent to exclusive jurisdiction and venue in the state or federal courts located in, respectively, King
          County, Washington, or the Seattle District of Washington. The prevailing party in any action or proceeding
          arising out of these Terms will be entitled to an award of costs and attorneys&lsquo; fees. To the fullest
          extent permitted by law, you and Helios Inc agree that all claims against the other can only be brought in an
          individual capacity, and not as a plaintiff or class member in any purported class, consolidated, or other
          representative proceeding. We agree that arbitrators may not conduct any class, consolidated, or
          representative proceeding, and are limited to providing relief warranted by an individual party&lsquo;s claim.
        </p>

        <p className={styles.list}>
          No Third-Party Beneficiaries: We agree there are no third-party beneficiaries intended under these Terms.
        </p>

        <p className={styles.list}>
          No Joint Venture: You hereby acknowledge and agree that you are not an employee, agent, partner, or joint
          venture of Helios, and you do not have any authority of any kind to bind us in any respect whatsoever.
        </p>

        <p className={styles.list}>
          Waiver: The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver
          of any further rights hereunder.
        </p>

        <p className={styles.list}>
          Severability: If any provision of these Terms is found to be unenforceable or invalid, that provision will be
          limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full
          force and effect and enforceable.
        </p>

        <p className={styles.list}>
          Entire Agreement: You agree that these Terms are the complete and exclusive statement of the mutual
          understanding between you and us, and that it supersedes and cancels all previous written and oral agreements,
          communications and other understandings relating to the subject matter of these Terms.
        </p>
      </div>
    </div>
  );
}
