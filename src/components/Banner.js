import React from 'react';
import { FiDownload } from 'react-icons/fi';

// FiDownload
const Banner = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
          <img src="https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
          <div className="badge badge-primary p-[8px] font-medium">MERN STACK DEV</div>
            <h1 className="text-5xl font-bold">Afnan Ferdousi</h1>
            <p className="py-6">"Keep your face always toward the sunshine, and shadows will fall behind you"</p>
            <button className="btn btn-primary">Resume <FiDownload/></button>
          </div>
        </div>
      </div>
    );
};

export default Banner;