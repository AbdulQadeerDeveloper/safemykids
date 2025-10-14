import React from 'react';

const ScheduleConsultationSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#E7B10C] to-[#CA9C0F] text-white rounded-full text-sm font-medium mb-4">
            Schedule Consultation
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 mb-6">
            Schedule A Free Consultation
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Our team of seasoned attorneys is dedicated to carefully listening to your concerns, ensuring a deep understanding of your unique situation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#166358] to-[#034B24] rounded-full flex items-center justify-center relative">
                <div className="text-white text-4xl">
                  {/* Calendar Icon */}
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#E7B10C] to-[#CA9C0F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  01
                </div>
                {/* Dotted Line */}
                <div className="hidden md:block absolute top-1/2 left-36 w-24 border-t-2 border-dotted border-[#E7B10C] transform -translate-y-1/2"></div>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Schedule A Time</h4>
            <p className="text-gray-600 text-sm">
              Choose a convenient date and time that works best for you. Our experienced lawyers are available to discuss.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#166358] to-[#034B24] rounded-full flex items-center justify-center relative">
                <div className="text-white text-4xl">
                  {/* Person Icon */}
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#E7B10C] to-[#CA9C0F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  02
                </div>
                {/* Dotted Line */}
                <div className="hidden md:block absolute top-1/2 left-36 w-24 border-t-2 border-dotted border-[#E7B10C] transform -translate-y-1/2"></div>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Meet with Consult</h4>
            <p className="text-gray-600 text-sm">
              During your consultation, you'll have the opportunity to discuss your case with a qualified attorney.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#166358] to-[#034B24] rounded-full flex items-center justify-center relative">
                <div className="text-white text-4xl">
                  {/* Handshake Icon */}
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414L15.414 8H20a1 1 0 100-2h-4.586l1.293-1.293a1 1 0 00-1.414-1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414L4.586 12H0a1 1 0 100 2h4.586l-1.293 1.293a1 1 0 001.414 1.414L6.414 15H12z" />
                  </svg>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#E7B10C] to-[#CA9C0F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  03
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan for Success</h3>
            <p className="text-gray-600 text-sm">
              Based on the information gathered during your consultation, we'll develop a tailored legal strategy to help you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleConsultationSection;