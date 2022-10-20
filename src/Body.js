import React, { useState } from 'react';
import Cooling from './Cooling';

function Body (props) {

    const [flag, setFlag] = useState(false);

    const mainpage = <div className='bg-red-500 w-[100%] h-[calc(100vh-4rem)]'><h1>testing</h1></div>;

    const firstpage = <>
                        {/* <div className='relative top-[4vw] w-[90%] h-[calc(1000vh-8vw-4rem)] mx-[5%] bg-slate-200'> */}
                        <div className='relative top-[4vw] w-[90%] h-[calc(1000vh-403vw)] mx-[5%] bg-slate-200'>
                            <div className='w-[100%] h-100%'>
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute left-10 top-10'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            The Internet started in the 1960s as a way for government researchers to share information. Computers in the '60s were large and immobile and in order to make use of information stored in any one computer, one had to either travel to the site of the computer or have magnetic computer tapes sent through the conventional postal system.
                                        </span>
                                        <img className="absolute bottom-5 w-[90%]" src="https://www.usg.edu/galileo/skills/unit07/images/07_02_univac.jpg"></img>
                                    </div>
                                </div>
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute right-10 top-10'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            Another catalyst in the formation of the Internet was the heating up of the Cold War. The Soviet Union's launch of the Sputnik satellite spurred the U.S. Defense Department to consider ways information could still be disseminated even after a nuclear attack. This eventually led to the formation of the ARPANET (Advanced Research Projects Agency Network), the network that ultimately evolved into what we now know as the Internet. ARPANET was a great success but membership was limited to certain academic and research organizations who had contracts with the Defense Department. In response to this, other networks were created to provide information sharing.
                                        </span>
                                    </div>
                                </div>
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute left-10 top-[calc(75vh+2.5rem)]'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            January 1, 1983 is considered the official birthday of the Internet. Prior to this, the various computer networks did not have a standard way to communicate with each other. A new communications protocol was established called Transfer Control Protocol/Internetwork Protocol (TCP/IP). This allowed different kinds of computers on different networks to "talk" to each other. ARPANET and the Defense Data Network officially changed to the TCP/IP standard on January 1, 1983, hence the birth of the Internet. All networks could now be connected by a universal language.
                                        </span>
                                    </div>
                                </div>
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute right-10 top-[calc(75vh+2.5rem)]'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            The image above is a scale model of the UNIVAC I (the name stood for Universal Automatic Computer) which was delivered to the Census Bureau in 1951. It weighed some 16,000 pounds, used 5,000 vacuum tubes, and could perform about 1,000 calculations per second. It was the first American commercial computer, as well as the first computer designed for business use. (Business computers like the UNIVAC processed data more slowly than the IAS-type machines, but were designed for fast input and output.) The first few sales were to government agencies, the A.C. Nielsen Company, and the Prudential Insurance Company.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </>;

    const secondpage = <>
                        {/* <div className='relative top-[4vw] w-[90%] h-[calc(1000vh-8vw-4rem)] mx-[5%] bg-slate-200'> */}
                        <div className='relative top-[4vw] w-[90%] h-[calc(1000vh-403vw)] mx-[5%] bg-slate-200'>
                            <div className='w-[100%] h-100%'> 
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute left-10 top-10'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            As you might expect for a technology so expansive and ever-changing, it is impossible to credit the invention of the internet to a single person. The internet was the work of dozens of pioneering scientists, programmers and engineers who each developed new features and technologies that eventually merged to become the “information superhighway” we know today.
                                        </span>
                                        {flag ? <><Cooling /></> : <></>}
                                        <img onClick={() => setFlag(true)} className="absolute bottom-5 h-[30%] w-[23%]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/220px-Tesla_circa_1890.jpeg"></img>
                                        <img className='absolute bottom-5 right-5 h-[30%] w-[65%]' src="https://th-thumbnailer.cdn-si-edu.com/GWIEXdxCyNyqENyVQISuJjXbaoo=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d9/c5/d9c55db6-8b22-4e72-9c69-056f77263100/file-20180102-26163-8mp710.jpg"></img>
                                    </div>
                                </div>
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute right-10 top-10'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            Long before the technology existed to actually build the internet, many scientists had already anticipated the existence of worldwide networks of information. Nikola Tesla toyed with the idea of a “world wireless system” in the early 1900s, and visionary thinkers like Paul Otlet and Vannevar Bush conceived of mechanized, searchable storage systems of books and media in the 1930s and 1940s. 
                                        </span>
                                    </div>
                                </div>
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute left-10 top-[calc(75vh+2.5rem)]'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            Still, the first practical schematics for the internet would not arrive until the early 1960s, when MIT’s J.C.R. Licklider popularized the idea of an “Intergalactic Network” of computers. Shortly thereafter, computer scientists developed the concept of “packet switching,” a method for effectively transmitting electronic data that would later become one of the major building blocks of the internet.
                                        </span>
                                    </div>
                                </div>
                                <div className='w-[70vh] h-[70vh] bg-slate-900 absolute right-10 top-[calc(75vh+2.5rem)]'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            The first workable prototype of the Internet came in the late 1960s with the creation of ARPANET, or the Advanced Research Projects Agency Network. Originally funded by the U.S. Department of Defense, ARPANET used packet switching to allow multiple computers to communicate on a single network. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </>;

    const thirdpage = <>
                        {/* <div className='relative top-[4vw] w-[90%] h-[calc(1000vh-8vw-4rem)] mx-[5%] bg-slate-200'> */}
                        <div className='relative top-[4vw] w-[90%] h-[65vh] mx-[5%] bg-slate-200'>
                            <div className='w-[100%] h-100%'> 
                                <div className='w-[147vh] h-[50vh] bg-slate-900 absolute left-10 top-10'>
                                    <div className='m-5 text-slate-300 text-xl'>
                                        <span>
                                            

Lorem ipsum dolor sit amet. Et repellendus commodi est rerum fugiat qui rerum consequatur ea doloribus sint quo molestiae aspernatur qui atque fugit est veniam vitae. Et voluptates repellat qui reiciendis harum ea ipsa voluptates est sint autem non aliquam consectetur aut omnis veritatis sit iusto reprehenderit. Eum debitis minus nam nemo debitis ex dicta porro et tempore placeat sed omnis aspernatur! Ad itaque fugiat eum enim aspernatur aut minima neque non voluptatem minima?

Qui dolorum repudiandae qui excepturi nostrum id nobis temporibus ea omnis voluptatem et maiores ipsam qui nulla quae. Et consequatur numquam ut reprehenderit suscipit ut voluptatem odio sit assumenda expedita sed harum odio et sint natus!

Vel veniam autem et ipsam voluptates 33 doloribus perferendis sed harum quidem. 33 sint amet ab quia dicta est illum libero. Vel beatae architecto eum eius tempore aut omnis iure. Sed amet vel eveniet facere ut optio culpa eum asperiores praesentium.

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>;

const fourthpage = <>
{/* <div className='relative top-[4vw] w-[90%] h-[calc(1000vh-8vw-4rem)] mx-[5%] bg-slate-200'> */}
<div className='relative top-[4vw] w-[90%] h-[65vh] mx-[5%] bg-slate-200'>
    <div className='w-[100%] h-100%'> 
        <div className='w-[147vh] h-[50vh] bg-slate-900 absolute left-10 top-10'>
            <div className='m-5 text-slate-300 text-5xl text-center mt-32'>
                <span>
                    E-mail: internetshistorik@adalsskolan.se
                </span>
            </div>
        </div>
    </div>
</div>
</>;


    const pages = [firstpage, secondpage, mainpage, thirdpage, fourthpage];

    const [content, changeContent] = useState(pages[props.page]);

    return (
        <div className='overflow-hidden'>
            <div className='w-[86%] h-[calc(100vh-9rem)] mt-[5rem] mx-[7%] overflow-y-scroll'>
                <div className='h-[calc(185vh-4rem)] bg-slate-800'>
                    {content}
                    {/* {onMouseEnter={() => changeContent(2)}} */}
                </div>
            </div>
        </div>
    );
};

export {Body};