import React from 'react';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
    return(
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;