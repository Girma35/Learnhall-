import React from 'react';
import { FaBell } from 'react-icons/fa';
import BgImg from '../../assets/Bg.png';
import { FadeUp } from '../hero/Hero';
import { motion } from 'framer-motion';

const bgStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const Subscribe = () => {
    return (
        <section className="bg-[#f7f7f7]">
            <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                style={bgStyle}
                className="container py-24 md:py-48"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex flex-col justify-center"
                >
                    <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                        <h1 className="text-4xl font-bold !leading-snug">
                            450k+ Students are Learning From Us
                        </h1>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-center">
                        Subscribe to Our Newsletter
                    </h2>
                    <form className="mt-6 flex flex-col items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 border border-gray-300 rounded-md"
                            required
                        />
                        <motion.button
                            variants={FadeUp(0.8)}
                            initial="initial"
                            animate="animate"
                            className="primary-btn flex items-center gap-4 group"
                        >
                            Subscribe
                            <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Subscribe;
