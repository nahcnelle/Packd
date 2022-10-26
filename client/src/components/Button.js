// function clickMe() {
//     alert("You clicked me!");
//   }

// class Button extends React.Component {
//     // This syntax ensures `this` is bound within handleClick.
//     handleClick = () => {
//       console.log('this is:', this);
//     };
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           Click me
//         </button>
//       );
//     }
//   }

import React from "react";

function clickMe() {
    alert("You clicked me!");
  }

const Button = ({ className }) => {
  return (
    <button
      className={className}
      onClick={clickMe}
    >
        Button
    </button>
  );
};

export default Button;