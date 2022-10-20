import Cooling from "./Cooling"
import Counter from "./Counter"
import Dropdown from "./Dropdown"
import Header from "./Header"
import { Body } from "./Body"
import React, { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);

  const [flag, setFlag] = useState(true);

  return (
    <div className='h-screen bg-purple-900'>
      <Header onChange={setCount} />
      { flag == true ?  <>{ count > 2 ? <>
      { count > 3 ? 
      <><div><Body page={count} /></div><button onClick={() => setFlag(false)} className='bg-slate-300 absolute left-0 top-16 w-8 h-8'>{'<'}</button></> : 
      <><a><Body page={count} /></a><button onClick={() => setFlag(false)} className='bg-slate-300 absolute left-0 top-16 w-8 h-8'>{'<'}</button></>}</> : 
      <>{ count > 0 ? 
      <><p><Body page={count} /></p><button onClick={() => setFlag(false)} className='bg-slate-300 absolute left-0 top-16 w-8 h-8'>{'<'}</button></> : 
      <><Body page={count} /><button onClick={() => setFlag(false)} className='bg-slate-300 absolute left-0 top-16 w-8 h-8'>{'<'}</button></>}</>} </> : 
      <>{ <><button onClick={() => setFlag(true)} className='bg-slate-300 absolute left-0 w-8 h-8'>{'>'}</button><p className="text-center mt-20 text-5xl text-slate-300">VÄLKOMMEN</p></>}
      </>}



                         {/* { count > 2 ? <><Body page={count} /></> : <><div><Body page={count} /></div></>}
                         <button onClick={() => setFlag(false)} className='bg-slate-300 absolute left-0 top-16 w-8 h-8'>{'<'}</button>
                        </> : <>
                         { <><button onClick={() => setFlag(true)} className='bg-slate-300 absolute left-0 w-8 h-8'>{'>'}</button>
                            <p className="text-center mt-20 text-5xl text-slate-300">VÄLKOMMEN</p></>}
                        </> } */}
    </div>
  )
}

export { App };