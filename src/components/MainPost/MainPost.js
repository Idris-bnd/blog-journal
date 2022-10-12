import React from 'react';
import './MainPost.scss'
import { Link } from 'react-router-dom';

import PropTypesLib from 'prop-types';

const MainPost = ({ title, excerpt, slug }) => {
    return (
        <article className='SingleMainPost'>
            <Link to={`/post/${slug}`}>
                <h1>
                    {title+"  "}
                    <i className="fa-solid fa-right-long"></i>
                </h1>
            </Link>
            <p>
                {excerpt}
            </p>
        </article>
    );
};

MainPost.PropTypesLib = {
    title: PropTypesLib.string.isRequired,
    excerpt: PropTypesLib.string.isRequired,
    slug: PropTypesLib.string.isRequired,
};

export default MainPost;