import React from 'react';

const name = ['e', 's', 't', 'h', 'e', 'r'];

function Header() {
    return (
        <div>
            <div className="flex min-h-screen content-center items-center h-16 mx-auto w-11/12 sm:w-11/12 md:w-4/5 xl:w-8/12 ">
                <h1 className="text-gray-800 font-sans mr-2 font-extrabold uppercase flex justify-between text-lg w-full">{name.map(letter => <span>{letter}</span>)}</h1>
            </div>
        </div>
    );
}
export default Header