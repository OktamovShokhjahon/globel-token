import { useState } from "react";
import logo from "../../public/images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      name: "G-token",
      link: "",
    },
    {
      name: "Выгодные покупки",
      link: "sales",
    },
    {
      name: "Инвестиции",
      link: "investation",
    },
    {
      name: "Призы",
      link: "prizes",
    },
    {
      name: "Информация",
      link: "information",
    },
  ];

  return (
    <div className=" fixed left-0 top-0 z-[1000] w-full bg-white">
      <div className="big-container">
        <nav className="flex justify-center items-center pt-[29px] pb-[25px] px-[20px]">
          <div className="flex justify-between items-center w-full max-w-[1400px]">
            <div className="max-w-[202px]">
              <img src={logo} alt="" className="w-full" />
            </div>

            <button
              className="nav:hidden text-[#464343] p-2 transition-colors duration-200 hover:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="hidden nav:flex items-center gap-[67px]">
              {links.map((link) => (
                <a
                  key={link.name}
                  className="text-[#464343] text-left font-bold text-[16px] tracking-[0.09em] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#464343] after:transition-all after:duration-300 hover:after:w-full"
                  href={`#${link.link}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div
              className={`
              nav:hidden 
              absolute 
              top-[100px] 
              left-0 
              right-0 
              bg-white 
              flex-col 
              items-center 
              shadow-lg
              transform
              transition-all
              duration-300
              ease-in-out
              origin-top
              ${
                isMenuOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
              }
            `}
            >
              <div className="py-4 space-y-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    className="text-[#464343] text-left font-bold text-[16px] tracking-[0.09em] uppercase py-2 px-4 block hover:bg-gray-50 transition-colors duration-200 w-full text-center"
                    href={`#${link.link}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
