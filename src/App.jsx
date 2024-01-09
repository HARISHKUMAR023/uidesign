import { useState } from 'react'

import './App.css'
import google from './assets/google.png';
import facebook from './assets/facebook.png';
import women from './assets/womenpad.png';
import design from './assets/bg.png'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' bg-sky-200 w-auto h-auto py-16 px-24'>
    <div className='flex flex-row rounded-md bg-green-600 my-5 w-auto h-auto '>
    <div className='basis-1/2 bg-white py-20 px-24  flex justify-center items-center'>

<div className='px-34 ' >
<h1 className='text-4xl font-bold'>Login ✌️ </h1>
<p className='font-bold pt-1'>How to do get let we good to se you</p>
<button className='w-72 mt-8 h-10 font-medium rounded-full border border-gray-400 my-3 flex justify-center items-center'>
  <img src={google} alt="Google Icon" className='w-6 h-6 mr-2' />
  Sign with Google
</button>
<button className='w-72 h-10 font-medium rounded-full border border-gray-400 my-3 flex justify-center items-center'>
  <img src={facebook} alt="Google Icon" className='w-6 h-6 mr-2' />
  Sign with Facebook
</button>

<p className='text-center p-4 text-gray-400 font-medium'>Sign with Email</p>
<label className='font-bold' htmlFor="">Email</label>
<br />
<input className='active:border-sky-500 rounded-full font-medium  w-72 h-10 m-3  text-center border border-gray-400  focus:outline-none focus-visible:border-purple-600' type="text" placeholder='Enter your Email'  />
<br />
<label  className='font-bold' htmlFor="">Password</label>
<br />
<input className=' rounded-full font-medium  w-72 h-10 text-center m-3 border border-gray-400 focus:outline-none focus-visible:border-purple-600 ' type="text" placeholder='Enter your Password' />
<br />
<a href="" className='text-right pl-36 text-sky-500'>Forgot my Password ?</a>
<br />
<a href="" className='bg-sky-500 text-center py-2 px-20 font-medium rounded-full border text-white my-6 block mx-auto'>Login</a>

</div>


</div>


<div className='basis-1/2 bg-sky-600 rounded backdrop-blur ' style={{ backgroundImage: `url(${design})`, backgroundSize: 'cover' }}>

  <div className='bg-sky-500 m-16 rounded-lg w-auto h-auto'>
  <p className='font-medium text-4xl text-white p-14 line-clamp-5 '>Very good works are  <br /> waithing for you ✌️  <br />  Login Now</p>
<img className=' w-4/5 h-4/5' src={women} alt="" />
  </div>


</div>
    </div>



   </div>
  )
}

export default App
