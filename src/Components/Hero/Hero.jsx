import React, { useEffect, useState } from 'react';
function image({id}){
    const imgArr = ["https://images.unsplash.com/photo-1592840054664-6bc0f6fbc3d6?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1592914637125-28479601c75a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1612731486606-2614b4d74921?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"        
    ]
    return(
        <img src={imgArr[id]} alt="" />
    );
}
function Hero(props) {
    const [id, set]
    useEffect(()=>{

    })
    return (
        <div className='flex justify-center items-center text-center w-full h-screen bg-slate-200'>
            <div className="h-[80%] w-full bg-slate-500">
                <div className=" overflow-hidden flex"></div>
            </div>
        </div>
    );
}

export default Hero;