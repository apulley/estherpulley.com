import React from 'react';
import { default as items } from '../config/items.js';
import Project from './Project';

class Home extends React.Component {
    state = {
        activeProject: ''
    }
    render() {
        const { activeProject } = this.state;
        const { onButtonCLick, onCloseModal } = this;
        return (
            <div>
                <div className="mx-auto mx-auto w-10/12  md:w-4/5 xl:w-6/12 grid">
                    {
                        items.images.map((image, i) => {
                            return (
                                <div key={i} className="relative mx-auto mb-16 lg:mb-32" style={{
                                    paddingBottom: `${(image.size[1] / image.size[0]) * 100}%`,
                                    background: '#ffffff'
                                }}>
                                    <Project activeProject={activeProject} closeModal={onCloseModal} key={image.id} image={image} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;