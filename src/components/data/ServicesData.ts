import { GrSecure } from "react-icons/gr";
import { MdQueryStats } from "react-icons/md";
import { PiChatsCircleBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IconType } from "react-icons";

export interface ServiceItem {
  title: string;
  description: string;
  icon: IconType; // store the component, not JSX
}

const ServicesData: ServiceItem[] = [
  {
    title: "Lawyer Discovery & Profiles",
    description:
      "Search verified lawyers by expertise, experience, and availability. Access detailed profiles to find the right legal professional for your case.",
    icon: PiChatsCircleBold,
  },
  {
    title: "Appointment Scheduling",
    description:
      "Book consultations instantly with real-time availability and calendar integration. Quick, simple, and hassle-free lawyer-client coordination.",
    icon: MdQueryStats,
  },
  {
    title: "Online Consultations",
    description:
      "Chat securely with professional lawyers for case discussions, queries, and legal advice. Confidential, reliable, and available anytime.",
    icon: FaUserTie,
  },
  {
    title: "Case Tracking & Notifications",
    description:
      "Stay updated with instant alerts for appointments, lawyer responses, and case progress. Track your legal matters in real time.",
    icon: GrSecure,
  },
  {
    title: "Multilingual Support",
    description:
      "Access legal help in Urdu and English. Wakeel App ensures inclusivity and easy communication for diverse clients across regions.",
    icon: GiPayMoney,
  },
  {
    title: "AI Legal Assistant",
    description:
      "Get smarter access to justice with AI tools. Enjoy lawyer matching, instant legal FAQs, and fraud detection for verified interactions.",
    icon: TfiHeadphoneAlt,
  },
];

export default ServicesData;
