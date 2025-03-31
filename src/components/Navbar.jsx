import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "hi", name: "हिंदी" },
  ];

  const links = [
    {
      name: t("nav.gToken"),
      link: "",
    },
    {
      name: t("nav.sales"),
      link: "sales",
    },
    {
      name: t("nav.investment"),
      link: "investation",
    },
    {
      name: t("nav.prizes"),
      link: "prizes",
    },
    {
      name: t("nav.information"),
      link: "information",
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="fixed left-0 top-0 z-[1000] w-full bg-white">
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
                  {t(link.name)}
                </a>
              ))}
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="appearance-none bg-transparent border border-[#464343] rounded px-3 py-1 pr-8 text-[#464343] font-bold text-[16px] tracking-[0.09em] uppercase cursor-pointer focus:outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#464343]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
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
                    {t(link.name)}
                  </a>
                ))}
                <div className="px-4 py-2 relative">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="w-full appearance-none bg-transparent border border-[#464343] rounded px-3 py-1 pr-8 text-[#464343] font-bold text-[16px] tracking-[0.09em] uppercase cursor-pointer focus:outline-none"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#464343]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
