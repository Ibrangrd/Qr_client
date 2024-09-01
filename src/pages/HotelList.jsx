import React from "react";
import { Link } from 'react-router-dom';

const HotelList = ({img1, img2, img3, img4, img5, img6, Hname, Hdes, Rno, Sno, rate,Are,In,Out }) => {
  return (
    <>
    <div className="sh">
    <div className="c4">
    <div className="ma4">
      <img className="trad5" src={img1} alt="TPhoto 1" />
      <img className="trad5" src={img2}  alt="Phot 2" />
      <img className="trad5" src={img3}  alt="Phot 3" />
      <img className="trad5" src={img4}  alt=" Photo 4" />
      <img className="trad5" src={img5}  alt="Photo 5" />
      <img className="trad5" src={img6}  alt=" Photo 5" />
    </div>
  </div>
        <div ><p className="dd">{Hname}</p>
        <p className="d8">{Hdes}</p>
        </div>
    </div>

    <div className="info100">
    <div className="info10">
   <div className="info5"> 
   <div> <img className="ib2" src="https://www.pngitem.com/pimgs/m/543-5431496_hotel-room-icon-clipart-png-download-hotel-room.png" /> </div>
  <div className="ib3"> <p className="ac">{Rno} rooms with AC </p> </div>
   </div>
   <div className="info6"> 
   <div> <img className="ib2" src="https://cdn.icon-icons.com/icons2/865/PNG/512/Citycons_plate_icon-icons.com_67926.png" /> </div>
  <div className="ib3"> <p className="ac"> Plating system available </p> </div>
   </div>
   <div className="info7">
   <div> <img className="ib2" src="https://cdn-icons-png.flaticon.com/512/7959/7959330.png" /> </div>
  <div className="ib3"> <p className="ac"> Couple friendly </p> </div>
   </div>
   <div className="info8"> 
   <div> <img className="ib2" src="https://t4.ftcdn.net/jpg/01/92/38/33/360_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" /> </div>
  <div className="ib3"> <p className="ac"> Parking   </p> </div>
   </div>
   <div className="info9">
   <div> <img className="ib2" src="https://cdn-icons-png.flaticon.com/512/184/184133.png" /> </div>
  <div className="ib3"> <p className="ac"> {Sno} Seating </p> </div>
   </div>
   </div>

   <div className="info10b">
   <div className="info5b"> 
   <div> <img className="ib2b" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IRO249mwCeE8kc6rOMNzuW5t5k9Dh13enA&s" /> </div>
  <div className="ib3b"> <p className="ac">{Are} Area </p> </div>
   </div>
   <div className="info6b"> 
   <div> <img className="ib2b" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikevgEKSx0pa1BZPnSqW83G4ItzSdWteiSw&s" /> </div>
  <div className="ib3b"> <p className="ac"> {In}Inside </p> </div>
   </div>
   <div className="info7b">
   <div> <img className="ib2b" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8ZVQ3ee-NS_Y2W7mEH-Nr8LagBw5qt4lsw&s" /> </div>
  <div className="ib3b"> <p className="ac">{Out}outside </p> </div>
   </div>
   <div className="info8b"> 
   <div> <img className="ib2b" src="https://cdn.icon-icons.com/icons2/865/PNG/512/Citycons_plate_icon-icons.com_67926.png" /> </div>
  <div className="ib3b"> <p className="ac"> Plating system available </p> </div>
   </div>
   <div className="info9b">
   <div> <img className="ib2b" src="https://cdn-icons-png.flaticon.com/512/184/184133.png" /> </div>
  <div className="ib3b"> <p className="ac"> {Sno} Seating </p> </div>
   </div>
   </div>
     
<div className="info11x">
<p className="p9">Pricing ₹{rate} lakhs per night</p>
<p className="b9"> For booking or any quries contact us </p>
<Link to="/Contact">
  <button className="but9"> contact us </button>
</Link>
</div>
   </div>
</>
  );
};
export default HotelList;