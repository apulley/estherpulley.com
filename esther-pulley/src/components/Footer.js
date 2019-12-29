import React from 'react';
import logo from '../images/u/estherpulley_logo.png';

function Footer() {
    return (
        <div>
            <div className="flex h-32 justify-center items-center mx-auto w-11/12 sm:w-11/12 md:w-4/5 xl:w-8/12">
                <div className="flex items-stretch">
                    <div>
                        <img src={logo} alt="esther pulley logo" className="max-w-mi flex-1 self-center" />
                    </div>
                    <div className="ml-4 flex items-center leading-tight">
                        <h1 className="text-gray-800 font-sans flex flex-col">
                            <div className="font-extrabold uppercase text-sm sm:text-md">Esther Pulley</div>
                            <div className="text-xs sm:text-sm">Illustrator / Designer</div>
                        </h1>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Footer