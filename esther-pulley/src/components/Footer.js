import React from 'react';
import logo from '../images/u/estherpulley_logo_white.svg';

function Footer() {
    return (
        <div className="mx-auto w-11/12 xs:w-8/12 sm:w-10/12 md:w-8/12 xl:w-6/12 px-2">

            <div className="mb-10 lg:mb-16 sm:flex -mx-2">
                <p className="mb-4 sm:mb-0 px-2 text-sm">The act of communication makes things clear, legible and understood. Comprehension is only one aspect. Being compelling, interesting and attractive is what makes things&nbsp;memorable.</p>
                <p className="px-2  text-sm">
                    This visual approach to medical illustration and design seeks to resolve those opposing factors and pull them together, through the use of abstract shapes, minimalism, and&nbsp;simplicity.</p>
            </div>

            <div className="flex pb-10 lg:pb-16 items-center mx-auto justify-between">
                <div className="flex items-stretch">
                    <div>
                        <img src={logo} alt="esther pulley logo" className="max-w-xxs flex-1 self-center" />
                    </div>
                    <div className="ml-5 flex items-center leading-tight">
                        <h1 className="text-gray-800 font-sans flex flex-col" style={{ width: '102px' }}>
                            <div className="font-extrabold text-justify uppercase text-sm sm:text-md flex justify-between">{'Esther'.split('').map((l, i) => (<span key={i}>{l}</span>))}</div>
                            <div className="font-extrabold text-justify uppercase text-sm sm:text-md  flex justify-between">{'Pulley'.split('').map((l, i) => (<span key={i}>{l}</span>))}</div>
                            <div className="text-mi flex flex justify-between"><span>illustrator</span><span>&nbsp;&mdash;&nbsp;</span><span>designer</span></div>
                        </h1>
                    </div>
                </div>
                <div >
                    <ul className="flex">
                        <li className="ml-4">
                            <a title="Instagram" href="https://www.instagram.com/estherpulley/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}
export default Footer