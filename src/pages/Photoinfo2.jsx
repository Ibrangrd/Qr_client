import React from 'react';
import { Link } from 'react-router-dom';
import './photoinfo.css';

const Photoinfo2 = () => {
  return (
    <>
      <div className='xxx'>
        <div className="hea">
          <h1>CINEMATIC & CANDID</h1>
          <div className="pri">
            <h2 className='hh'>TYPE B</h2>
            <h2 className="pri1">₹51000</h2>
          </div>
        </div>
        <div className="de1">
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://img.freepik.com/free-photo/closeup-groom-s-hand-taking-off-bracelet-from-wirst_8353-769.jpg?size=626&ext=jpg&ga=GA1.1.1687888767.1698418665&semt=ais_hybrid" alt=" Photography 1" />
              <img className="trad" src="https://img.freepik.com/free-photo/red-shawl-connects-bride-s-parents-dressed-indian-wedding_8353-741.jpg?size=626&ext=jpg&ga=GA1.1.1687888767.1698418665&semt=ais_hybrid" alt=" Photography 2" />
              <img className="trad" src="https://fashionatestudio.com/wp-content/uploads/2024/05/DSC_3101-scaled.jpg" alt=" Photography 3" />
              <img className="trad" src="https://vishaldhupiaphotography.com/new-images/Candid-Wedding-Photography.jpeg" alt=" Photography 4" />
              <img className="trad" src="https://image.wedmegood.com/resized/800X/uploads/member/412177/1532739203_25488435_1983119855297124_6517770107131706388_o.jpg" alt=" Photography 5" />
            </div>
          </div>
          <div className="det">
            <h1 className='h'>PACKAGE DETAILS</h1>
            <div className="ro">
              <div className="co">
                <h2 className='hh1'>TERMS DETAILS</h2>
                <div className="fir">
                  <h4 className='hhhh'>Rituals</h4>
                  <p className='ppp'>1 Photograpghy & 1 Cinematic Videography</p>
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z6 or D780</p>
                </div>
                <div className="fir">
                  <h4 className='hhhh'>Wedding</h4>
                  <p className='ppp'>1 Photograpghy & 1 Cinematic Videography</p>
                  <p className='ppp'>Camera Brand & Upgrade Lenes equivalent to Z6 or D780</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="co">
          <p className="ex">Extra Rituals will be charged separatery Rs. 5000/- Per day And Drone,LED wall,LED TV and its accessories will be charged separately.</p>
        </div>
        <div className="de2" style={{ flexDirection: "row-reverse" }}>
          <div className="cont">
            <div className="ma">
              <img className="trad" src="https://image.wedmegood.com/resized/800X/uploads/member/412177/1532739203_25488435_1983119855297124_6517770107131706388_o.jpg" alt=" Photography 6" />
              <img className="trad" src="https://live.staticflickr.com/4813/46402658441_6e44206064_b.jpg" alt=" Photography 7" />
              <img className="trad" src="https://i.pinimg.com/736x/a8/b5/60/a8b5603e596abaeb3a7ada2b908bf45b.jpg" alt=" Photography 8" />
              <img className="trad" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13eb4c24745363.56339f559bf3e.jpg" alt=" Photography 9" />
              <img className="trad" src="https://oneeyevisionphotography.com/wp-content/uploads/2021/08/KAT1028.jpg" alt=" Photography 10" />
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
            <a href="https://drive.google.com/file/d/1XPzd-pLeJC7jmCz5mKiSL1P1Fr0lsjpV/view?usp=drive_link">
              <img
                src="https://cdn0.weddingwire.in/article/9763/original/1280/jpg/13679-indian-wedding-album-design-glorious-wedding-album-lead-image.jpeg"
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
export default Photoinfo2;