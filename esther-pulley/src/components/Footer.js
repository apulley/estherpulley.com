import React from 'react';
import logo from '../images/u/estherpulley_logo.png';

function Footer() {
    return (
        <div className=" mx-auto w-11/12 xs:w-8/12 sm:w-8/12 md:w-8/12 xl:w-5/12">

            <p className="text-center mb-10  lg:mb-16">The act of communication is making things clear, legible and understood. Comprehension is only one aspect. Being compelling, interesting and attractive is what makes things&nbsp;memorable.<br />
                This visual approach to medical illustration and design seeks to resolve those opposing factors and pull them together, through the use of abstract shapes, minimalism, and&nbsp;simplicity.</p>

            <div className="flex pb-10 lg:pb-16 justify-center items-center mx-auto ">
                <div className="flex items-stretch">
                    <div>
                        <img src={logo} alt="esther pulley logo" className="max-w-mi flex-1 self-center" />
                    </div>
                    <div className="ml-4 flex items-center leading-tight">
                        <h1 className="text-gray-800 font-sans flex flex-col">
                            <div className="font-extrabold uppercase text-sm sm:text-md">Esther Pulley</div>
                            <div className="text-xs sm:text-sm">illustrator / designer</div>
                        </h1>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Footer