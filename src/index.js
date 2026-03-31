import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
import About from './About/About';
import Room from './Room/Room';
import DoubleRooms from './Room/DoubleRooms';
import Blog from './Blog/Blog';
import ClassicBlog from './Blog/ClassicBlog';
import GridBlog from './Blog/GridBlog';
import GridBlog2 from './Blog/GridBlog2';
import GridBlog3 from './Blog/GridBlog3';
import BlogPost from './Blog/BolgPost';
import Contact from './ContactUs/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/rooms" element={<Room />} />  
        <Route path="/doublerooms" element={<DoubleRooms />} />  
        <Route path="/blog" element={<Blog />} />  
        <Route path="/classicblog" element={<ClassicBlog />} />  
        <Route path="/gridblog" element={<GridBlog />} />  
        <Route path="/gridblog2" element={<GridBlog2 />} />  
        <Route path="/gridblog3" element={<GridBlog3 />} />  
        <Route path="/blogpost" element={<BlogPost />} />  
        <Route path="/contact" element={<Contact />} />  
      </Routes>
    <Footer />
    </BrowserRouter>

  </>

);

