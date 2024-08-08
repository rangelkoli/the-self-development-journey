import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { ModeToggle } from "./modeToggle";
import { useTheme } from "./themeProvider";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { theme } = useTheme();

  return (
    <div className='relative w-screen p-4 bg-white dark:bg-black'>
      {/* Desktop Navbar */}
      <div className='hidden lg:flex flex-wrap items-center justify-between'>
        <div className='flex items-center md:pl-10 p-0 m-0'>
          <h1 className='text-black dark:text-white text-2xl font-bold'>
            t<span className='text-blue-500'>SDJ</span>
          </h1>
        </div>

        <NavigationMenu className='flex flex-col md:flex-row md:items-center'>
          <NavigationMenuList className='flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4'>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-black dark:text-white'>
                Reading Material
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <a
                        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                        href='/'
                      >
                        <svg
                          fill={theme === "dark" ? "#fff" : "#000"}
                          viewBox='0 0 512 512'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                          <g
                            id='SVGRepo_tracerCarrier'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          ></g>
                          <g id='SVGRepo_iconCarrier'>
                            {" "}
                            <g id='diary_book-book-heart-love-valentine'>
                              {" "}
                              <path d='M456,168h-8v-44.977c0-15.027-13.623-26.219-28.109-23.648l-163.892,28.504L92.172,98.992 C77.56,96.372,64,107.656,64,122.625V168h-8c-8.836,0-16,7.163-16,16v184c0,8.836,7.164,16,16,16h130.745 c13.602,0,19.88,6.625,27.882,14.627c6.001,6.001,14.141,9.373,22.627,9.373c13.566,0,23.924,0,37.49,0 c8.487,0,16.626-3.372,22.627-9.373c8-8,14.268-14.627,27.882-14.627H456c8.836,0,16-7.164,16-16V184 C472,175.163,464.836,168,456,168z M422.633,115.141c4.748-0.848,9.367,2.787,9.367,7.883v199.109c0,3.891-2.781,7.203-6.609,7.883 L264,358.469V142.727L422.633,115.141z M80,122.625c0-4.952,4.446-8.733,9.391-7.883L248,142.711v215.758L86.609,330.016 c-3.828-0.68-6.609-3.992-6.609-7.883V122.625z M288.125,267.727c-0.773-4.352,2.133-8.5,6.484-9.266l104-18.336 c4.336-0.82,8.5,2.133,9.266,6.484c0.773,4.352-2.133,8.5-6.484,9.266l-104,18.336c-0.469,0.086-0.938,0.125-1.398,0.125 C292.18,274.336,288.805,271.609,288.125,267.727z M288.125,227.727c-0.773-4.352,2.133-8.5,6.484-9.266l104-18.336 c4.336-0.805,8.5,2.133,9.266,6.484c0.773,4.352-2.133,8.5-6.484,9.266l-104,18.336c-0.469,0.086-0.938,0.125-1.398,0.125 C292.18,234.336,288.805,231.609,288.125,227.727z M288.125,187.727c-0.773-4.352,2.133-8.5,6.484-9.266l104-18.336 c4.336-0.82,8.5,2.133,9.266,6.484c0.773,4.352-2.133,8.5-6.484,9.266l-104,18.336c-0.469,0.086-0.938,0.125-1.398,0.125 C292.18,194.336,288.805,191.609,288.125,187.727z M288.125,307.727c-0.773-4.352,2.133-8.5,6.484-9.266l104-18.336 c4.336-0.805,8.5,2.133,9.266,6.484c0.773,4.352-2.133,8.5-6.484,9.266l-104,18.336c-0.469,0.086-0.938,0.125-1.398,0.125 C292.18,314.336,288.805,311.609,288.125,307.727z M118.239,218.242c-11.85-14.068-13.889-33.678-3.614-45.243 c12.414-13.972,35.529-10.978,49.375,5.462c13.847-11.557,36.961-6.399,49.375,11.951c10.275,15.188,8.235,34.079-3.614,43.968 l-32.5,27.125c-7.318,6.108-19.204,4.012-26.522-4.677L118.239,218.242z'></path>{" "}
                            </g>{" "}
                            <g id='Layer_1'></g>{" "}
                          </g>
                        </svg>
                        <div className='mb-2 mt-4 text-lg font-medium'>
                          Books
                        </div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          Explore a list of specially curated books for you.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href='/docs' title='Introduction'>
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href='/docs/installation' title='Installation'>
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href='/docs/primitives/typography'
                    title='Typography'
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-black dark:text-white'>
                Components
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href='/docs'>
                <NavigationMenuLink className='text-black dark:text-white'>
                  Documentation
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* <Button variant='secondary'>Login/Signup</Button> */}
        <ModeToggle />
      </div>

      {/* Mobile Navbar */}
      <div className='lg:hidden flex items-center justify-between'>
        <h1 className='text-black dark:text-white text-2xl font-bold'>
          t<span className='text-blue-500'>SDJ</span>
        </h1>
        <Button variant='secondary' onClick={toggleMenu}>
          Menu
        </Button>
      </div>

      {isMenuOpen && (
        <div className='lg:hidden mt-4'>
          <NavigationMenu className='flex flex-col w-full max-w-full'>
            <NavigationMenuList className='flex flex-col space-y-2 w-full max-w-full'>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-black dark:text-white'>
                  Getting started
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-3 p-4'>
                    <li className='row-span-3'>
                      <NavigationMenuLink asChild>
                        {/* <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Icons.logo className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and
                            Tailwind CSS.
                          </p>
                        </a> */}
                      </NavigationMenuLink>
                    </li>
                    <ListItem href='/docs' title='Introduction'>
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href='/docs/installation' title='Installation'>
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href='/docs/primitives/typography'
                      title='Typography'
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-black dark:text-white'>
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href='/docs'>
                  <NavigationMenuLink className='text-black dark:text-white'>
                    Documentation
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant='secondary' className='mt-4'>
            Login/Signup
          </Button>
        </div>
      )}
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
