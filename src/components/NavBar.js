/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = ({ children }) => {
  return (
    <nav class="bg-emerald-500 border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="./" class="flex items-center">
          <img src={`assets/logo-nav.png`} class="h-6 sm:h-9" alt="nutrinfo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            NutrInfo
          </span>
        </a>
        <div class="flex items-center md:order-2">
          <a
            href="#"
            class="text-black dark:text-white font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Iniciar Sesión
          </a>
          <a
            href="#"
            class="text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Registrate
          </a>
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          ></button>
        </div>

          <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-black "
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-70">
                Planes alimentarios
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-70">
                Consultas personalizadas
              </a>
            </li>
          </ul>
          {children}
        </div>
 
    </nav>
  );
};

export default Nav;
