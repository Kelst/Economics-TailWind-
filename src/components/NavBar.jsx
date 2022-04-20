import React ,{useState}from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

export default function NavBar() {
  const [nav,setNav]=useState(true)

  const handleNav=()=>{
    nav===false?setNav(true):setNav(false)
  }
  return (
    <div className='flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]  ml-4 mt-3'> React</h1>
        <ul className={"hidden md:flex"}>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resurces</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
     
          {
           
            !nav ? <AiOutlineClose  size={20}/>:<AiOutlineMenu size={20}/>
          }
         
        </div>
        <div className={!nav?"fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500":"fixed left-[-100%]"}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]  m-4 mt-6'> React</h1>
        <ul className='pt-24 uppercase p-4' >
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Resurces</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
        </div>
    </div>
  );
}
