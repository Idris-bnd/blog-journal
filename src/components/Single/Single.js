import React from 'react';
import './Single.scss'
import { useParams } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

import PropTypesLib from 'prop-types';

const Single = ({ data }) => {
    const { slug } = useParams();

    const post = data.find((postToFind) => postToFind.slug === slug)

    console.log(slug);
    console.log(post);
    return (
        <div>
            <SinglePost
                title={post.title}
                content={post.content}
            />
        </div>
    );
};


Single.PropTypesLib = {
    data: PropTypesLib.arrayOf(
        PropTypesLib.object.isRequired
    ).isRequired
};

export default Single;