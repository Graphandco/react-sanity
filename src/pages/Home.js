import React from 'react';
import About from '../components/home/About';
import Hero from '../components/home/Hero';
import RealisationsLead from '../components/home/RealisationsLead';

import {motion} from 'framer-motion';
import {pageAnimation} from '../components/animation'

const Home = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <Hero />
            <About />
            <RealisationsLead />
        </motion.div>
    );
};

export default Home;
