import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/themeProvider";
import { LoginForm } from "./pages/Login";
import { useEffect, useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Signup } from "./pages/Signup";
import { GetCurrentUser } from "./utils/auth";
function App() {
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

  const routerAuthenticated = createBrowserRouter([{}]);

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await GetCurrentUser();
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <div className='overflow-x-hidden'>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <Navbar />
          <p>{isAuthenticated}</p>
          {isAuthenticated ? (
            <RouterProvider router={routerUnauthenticated} />
          ) : (
            <RouterProvider router={routerAuthenticated} />
          )}
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
