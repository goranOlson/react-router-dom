import { Outlet } from "react-router-dom";
import { IRoute } from "../interfaces";
import { Header } from "./Header";

// Links to the navbar
const links: IRoute[] = [
  {
    id: 1,
    name: "Random Beer",
    path: "/",
  },
  {
    id: 2,
    name: "Search Page",
    path: "/search",
  },
  {
    id: 3,
    name: "About ous",
    path: "/about"
  }
];

// Outlet is the selected App element; LandingPage, SearchPage,...
export const RootLayout = () => {
  return (
    <>
      <Header links={links} />
      <main>
        <Outlet />
      </main>
    </>
  );
};