import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
//import Dropdown from 'react-bootstrap/Dropdown';
//import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class Menulateral extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
    isOpen7: false,
    isOpen8: false,
    isOpen9: false,
    isOpen10: false,
    isOpen11: false,
    isOpen12: false,
    isOpen13: false,
    spy3: {}
  };

  render() {
    return (
      <div className="app">
{/* Ordenar */}
      <span className="select-ordenar text">Ordenar per:</span>
       <button
          className={cx("select-ordenar app__toggle", {
            "app__toggle--active": this.state.isOpen13
          })}
          onClick={() => this.toggle(13)}
        >
          <span className="app__toggle-text"></span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen13 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen13}
          className={
            "select-ordenar app__collapse app__collapse--gradient " +
            (this.state.isOpen13 ? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <div className="ordenar-list app__content">
            <ul>
              <li><a href="">Títol [A-Z]</a></li>
              <li><a href="">Títol [Z-A]</a></li>
              <li><a href="">Autor [A-Z]</a></li>
              <li><a href="">Autor [Z-A]</a></li>
              <li><a href="">Data publicació [DESC]</a></li>
              <li><a href="">Data publicació [ASC]</a></li>
            </ul>
          </div>
        </Collapse>
{/* Categories */}
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}
        >
          <span className="app__toggle-text">Categories</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen1 ? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <div className="app__content">
            <ul>
              <li><a href="">Regals</a></li>
              <li><a href="">Moda</a></li>
              <li><a href="">Art i disseny</a></li>
              <li><a href="">Papereria</a></li>
              <li><a href="">Infantil</a></li>
            </ul>
          </div>
        </Collapse>
{/* item02 */}
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
          <span className="app__toggle-text">Exposicions</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen2 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen2 ? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <div className="app__content">
            Lorem
          </div>
        </Collapse>
{/* Item03 */}
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen3
          })}
          onClick={() => this.toggle(3)}
        >
          <span className="app__toggle-text">Destacats</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen3 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen3}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen3 ? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <div className="app__content">
            Lorem
          </div>
        </Collapse>

      </div>
    );
  }

  toggle = index => {
    let collapse = "isOpen" + index;
    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Menulateral;
