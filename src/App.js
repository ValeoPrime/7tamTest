import React, { useState } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Context from './components/context'

function App() {
  const [basketCount, setBasketCount] = useState([])
  const [models, setModels] = useState([
    {
      id: 1,
      release: 'Mar 2019',
      manufacturer: 'Bitmain',
      model: 'S9i',
      hash: '10.5-14.5 th/s',
      algorithm: 'SHA-256',
      efficiency: '8.00j/H/s',
      profit: '$122.88',
      minPrice: 137.00,
      maxPrice: 217.00,

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
      minPrice: 247.00,
      maxPrice: 517.00,

    },
    {
      id: 3,
      release: 'Feb 2018',
      manufacturer: 'GenriS',
      model: 'D8i',
      hash: '8.5-12.5 th/s',
      algorithm: 'PDO-128',
      efficiency: '2.00j/H/s',
      profit: '$44.84',
      minPrice: 85.00,
      maxPrice: 149.00,

    },
    {
      id: 4,
      release: 'Apr 2020',
      manufacturer: 'YoshidaCorp',
      model: 'R18',
      hash: '19.5-24.5 th/s',
      algorithm: 'BLO-700',
      efficiency: '34.00j/H/s',
      profit: '$394.46',
      minPrice: 397,
      maxPrice: 751,
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
      minPrice: 137.00,
      maxPrice: 217.00,
    },
  ])
  const [langArr] = useState([{
    langType: 'ENG',
    sortBy: 'SORT BY',
    sortVariants: ['By Manufacturer', 'Minimum price', 'Maximum price'],
    onSale: 'ON SALE',
    news: 'NEWS'
  },
  {
    langType: 'РУС',
    sortBy: 'Сортировать',
    sortVariants: ['По производителю', 'Минимальной цене', 'Максимальной цене'],
    onSale: 'В ПРОДАЖЕ',
    news: 'НОВОСТИ'
  }])
  const [language, setLanguage] = useState([langArr[0]])

  function sortItems(id) {
    const sortArr = []
    switch (id) {
      case 0:
        sortArr.concat(models.sort((a, b) => a.manufacturer > b.manufacturer ? 1 : -1))
        setModels(sortArr.concat(models.sort((a, b) => a.manufacturer > b.manufacturer ? 1 : -1)))
        break

      case 1:
        setModels(sortArr.concat(models.sort((a, b) => a.minPrice > b.minPrice ? 1 : -1)))
        break

      case 2:
        setModels(sortArr.concat(models.sort((a, b) => a.maxPrice < b.maxPrice ? 1 : -1)))
        break

      default:
        break
    }

    console.log(models);

  }

  function changeLanguage() {
    const langIndex = langArr.indexOf(language[0])

    if (langArr[langIndex + 1] !== undefined) {
      setLanguage([langArr[langIndex + 1]])

    } else {
      setLanguage([langArr[0]])
    }

  }

  function changeBasketCount(id) {

    const model = models.filter(item => item.id === id)

    if (basketCount.filter(item => item === model[0]).length === 1) {
      setBasketCount(basketCount.filter(item => item !== model[0]))
    } else {
      setBasketCount(basketCount.concat(model))
    }
  }

  return (
    <Context.Provider value={{
      basketCount: basketCount.length,
      models: models,
      changeBasketCount: changeBasketCount,
      language: language,
      changeLanguage: changeLanguage,
      sortItems: sortItems
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
