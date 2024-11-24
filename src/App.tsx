import './App.css'
import { useState, FormEvent } from 'react'



import logoImg from './assets/logo.png'

// Cálculo: Álcool / Gasolina
// Se o resultado for menor que 0.7, compensa usar álcool

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [alcoolInput, setAlcoolInput] = useState(1)

  function calcular(event:FormEvent){
    event.preventDefault();

    let calculo = (alcoolInput/gasolinaInput)

    if(calculo <= 0.7){
      alert("Compensa usar Alcool")
    }else{
      alert("Compensa usar gasolina")
    }
    
  }


  return (
      <div>
        <main className='container'>
          <img className='logo' src={logoImg} alt="Logo Gasolina" />
          <h1 className='title'>Qual melhor opção?</h1>

          <form className="form" onSubmit={calcular}>
            <label htmlFor="">Álcool (preço por litro)</label>
            <input className='input' type="number" placeholder='4,90' min={1} step={0.01} required value={alcoolInput} onChange={ (e) => setAlcoolInput(Number(e.target.value))}/>

            <label htmlFor="">Gasolina (preço por litro)</label>
            <input className='input' type="number" placeholder='4,90' min={1} step={0.01} required value={gasolinaInput} onChange={ (e) => setGasolinaInput(Number(e.target.value))}/>

            <input className='button' type="submit" value="Calcular"/>
          </form>
        </main>
      </div>
  )
}

export default App
