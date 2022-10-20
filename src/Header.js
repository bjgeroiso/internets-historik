import React, { useState } from 'react';
import App from "./App";

const Header = ({ onChange }) => {

    const handleChange = (n) => {
        onChange(n);
    }

    const [state, setState] = useState(0);

    return (
        <div className='w-full h-16 bg-slate-500 flex justify-evenly'>
            <div className='bg-slate-300 w-[40%] text-xl flex text-center items-center'>
                <div className='w-[50%] cursor-pointer'>
                    <span onMouseLeave={() => setState(0)} onMouseEnter={() => setState(1)}>HEM</span>
                </div>
                {state == 2 ? <>
                                <div onMouseLeave={() => setState(0)} className='mx-auto h-[20rem] w-[31.25%] bg-slate-300 z-10'>
                                    <div className='h-[20rem] bg-slate-300'>
                                        <div className='mt-[9.15rem] cursor-pointer'>
                                            <span>INFO</span>
                                        </div>
                                        <div className='mt-4 cursor-pointer'>
                                            <span onClick={() => handleChange(0)}>Origins</span>
                                        </div>
                                        <div className='mt-4 cursor-pointer'>
                                            <span onClick={() => handleChange(1)}>Foundation</span>
                                        </div>
                                    </div>
                                </div>
                              </> : <>
                                <div className='w-[50%]'>
                                    <span onMouseLeave={() => setState(0)} onMouseEnter={() => setState(2)}>INFO</span>
                                </div>
                              </>
                }
            </div>
            <div className='bg-slate-300 w-[33%]'></div>
            <div className='bg-slate-300 w-[25%] flex justify-evenly text-xl text-center items-center'>
                <div className='w-[50%] cursor-pointer'>
                    <span onClick={() => handleChange(3)}>OM OSS</span>
                </div>
                <div className='w-[50%] cursor-pointer'>
                    <span onClick={() => handleChange(4)}>KONTAKTA OSS</span>
                </div>
            </div>
            <div className='bg-slate-300 w-[2%]'></div>
        </div>
    );
};

export default Header;