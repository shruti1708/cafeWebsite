import { createBrowserRouter } from "react-router";
import { Root } from "./app/components/Root";
import { Home } from "./app/components/Home";
import { Menu } from "./app/components/Menu";
import { About } from "./app/components/About";
import { Contact } from "./app/components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
