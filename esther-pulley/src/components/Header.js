import React from 'react';
import logo from '../images/u/estherpulley_logo.png';


function Header() {
    return (
        <div>
            <div className="flex mb-8 pt-8 justify-center items-center mx-auto w-11/12 sm:w-11/12 md:w-4/5 xl:w-8/12">
                <div>
                    <img src={logo} alt="esther pulley logo" className="max-w-mi" />
                </div>
            </div>
        </div >
    );
}
export default Header