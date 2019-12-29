import React from 'react';
import invisible from '../images/u/png.png';

function Project({
    image = {},
    buttonClick,
    closeModal,
    activeProject = ''
}) {
    return (
        <div className="relative mx-auto mb-10 ">
            <img className="absolute w-full h-full inset-0" src={invisible} alt="" aria-hidden="true" />
            <img src={image.src} alt={image.name} />
        </div>
    );
}
export default Project