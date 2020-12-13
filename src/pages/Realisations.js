import React, {useState, useEffect} from 'react';
import sanityClient from '../client.js'

import Portfolio from '../assets/images/realisations/portfolio.jpg';
import PageContent from '../components/PageContent';
import CustomButton from '../components/custom/CustomButton';

//import { RealisationsContext } from '../components/contexts/RealisationsContext';


import {motion} from 'framer-motion';
import {pageAnimation} from '../components/animation'


const Realisations = () => {

    const [realisations, setRealisations] = useState([])

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'realisation']{
            title,
            description,
            link,
            image {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setRealisations(data))
        .catch(console.error);
    }, [])

    //const [realisations] = useContext(RealisationsContext);
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <PageContent title='Réalisations'>
                <section className='realisations'>
                    <div className='liste'>
                        <div className='description'>
                            <img src={Portfolio} alt='Portfolio' />
                            <div className='content'>
                                <h2 className='orange-line'>Portfolio</h2>
                                <p>
                                    Retrouvez ici l'ensemble de mes réalisations,
                                    aussi bien mes projets professionnels,
                                    personnels ou simples maquettes et exercices
                                    pratiques.
                                </p>
                            </div>
                        </div>
                        {realisations.map((realisation, index) => (
                            
                            <div className='realisation' key={index}>
                                <div className='image'>
                                    <img
                                        src={realisation.image.asset.url}
                                        alt={realisation.title}
                                    />
                                </div>
                                <div className='content'>
                                    <div className='name orange-line'>{realisation.title}</div>
                                    <div className='desc'>{realisation.description}</div>
                                    <div className='link'>
                                        <a
                                            href={realisation.link}
                                            target='blank'
                                            title={`Aller sur le site ${realisation.title}`}
                                        >
                                    <CustomButton title='Voir'  />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </PageContent>
        </motion.div>
    );
};

export default Realisations;
