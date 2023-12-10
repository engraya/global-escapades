<div>
<nav className="dark:bg-gray-900 z-20 top-0 border-b border-gray-200 dark:border-gray-600 dark:text-white">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 dark:text-white">
<Link to="/"><a className="flex items-center space-x-3 rtl:space-x-reverse dark:text-white">
<img src={icon} alt="" style={{height: '60px', width: '60px'}}/>
 <span className="self-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Global Escapades</span><span class="bg-blue-100 text-blue-800 text-xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">pro</span>
</a></Link>

<div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
<Link to="/favourites"><button type="button" className="inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-3 mb-1">
<FaHeart />

 <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
   {totalFavourites}
 </span>
 
</button></Link>
 <Link to="/new-collection"><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-3 mb-1"><FaPlus /></button></Link>
 <DarkMode/>
</div>

<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
 <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
   <li>
     <Link to="/"><a className="block py-2 px-3 text-cyan-600 md:hover:text-cyan-900 rounded md:bg-transparent md:p-0" aria-current="page">Home</a></Link>
   </li>
   <li>
     <Link to="/about"><a className="block py-2 px-3 text-cyan-600  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-900 md:p-0 md:dark:hover:text-cyan-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a></Link>
   </li>
   <li>
     <Link to="/collections"><a className="block py-2 px-3 text-cyan-600  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-900 md:p-0 md:dark:hover:text-cyan-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Collections</a></Link>
   </li>
   <li>
     <Link to="/favourites"><a className="block py-2 px-3 text-cyan-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-900 md:p-0 md:dark:hover:text-cyan-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Favourites</a></Link>
   </li>
 </ul>
</div>
</div>
</nav>
</div>