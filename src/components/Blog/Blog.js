import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Blog.scss'
import data from '../../Data/posts.js'
import Single from '../Single/Single';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";



const Blog = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main data={data}/>} />
                <Route path='/post/:slug' element={<Single data={data}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Blog;

