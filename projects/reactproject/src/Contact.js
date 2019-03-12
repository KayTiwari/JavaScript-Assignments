import React, {Component} from 'react';
import Modal from './Modal';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        this.setState({
                show: false
            })
    }

    render() {
        return (
            <main>
                <h2>React Modal</h2>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <input type='text' className='modalinput' placeholder='First Name'></input>
                <input type='text' className='modalinput' placeholder='Last Name'></input>
                <input type='text' className='modalinput' placeholder='E-mail'></input>
                </Modal>
                <button type='button' className='contactbutton' onClick={this.showModal}>Contact</button>
            </main>
        )
    }
}
export default Contact;