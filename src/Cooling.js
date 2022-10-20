import React, { useState } from 'react';

const Cooling = () => {
    const [count, setCount] = useState(0);

    const [emoji, setEmoji] = useState("😊");

    const [state, setState] = useState("");

    const boop = () => {
        if (emoji != "😊") {
            setEmoji("😊");
            setState("");
        } else {
            setEmoji("😩");
            setState("scale-x-[-1]");
        }
        setCount(count+1);
    }

    return (
    <div>
        <h1 className="text-2xl font-bold underline">
            {/* { count != 1 ?
                    <>
                        du har tryckt&nbsp;{count}&nbsp;gånger.
                    </> : 
                    <>
                        du har tryckt&nbsp;{count}&nbsp;gång.
                    </>
            } */}
          <div className={`ml-20 static`}>
            <div className='absolute top-16 left-2 text-5xl'>
              <button onClick={() => setCount(count + 1)}>&nbsp; 🚽</button>
            </div>
            <div className='absolute top-10 left-0 text-4xl'>
              <p></p>
              <button onMouseLeave={() => boop()} onMouseOver={() => boop()}>'✋{emoji}🤚'</button>
              <p></p>
              <button onClick={() => boop()}>&nbsp;&nbsp; 🦵</button>
              <button className={state} onClick={() => boop()}>🦵&nbsp;</button>
            </div>
          </div>
        </h1>
    </div>
    );
};

export default Cooling;