import React, { useState, useEffect, createContext } from 'react';
import dataTips from '../../data/dataTips'

export const TipsContext = createContext();

export const TipsProvider = props => {
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const getTips = async () => {
    //         try {
    //             const response = await Axios.get('http://localhost:1337/tips');
    //             setTips(response.data);
    //             //console.log(response.data);
    //             setIsLoading(false);
    //         } catch (e) {
    //             console.log(
    //                 'Une erreur est survenue lors de la récupération des Tips'
    //             );
    //         }
    //     };
    //     getTips();
    // }, []);

    useEffect(() => {
        const getTips =()=> {
            try {
                setTips(dataTips);
                setIsLoading(false);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        getTips();
    }, []);
    return (
        <TipsContext.Provider value={[tips, isLoading, setIsLoading]}>
            {props.children}
        </TipsContext.Provider>
    );
};
