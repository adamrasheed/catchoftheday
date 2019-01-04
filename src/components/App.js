import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import base from "../base";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    // reinstate localstroage
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      // console.log("restoring it");
      // console.log(JSON.parse(localStorageRef));
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    // console.log(localStorageRef);
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addFish = fish => {
    // Take copy of existing state
    const fishes = { ...this.state.fishes };
    // add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // set new fishes object to state
    this.setState({ fishes });
    console.log("adding a fish");
  };

  updateFish = (key, updatedFish) => {
    // take copyof current state
    const fishes = { ...this.state.fishes };
    // update that state
    fishes[key] = updatedFish;
    // set state
    this.setState({ fishes });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    // update the state - remove item
    fishes[key] = null;
    this.setState({ fishes });
  };

  addToOrder = key => {
    // copy state
    const order = { ...this.state.order };
    // add to trder or udpate number
    order[key] = order[key] + 1 || 1;
    // set state
    this.setState({ order });
  };

  removeFromOrder = key => {
    console.log("removing from order");
    const order = { ...this.state.order };
    // update teh state
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Fish" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                index={key}
                key={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
