import React from 'react'
import PageContent from '../components/PageContent';
import {motion} from 'framer-motion';
import {pageAnimation} from '../components/animation'

const About = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <PageContent title='A Propos'></PageContent>
        </motion.div>
    )
}

export default About
