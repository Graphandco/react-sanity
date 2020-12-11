import React, {useContext} from 'react'
import { RealisationsContext } from '../contexts/RealisationsContext';
import CustomButton from '../custom/CustomButton'
import RealisationSingle from './RealisationSingle';

const RealisationsLead = () => {

    
    const [realisations] = useContext(RealisationsContext);
    const filteredRealisations = realisations.filter( realisation => 
        realisation.homepage === true);

    return (
        <section className='home-realisations'>
            <div className="realisations">
                <div className="description">
                    <h2 className="orange-line">Réalisations</h2>
                    <p>Voici quelques exemples des dernières réalisations que j'ai eu l'occasion de développer.</p>
                </div>
                {filteredRealisations.map((realisation, index) => (
                    <RealisationSingle realisation={realisation} key={index} />
                    
                    ))}
                <div className="cta">
                    <CustomButton title='Tout voir' link='realisations' />
                </div>
            </div>
        </section>
    )
}


export default RealisationsLead
