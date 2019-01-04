import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };
  handleChange = event => {
    // update the fish
    // copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    // console.log(this.props);
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <select name="status" value={status} onChange={this.handleChange}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          type="textarea"
          name="desc"
          value={desc}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.removeFish(this.props.index);
          }}
        >
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
