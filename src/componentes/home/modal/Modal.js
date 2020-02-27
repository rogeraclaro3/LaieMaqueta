import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class Modal extends React.Component {
  constructor (props) {
    super (props);
    this.el = document.createElement ('div');
  }

  componentDidMount () {
    modalRoot.appendChild (this.el);
  }

  componentWillUnmount () {
    modalRoot.removeChild (this.el);
  }

  render () {
    return ReactDOM.createPortal (this.props.children, this.el);
  }
}


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showModal: false,
    };
    this.handleModalVisibility = this.handleModalVisibility.bind (this);
  }

  handleModalVisibility () {
    this.setState ({showModal: !this.state.showModal});
  }
  render () {
    const {showModal} = this.state;

    return (
      <div className="container app-wrapper">
        <ListContainer />
        <Button onClick={this.handleModalVisibility} title="Add Recipe" />
        {this.state.showModal
          ? <Modal>
              <InputAddRecipe onClick={this.handleModalVisibility} />
            </Modal>
          : null}
      </div>
    );
  }
}
