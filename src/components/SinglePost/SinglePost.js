import React from 'react';
import './SinglePost.scss'
import Subtitle from '../Subtitle/Subtitle';
import DOMPurify from 'dompurify';

import PropTypesLib from 'prop-types';

const SinglePost = ({ title, content }) => {
    function setHTML() {
        return {
            __html: DOMPurify.sanitize(content, { ALLOWED_TAGS: ['a', 'br'] }),
          };
    }
    return (
        <article className='SinglePost'>
            <Subtitle title={title} />

            <div className="text">
                <p dangerouslySetInnerHTML={setHTML()}></p>
            </div>
        </article>
    );
};

SinglePost.PropTypesLib = {
    title: PropTypesLib.string.isRequired,
    content: PropTypesLib.string.isRequired,
};

export default SinglePost;