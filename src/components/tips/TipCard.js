import React from 'react';

import Css from '../../assets/images/language-icons/css.png';
import Javascript from '../../assets/images/language-icons/javascript.png';
import Php from '../../assets/images/language-icons/php.png';
import Presta from '../../assets/images/language-icons/prestashop.png';
import ReactIcon from '../../assets/images/language-icons/react.png';

const TipCard = ({ tip }) => {
    const { short, title, language } = tip;
    let image;

    switch (language) {
        case 'css':
            image = Css;
            break;
        case 'javascript':
            image = Javascript;
            break;
        case 'php':
            image = Php;
            break;
        case 'prestashop':
            image = Presta;
            break;
        case 'react':
            image = ReactIcon;
            break;
        default:
            console.log('hello');
            break;
    }

    return (
        <div className={`tip-card tip-card-${language}`}>
            <img src={image} alt='language' />

            <div className='short'>{short}</div>
            <h2>{title}</h2>
            {/* {desc.map(item => (
                <div key={item.id} className='tipcontent-item'>
                    <div className='description'>{item.description}</div>
                    <div className='code'>{item.code}</div>
                </div>
            ))} */}
        </div>
    );
};

export default TipCard;
