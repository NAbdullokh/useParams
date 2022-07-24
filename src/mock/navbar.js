import Generic from "../components/Generic";
import Products from "../components/Products";

export const NavbarItems = [
  { id: 1, title: "Home", element: <Generic />, path: "/" },
  { id: 2, title: "About", element: <Generic />, path: "/about" },
  { id: 3, title: "Contacts", element: <Generic />, path: "/contacts" },
  { id: 4, title: "Products", element: <Products />, path: "/products" },
];

export default NavbarItems;
