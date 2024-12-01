import React from 'react';
import { Link, useParams } from "react-router-dom";
import Error from "../Error";
import dataPhoto from './dataPhoto';
import './photoinfo.css';

const Photo = () => {
    const { PhId } = useParams();
    const data = dataPhoto.find((data) => data.Id === PhId);
    if (data === undefined) {
      return <Error />;
    }

  return (
    <>
       <div className='xxx'>
        <div className="hea">
          <h1>{data?.name}</h1>
          <div className="pri">
            <h2 className='hh'>TYPE {data?.type}</h2>
            <h2 className="pri1">{data?.price}</h2>
          </div>
        </div>
        <div className="de1">
          <div className="cont">
            <div className="ma">
              <img className="trad" src={data?.img1} alt="Traditional Photography 1" />
              <img className="trad" src={data?.img2} alt="Traditional Photography 2" />
              <img className="trad" src={data?.img3} alt="Traditional Photography 3" />
              <img className="trad" src={data?.img4} alt="Traditional Photography 4" />
              <img className="trad" src={data?.img5} alt="Traditional Photography 5" />
            </div>
          </div>
          <div className="det">
            <h1 className='h'>PACKAGE DETAILS</h1>
            <div className="ro">
              <div className="co">
                <h2 className='hh1'>TERMS DETAILS</h2>
                <div className="fir">
                  <h4 className='hhhh'>Rituals</h4>
                  <p className='ppp'>1 Photograpghy & 1 Video Camera Operator</p>
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z 30 or Z 50</p>
                </div>
                <div className="fir">
                  <h4 className='hhhh'>Wedding</h4>
                  <p className='ppp'>1 Photograpghy & 1 Video Camera Operator</p>
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z 30 or Z 50</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="co">
          <p className="ex">Extra Rituals will be charged separatery Rs. 3000/- Per day And Drone,LED wall,LED TV and its accessories will be charged separately.</p>
        </div>
        <div className="de2" >
          <div className="cont">
            <div className="ma">
              <img className="trad" src={data?.img6} alt="Traditional Photography 7" />
              <img className="trad" src={data?.img7} alt="Traditional Photography 6" />
              <img className="trad" src={data?.img8} alt="Traditional Photography 8" />
              <img className="trad" src={data?.img9} alt="Traditional Photography 9" />
              <img className="trad" src={data?.img10} alt="Traditional Photography 10" />
            </div>
          </div>
          <div className="we">
            <h2 className='hh2'>PACKAGE & PRODUCT</h2>
            <h3 className='hhh'>Will be provided in this package</h3>
            <ul className='ult'>
              <li>
                An album of 25 sheets of best design and quality will be given.
                You will have to pay 300 extra per sheet.
              </li>
              <li>Full video editing will be provided in 32 GB pen drive.</li>
              <li>
                If the customer is satisfied, a big-size family photo along with a
                couple photo will be given as a gift.
              </li>
            </ul>
          </div>
        </div>
        <div className="album">
          <div>
            <a href="https://drive.google.com/file/d/168jwlp8FnGr032d812oFqegTy4k_RLiM/view?usp=drive_link">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyg4d2Mr8uQsjFLkpA2qS9hGWHA2pHXjK0AQ&s"
                alt="Our Album"
              />
            </a>
          </div>
          <p className='alp'>OUR ALBUM</p>
          <div className="butt">
            <a href="https://drive.google.com/file/d/168jwlp8FnGr032d812oFqegTy4k_RLiM/view?usp=drive_link">
              <button className='buttt'>View Album</button>
            </a>
          </div>
        </div>
        <div className="ter">
          <h1>TERMS & CONDITIONS</h1>
          <ol>
            <li>
              PAYMENT TERM: Booking amount 30%, total 70% payment will have to be
              done till the program ends. Remaining 30% will have to be paid at
              the time of delivery.
            </li>
            <li>
              Traveling and lodging facilities will be borne by the client.
            </li>
            <li>
              All the soft copies (RAW photos and RAW video) will be provided in a
              pen drive. Either HDD, the market value of the storage device will
              be borne by the client.
            </li>
            <li>
              All Quoted prices are valid for a 60-day period from the date of the
              quotation unless agreed to in writing stating otherwise.
            </li>
            <li>
              The studio will not be responsible for any technical glitch or data
              loss during videography, photography, or data copying.
            </li>
          </ol>
        </div>
        <div className="note">
          <h1 className='h5'>NOTE:- Special discount for members of the bride's side.</h1>
        </div>

        <div className='buttt2'>
        <Link to="/Contact">
          <button className="butt2"> contact us </button>
        </Link>
        </div>
        <div className='tea'><p>FOR TEASURE AND HIGHLIGHTS:- ₹1600</p></div>

      </div> 
    
</>

  );
};
export default Photo;