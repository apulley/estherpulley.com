import React from 'react';

const name1 = ['e', 's', 't', 'h', 'e', 'r', '·'];
const name2 = ['p', 'u', 'l', 'l', 'e', 'y'];
const name = name1.concat(name2);

function Footer() {
    return (
        <div>
            <div className="flex h-64 content-center items-center h-16 mx-auto w-11/12 sm:w-11/12 md:w-4/5 xl:w-8/12 ">
                <h1 className="text-gray-800 font-sans mr-2 font-extrabold uppercase flex justify-between text-lg w-full">{name.map(letter => <span>{letter}</span>)}</h1>
            </div>
        </div>
    );
}
export default Footer