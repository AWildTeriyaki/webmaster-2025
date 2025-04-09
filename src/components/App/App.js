import React from 'react';
    import './App.css'
    import Main from '../main.js'
    import NavbarLocal from '../NavbarLocal/NavbarLocal.js'
    import Footer from '../Footer/Footer.js';

    const App = () => (
        <div className="app">
            <NavbarLocal />
            <Main />
            <Footer />
        </div>
    );

export default App;