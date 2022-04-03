import React, { Component } from "react";

class PlayerModal extends Component {
  changeData(type, isInc) {
    this.props.changeCurrentData(type, isInc);
  }

  saveChanges = () => {
    this.props.changeSave();
    this.props.clearData();
  };

  render() {
    const { closeCancel, currentData } = this.props;
    return (
      <div className="card">
        <div className="card-header">➕ Add Player Modal</div>
        <div className="card-body">
          <div className="row text-center p-3">
            <div className="col-sm-4">
              <h5>Player's age:</h5>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => this.changeData("age", false)}
                >
                  -
                </button>
                <but  ton className="btn">
                  {currentData ? currentData.age : 0}
                </but>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeData("age", true)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                className="img-fluid"
                src="https://www.sportzone.org.nz/uploads/1520415465-Untitled.png"
                alt=""
              />
            </div>
            <div className="col-sm-4">
              <h5>Player's value:</h5>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => this.changeData("value", false)}
                >
                  -
                </button>
                <button className="btn ">
                  $ 💰{currentData ? currentData.value : 0}.000ml
                </button>
                <button
                  className="btn btn-info"             
                  onClick={() => this.changeData("value", true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer mb-2">
          <button className="btn btn-warning" onClick={closeCancel}>
            Cancel
          </button>
          <button className="btn btn-success ml-2" onClick={this.saveChanges}>
            Save changes
          </button>
        </div>
      </div>
    );
  }
}

export default PlayerModal;
