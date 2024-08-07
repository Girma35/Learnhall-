import React from 'react';
import { LuMenuSquare } from "react-icons/lu";
import { motion } from "framer-motion";



const navbarMenu=[
  {
    id:1,
    title :"Home",
    path :'/',
  },
  {
    id:2,
    title:"Services",
    link :"#"
  },
  {
    id:3,
    title :"About",
    link :"#",
  },
  {
id:4,
title :"Our Team",
link :"#",
  },
  {
    id:5,
    title:"Contact us",
    link :"#",
  },
];


const Navbar = () => {
  return (
   <nav className="relative z-20">
 
 <motion.div 
 initial={{opacity:0,y:-50}}
 animate={{opacity:1,y:0}}
 
 
 className='container py-10 flex 
 justify-between items-center' >
{/* logo Section  */}
<div className = ' font-bold text-2xl '>
<img src="/download.jfif" alt="Logo" className="h-10 w-auto" /><h1>Learnhall</h1>
</div>

{/* Menu Section  */}
<div className='hidden lg:block '>

  <ul className="flex items-center gap-3 ">
    {navbarMenu.map((menu) => (
      <li key={menu.id}>
        <a href={menu.path} 
        className = "inline-block py-2 px-3 hover:text-secondary relative group" >
        <div className= "w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2-translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden "></div>

         {menu.title} </a>
      </li>
    ))}

    <button className="primary-btn">Sign in</button>
  </ul>
</div>

{/* MObile  Menu Section  */}

<div className="lg:hidden">
<LuMenuSquare className="text-4xl" />

</div>



 </motion.div>

   </nav>
  );
}

export default Navbar;