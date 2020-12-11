import React from 'react';
import AboutImage from '../../assets/images/about.jpg';

import {pageAnimation} from '../animation'

import {motion} from 'framer-motion';

const About = () => {
    return (
        <motion.section variants={pageAnimation} initial='hidden' animate='show' exit='exit' className='home-about'>
            <div className='divider divider-top'>
                <svg
                    data-name='Layer 1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
                        className='shape-fill'
                    ></path>
                </svg>
            </div>
            <div className='divider divider-bottom'>
                <svg
                    data-name='Layer 1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
                        className='shape-fill'
                    ></path>
                </svg>
            </div>
            <img src={AboutImage} alt='About' />
            <div className='content'>
                <h2 className='orange-line'>Bio</h2>
                <p>
                    Le monde du web m'a toujours passionné, selon moi c’est un
                    élément capital dans le monde d’aujourd’hui qui évolue de
                    façon exponentielle et est régi par les nouvelles
                    technologies. J'ai découvert ce secteur d'activité il y a
                    plus de 10ans maintenant, et j'en apprends tous les jours,
                    c'est ce qui me plaît et me motive le plus.
                </p>
                <p>
                    Qu'il s'agisse de développement, de nouvelles applications
                    ou de design, je suis toujours curieux et cultive ma
                    polyvalence pour pouvoir m'adapter facilement à tous les
                    types d'outils.
                </p>
            </div>
        </motion.section>
    );
};

export default About;
