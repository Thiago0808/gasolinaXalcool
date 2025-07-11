import './App.css'
import { useState } from 'react'

import logoImg from './assets/logo.png'

function App() {
  const [alcoolInput, setAlcoolInput] = useState('')
  const [gasolinaInput, setGasolinaInput] = useState('')
  const [resultado, setResultado] = useState('')

  function calcular(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const alcool = parseFloat(alcoolInput.replace(',', '.'))
    const gasolina = parseFloat(gasolinaInput.replace(',', '.'))

    if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <= 0) {
      setResultado('Digite valores válidos!')
      return
    }

    const proporcao = alcool / gasolina

    if (proporcao <= 0.7) {
      setResultado('Melhor opção: Álcool ⛽')
    } else {
      setResultado('Melhor opção: Gasolina ⛽')
    }
  }

  return (
    <div>
      <main className='container'>
        <img className='logo' src={logoImg} alt="Logo Gasolina" />
        <h1 className='title'>Qual melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Álcool (preço por litro)</label>
          <input
            className='input'
            type="text"
            placeholder='Ex: 4.90'
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(e.target.value)}
            required
          />

          <label>Gasolina (preço por litro)</label>
          <input
            className='input'
            type="text"
            placeholder='Ex: 5.90'
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(e.target.value)}
            required
          />

          <input className='button' type="submit" value="Calcular" />
        </form>

        {resultado && <h2 className="result">{resultado}</h2>}
      </main>
    </div>
  )
}

export default App
