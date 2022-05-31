import React from 'react'

const QuoteBox = ({quoteRandom, colorRandom, clickButton}) => {

  const buttonStyle = {
    backgroundColor: colorRandom
  }

  return (
    <article className='bgQuote' style={{color: colorRandom}}>
      <h2>{quoteRandom.quote}</h2>
      <p className=''>{quoteRandom.author}</p>
      <button 
      style={buttonStyle} 
      className='buttonStyles' 
      onClick={clickButton}>
        &#62;
      </button>
    </article>
  )
}

export default QuoteBox