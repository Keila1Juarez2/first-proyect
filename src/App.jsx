import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'

const arrayColors = [
  '#6CADB4', '#9F6AE9', '#E8B1A5', '#92B7D9', '#326C5F', '#788CD9', '#BA8DCF', '#127F78', '#2CBCFF', '#4374B9'
] 

function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const changeQuoteRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }

  const [quoteRandom, setQuoteRandom] = useState(changeQuoteRandom(quotes))
  const [colorRandom, setColorRandom] = useState(changeQuoteRandom(arrayColors))

  const clickButton = () => {
    setQuoteRandom(changeQuoteRandom(quotes))
    setColorRandom(changeQuoteRandom(arrayColors))
  }

  const apptStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={apptStyle} className="App">
      <QuoteBox
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default App
