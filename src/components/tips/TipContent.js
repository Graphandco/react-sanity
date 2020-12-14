import React from 'react'
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TipContent = ({tip}) => {
    return (
        <TipWrapper>
            <Title>{tip.title}</Title>
            <Description>{tip.description}</Description>
            <div className="tipcode">
                {tip.list.map((codeblock) => (
                    <CodeBlock className="codeblock" key={codeblock.key} >
                        <div className="desc">{codeblock.text}</div>
                        <SyntaxHighlighter
                                style={atomDark}
                                language={tip.syntax}
                            >
                                {codeblock.code}
                            </SyntaxHighlighter>
                            </CodeBlock>
                ))}
            </div>
        </TipWrapper>
    )
}

const TipWrapper = styled.div`
    padding: 1rem 2rem;
`;

const Title = styled.h2`
    color: var(--orange);
    margin-bottom: 1rem;
`;
    
const Description = styled.p`
    color: var(--white);
    opacity: .8;
`;

const CodeBlock = styled.div `
    code {
        white-space: break-spaces !important;
    }
`;

export default TipContent

