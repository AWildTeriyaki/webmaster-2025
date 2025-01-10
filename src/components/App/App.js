import React from 'react';
    import './App.css'
    import NavbarLocal from '../NavbarLocal/NavbarLocal.js'
    import Footer from '../Footer/Footer.js';
    import Main from '../main.js'

    const App = () => (
        <div className="app">
            <NavbarLocal />
            <Main />
            <Footer />
        </div>
    );

export default App;