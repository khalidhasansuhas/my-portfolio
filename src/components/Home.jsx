import React  from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-2xl'>Hi, my name is</p>
                
                <div className='flex '>
                    <div className='flex mr-4'>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>K</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>h</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>a</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>l</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>i</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>d</h1>
                        </motion.div>
                    </div>
                    <div className='flex mr-4'>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>H</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>a</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>s</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>a</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>n</h1>
                        </motion.div>
                    </div>
                    <div className='flex'>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>S</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>u</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>h</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>a</h1>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <h1 className='text-4xl sm:text-7xl font-bold hover:text-pink-600 text-[#ccd6f6]'>s</h1>
                        </motion.div>
                    </div>
                </div>
                <motion.h2
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    initial={{ scale: 0 }}
                   
                    className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Front End Developer.
                </motion.h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I’m a Front End Developer specializing in building (and occasionally
                    MERN Stack Developer) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <a href="SuhasResumeFrontEndDeveloper.pdf" download='SuhasResumeFrontEndDeveloper.pdf'>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            Download Resume
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;