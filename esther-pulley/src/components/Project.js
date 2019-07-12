import React from 'react';
import ReactModal from 'react-modal';

function Project({
    image = {},
    buttonClick,
    closeModal,
    activeProject = ''
}) {
    return(
        <div className="relative" style={{'--aspect-ratio': 1/1, backgroundImage: `url(${image.src})`, backgroundPosition: image.position || '50% 50%' }}>
            <a className="absolute w-full h-full top-0 right-0" onClick={buttonClick}  href={`#project`}>
                <div className="absolute -bottom-20 left-0 w-full text-xs">{image.name}</div>
            </a>
            <ReactModal ariaHideApp={false} isOpen={activeProject === image.id}>
                <div>
                    <div className="text-right relative">
                        <button aria-label="Close Modal" onClick={closeModal} className="absolute top-0 right-0 -top-16 -right-16 text-xl px-2">&times;</button>
                    </div>
                    <img src={image.src} alt={image.name} />
                </div>
            </ReactModal>
        </div>
    );
}
export default Project