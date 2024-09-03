import React from 'react'
import './service.css'
import ServiceList from './ServiceList';
import { Slist } from '../utils';
const Service = () => {
  return (
    <>
      <div className='text-center text-5xl font-bold'> OUR SERVICES</div>
      <div className='xx'><h3>Our service is the best in both price and quality. We offer complete solutions for your wedding,
        ensuring every detail is taken care of, from the venue to the final touches.</h3></div>
      <div className='p1'><p>Professional Photography: Capture every moment with our expert photography services, providing high-quality images.</p></div>
      <div className='p2'><p>Hotel Accommodations: We ensure your guests enjoy luxurious, comfortable hotels, all within your budget.</p></div>
      <div className='p3'><p>Elegant Cars: We offer stylish cars to make your arrival and departure memorable.</p></div>
      <div className='p2'><p>Google Maps Integration: Share your venue with a custom Google address for easy guest navigation.</p></div>
      <div className='p1'><p>Decor & Invitations: From stunning decorations to beautifully designed cards and cinematic invitation videos, we've got it covered.</p></div>
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
    </>
  );
};

export default Service;