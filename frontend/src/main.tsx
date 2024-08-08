import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "./components/ui/toaster.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.tsx";
import { LoginForm } from "./pages/Login.tsx";
import { Signup } from "./pages/Signup.tsx";
import Navbar from "./components/Navbar.tsx";
import { ThemeProvider } from "./components/themeProvider.tsx";

const FRONTENDROUTE = "/the-self-development-journey/";

const routerUnauthenticated = createBrowserRouter([
  {
    path: FRONTENDROUTE,
    element: <LandingPage />,
  },
  {
    path: FRONTENDROUTE + "login",
    element: <LoginForm />,
  },
  {
    path: FRONTENDROUTE + "signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Navbar />
      <RouterProvider router={routerUnauthenticated} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
