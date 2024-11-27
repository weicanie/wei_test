import styled from "styled-components";

const ScrollViewWrapper = styled.div`
  .left,.right {
    position: absolute;
    cursor: pointer;
    background-color: white;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items:center;

    width: 30px;
    height: 30px;
    border-radius:50%;
    box-shadow:0 2px 1px;
    top:15px;
    left:0px;
    z-index:1;
  }
  .right {
    overflow:visible;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 30px;
    height: 30px;
    border-radius:50%;
    box-shadow:0 2px 1px;
    top:15px;
    right:0px;
  }
  .list {
    transition:transform .2s;
    transform:translate(
      ${props => props.move}px
    );
    display: flex;
    .active {
      background-color: rgb(0,132,138);
      color:white;
    }
    .name-container{
      flex-shrink:0;
      flex-basis:120px;
      height:60px;
      margin-right:20px;

      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items:center;
      border: 1px solid gray;
    }
  }
`
export default ScrollViewWrapper