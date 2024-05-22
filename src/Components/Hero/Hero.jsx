import React, { Children, useEffect, useRef, useState } from 'react';

const imgArr = ["https://images.unsplash.com/photo-1592840054664-6bc0f6fbc3d6?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1592914637125-28479601c75a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1612731486606-2614b4d74921?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"        
]

function Ima({id}){
   
    return(
        <>
        <img className='w-full ' src={imgArr[0]} alt="" />
        <img className='w-full ' src={imgArr[1]} alt="" />
        <img className='w-full ' src={imgArr[2]} alt="" />
        <img className='w-full ' src={imgArr[3]} alt="" />
        </>

    );
}
function Hero(props) {
    let timeOut = useRef();
    let slide =useRef();
    const [id, setId] = useState(0);


        useEffect(()=>{
           timeOut = setTimeout(() => {
                setId((id+1)%imgArr.length);
                // console.log(id);
                // if (slide.current && slide.current.children[id]) {
                //     // slide.current.children[id].classList.replace('bg-red-500', 'bg-gray-600');
                //     slide.current.children[id].classList.replace('bg-red-500' , 'bg-gray-600' );
                //     slide.current.children[(id+1)%imgArr.length].classList.replace('bg-gray-600', 'bg-red-500' );
                    
                //     console.log(slide.current.children[0].classList);
                //   }
            }, 5000);
        },[id])
    return (
        <div className='flex flex-col justify-center items-center text-center w-full h-[80vh] bg-slate-200'>
            <div className="h-[80%]  border overflow-hidden border-black w-full bg-slate-500">
                <div className=" bg-cyan-800 flex" style={{ transitionDuration:'1s' , transform: `translateX(-${id * 100}%)` }}>
                    <Ima/>
                </div>
                
            </div>
          <div id='ab' ref={slide} className="p-4 flex gap-1">
    <div onClick={() => { clearTimeout(timeOut); setId(0); }} className="bg-gray-600 rounded-full w-2 h-2" style={{ backgroundColor: id === 0 ? 'red' : 'gray' }}></div>
    <div onClick={() => { clearTimeout(timeOut); setId(1) }} className="bg-gray-600 rounded-full w-2 h-2" style={{ backgroundColor: id === 1 ? 'red' : 'gray' }}></div>
    <div onClick={() => { clearTimeout(timeOut); setId(2) }} className="bg-gray-600 rounded-full w-2 h-2" style={{ backgroundColor: id === 2 ? 'red' : 'gray' }}></div>
    <div onClick={() => { clearTimeout(timeOut); setId(3) }} className="bg-gray-600 rounded-full w-2 h-2" style={{ backgroundColor: id === 3 ? 'red' : 'gray' }}></div>
</div>

        </div>
    );
}

export default Hero;
