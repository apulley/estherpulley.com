import React from 'react';

function Project({
    image = {},
    buttonClick,
    closeModal,
    activeProject = ''
}) {
    return (
        <div className="relative bg-white">
            <img src={image.src} alt={Image.name} />
        </div>
    );
}
export default Project