import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <div className="main__Inner"> */}
        <Main />
      {/* </div> */}
      <Footer />
    </React.Fragment>

  );
}

export default App;
