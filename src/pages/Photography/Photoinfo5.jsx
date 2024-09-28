import React from 'react';
import { Link } from 'react-router-dom';
import './photoinfo.css';

const Photoinfo5 = () => {
  return (
    <>
      <div className='xxx'>
        <div className="hea">
          <h1>CLASSIC VIDEOGRAPHY</h1>
          <div className="pri">
            <h2 className='hh'>TYPE E</h2>
            <h2 className="pri1">₹25000</h2>
          </div>
        </div>
        <div className="de1">
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-563-Damion-Edwards-Photography.jpg" alt=" Photography 1" />
              <img className="trad" src="https://www.brides.com/thmb/fFvUE8rwlncLDqY8BYi6KCagqpE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/indian-wedding-Blink-and-Co-Photography-abd9f18a06d84f42b76441f2ddba1434.jpg" alt=" Photography 2" />
              <img className="trad" src="https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h" alt=" Photography 3" />
              <img className="trad" src="https://cloudfront.slrlounge.com/wp-content/uploads/2022/12/Indian-wedding-photography-Hindu_Wedding_Ceremony-feature.jpg" alt=" Photography 4" />
              <img className="trad" src="https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/hindu+wedding+attire-1920w.jpeg" alt=" Photography 5" />
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
          <p className="ex">Extra Rituals will be charged separatery Rs. 4000/- Per day And Drone,LED wall,LED TV and its accessories will be charged separately.</p>
        </div>
        <div className="de2">
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://cloudfront.slrlounge.com/wp-content/uploads/2022/12/Indian-wedding-photography-Hindu_Wedding_Ceremony-feature.jpg" alt=" Photography 6" />
              <img className="trad" src="https://irp-cdn.multiscreensite.com/bd6f6ba9/dms3rep/multi/0052-ladywood-estate-fusion-wedding3.jpg" alt=" Photography 7" />
              <img className="trad" src="https://www.carinaphotographics.com/wp-content/uploads/2021/08/vishnu-mandir-hindu-indian-wedding-photo-35.jpg" alt=" Photography 8" />
              <img className="trad" src="https://www.brides.com/thmb/R_lday5-wisouqSwDoR88cdUW0U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/megan__rajal_wedding_0772-5728e1e2d7ff452aabfe9823b151ff0e.jpg" alt=" Photography 9" />
              <img className="trad" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13eb4c24745363.56339f559bf3e.jpg" alt=" Photography 10" />
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
                src="https://sdtwedding.com/wp-content/uploads/2024/02/01-Cover-page-1.png"
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
export default Photoinfo5;
