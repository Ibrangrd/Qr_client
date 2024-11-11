import React from "react";
import { HoData } from "./data/HoData";
import { HoData } from "./data/HoData";
import CusScan2 from "./CusScan2";
const cus = ()=>{

 return (
<>
{ HoData.map((value)=>{
 return(
< CusScan2
key={value.id}
bgImage2={value.bgImage2}
couple12={value.couple12}
couple22={value.couple22}
address2={value.address2}
position2={value.position2}
videoStyle2={value.videoStyle2}
video2={value.video2}
/>
);
})}
</>

 );

}