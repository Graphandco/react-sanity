import React from 'react'

const RealisationSingle = ({realisation}) => {
    return (
        <a className={`realisation ${realisation.slug} ${realisation.index}`} href={realisation.link}
        target='blank'
        title={`Aller sur le site ${realisation.name}`}>
            <div className="topbar">
                <div className="circle circle-red"></div>
                <div className="circle circle-yellow"></div>
                <div className="circle circle-green"></div>
            </div>
            <div className="content">
                <div className="leftbar"></div>
                <div className='rightbar'>
                    <span>{realisation.name}</span>
                    <img
                        src={realisation.image}
                        alt={realisation.name}
                        width='500px'
                    />
                </div>
                {/* <div className="rightbar"></div> */}
            </div>
            {/* <div className='content'>
                <h2 className='name orange-line'>{realisation.name}</h2>
            </div> */}
        </a>
    )
}

export default RealisationSingle
