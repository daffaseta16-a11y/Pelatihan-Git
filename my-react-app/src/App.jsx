import Wellcome from './components/Wellcome'
import './App.css'

function App() {
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
    </>
  )
}

export default App
