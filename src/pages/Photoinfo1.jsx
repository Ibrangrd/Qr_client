import React from 'react';
import { Link } from 'react-router-dom';
import './photoinfo.css';

const Photoinfo1 = () => {
  return (
    <>
      <div className='xxx'>
        <div className="hea">
          <h1>TRADITIONAL</h1>
          <div className="pri">
            <h2 className='hh'>TYPE A</h2>
            <h2 className="pri1">₹21000</h2>
          </div>
        </div>
        <div className="de">
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://fashionatestudio.com/wp-content/uploads/2024/05/DSC_3101-scaled.jpg" alt="Traditional Photography 1" />
              <img className="trad" src="https://i.ibb.co/K71T0jR/Screenshot-2024-08-21-210136.png" alt="Traditional Photography 2" />
              <img className="trad" src="https://i.ibb.co/LQBDDnW/Screenshot-2024-08-21-205308.png" alt="Traditional Photography 3" />
              <img className="trad" src="https://i.ibb.co/bP1j4V2/Screenshot-2024-08-21-205837.png" alt="Traditional Photography 4" />
              <img className="trad" src="https://i.ibb.co/yR2FH4g/Screenshot-2024-08-21-205922.png" alt="Traditional Photography 5" />
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
        <div className="de" style={{ flexDirection: "row-reverse" }}>
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://i.ibb.co/nnvX1dK/Screenshot-2024-08-21-205940.png" alt="Traditional Photography 6" />
              <img className="trad" src="https://i.ibb.co/kcJXRC8/Screenshot-2024-08-21-210313.png" alt="Traditional Photography 7" />
              <img className="trad" src="https://i.ibb.co/tMvkRrF/Screenshot-2024-08-21-210121.png" alt="Traditional Photography 8" />
              <img className="trad" src="https://i.ibb.co/MBWyqWL/Screenshot-2024-08-21-210236.png" alt="Traditional Photography 9" />
              <img className="trad" src="https://i.ibb.co/dmX2Q5B/Screenshot-2024-08-21-210244.png" alt="Traditional Photography 10" />
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
                src="https://assets.vogue.in/photos/619354b7ea6acf01092aef93/1:1/w_1080,h_1080,c_limit/Rajkummar%20and%20Patralekhaa%20(2).jpg"
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
export default Photoinfo1;