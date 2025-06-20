import React from 'react';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-[grotesk]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-700 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">PRIVACY POLICY</h1>
          <p className="text-blue-100">Last updated on {currentDate}</p>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Purpose and Scope</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                1.1. We, Southern Floorings ("Firm" or "We" or "our" or "us"), are committed to protecting the privacy of the information provider ("you" / "your" / "yourself"). We consider privacy and protection of your data / information to be of high importance. Our practices and procedures in relation to the collection and use of your data / information has been set-out below in this privacy policy ("Privacy Policy"). This Privacy Policy will familiarize you with the manner in which the We may collect, use, share, transfer and disclose your data / information. This Privacy Policy forms an integral part of our terms of use <a href="/terms-and-conditions" className="text-blue-600 hover:underline">[terms and conditions]</a> ("Terms of Use") to use our website www.southernfloorings.in ("Website").
              </p>
              <p>
                1.2. We reserve the right, at our discretion, to change, modify, amend, add or remove portions of this Privacy Policy at any time without notice. We recommend that you review this Privacy Policy periodically to ensure that you are aware of our current privacy practices. By visiting the Website, you agree to be bound by the terms and conditions of this Privacy Policy (which includes the Terms of Use).
              </p>
              <p>
                1.3. This Privacy Policy shall be construed to be provided in compliance with:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The Information Technology Act 2000, as amended from time to time ("IT Act") read with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011 ("SPDI Rules"), as applicable; and</li>
                  <li>Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the Protection of Natural Persons with regard to the Processing of Personal Data and on the Free Movement of such Data (hereinafter referred to as the "General Data Protection Regulation" or "GDPR") in so far as our services result in collection and / or processing of Personal Information (as defined hereinafter) of users who are in the EU and EEA to provide appropriate protection and care with respect to the treatment of such information in accordance with GDPR.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Collection of information</h2>
            <div className="space-y-4 text-gray-700">
              <p>2.1. We collect the following Personal Information and Sensitive Personal Data or Information:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 mt-4">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Data being collected</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Purpose of collection</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Mandatory / voluntary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Name</td>
                      <td className="py-2 px-4 border-b border-gray-200">For response to queries, delivery of products</td>
                      <td className="py-2 px-4 border-b border-gray-200">Mandatory</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Address</td>
                      <td className="py-2 px-4 border-b border-gray-200">Delivery of products</td>
                      <td className="py-2 px-4 border-b border-gray-200">Voluntary</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Phone Number</td>
                      <td className="py-2 px-4 border-b border-gray-200">Delivery of products, response to queries</td>
                      <td className="py-2 px-4 border-b border-gray-200">Mandatory</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Email Address</td>
                      <td className="py-2 px-4 border-b border-gray-200">Delivery of products, response to queries, promotion, feedback</td>
                      <td className="py-2 px-4 border-b border-gray-200">Mandatory</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>

              <p>2.2. You represent that the information or data you provide from time to time is and shall be correct, current and updated and you have all the rights, permissions and consents to provide such information or data. Your providing the data / information and the Firm's consequent storage, collection, usage, transfer, access or processing of the same shall not be in violation of any third -party agreement, laws, judgments, orders or decrees.</p>
              <p>2.3. In general, the visitors to the Website can access the Website's home page and browse some areas of the Website, without disclosing any Personal Information or Sensitive Personal Data.</p>
              <p>2.4. The Firm tracks information provided by visitor's browser, including the website the visitor came from (known as the referring URL), the type of browser used and other information that does not personally identify any visitor of the Website. This may include installation of cookies and collection of other session data.</p>
              <p>2.5. In addition, we may also collect demographic and other data for market research, advertising and promotional purposes.</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Use and Processing of data/ information</h2>
            <div className="space-y-4 text-gray-700">
              <p>3.1. Notwithstanding anything contained in Paragraph 2.1 above, the information collected by the Firm may be used for a number of purposes connected with our business operations which may include the following:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>dealing with requests, enquiries and complaints, customer services and related activities;</li>
                <li>responding to your queries and fulfilling your requests for information regarding our products;</li>
                <li>notifying you about our new products and sending you important information regarding our products;</li>
                <li>assigning orders to the dealers, generation of invoice and making payments to the dealers;</li>
                <li>creating of a user account on the Website;</li>
                <li>legitimate business purposes; and</li>
                <li>responding to judicial process and provide information to law enforcement agencies or in connection with an investigation on matters related to public safety, as permitted by law.</li>
              </ul>
              <p>3.2. Your data / information will be kept confidential to the maximum possible extent and in accordance with the provisions set out herein.</p>
              <p>3.3. Your use of and access to the services and the products on the Website is subject to your acceptance of the Terms of Use at <a href="/terms-and-conditions" className="text-blue-600 hover:underline">terms and conditions</a>, which also involves the acceptance of this Privacy Policy. If you do not agree with the provisions of the same, you should discontinue the use of the Website immediately.</p>
              <p>3.4. You are responsible for maintaining the accuracy of the information you submit to us, such as your contact information provided as part of account registration. If, your Personal Information or Sensitive Personal Data changes, you may correct or delete inaccuracies, or amend information by making the change wherever possible or by contacting us at <a href="mailto: southernfloorings@gmail.com" className="text-blue-600 hover:underline">southernfloorings@gmail.com</a>. We will make good faith efforts to make the requested changes in our then active databases as soon as reasonably practicable. If you provide any information that is untrue, inaccurate, out of date or incomplete (or becomes untrue, inaccurate, out of date or incomplete), or if we have reasonable grounds to suspect that the information provided by you is untrue, inaccurate, out of date or incomplete, we may, at our sole discretion, discontinue the provision of the services, products and the Website to you.</p>
              <p>3.5. If you wish to cancel your account or request that we no longer use your information to provide you services or wish to withdraw your consent, contact us at <a href="mailto: southernfloorings@gmail.com" className="text-blue-600 hover:underline">southernfloorings@gmail.com</a>. However, please note that withdrawal of consent will not be retrospective in nature and shall be applicable prospectively. In case you do not provide your information or consent for usage of Personal Information or Sensitive Personal Data or subsequently withdraw your consent for usage of Personal Information or Sensitive Personal Data so collected, we reserve the right to discontinue the services for which the said information was sought.</p>
              <p>3.6. We shall not retain such information for longer than is required for the purposes for which the information may lawfully be used or is otherwise required under any other law for the time being in force. After a period of time, your information may be anonymized and aggregated, and then may be held by us as long as necessary for us to provide services effectively or is otherwise required under any other law for the time being in force.</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Disclosure and transfer of your Personal Information (Including Sensitive Personal Data or Information)</h2>
            <div className="space-y-4 text-gray-700">
              <p>4.1. We do not sell or rent any Personal Information (including Sensitive Personal Data or Information).</p>
              <p>4.2. We may disclose/ transfer your Personal Information (including Sensitive Personal Data or Information) to our partners, associates, service providers, dealers, sellers and third parties as necessary or appropriate:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>to carry out services on the Firm's behalf under contract;</li>
                <li>in any manner permitted under applicable law, including laws outside your country of residence;</li>
                <li>to comply with any legal process whether local or foreign;</li>
                <li>to respond to requests from public and government authorities, including public and government authorities outside your country of residence;</li>
                <li>to enforce our Terms of Use and policies;</li>
                <li>when the Firm, in its sole discretion, deems it necessary in order to protect its rights or the rights of others;</li>
                <li>to protect our rights or property, privacy, safety or property, and/or that of our affiliates, you or others; and</li>
                <li>to allow us to pursue available remedies or limit the damages that we may sustain.</li>
              </ul>
              <p>4.3. The Firm may also disclose or transfer the Sensitive Personal Data or Information, to another third party as a part of reorganization or a sale of the assets or business of the Firm. Any third party to which the Firm transfers or sells its assets will have the right to continue to use such Sensitive Personal Data or Information.</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Information provider's rights in relation to their Sensitive Personal Data or Information collected by the Firm</h2>
            <div className="space-y-4 text-gray-700">
              <p>5.1. All Sensitive Personal Data or Information provided to the Firm by you have been voluntarily provided to us. You have the right to withdraw your consent at any time in writing by sending an e-mail to us at <a href="mailto: southernfloorings@gmail.com" className="text-blue-600 hover:underline">southernfloorings@gmail.com</a>, in accordance with the terms of this Privacy Policy. However, please note that withdrawal of consent will not be retrospective in nature and shall only be applicable prospectively. In case you do not provide your information or consent for usage of Sensitive Personal Data or Information or subsequently withdraw your consent for usage of the Sensitive Personal Data or Information so collected, the Firm reserves the right to discontinue the services for which the said information was sought.</p>
              <p>5.2. You may write to us at <a href="mailto: southernfloorings@gmail.com" className="text-blue-600 hover:underline">southernfloorings@gmail.com</a> to access, review, modify or correct your Sensitive Personal Data or Information or withdraw your consent to provide Sensitive Personal Data or Information. However, we are not responsible for the authenticity of the Sensitive Personal Data or Information provided by you.</p>
              <p>5.3. You agree and acknowledge that certain data or information may not be corrected or is prohibited to be modified as required under any applicable law, law enforcement requests or under any judicial proceedings. In respect to such data or information, the aforementioned rights will not be available.</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Security Practices and Procedures</h2>
            <div className="space-y-4 text-gray-700">
              <p>6.1. We use reasonable security measures, at the minimum those mandated under the IT Act, and read with SPDI Rules, to safeguard and protect your Sensitive Personal Data or Information. You accept the inherent security implications of providing privacy to your information shared with us and you will not hold us responsible for any breach of security or the disclosure of Personal Information unless we have been grossly and willfully negligent.</p>
              <p>6.2. We may enter into agreement(s) with third parties (in or outside of India) to store your information or data. These third parties may have their own security standards to safeguard your information or data and we will on commercial reasonable basis require such third parties to adopt reasonable security standards to safeguard your information / data.</p>
              <p>6.3. Notwithstanding anything contained in this Privacy Policy or elsewhere, we shall not be held responsible for any loss, damage or misuse of your data/ information, if such loss, damage or misuse is attributable to a Force Majeure Event. A "Force Majeure Event" shall mean any event that is beyond our reasonable control and shall include, without limitation, sabotage, fire, flood, explosion, acts of God, pandemic or any public health emergency, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, unauthorized access to computer data and storage device, computer crashes, breach of security and encryption, etc.</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Grievance Redressal</h2>
            <div className="space-y-4 text-gray-700">
              <p>Any discrepancies and grievances with respect to processing of Sensitive Personal Data or Information or any complaints in relation to the products shall be informed to the Grievance Officer as mentioned below:</p>
              
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Name:</p>
                    <p>[insert details]</p>
                  </div>
                  <div>
                    <p className="font-medium">Designation:</p>
                    <p>[insert details]</p>
                  </div>
                  <div>
                    <p className="font-medium">Email ID:</p>
                    <p>[insert details]</p>
                  </div>
                  <div>
                    <p className="font-medium">Landline:</p>
                    <p>[insert details]</p>
                  </div>
                  <div>
                    <p className="font-medium">Mobile:</p>
                    <p>[insert details]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>A cookie is a small file that may be placed on your computer's hard disk for record-keeping purposes. Cookies do not contain any information that can personally identify you. By using this Website, you agree to our use of cookies as described in this Privacy Policy. We use the following cookies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="font-medium">Strictly necessary cookies:</span> These cookies are needed for the Website to work. They include, for example, the cookies that keep track of whether a visitor is logged in to the Website.</li>
                <li><span className="font-medium">Analytical/performance cookies:</span> These let us recognise and count how many visitors we receive, and how they move around our Website. This helps us improve the Website, for example, so users can easily find what they are looking for.</li>
                <li><span className="font-medium">Targeting cookies:</span> These record your visit to our Website, the pages you have visited and the links you have followed. We use this information to make our Website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</li>
                <li><span className="font-medium">Third party cookies:</span> Third parties may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies. Third party cookies are a condition for viewing content from services such as YouTube, LinkedIn, Facebook and Twitter.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Changes to this Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>The Firm reserves the right to revise and update this Privacy Policy at its sole discretion. Any such revisions will be effective on and from the date of posting the same on the Website and will apply to all information collected both prior to and following the effective date of this Privacy Policy.</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100">
            <p className="text-gray-700">By entering this website and clicking the "I accept" button, the visitor consents to the terms of this Privacy Policy. By submitting his/her data/information to the Firm, the visitor will be treated as having given his/her permission for processing the same in a manner provided in this Privacy Policy.</p>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                I Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;