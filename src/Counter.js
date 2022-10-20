import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
    <div>
        <h1 className="m-auto relative top-40 pt-2 text-xl text-center font-bold w-64 bg-purple-600 rounded-xl">
            { count != 1 ?
                    <>
                        du har:&nbsp;{count}&nbsp;baguetter.
                    </> : 
                    <>
                        du har:&nbsp;{count}&nbsp;baguette.
                    </>
            }
            <p></p>
            <button onClick={() => setCount(count - 1)} className="w-32 bg-purple-500 rounded-bl-xl mt-1">-</button>
            <button onClick={() => setCount(count + 1)} className="w-32 bg-purple-500 rounded-br-xl mt-1">+</button>
        </h1>
    </div>
    );
};

export default Counter;