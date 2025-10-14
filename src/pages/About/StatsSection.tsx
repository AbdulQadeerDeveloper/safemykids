"use client";

import Image from "next/image";
import CountUp from "react-countup";

import counter1 from "@/components/sections/images/counter_1_1.png";
import counter2 from "@/components/sections/images/counter_1_2.png";
import counter3 from "@/components/sections/images/counter_1_3.png";
import counter4 from "@/components/sections/images/counter_1_4.png";

export default function StatsSection() {
  return (
    <section className="w-full px-6 bg-white">
      <div className="max-w-6xl mx-auto relative bottom-[100px] bg-gradient-to-b from-[#16633A] to-[#034B24] rounded-3xl py-10 px-6 sm:px-12">
        {/* Grid - 4 items in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center text-white">
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-4 py-6">
            <Image src={counter1} alt="Case Done" className="w-14 h-14" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={10000} duration={2} separator="," />k
                <span className="text-gray-200">+</span>
              </h3>
              <p className="text-sm sm:text-base">Case Done</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-4 py-6 border-t md:border-t-0 md:border-l border-white/20">
            <Image
              src={counter2}
              alt="Expert Attorneys"
              className="w-14 h-14"
            />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={12000} duration={2.5} separator="," />k
                <span className="text-gray-200">+</span>
              </h3>
              <p className="text-sm sm:text-base">Expert Attorneys</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-4 py-6 border-t lg:border-t-0 lg:border-l border-white/20">
            <Image src={counter3} alt="Happy Client" className="w-14 h-14" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={15000} duration={3} separator="," />k
                <span className="text-gray-200">+</span>
              </h3>
              <p className="text-sm sm:text-base">Happy Client</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-center gap-4 py-6 border-t lg:border-t-0 lg:border-l border-white/20">
            <Image src={counter4} alt="Award Winning" className="w-14 h-14" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={20000} duration={3.5} separator="," />k
                <span className="text-gray-200">+</span>
              </h3>
              <p className="text-sm sm:text-base">Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
