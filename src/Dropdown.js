import React, { useState } from 'react';

const Dropdown = () => {

    const [state, setState] = useState(0);

    return (
        <div>
            <div>
                <button onMouseEnter={() => setState(1)} className='absolute bg-slate-500 top-0 left-0'>{'>'}</button>
                <p></p>
                {   state == 1 ? <>
                        <div onMouseLeave={() => setState(0)} className='absolute w-32 h-64 bg-slate-400 top-0 left-0'>
                            <button className='absolute bg-slate-500 top-0 left-32'>{'<'}</button>
                            <h1>eroig</h1>
                        </div> 
                    </> : <></>
                }
            </div>
        </div>
    );
};

export default Dropdown;