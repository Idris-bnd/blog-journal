import React from 'react';
import MainPost from '../MainPost/MainPost';
import Subtitle from '../Subtitle/Subtitle';
import './Main.scss'

import PropTypesLib from 'prop-types';


const Main = ({ data }) => {
    return (
        <section className='MainSection'>
            <Subtitle title={'Mes pensées'} />

            <div className="MainPosts">

                {data.map((post) =>
                    <MainPost
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        slug={post.slug}
                    />
                )}

                {data.map((post) =>
                    <MainPost
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        slug={post.slug}
                    />
                )}

            </div>
        </section>
    );
};

Main.PropTypesLib = {
    data: PropTypesLib.arrayOf(
        PropTypesLib.object.isRequired
    ).isRequired
};

export default Main;