import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js'
//Components
import PageContent from '../components/PageContent';
import TipContent from '../components/tips/TipContent';
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

    const dynamicSort = (property) => {
        let sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            let result =
                a[property] < b[property]
                    ? -1
                    : a[property] > b[property]
                    ? 1
                    : 0;
            return result * sortOrder;
        };
    };

    tips.sort(dynamicSort('title'));

useEffect(() => {
    sanityClient.fetch(`*[_type == 'tip']{
        title,
        slug,
        description,
        language,
        syntax,
        list,
    }`)
    .then((data) => setTips(data))
    .catch(console.error);
}, [])

    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <PageContent title='Coding Tips'>
                <TipsWrapper className='tips-wrapper'>
                    <NavBar tips={tips} currentSlug={currentSlug} setCurrentSlug={setCurrentSlug} fliter={dynamicSort} />
                    <TipWrapper className='tip-wrapper'>
                    { 
                    console.log(tips),
                    tips.filter(filteredTip => filteredTip.slug.current.includes(currentSlug)).map(tip => (
                        <TipContent key={tip.title} tip={tip} />

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

    


export default Tips;
