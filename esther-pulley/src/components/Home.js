import React from 'react';
import { default as items } from '../config/items.js';
import Project from './Project';

class Home extends React.Component {
    state = {
        activeProject: ''
    }
    onButtonCLick = (id) => {
        return (e) => {
            e.preventDefault();
            this.setState({
                activeProject: id || ''
            })
        }
    }
    onCloseModal = () => {
        console.log('here')
        this.setState({
            activeProject: ''
        })
    }
    render() {
        const { activeProject } = this.state;
        const { onButtonCLick, onCloseModal } = this;
        return (
            <div className="pb-40">
                <div className="mx-auto w-11/12 grid">
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