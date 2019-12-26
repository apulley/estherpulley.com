import React from 'react';

function Project({
    image = {},
    buttonClick,
    closeModal,
    activeProject = ''
}) {
    return (
        <div className="relative mx-auto pb-64">
            <img src={image.src} alt={image.name} />
        </div>
    );
}
export default Project