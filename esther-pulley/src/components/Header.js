import React from 'react';
import logo from '../images/u/estherpulley_logo.png';

const name = ['e', 's', 't', 'h', 'e', 'r'];

function Header() {
    return (
        <div>
            <div className="flex h-64 justify-center items-center mx-auto w-11/12 sm:w-11/12 md:w-4/5 xl:w-8/12">
                <div className="flex items-stretch">
                    <img src={logo} alt="esther pulley logo" className="max-w-mi xl:max-w-sm" />
                    <div className="ml-8 flex items-center leading-tight">
                        <h1 className="text-gray-800 font-sans flex flex-col">
                            <div className="font-extrabold uppercase text-lg">Esther Pulley</div>
                            <div className="text-sm">Illustrator / Designer</div>
                        </h1>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Header