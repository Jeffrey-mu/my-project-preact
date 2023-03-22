import { h } from 'preact';
import { styled, setup } from 'goober';

// Should be called here, and just once
setup(h);

export const Icon = styled('span')`
    color: #673ab8;
`;

export const Button = styled('button')`
    background: #673ab8;
    color: white;
    border: ${Math.random()}px solid white;
    padding: 1em;
    margin-right: .6em;
    transition: all .2s;
    &:focus,
    &:hover {
        color: #673ab8;
        background: white;
    }

    .otherClass {
        margin: 0;
    }

    ${Icon} {
        color: black;
    }
`;
