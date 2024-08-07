import React from 'react';
 import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion} from "framer-motion";
const Footer = () => {
    return (
        <footer className="bg-[#f7f7f7]  py-8">
            <motion.div 
            initial ={{opacity:1,y:50}}
            whileInView={{opacity:1,y:0}}

            className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                    {/* First Section */}
                    <div className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold ">Learnhall</h1>
                        <p className="text-dark2">
                            We are a leading company in the tech industry, committed to delivering innovative solutions and exceptional service. Our team of experts is dedicated to helping you achieve your goals with the latest technology and personalized support.
                        </p>
                    </div>

                    {/* Second Section */}
<div className="grid grid-cols-2 gap-10"> 
<div className="space-y-4">
<h1 className="text-2xl"> Courses</h1>
<div className="text-dark2  " >
<ul className="space-y-2 text-lg">
<li className="cursor-pointer hover:text-secondary duration-200">
Web Development
</li>
<li className="cursor-pointer hover:text-secondary duration-200">
Mobile Development
</li>
<li className="cursor-pointer hover:text-secondary duration-200">
Software Development
</li>
<li className="cursor-pointer hover:text-secondary duration-200">
SEO Optimization
</li>
<li className="cursor-pointer hover:text-secondary duration-200">
Digital Marketing
</li><li className="cursor-pointer hover:text-secondary duration-200">
E-Learning
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-2 gap-10"> 
<div className="space-y-4">
<h1 className="text-2xl"> Links</h1>
<div className="text-dark2  " >
<ul className="space-y-2 text-lg">
<li className="cursor-pointer hover:text-secondary duration-200">
Home
</li>
<li className="cursor-pointer hover:text-secondary duration-200">
Services
</li>
<li className="cursor-pointer hover:text-secondary duration-200">
About
</li>
</ul>
</div>
</div> 
</div>
</div>
                    {/* Third Section */}

<div className="space-y-4 max-w-[300px]">
<h1 className="text-2xl font-bold">Get In Touch</h1>
<div className="flex items-center">
<input type="email"
link="/" 
placeholder="Enter Your Email"
className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none  placeholder:text-dark2" />
<a href='/'>
<button className=" bg-primary text-white font-semibold py-4 px-6 rounded-e-xl"> Go
</button>
</a>
</div>

<div className="flex space-x-6 py-3">
    <a href="https://www.facebook.com"><FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200" /></a>
    <a href="https://x.com/Girma880731631?t=TT2MMsSMzVYgWmz_ZlwyHA&s=35"><FaTwitter className="cursor-pointer hover:text-primary hover:scale-105 duration-200" /></a>
    <a href="https://www.linkedin.com/in/girma-w-a16429263"><FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" /></a>
    <a href="mailto:Girmawakeyo4@gmail.com"><MdEmail className="cursor-pointer hover:text-primary hover:scale-105 duration-200" /></a>
</div>


</div>

{/* Social Media */}



</div>
</motion.div>
</footer>
    );
};

export default Footer;

/* <div className="container mx-auto text-center">
    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
</div> */
