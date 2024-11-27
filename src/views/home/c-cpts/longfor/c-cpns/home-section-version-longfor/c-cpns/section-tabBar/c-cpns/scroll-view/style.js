import styled from "styled-components";

const ScrollViewWrapper = styled.div`
  .left,.right {
    position: absolute;
    cursor: pointer;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items:center;
    width: 30px;
    height: 30px;
    border-radius:50%;
    box-shadow:0 2px 1px;
    background-color: white;
    z-index:1;
    top:115px;
    left:0px;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items:center;
    width: 30px;
    height: 30px;
    border-radius:50%;
    box-shadow:0 2px 1px;
    background-color: white;
    top:115px;
    right:2px;
  }
  .list-container {
    transition:transform .2s;
    transform:translate(
      ${props => props.move}px
    );
    display: flex;

    .city-container {
      position: relative;
    }
  }
`
export default ScrollViewWrapper