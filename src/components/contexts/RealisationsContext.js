import React, { useState, useEffect, createContext } from 'react';
import dataRealisations from '../../data/dataRealisations'

export const RealisationsContext = createContext();

export const RealisationsProvider = props => {
    const [realisations, setRealisations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getRealisations =()=> {
            try {
                setRealisations(dataRealisations);
                setIsLoading(false);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        getRealisations();
    }, []);
    return (
        <RealisationsContext.Provider value={[realisations, setRealisations, isLoading, setIsLoading]}>
            {props.children}
        </RealisationsContext.Provider>
    );
};
