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
                <div className="mx-auto mx-auto w-11/12 sm:w-11/12 md:w-4/5 xl:w-6/12 grid">
                    {
                        items.images.map((image, i) => {
                            return (
                                <Project activeProject={activeProject} closeModal={onCloseModal} key={image.id} image={image} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;