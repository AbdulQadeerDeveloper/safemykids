// components/ExperienceSection.tsx
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="relative w-full h-[280px] sm:h-[320px] md:h-[280px] flex items-center justify-center bg-[#022E17] overflow-hidden">
      {/* Decorative Layer (fit inside with margin) */}
      <div className="absolute bottom-[10px] left-[10px] right-[10px] md:bottom-[40px] md:left-[-80px] md:right-[0px] pointer-events-none">
        <Image
          src="/images/layer-image.png"
          alt="Decorative Layer"
          width={1900}
          height={180}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h2 className="text-white font-inter font-extrabold text-2xl sm:text-3xl md:text-4xl leading-snug md:leading-[64px]">
          Ready to Simplify Your Legal Journey?
        </h2>
        <p className="text-white/90 font-normal text-base sm:text-lg md:text-md mt-3 sm:mt-4 max-w-xl">
          Access skilled lawyers, book secure consultations, and track your case
          in real time.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center w-full sm:w-auto">
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#03DA03]  to-[#027402] hover:opacity-90 transition w-full sm:w-auto">
            Start Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
