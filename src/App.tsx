import './App.css'
import { useState } from 'react'

import logoImg from './assets/logo.png'

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [alcoolInput, setAlcoolInput] = useState(2)

  function calcular(){
    
  }


  return (
      <div>
        <main className='container'>
          <img className='logo' src={logoImg} alt="Logo Gasolina" />
          <h1 className='title'>Qual melhor opção?</h1>

          <form className="form">
            <label htmlFor="">Álcool (preço por litro)</label>
            <input className='input' type="number" placeholder='4,90' min={1} step={0.01} required/>

            <label htmlFor="">Gasolina (preço por litro)</label>
            <input className='input' type="number" placeholder='4,90' min={1} step={0.01} required/>

            <input className='button' type="submit" value="Calcular"/>
          </form>
        </main>
      </div>
  )
}

export default App
