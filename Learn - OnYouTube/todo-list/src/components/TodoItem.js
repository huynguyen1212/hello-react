import React, { Component } from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

import "./TodoItem.css";
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";


// props dùng để truyền data từ component App vào trong component con (ví dụ như component Todolist)

class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onItemClick = this.onItemClick.bind(this);
  // }

  // onItemClick() {
  //   // console.log(this.props.item);
  //   this.props.item.isComplete = !this.props.item.isComplete;
  // }

  render() {
    const { item, onClick } = this.props; // tương đương item = this.props.item, gán item bằng thís.props.item
    let url = checkImg;
    let className = "TodoItem";
    if (item.isComplete) {
      className += " TodoItem-complete";
      url = checkCompleteImg;
    }
    return (
      <div className={className}>
        {/* <p > Đi chợ </p>  */}
        <img onClick={onClick} src={url} width={32} height={32} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired
};

export default TodoItem;
