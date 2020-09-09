import React, {useState} from 'react';
import './App.sass';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Context from './components/context'

function App() {
  const [basketCount, setBasketCount ] = useState([])
  const [models] = useState([
    {
        id: 1,
        release: 'Mar 2019',
        manufacturer: 'Bitmain',
        model: 'S9i',
        hash: '10.5-14.5 th/s',
        algorithm: 'SHA-256',
        efficiency: '8.00j/H/s',
        profit: '$122.88',
        price: '$137.00 - $217.00',
    },
    {
        id: 2,
        release: 'Apr 2020',
        manufacturer: 'YoshidaCorp',
        model: 'P11',
        hash: '14.5-19.5 th/s',
        algorithm: 'BDO-512',
        efficiency: '24.00j/H/s',
        profit: '$204.82',
        price: '$247.00 - $517.00',
    },
    {
        id: 3,
        release: 'Mar 2019',
        manufacturer: 'Bitmain',
        model: 'S9i',
        hash: '10.5-14.5 th/s',
        algorithm: 'SHA-256',
        efficiency: '8.00j/H/s',
        profit: '$122.88',
        price: '$137.00 - $217.00',
    },
    {
        id: 4,
        release: 'Apr 2020',
        manufacturer: 'YoshidaCorp',
        model: 'P11',
        hash: '14.5-19.5 th/s',
        algorithm: 'BDO-512',
        efficiency: '24.00j/H/s',
        profit: '$204.82',
        price: '$247.00 - $517.00',
    },
    {
        id: 5,
        release: 'Mar 2019',
        manufacturer: 'Bitmain',
        model: 'S9i',
        hash: '10.5-14.5 th/s',
        algorithm: 'SHA-256',
        efficiency: '8.00j/H/s',
        profit: '$122.88',
        price: '$137.00 - $217.00',
    },
])

function changeBasketCount (id){
  
  const model = models.filter(item => item.id === id)
  
  if(basketCount.filter(item => item === model[0]).length === 1) {
    setBasketCount(basketCount.filter(item => item !== model[0]))
  } else {
    setBasketCount(basketCount.concat(model))
  }  
}

  return (
    <Context.Provider value={{
      basketCount: basketCount.length, 
      models: models,
      changeBasketCount: changeBasketCount
    }}>
      <React.Fragment>
        <Header />

        <Main />

        <Footer />
      </React.Fragment>
    </Context.Provider>

  );
}

export default App;
