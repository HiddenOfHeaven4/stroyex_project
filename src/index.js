import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import BannerCookie from './components/BannerCookie';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Content/>
        <Footer/>
        <BannerCookie/>
    </React.StrictMode>
);


reportWebVitals();
