import React from 'react';
import { Link } from 'react-router-dom';
import { photograghyDetails } from '../data/Photoinfo123';
import './photoinfo.css';

const Photoinfo12 = ({ packageType, type, price, imageURL, packageDetails, extra, packageAndProducts }) => {
  return (
    <>
      <div className='xxx'>
        <div className="hea">
          <h1>{type}</h1>
          <div className="pri">
            <h2 className='hh'>TYPE {photograghyDetails.packageType}</h2>
            <h2 className="pri1">{photograghyDetails.price}</h2>
          </div>
        </div>
        <div className="de1">
          <div className="cont">
            <div className="ma"> 
              <img className="trad" src={photograghyDetails.imageURL.img1} alt=" Photography 1" />
              <img className="trad" src={photograghyDetails.imageURL.img2} alt=" Photography 2" />
              <img className="trad" src={photograghyDetails.imageURL.img3} alt=" Photography 3" />
              <img className="trad" src={photograghyDetails.imageURL.img4} alt=" Photography 4" />
              <img className="trad" src={photograghyDetails.imageURL.img5} alt=" Photography 5" />
            </div>
          </div>
          <div className="det">
            <h1 className='h'>PACKAGE DETAILS</h1>
            <div className="ro">
              <div className="co">
                <h2 className='hh1'>TERMS DETAILS</h2>
                <div className="fir">
                  <h4 className='hhhh'>{photograghyDetails.packageDetails.eventName1}</h4>
                  <p className='ppp'>{photograghyDetails.packageDetails.des1}</p>
                  <p className='ppp'>{photograghyDetails.packageDetails.camera1}</p>
                </div>
                <div className="fir">
                  <h4 className='hhhh'>{photograghyDetails.packageDetails.eventName2}</h4>
                  <p className='ppp'>{photograghyDetails.packageDetails.des2}</p>
                  <p className='ppp'>{photograghyDetails.packageDetails.camera2}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="co">
          <p className="ex">{photograghyDetails.extra}</p>
        </div>
        <div className="de2" >
          <div className="cont">
            <div className="ma">
              <img className="trad" src={photograghyDetails.imageURL.img6} alt=" Photography 6" />
              <img className="trad" src={photograghyDetails.imageURL.img7} alt=" Photography 7" />
              <img className="trad" src={photograghyDetails.imageURL.img8} alt=" Photography 8" />
              <img className="trad" src={photograghyDetails.imageURL.img9} alt=" Photography 9" />
              <img className="trad" src={photograghyDetails.imageURL.img10} alt=" Photography 10" />
            </div>
          </div>
          <div className="we">
            <h2 className='hh2'>PACKAGE & PRODUCT</h2>
            <h3 className='hhh'>Will be provided in this package</h3>
            <ul className='ult'>
              <li>
               {photograghyDetails.packageAndProducts.l1}
              </li>
              <li>{photograghyDetails.packageAndProducts.l2}</li>
              <li>
              {photograghyDetails.packageAndProducts.l3}
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
export default Photoinfo12;