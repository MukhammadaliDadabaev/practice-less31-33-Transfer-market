import React, { Component } from "react";
import PlayerModal from "./PelayerModal";

class App extends Component {
  state = {
    userProfile: [],
    modalVisibility: false,
    currentData: "",
  };

  componentDidMount() {
    const players = [
      {
        firsName: "Kylian Mbappé",
        age: 23,
        club: "France",
        value: 160,
      },
      {
        firsName: "Erling Haaland",
        age: 21,
        club: "Norway",
        value: 150,
      },
      {
        firsName: "	Vinicius Junior",
        age: 21,
        club: "Brazil",
        value: 100,
      },
      {
        firsName: "Mohamed Salah",
        age: 29,
        club: "Egypt",
        value: 100,
      },
      {
        firsName: "Harry Kane",
        age: 28,
        club: "England",
        value: 90,
      },
    ];
    this.setState({
      userProfile: players,
    });
  }

  removeProfile = (index) => {
    const removUser = this.state.userProfile;
    removUser.splice(index, 1);
    this.setState({
      userProfile: removUser,
    });
  };

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  clearCurrentData = () => {
    this.setState({
      currentData: "",
    });
  };

  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : { firsName: "none", age: 0, club: "❌❌❌", value: 0 };

    if (type === "age") {
      if (isInc) {
        newCurrentData.age++;
      } else if (newCurrentData.age < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.age--;      
      }
    }

    if (type === "value") {
      if (isInc) {
        newCurrentData.value++;
      } else if (newCurrentData.value < 1) {
        newCurrentData.value = 0;
      } else {
        newCurrentData.value--;
      }
    }

    this.setState({
      currentData: newCurrentData,
    });
  } ;

  saveChange = () => {
    const { userProfile, currentData } = this.state;
    userProfile.push(currentData);
    currentData.firsName = "Player"
    this.setState({
      userProfile,
    });
  };

  render() {
    const { userProfile, modalVisibility, currentData } = this.state;
    return (
      <div className="market">
        <div className="container mt-3">
          <h1 className="text-center p-3">⚽ TERANSFER MARKET</h1>
          <div iv className="group">
            <button className="btn btn-primary m-2" onClick={this.openModal}>
              Add a player
            </button>
            {modalVisibility ? (
              <PlayerModal
                closeCancel={this.closeModal}
                currentData={currentData}
                changeCurrentData={this.changeCurrentData}
                changeSave={this.saveChange}
                clearData={this.clearCurrentData}
              />
            ) : (
              ""
            )}
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-sm mt-2 table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>№</th>
                    <th>Firs Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market Value</th>
                    <th>Off | On</th>
                  </tr>
                </thead>
                <tbody>
                  {userProfile.map((user, index) => ( 
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.firsName}</td>
                      <td>{user.age}</td>
                      <td>{user.club}</td>
                      <td>
                        <span className="badge badge-primary p-2">
                          💰 ${user.value}.000ml
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.removeProfile(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
