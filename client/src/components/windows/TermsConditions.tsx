import Logo from '../Logo';
import { useWindowContext } from '../../hooks';

const TermsConditions = () => {
  const { closeWindow } = useWindowContext();

  return (
    <div className="scrollbar-hide z-[100] flex h-[85vh] w-[80vw] flex-col overflow-y-auto p-9 md:h-[60vh] md:p-12 lg:h-[85vh] lg:w-[50vw] lg:p-14">
      <div className="mb-4 flex flex-col items-center">
        <Logo />
      </div>

      <div className="justify-self-center text-justify font-franklin text-sm font-light text-dark-grey">
        <p className="text-center font-franklin text-sm text-dark-grey lg:py-6">
          Welcome to tickettribe. This Privacy Policy explains how we use cookies and
          similar technologies on our website to collect and store certain information
          about your use of our website. By accessing or using our website, you consent to
          the use of cookies and other tracking technologies as described in this Policy.
        </p>
        <br />
        <p className="font-medium">1. What are Cookies?</p>
        Cookies are small text files that are stored on your device when you visit a
        website. They are commonly used to improve website functionality, personalize
        content and ads, and analyze website traffic.
        <br />
        <br />
        <p className="font-medium">2. How We Use Cookies</p>
        We use cookies and similar technologies for various purposes, including:
        <br />
        <b>Essential Cookies:</b> These cookies are necessary for the operation of our
        website and enable you to access and navigate our website and use its features.
        Without these cookies, our website may not function properly.
        <br />
        <b>Analytical Cookies:</b> These cookies help us understand how visitors use our
        website by collecting information about the number of visitors, the pages visited,
        and the source of the traffic. This information is used to analyze website
        performance and improve our website.
        <br />
        <b>Functional Cookies:</b> These cookies allow our website to remember choices you
        make, such as your username, language preference, or region, and provide enhanced
        features and personalized content.
        <br />
        <b>Advertising Cookies:</b> These cookies are used to deliver relevant
        advertisements to you based on your interests and online activities. They are also
        used to limit the number of times you see an ad and measure the effectiveness of
        our advertising campaigns.
        <br />
        <b>Third-Party Cookies: </b>
        We may also allow third-party service providers to place cookies on our website to
        provide us with analytics, advertising, and other services. These third-party
        cookies are subject to the privacy policies of the respective service providers.
        <br />
        <br />
        <p className="font-medium">3. Cookie Settings and Opt-Out</p>
        You can control and manage cookies by adjusting your browser settings or using
        opt-out mechanisms provided by some third-party analytics and advertising
        providers. However, please note that disabling cookies may affect the
        functionality of our website and your ability to access certain features.
        <br />
        <br />
        <p className="font-medium">4. Your Consent</p>
        By continuing to use our website, you consent to the use of cookies and similar
        technologies as described in this Policy.
        <br />
        <br />
        <p className="font-medium">5. Updates to this Policy</p>
        We may update this Policy from time to time. Any changes will be posted on our
        website with a revised effective date. We encourage you to review this Policy
        periodically to stay informed about our use of cookies.
        <br />
        <br />
        This Cookie Privacy Policy was last updated on 05/05/2023.
        <br />
      </div>
    </div>
  );
};

export default TermsConditions;
