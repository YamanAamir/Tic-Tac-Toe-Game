import './App.css'
import Tictactoe from './components/Tictactoe'

function App() {

  return (
    <div className='bg-gradient-to-r from-blue-500 to-black  h-screen'>
        <div className=' flex flex-col itemscenter justify-around'>
        <Tictactoe />
        <h1 className='text-white text-center pt-5 font-mono'>All rights reserved by | <span className='font-sans font-semibold'>YAMAN AAMIR</span></h1>
      </div>
    </div>
  )
}

export default App
