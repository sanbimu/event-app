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
          Welcome to tickettribe! These Terms and Conditions ("Terms") govern your use of
          our website and mobile applications (collectively, the "Site"), including the
          purchase of event tickets and related services (collectively, the "Services").
          By using our Site or Services, you agree to these Terms. If you do not agree to
          these Terms, please do not use our Site or Services.
        </p>
        <br />
        <p className="font-medium">1. Ticket Purchase and Use</p>
        a. You must be 18 years or older to purchase tickets through tickettribe. By
        purchasing a ticket through our Site, you certify that you are at least 18 years
        old.
        <br />
        b. All ticket sales are final. No refunds, exchanges, or cancellations will be
        accepted, except in the event of a canceled or rescheduled event. In the event of
        a canceled or rescheduled event, we will provide instructions on how to obtain a
        refund or exchange.
        <br />
        c. Your ticket is only valid for the specific event for which it was purchased.
        You may not transfer, sell, or otherwise distribute your ticket to any other event
        or person without our prior written consent.
        <br />
        d. You must present a valid photo ID along with your ticket to gain entry to the
        event.
        <br />
        <br />
        <p className="font-medium">2. Site Use</p>
        a. You may use our Site only for lawful purposes and in accordance with these
        Terms. You may not use our Site in any way that violates any applicable federal,
        state, local, or international law or regulation.
        <br />
        b. We reserve the right to terminate or suspend your access to our Site, without
        notice and without liability, for any reason, including but not limited to
        violation of these Terms or suspected fraudulent or illegal activity.
        <br />
        <br />
        <p className="font-medium">3. Intellectual Property</p>
        All content and materials on our Site, including but not limited to text,
        graphics, logos, images, and software, are the property of tickettribe or its
        licensors and are protected by United States and international copyright,
        trademark, and other intellectual property laws. You may not reproduce, modify,
        distribute, or display any content or materials from our Site without our prior
        written consent.
        <br />
        <br />
        <p className="font-medium">4. Limitation of Liability</p>
        a. In no event shall tickettribe or its affiliates, officers, directors,
        employees, or agents be liable for any indirect, incidental, special, or
        consequential damages arising out of or in connection with your use of our Site or
        Services.
        <br />
        b. Our liability to you for any direct damages arising out of or in connection
        with your use of our Site or Services shall be limited to the total amount you
        paid to us for the applicable ticket or service.
        <br />
        <br />
        <p className="font-medium">5. Indemnification</p>
        You agree to indemnify and hold harmless tickettribe and its affiliates, officers,
        directors, employees, and agents from and against any and all claims, damages,
        losses, liabilities, costs, and expenses (including but not limited to attorneys'
        fees) arising out of or in connection with your use of our Site or Services, your
        violation of these Terms, or your violation of any applicable law or regulation.
        <br />
        <br />
        <p className="font-medium">6. Changes to Terms</p>
        We reserve the right to modify these Terms at any time, in our sole discretion.
        Any changes will be effective immediately upon posting on our Site. Your continued
        use of our Site or Services after any changes to these Terms constitutes your
        acceptance of the new Terms.
        <br />
        <br />
      </div>
    </div>
  );
};

export default TermsConditions;
