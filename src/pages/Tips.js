import React, { useContext } from 'react';
//Components
import PageContent from '../components/PageContent';
import NavBar from '../components/tips/NavBar';
import {pageAnimation} from '../components/animation';
//import TipCard from '../components/tips/TipCard';

//Context
import { TipsContext } from '../components/contexts/TipsContext';

//Modules
import {motion} from 'framer-motion';
import styled from 'styled-components';



const Tips = () => {
    const [tips, isLoading] = useContext(TipsContext);
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <PageContent title='Coding Tips'>
                <TipsWrapper className='tips-wrapper'>
                    <NavBar />
                    {/* {isLoading
                        ? 'Loading...'
                        : tips.map(tip => <TipCard key={tip.id} tip={tip} />)} */}
                    <TipContent>Tip Content</TipContent>
                </TipsWrapper>
            </PageContent>
        </motion.div>
    );
};

const TipsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

const TipContent = styled.div`
    text-align: center;
    background-color: var(--white);
`;

export default Tips;
