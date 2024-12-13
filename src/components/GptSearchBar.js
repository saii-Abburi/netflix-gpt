import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const configLanguage = useSelector(store => store.config.lang)
  return (
    <div className='gptSearchBar'>
        <form>
            <input type='text' className='gptsearchinput' placeholder= {lang[configLanguage].gptSearchPlaceholder}></input>
            <button className='gptsearchbtn'>{lang[configLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar