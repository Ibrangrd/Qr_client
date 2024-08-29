import React from "react";
import { Link } from 'react-router-dom'
const Slist = (Slist) => {
   return (
      
          <div className='j'>
          <div className='iii'><img className='ii' src={Slist.imgsrc} />
          </div>
          <div>
          <div className='h9'> <h1>{Slist.heading}</h1></div>
          <div className='p6'> <p>{Slist.des}</p>
            </div>
            <div className="bu5">
                <Link to={Slist.Link}>
                    <button className="but5"> View </button>
                    </Link>
                </div>
            </div>
        </div>


  );
}
export default Slist;