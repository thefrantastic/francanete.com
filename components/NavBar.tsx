import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useDarkMode from "../hooks/useDarkMode";

export default function NavBar() {
  const [colorTheme, setTheme]: any = useDarkMode();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const currentPath = useRouter();
  const isRootPath = currentPath.pathname === "/tempo";

  // const [mounted, setMounted] = useState(false);
  // useEffect(() => setMounted(true), []);
  // if (!mounted) return null;

  const menu = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Projects", path: "/projects" },
  ];

  const showMenu = isRootPath ? menu.filter((item) => item.path !== "/") : menu;

  return (
    <nav className="px-2 sm:px-4 py-5">
      <div
        className={`container flex flex-wrap ${
          isRootPath ? "md:justify-center" : "md:justify-between"
        } justify-between  items-center mx-auto`}
      >
        {!isRootPath ? (
          <Link href="/">
            <a className="flex ">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Fran Canete
              </span>
            </a>
          </Link>
        ) : (
          <span></span>
        )}

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          data-collapse-toggle="mobile-menu "
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            "w-full md:block md:w-auto" + (navbarOpen ? "" : " hidden")
          }
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            {showMenu.map((item) => {
              return (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a
                      className="block py-2 pr-4 pl-3 text-gray-700 bg-grey-900 rounded md:bg-transparent md:text-black hover:underline  md:p-0 dark:text-white "
                      aria-current="page"
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}

            {!navbarOpen ? (
              <>
                <span onClick={() => setTheme(colorTheme)}>
                  {colorTheme === "light" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#b88806"
                    >
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#666666"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </span>
              </>
            ) : (
              <span
                className="flex justify-center "
                onClick={() => setTheme(colorTheme)}
              >
                {colorTheme === "light" ? (
                  <>
                    <button className=" inline-flex items-center  gap-3  bg-transparent text-grey py-2 px-4 border border-white: border-opacity-40  rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" inline-block h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#b88806"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                      </svg>
                      Light
                    </button>
                  </>
                ) : (
                  <>
                    <button className=" inline-flex items-center gap-3 bg-transparent text-gray-700 font-semibold  py-2 px-4 border border-black border-opacity-40  rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" inline-block h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#666666"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                      Dark
                    </button>
                  </>
                )}
              </span>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
