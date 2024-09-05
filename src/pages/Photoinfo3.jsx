import React from 'react';
import { Link } from 'react-router-dom';
import './photoinfo.css';

const Photoinfo3 = () => {
  return (
    <>
      <div className='xxx'>
        <div className="hea">
          <h1>CINEMATIC</h1>
          <div className="pri">
            <h2 className='hh'>TYPE C</h2>
            <h2 className="pri1">₹31000</h2>
          </div>
        </div>
        <div className="de1">
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1f573524745363.56339f5559a8e.jpg" alt=" Photography 1" />
              <img className="trad" src="https://miro.medium.com/v2/resize:fit:1080/1*yaQvcdIKjFwdh3m-t2Tx6w.jpeg" alt=" Photography 2" />
              <img className="trad" src="https://i.pinimg.com/736x/4f/c0/2e/4fc02ebabab3f7bc579e37ee51538c3e.jpg" alt=" Photography 3" />
              <img className="trad" src="https://cdn0.weddingwire.in/vendor/6101/3_2/960/jpg/red-studio-wedding-cinematography-3_15_216101-157181586853596.jpeg" alt=" Photography 4" />
              <img className="trad" src="https://cdn0.weddingwire.in/vendor/3824/3_2/960/jpg/wedding-photographers-view-cinematic-films-bride-9_15_383824-163729403581286.jpeg" alt=" Photography 5" />
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
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z 30 or D 780</p>
                </div>
                <div className="fir">
                  <h4 className='hhhh'>Wedding</h4>
                  <p className='ppp'>1 Photograpghy & 1 Video Camera Operator</p>
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z 30 or D 780</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="co">
          <p className="ex">Extra Rituals will be charged separatery Rs. 5000/- Per day And Drone,LED wall,LED TV and its accessories will be charged separately.</p>
        </div>
        <div className="de2">
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://images.squarespace-cdn.com/content/v1/52dbc2b2e4b049da570105f6/1593923649994-QECTZB3GPVO8X12HDGPU/138_1_P%26R_Highlights_www.samandekta.com-1017.jpg?format=2500w" alt=" Photography 6" />
              <img className="trad" src="https://5.imimg.com/data5/NF/QD/HU/SELLER-24212287/cinematic-wedding-photography-cinematic-videography.jpg" alt=" Photography 7" />
              <img className="trad" src="https://www.weddingsutra.com/images/Vendor_Images/Photographer/studio-right-click/studio-right-click-01.jpg" alt=" Photography 8" />
              <img className="trad" src="https://www.atlhea.in/wp-content/uploads/2020/11/blog18.jpg" alt=" Photography 9" />
              <img className="trad" src="https://i.pinimg.com/736x/7f/99/c9/7f99c91d57e5193146f6ab8f7a7b7967.jpg" alt=" Photography 10" />
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
                src="https://www.pikperfect.com/blog/wp-content/uploads/2020/06/Designing-indian-wedding-album-cover-e1592931796443.jpg"
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
export default Photoinfo3;