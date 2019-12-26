import React from 'react';
import ReactModal from 'react-modal';

function Project({
    image = {},
    buttonClick,
    closeModal,
    activeProject = ''
}) {
    return (
        <div className="relative  bg-white rounded-sm" style={{ '--aspect-ratio': 1 / 1, backgroundImage: `url(${image.src})`, backgroundSize: 'contain', backgroundPosition: image.position || '50% 50%' }}>
            <a className="rounded-sm absolute w-full h-full top-0 right-0" onClick={buttonClick} href={`#project`}>
                <div className="absolute -bottom-20 left-0 w-full text-xs">{image.name}</div>
            </a>
            <ReactModal className="w-11/12 sm:w-11/12 lg:w-7/12 xl:w-6/12 overflow-auto outline-none rounded-sm border border-gray-800 left-1/2 top-1/2 p-1  bg-white top-0 absolute p-1" ariaHideApp={false} isOpen={activeProject === image.id}>
                <div>
                    <div className="text-right relative">
                        <button aria-label="Close Modal" onClick={closeModal} className="bg-white absolute top-0 right-0 text-xl px-2">&times;</button>
                    </div>
                    <div className="block md:flex">
                        <div>
                            <img src={image.src} alt={image.name} className="w-full" />
                        </div>
                        <div className="p-3 pr-8">
                            <h2 className="whitespace-no-wrap font-bold text-gray-800 mb-2">{image.name}</h2>
                            <p className="text-sm text-gray-700">{image.tool}</p>
                            {image.link && <a className="text-sm underline" rel="noopener noreferrer" target='_blank' href={image.link}>View Clip</a>}
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}
export default Project