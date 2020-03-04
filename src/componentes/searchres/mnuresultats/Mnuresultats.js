import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";

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
    spy3: {}
  };

  render() {
    return (
      <div className="app">
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
{/* Subcategoria 1 */}
            <button
              className={cx("app__toggle app__toggle_sub", {
                "app__toggle--active": this.state.isOpen7
              })}
              onClick={() => this.toggle(7)}
            >
              <span className="app__toggle-text">Art / arquitectura / disseny</span>
              <div className="rotate90">
                <svg
                  className={cx("icon", { "icon--expanded": this.state.isOpen7 })}
                  viewBox="6 0 12 24"
                >
                <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                </svg>
              </div>
            </button>
            <Collapse
              isOpen={this.state.isOpen7}
              className={
                "app__collapse app__collapse--gradient " +
                (this.state.isOpen7 ? "app__collapse--active" : "")
              }
              transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
              >
              <div className="app__content">
{/* SubSubcategoria 1 */}
                <button
                  className={cx("app__toggle app__toggle_subsub", {
                    "app__toggle--active": this.state.isOpen12
                  })}
                  onClick={() => this.toggle(12)}
                >
                  <span className="app__toggle-text">Art</span>
                  <div className="rotate90">
                    <svg
                      className={cx("icon", { "icon--expanded": this.state.isOpen12 })}
                      viewBox="6 0 12 24"
                    >
                      <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                    </svg>
                  </div>
                </button>
                <Collapse
                  isOpen={this.state.isOpen12}
                  className={
                    "app__collapse app__collapse--gradient " +
                    (this.state.isOpen12? "app__collapse--active" : "")
                  }
                  transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <div className="app__content">
                    <ul>
                      <li><a href="">Teoria de l'art</a></li>
                      <li><a href="">Història de l'art</a></li>
                      <li><a href="">Art no occidental</a></li>
                      <li><a href="">Modernisme / art nouveau</a></li>
                      <li><a href="">Art déco</a></li>
                    </ul>
                  </div>
                </Collapse>
{/* Fi SubSubcategoria 1 */}
              </div>
            </Collapse>
{/* Fi Subcategoria 1 */}
{/* Subcategoria 2 */}
            <button
              className={cx("app__toggle app__toggle_sub", {
                "app__toggle--active": this.state.isOpen8
              })}
              onClick={() => this.toggle(8)}
            >
              <span className="app__toggle-text">Còmics / ilustracció</span>
              <div className="rotate90">
                <svg
                  className={cx("icon", { "icon--expanded": this.state.isOpen8 })}
                  viewBox="6 0 12 24"
                >
                  <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                </svg>
              </div>
            </button>
            <Collapse
              isOpen={this.state.isOpen8}
              className={
                "app__collapse app__collapse--gradient " +
                (this.state.isOpen8 ? "app__collapse--active" : "")
              }
              transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <div className="app__content">
                Lorem
              </div>
            </Collapse>
{/* Fi Subcategoria 2 */}
{/* Subcategoria 3 */}
            <button
              className={cx("app__toggle app__toggle_sub", {
                "app__toggle--active": this.state.isOpen9
              })}
              onClick={() => this.toggle(9)}
            >
              <span className="app__toggle-text">Ciències / tecnología</span>
              <div className="rotate90">
                <svg
                  className={cx("icon", { "icon--expanded": this.state.isOpen9 })}
                  viewBox="6 0 12 24"
                >
                  <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                </svg>
              </div>
            </button>
            <Collapse
              isOpen={this.state.isOpen9}
              className={
                "app__collapse app__collapse--gradient " +
                (this.state.isOpen9 ? "app__collapse--active" : "")
              }
              transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <div className="app__content">
                Lorem
              </div>
            </Collapse>
{/* Fi Subcategoria 3 */}
{/* Subcategoria 4 */}
            <button
              className={cx("app__toggle app__toggle_sub", {
                "app__toggle--active": this.state.isOpen10
              })}
              onClick={() => this.toggle(10)}
            >
              <span className="app__toggle-text">Cine / teatre / música</span>
              <div className="rotate90">
                <svg
                  className={cx("icon", { "icon--expanded": this.state.isOpen10 })}
                  viewBox="6 0 12 24"
                >
                  <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                </svg>
              </div>
            </button>
            <Collapse
              isOpen={this.state.isOpen10}
              className={
                "app__collapse app__collapse--gradient " +
                (this.state.isOpen10 ? "app__collapse--active" : "")
              }
              transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <div className="app__content">
                Lorem
              </div>
            </Collapse>
{/* Fi Subcategoria 4 */}
{/* Subcategoria 5 */}
            <button
              className={cx("app__toggle app__toggle_sub", {
                "app__toggle--active": this.state.isOpen11
              })}
              onClick={() => this.toggle(11)}
            >
              <span className="app__toggle-text">Poesia / clàssics</span>
              <div className="rotate90">
                <svg
                  className={cx("icon", { "icon--expanded": this.state.isOpen11 })}
                  viewBox="6 0 12 24"
                >
                  <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                </svg>
              </div>
            </button>
            <Collapse
              isOpen={this.state.isOpen11}
              className={
                "app__collapse app__collapse--gradient " +
                (this.state.isOpen11 ? "app__collapse--active" : "")
              }
              transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <div className="app__content">
                Lorem
              </div>
            </Collapse>
{/* Fi Subcategoria 5 */}
          </div>
        </Collapse>
{/* item02 */}
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
          <span className="app__toggle-text">Autors</span>
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
          <span className="app__toggle-text">Editorial</span>
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
{/* Item04 */}
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen4
          })}
          onClick={() => this.toggle(4)}
        >
          <span className="app__toggle-text">Idioma</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen4 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen4}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen4 ? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <div className="app__content">
            Lorem
          </div>
        </Collapse>
{/* Item05 */}
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen5
          })}
          onClick={() => this.toggle(5)}
        >
          <span className="app__toggle-text">Exposicions</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen5})}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen5}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen5? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <div className="app__content">
            Lorem
          </div>
        </Collapse>
{/* Item06 */}
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen6
          })}
          onClick={() => this.toggle(6)}
        >
          <span className="app__toggle-text">Destacats</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen6 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen6}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen6 ? "app__collapse--active" : "")
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
