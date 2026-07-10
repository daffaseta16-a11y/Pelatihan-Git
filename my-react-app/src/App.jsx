import Wellcome from './components/Wellcome'
import Counter from './components/Counter'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 let peserta = [
  {nama:"Jaemin", kota:"Busan", umur:25},
  {nama:"Jeno", kota:"Doengju", umur:26},
  {nama:"Jaehyun", kota:"Seoul", umur:29},
  {nama:"Irtiyah", kota:"Makassar", umur:19},
  {nama:"Yulita", kota:"Malinau", umur:20},
  {nama:"Pia", kota:"Samarinda", umur:16}
 ]
  return (
    <>
    <div className='container'>
      {peserta.map((item, index) => {
        return (
      <Wellcome key={index} name={item.nama} city={item.kota} age={item.umur}></Wellcome>
        )
      })
      }
    </div>
    <button
    type="button"
    className="counter"
    onClick={() => setCount((count) => count + 1)}
    >
    Count is {count}
    </button>
    <Counter></Counter>
    </>
  )
}

export default App
