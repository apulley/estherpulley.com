import React from 'react';

function Project({
    image = {},
    buttonClick,
    closeModal,
    activeProject = ''
}) {
    return (
        <div className="relative mx-auto pb-6 sm:pb-8 md:pb-24 lg:pb-64">
            <img src={image.src} alt={image.name} />
        </div>
    );
}
export default Project