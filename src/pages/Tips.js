import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js'
//Components
import PageContent from '../components/PageContent';
import NavBar from '../components/tips/NavBar';
import {pageAnimation} from '../components/animation';
//import TipCard from '../components/tips/TipCard';

//Context
//import { TipsContext } from '../components/contexts/TipsContext';

//Modules
import {motion} from 'framer-motion';
import styled from 'styled-components';

const Tips = () => {
    //const [tips, isLoading, setIsLoading] = useContext(TipsContext);
    const [tips, setTips] = useState([])
    const [currentSlug, setCurrentSlug] = useState('display-grid')


useEffect(() => {
    sanityClient.fetch(`*[_type == 'tip']{
        title,
        slug,
        description,
        language,
        list,
    }`)
    .then((data) => setTips(data))
    .catch(console.error);
}, [])

    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <PageContent title='Coding Tips'>
                <TipsWrapper className='tips-wrapper'>
                    <NavBar tips={tips} setCurrentSlug={setCurrentSlug} />
                    {/* {isLoading
                        ? 'Loading...'
                        : tips.map(tip => <TipCard key={tip.id} tip={tip} />)} */}
                    <TipWrapper className='tip-wrapper'>
                    { 
                    //console.log(tips),
                    tips.filter(filteredTip => filteredTip.slug.current.includes(currentSlug)).map(tip => (
                        <TipContent className="tip-content" key={tip.title}>
                            <Title>{tip.title}</Title>
                            <Description>{tip.description}</Description>
                        </TipContent>
                    ))
                }
                    </TipWrapper>
                </TipsWrapper>
            </PageContent>
        </motion.div>
    );
};

const TipsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    min-height: 500px;
`;

const TipWrapper = styled.div`
    text-align: center;
    background-color: #171821;
`;

const TipContent = styled.div`
    padding: 1rem 2rem;
`;
    
const Title = styled.h2`
    color: var(--orange);
`;
    
const Description = styled.p`
    color: var(--white);
    opacity: .8;
`;

export default Tips;
