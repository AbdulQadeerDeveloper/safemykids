import Image from "next/image";
import hand from "@/components/sections/images/hand.png";
import file from "@/components/sections/images/file.png";
import balance from "@/components/sections/images/balanace.png";
import mockup from "@/components/sections/images/Frame-56.png";
import humenBackground from "@/components/sections/images/humen.png";

export default function WorkProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#F5F5F5",
        width: "100%",
        minHeight: "785px",
      }}
    >
      {/* Background Human Image - Right Side */}
      <div className="absolute top-[141px] right-0 opacity-100 pointer-events-none">
        <Image
          src={humenBackground}
          alt="Background Human"
          width={382}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-12 px-6 md:px-16">
        {/* Left Side - Mobile Mockup */}
        <div className="flex justify-center">
          <div className="rounded-3xl shadow-xl p-2 bg-white">
            <Image
              src={mockup}
              alt="Mobile App"
              className="w-[280px] md:w-[320px] rounded-xl"
            />
          </div>
        </div>

        {/* Right Side - Work Process */}
        <div>
          <h4 className="text-[#F5A623] font-semibold text-lg mb-2">
            Work Process
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Through The Law With Clarity: <br />
            Your Path To Peace
          </h2>

          <div className="mt-8 space-y-8 relative">
            {/* Vertical Dashed Line */}
            <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-green-700"></div>

            {/* Step 1 */}
            <div className="flex items-start space-x-4 relative">
              <Image src={hand} alt="Hand Icon" width={56} height={56} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Initial Consultation
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Our experienced lawyers thoroughly analyze the facts of each
                  case. They then apply the relevant laws to provide clear.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 relative">
              <Image src={file} alt="File Icon" width={56} height={56} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Case Evaluation
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  We prioritize understanding your concerns and aligning with
                  your goals. Your satisfaction is our top priority.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 relative">
              <Image src={balance} alt="Balance Icon" width={56} height={56} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Legal Strategy
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  We develop a customized plan to protect your rights and
                  achieve the best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
