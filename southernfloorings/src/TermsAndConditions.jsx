import React from 'react';

const TermsOfUse = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-[grotesk]  tracking-wide">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-700 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">TERMS OF USE</h1>
          <p className="text-blue-100">Last updated on {currentDate}</p>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Terms and Conditions for User of the Website</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                1.1. Please read these terms of use ("Terms of Use") carefully before using this www.southernfloorings.in ("Website"). If you do not agree to this Terms of Use you may not use this Website. By using this Website, you signify your explicit assent to this Terms of Use as well as the Website's privacy policy accessible at <a href="/privacy-policy" className="text-blue-600 hover:underline">[privacy policy]</a> ("Privacy Policy").
              </p>
              <p>
                1.2. This Terms of Use sets out the legally binding terms of services available on the Website as well as at the terms of use of this Website. We reserve the right, at our discretion, to change, modify, amend, add or remove portions of these Terms of Use at any time, effective upon notice to you as a visitor, user and member.
              </p>
              <p>
                1.3. The Website is free to use by any individual for the purpose for which the Website is meant and has been created. Any misuse of the same for accessing data and information, by copying designs for personal and professional use, breaking firewalls, hacking passwords, logging in with other people's credentials, etc., or any other unethical, illegal or any other distantly unlawful means by ignorantly or by any willful means will result in breach these Terms Of Use.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Your Account</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                2.1. If you use this Website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. If you are under 18, you may use the Website only with involvement of a parent or guardian or otherwise, the Website has the right to cancel any order placed. The Website reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders at its sole discretion.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                3.1. The logos. names, trademarks, pictures and videos of designs published and displayed on the website ("Intellectual Property") are all unique in nature and creative pieces of our own owners, founders and our employed designer's mind. Each picture or design you see, has been created putting in huge amount of man hours at various stages of making namely – Inspiration and design, prototyping, casting,   . The pictures and videos displayed on the website are pictorial representations of the actual model of the product itself in all material, quality and finish. The actual look and feel of the product may vary slightly in dimensions, texture, finish and weight based on the requirements of the customer.
              </p>
              <p>
                3.2. Nothing contained on this website should be construed as granting any license or right to use any Intellectual Property without our prior written permission.
              </p>
              <p>
                3.3. You hereby agree and acknowledge that the Website reserves the right to use your reviews, stories, testimonials, etc., for business promotion purposes across platforms in perpetuity.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Indemnification</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By accepting this Terms of use and using the Website, you agree that you shall defend, indemnify and hold the Website, its partners, shareholders, officers and other representatives harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys' fees and costs) arising out of or in connection with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your violation or breach of this Terms of Use or any applicable law or regulation;</li>
                <li>Your misuse of the Website; or</li>
                <li>any and all third-party claims based upon the content of any communications transmitted by you.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Disclaimers</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                5.1. The Website owner hereby explicitly and specifically disclaims any and all representations, warranties or guarantees, whether written, oral, expressed or implied including, without limiting the generality of the foregoing, any warranty of quality or fitness for a particular purpose.
              </p>
              <p>
                5.2. The Website owner shall not be responsible for and disclaims all liability for any loss, liability, damage (whether direct, indirect or consequential), personal injury or expense of any nature whatsoever which may be suffered by you or any third party (including your company), as a result of or which may be attributable, directly or indirectly, to your access and use of the Website, any information contained on the Website, your or your company's personal information or material and information transmitted over our system. In particular, neither the Website owner nor any third party or data or content provider shall be liable in any way to you or to any other person, firm or corporation whatsoever for any loss, liability, damage (whether direct or consequential), personal injury or expense of any nature whatsoever arising from any delays, inaccuracies, errors in, or omission of any share price information or the transmission thereof, or for any actions taken in reliance thereon or occasioned thereby or by reason of non-performance or interruption, or termination thereof.
              </p>
              <p className="font-medium">
                5.3. YOU ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE WEBSITE REMAINS SOLELY WITH YOU
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Conflict and Waiver</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                To the extent that anything in or associated with the Website is in conflict or inconsistent with this Terms of Use, this Terms of Use shall take precedence and prevail. Our failure to enforce any provision of this Terms of Use shall not be deemed a waiver of such provision nor of the right to enforce such provision. Our rights under this Terms of Use shall survive any discontinuance of the access or use of the Website by you.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Severability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Any provision of this Terms of Use, which is or becomes unenforceable in any jurisdiction, whether due to being void, invalidity, illegality, unlawfulness or for any reason whatever, shall, in such jurisdiction only and only to the extent that it is so unenforceable, be treated as void and the remaining provisions of this Terms of Use shall remain in full force and effect.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                These Terms shall be governed and construed under the laws of India and the courts of Chennai shall have exclusive jurisdiction over all disputes arising under this Terms of Use.
              </p>
              <p>
                We encourage you to contact us at <a href="mailto:southernfloorings@gmail.com" className="text-blue-600 hover:underline">[southernfloorings@gmail.com]</a> if you have any questions concerning our Terms.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100">
            <p className="text-gray-700">By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.</p>
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

export default TermsOfUse;