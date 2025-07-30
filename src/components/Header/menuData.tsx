export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  icon?: string; // Add icon property
  submenu?: Menu[];
}

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    newTab: false,
    icon: "Home", // Lucide icon name
  },
  {
    id: 2,
    title: "Tentang Kami",
    path: "/about",
    newTab: false,
    icon: "Info",
  },
  {
    id: 33,
    title: "Harga",
    path: "/pricing",
    newTab: false,
    icon: "DollarSign",
  },
  {
    id: 3,
    title: "Dukungan",
    path: "/contact",
    newTab: false,
    icon: "HelpCircle",
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   icon: "Layout",
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //       icon: "Info",
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //       icon: "Mail",
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //       icon: "Grid",
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //       icon: "AlignJustify",
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //       icon: "FileText",
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //       icon: "LogIn",
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //       icon: "UserPlus",
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //       icon: "AlertTriangle",
  //     },
  //   ],
  // },
];

export default menuData;