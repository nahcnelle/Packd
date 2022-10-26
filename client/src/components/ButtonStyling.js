import styled from "styled-components";

const ButtonStyling = styled.button`
    background-color: lightgray;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightblue;
    transition: ease background-color 250ms;
    &:hover {
      background-color: lightblue;
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
`;

  export default ButtonStyling;