import React from 'react';
import { Link } from 'react-router-dom';
import './photoinfo.css';

const Photoinfo4 = () => {
  return (
    <>
      <div className='xxx'>
        <div className="hea">
          <h1>PRE-WEDDING</h1>
          <div className="pri">
            <h2 className='hh'>TYPE D</h2>
            <h2 className="pri1">₹22000</h2>
          </div>
        </div>
        <div className="de">
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://onehorizonproductions.com/wp-content/uploads/2021/10/Pre-wedding-photoshoot-by-one-horizon-productions-26.jpg" alt=" Photography 1" />
              <img className="trad" src="https://kamatharjun.b-cdn.net/wp-content/uploads/2023/06/Prewedding-Photoshoot-Priyanka-Prito-21.jpg" alt=" Photography 2" />
              <img className="trad" src="https://ajinkyajadhav.co.in/wp-content/uploads/2022/11/HKP_1971.jpg" alt=" Photography 3" />
              <img className="trad" src="https://www.idontsaycheese.com/wp-content/uploads/2019/10/DSC_0071-960x636.jpg" alt=" Photography 4" />
              <img className="trad" src="https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1589445147877-9WOT227FQVW1UGDPWK24/Lalbagh+pre+wedding+couple+shoot+Saloni+Anuj-1.jpg" alt=" Photography 5" />
            </div>
          </div>
          <div className="det">
            <h1 className='h'>PACKAGE DETAILS</h1>
            <div className="ro">
              <div className="co">
                <h2 className='hh1'>TERMS DETAILS</h2>
                <div className="fir">
                  <h4 className='hhhh'>1st DAY</h4>
                  <p className='ppp'>1 Photograpghy & 1  Cinematic Videography</p>
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z 30 or Z 50</p>
                </div>
                <div className="fir">
                  <h4 className='hhhh'>2nd DAY</h4>
                  <p className='ppp'>1 Photograpghy & 1 Cinematic Videography with Drone</p>
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z 30 or Z 50</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="co">
          <p className="ex">Extra Rituals will be charged separatery Rs. 5000/- Per day And Drone,LED wall,LED TV and its accessories will be charged separately.</p>
        </div>
        <div className="de" style={{ flexDirection: "row-reverse" }}>
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://onehorizonproductions.com/wp-content/uploads/2023/05/OHP-6728-scaled.webp" alt=" Photography 6" />
              <img className="trad" src="https://cdn0.weddingwire.in/vendor/6894/3_2/960/jpg/coule-shot_15_46894-158703436075456.jpeg" alt=" Photography 7" />
              <img className="trad" src="https://www.shootproof.com/wp-content/uploads/pre-wedding-photos-shandro-5.jpg" alt=" Photography 8" />
              <img className="trad" src="https://www.yabeshphotography.com/wp-content/uploads/2022/11/Sathish-sandhya-Couple-Post-Wedding-Shoot-4.jpg" alt=" Photography 9" />
              <img className="trad" src="https://arjunkarthaphotography.com/wp-content/uploads/2021/06/Rashmi-Krishna-Destinaton-Prewedding-Andaman-Islands-1.jpg" alt=" Photography 10" />
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
                If the customer is satisfied, a big-size photo of 
                couple will be given as a gift.
              </li>
            </ul>
          </div>
        </div>
        <div className="album">
          <div>
            <a href="https://drive.google.com/file/d/1XPzd-pLeJC7jmCz5mKiSL1P1Fr0lsjpV/view?usp=drive_link">
              <img
                src="https://blog.zoomin.com/wp-content/uploads/2020/10/theme76-open.jpg"
                alt="Our Album"
              />
            </a>
          </div>
          <p className='alp'>OUR ALBUM</p>
          <div className="butt">
            <a href="https://drive.google.com/file/d/1XPzd-pLeJC7jmCz5mKiSL1P1Fr0lsjpV/view?usp=drive_link">
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
export default Photoinfo4;