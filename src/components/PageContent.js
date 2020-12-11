import React from 'react'

const PageContent = (props) => {
    return (
        <section className='page-content'>
            <h1 className='orange-line'>{props.title}</h1>
            {props.children}
        </section>
    )
}

export default PageContent
