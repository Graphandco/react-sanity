import React from 'react';
import HomeIllustration from '../../assets/images/header-illustration.svg';
//import TopCurves from '../../assets/images/top-curves.svg';
import CustomButton from '../custom/CustomButton';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Hero = () => {

const heroContentAnim = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity:1,
        transition: {
            duration: 1,
            ease: 'easeOut',
            staggerChildren: .5
        }
    }
}

const titleAnim = {
    hidden: {
        y: 20,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

const ctaAnim = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

    return (
        <MainHero className='hero'>
            <HeroWrapper className='hero-wrapper'>
                <motion.div 
                    className='hero-content'
                    variants={heroContentAnim} initial='hidden' animate='show'
                >
                    <motion.p 
                        className='site-title'
                        variants={titleAnim}
                    >
                        Graph and Co</motion.p>
                    <HeroTitle 
                        className="lead"
                        variants={titleAnim}
                    >Un métier, une passion</HeroTitle>
                    <HeroDesc 
                        className='desc orange-line'
                        variants={titleAnim}
                    >
                        Je suis un développeur web spécialisé dans la création
                        de sites internet modernes et intuitifs.
                    </HeroDesc>
                    <HeroCta 
                        className='cta'
                        variants={ctaAnim}
                        >
                            <CustomButton title='Voir mon travail' link='realisations' />
                    </HeroCta>
                </motion.div>
                <HeroImage className='hero-image'>
                    <img src={HomeIllustration} alt='Illustration' />
                </HeroImage>
            </HeroWrapper>
            </MainHero>
    );
};

const MainHero = styled.div`
    height: calc(100vh - 50px);
    padding: 0 var(--p2);
`;

const HeroWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    height: 100%;
`;

const HeroTitle = styled(motion.h1)`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    line-height: 1;
`;

const HeroDesc = styled(motion.p)`
    margin-left: 1rem;
    position: relative;
`;

const HeroCta = styled(motion.div)`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;

const HeroImage = styled(motion.div)`
    max-width: 400px;
    padding-left: 2rem;
`;

export default Hero;
