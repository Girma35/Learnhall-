import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { motion } from "framer-motion";

const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 500px
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay, 
                ease: "easeInOut"
            }
        }
    }
}




const servicesData = [
    {
      id: 1,
      title: "Web Development",
      link: "#",
      icon: <CgWebsite />,
      delay: 0.2,
    },
    {
      id: 2,
      title: "Mobile Development",
      link: "#",
      icon: <FaMobileAlt />,
      delay: 0.4,
    },
    {
      id: 3,
      title: "Software Development",
      link: "#",
      icon: <SiBmcsoftware />,
      delay: 0.6,
    },
    {
      id: 4,
      title: "SEO Optimization",
      link: "#",
      icon: <IoBriefcaseOutline />,
      delay: 0.8,
    },
    {
      id: 5,
      title: "Digital Marketing",
      link: "#",
      icon: <SiGooglemarketingplatform />,
      delay: 1.0,
    },
    {
      id: 6,
      title: "Satisfied Client",
      link: "#",
      icon: <MdSentimentVerySatisfied /> ,
      delay: 1.2,
    },
  ];
  



  const Services = () => {
    return (
        <section className="bg-white">
            <div className="container pb-14 pt-16">
                <h1 className="text-4xl font-bold text-left pb-10">
                    Courses We Provide
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                    {servicesData.map((service) => (
                        <div key={service.id}>
                            <motion.div 
                                variants={SlideLeft(service.delay)} // Corrected 'SideLeft' to 'SlideLeft'
                                initial="initial"
                                whileInView="animate" // Removed unnecessary curly braces
                                viewport={{ once: true }}
                                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 hover:shadow-2xl"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                            </motion.div>
                            <h1 className="text-lg font-semibold text-center px-3">
                                {service.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

  

export default Services;
