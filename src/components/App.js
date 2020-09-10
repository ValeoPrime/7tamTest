import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Context from './context/context'

function App() {
  const [basketCount, setBasketCount] = useState([])
  const [models, setModels] = useState([
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
  const [loading, setLoading] = useState(true)
  const [current, setСurrent] = useState(true)

  useEffect(() => {
    fetch('data/models.json', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setModels(data)
          setLoading(false)
        }, 3000);
      });
  }, [])

  function getSortHandler() {
    const sortMethods = [
      (a, b) => a.manufacturer.localeCompare(b.manufacturer),
      (a, b) => b.manufacturer.localeCompare(a.manufacturer),
    ];

    return function (data) {
      if (current) {

        let dat = data.slice().sort(sortMethods[0])
        setСurrent(false)
        return dat;

      } else {
        let dat = data.slice().sort(sortMethods[1])
        setСurrent(true)
        return dat;

      }
    }
  }

  const sortHandler = getSortHandler();

  function sortItems(id) {
    const sortArr = []
    switch (id) {
      case 0:
        setModels(sortArr.concat(sortHandler(models)))
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
      // setBasketCount(basketCount.filter(item => item !== model[0]))
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
      sortItems: sortItems,
      loading: loading
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
