import React from 'react'
import './service.css'
import ServiceList from './ServiceList';
import { Slist } from '../utils';
const Service = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-[#984E4E] to-[#4646A4]">
      <div className='text-center text-5xl font-bold'> OUR SERVICES</div>
      <div className='heart'>
      <div className='heart_main'> <img src='https://iili.io/d6MidEF.png' /></div>
      <div className='heart_top'>
      <div><img src='https://i.imghippo.com/files/m3g8f1726593715.png'/> </div>
      <div><img src='https://i.imghippo.com/files/Sh8Rc1726593755.png'/></div>
      </div>
      <div className='heart_middle'>
     <div><img src='https://i.imghippo.com/files/dlMUJ1726593655.png'/> </div>
     <div><img src='https://i.imghippo.com/files/RWXr91726593790.png'/></div>
     </div>
      </div>
      <div> <h2 className='what'> What we have:- </h2></div>
      <div className='mmm'>
      { Slist.map((val) =>{
        return(
         <
         ServiceList
         key={val.id}
         imgsrc={val.imgsrc}
         heading={val.heading}
         des={val.des}
         Link={val.Link}
         />

        );
      })}
     </div>
     </div>
    </>
  );
};

export default Service;