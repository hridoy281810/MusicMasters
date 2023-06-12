import React from 'react';
import warnings from '../../assets/lottie/error (2).json'

import Lottie from "lottie-react";
import useTitle from '../../api2/useTitile';
// requirements
const ErrorPage = () => {
  useTitle("Music Masters | 404 Page")
    return (
        <div className="flex justify-center items-center mt-8 sm:mt-40 lg:mt-40  md:mt-40 ">
        <div >
                    <Lottie className='w-52 md:w-96 lg:w-96 sm:w-96 ' animationData={warnings} loop={true} />
          <div className='flex justify-center '>
            <Link to='/' className="btn btn-success mt-10">Back to home</Link></div>
        </div>
      </div>
    );
};

export default ErrorPage;