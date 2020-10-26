import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./img/tick.svg";

class App extends Component {
  constructor() {
    super();
      (this.state = {
        newItem: "",
        todoItems: [
          { title: "Đi đá bóng", isComplete: true }, // thêm title để gía trị chuyển vào linh hoat hơn, k chỉ là string nữa
          { title: "Đi chơi", isComplete: true },
          { title: "Đi đổ xăng", isComplete: false },
        ],
      });

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onKeyUp(event) {
    //console.log(event.keyCode);
    let text = event.target.value;
    if (event.keyCode === 13) {
      //13 là key của phím enter
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems,
        ],
      });
    }
    // else {
    //   this.setState({
    //     newItem: text,
    //   });
    // }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input
              type="text"
              placeholder="Add new a item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            ></input>
          </div>
          {todoItems.length &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)}
              />
            ))}
        </div>
      );
    }
  }
}

export default App;

// Cách 2
//{this.todoItems.length > 0 && // có && là viết tắt của nếu cái trc && đúng thì chạy cái đằng sau &&
//{this.todoItems.length == 0 && "Nothing here"}

// Cách 1
// if (this.todoItems.length > 0) {
//   return (
//     <div className="App">
//       {this.todoItems.map((item, index) => (
//         <TodoItem key={index} item={item} />
//       ))}

//       {/**
//        * map biến array của object thành array của 1 component thì phải thêm key
//        * map nhận vào hai giá trị
//        * chuyển sang cho 1 component
//        */}

//       {/* <TodoItem title="Đi đá bóng" />
//       <TodoItem title="Đi chơi" />
//       <TodoItem title="Đi đổ xăng" /> */}
//     </div>
//   );
// }
// else {
//   return (
//     <div className = "App">
//       Nothing here
//     </div>
//   );
// }
