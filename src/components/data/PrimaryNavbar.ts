// types for navbar items
export interface NavbarItem {
  id: number;
  title: string;
  link: string;
}

// array with type annotation
const PrimaryNavbar: NavbarItem[] = [
  {
    id: 0,
    title: "Home",
    link: "#hero",
  },
  {
    id: 1,
    title: "About",
    link: "/about",
  },
  {
    id: 2,
    title: "Feature",
    link: "#features",
  },
  {
    id: 3,
    title: "Services",
    link: "/ServicesPage",
  },
  {
    id: 4,
    title: "Online Dealings",
    link: "#online-dealings",
  },
  {
    id: 5,
    title: "Connect With Us",
    link: "/connect",
  },
];

export default PrimaryNavbar;
