import Link from "next/link";
import ServicesData from "./data/ServicesData"

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-yellow-500 mb-2 tracking-wide">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Legal Services We Offer
          </h2>
          <p className="text-base lg:text-md text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Wakeel App revolutionizes legal consultations. Clients register,
            search attorneys by location or specialty, and book appointments
            instantly. Post cases competitive bidding, while lawyers manage
            schedules and create digital prescriptions seamlessly.
          </p>
        </div>

        {/* Services Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-16 lg:px-28">
  {ServicesData.map((item: ServiceItem, index: number) => (
    <div
      key={index}
      className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-200 hover:bg-gradient-to-br hover:from-[rgba(3,75,36,1)] hover:to-[rgba(3,75,36,1)] hover:border-transparent cursor-pointer relative overflow-hidden max-w-sm mx-auto"
    >
      {/* Service Icon */}
      <div className="flex justify-start mb-4">
        <div className="w-12 h-12 bg-gray-100 group-hover:bg-yellow-400 rounded-full flex items-center justify-center text-gray-600 group-hover:text-white text-xl transition-all duration-300">
          <item.icon className="w-6 h-6" />
        </div>
      </div>

      {/* Service Title */}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300 leading-tight">
        {item.title}
      </h3>

      {/* Service Description */}
      <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed mb-4 text-sm transition-colors duration-300">
        {item.description}
      </p>

      {/* CTA Button */}
      <div className="flex justify-start">
        <Link href="https://play.google.com/store/apps" target="_blank">
          <button className="inline-flex items-center text-sm font-medium text-[rgba(22,99,58,1)] group-hover:text-[rgba(255,181,57,1)] transition-colors duration-300">
            Read More
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>
      </div>

      {/* Decorative curved bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[rgba(22,99,58,1)] group-hover:bg-[rgba(255,181,57,1)] transition-colors duration-300 rounded-b-2xl"></div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Services;