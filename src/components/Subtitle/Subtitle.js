import React from 'react';
import './Subtitle.scss'

import PropTypesLib from 'prop-types';


const Subtitle = ({title}) => {
    return (
        <h3>{title}</h3>
    );
};

Subtitle.PropTypesLib = {
    title: PropTypesLib.string.isRequired,
};

export default Subtitle;