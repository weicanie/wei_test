import styled from "styled-components";

const SearchBarrWrapper = styled.div`
width:375px;
height:48px;
svg {
  color:white !important;
}

.cover {
  position: absolute;
  top: 80px;
  transition:all .2s;
  height: ${props => {return props.isOut? 90 : 0}}px;
  right: 0;
  left: 0;
  background-color: ${props => {
  return props.bgColor
}};
}
.search-bar {
  color:black !important;
  background-color: white;
  border: 1.5px solid gray;
  border-radius:24px;
  height:48px;
  width: 100%;
  position: relative;
  left:50%;
  transform:translate(-50%);

  padding-right:10px;
  display: flex;
  justify-content:space-between;
  align-items:center;

  .text {
    padding-left:20px;
    font-weight:bold;
  }
  .icon {
    width:35px;
    height:35px;
    border-radius:50%;
    background-color: red;
    color:white;

    display: flex;
    justify-content:center;
    align-items:center;
  }



  ${props =>{return props.theme.mixin.boxShadow} }
}

.search-bar-out {
  height:48px;
  width: 50%;
  position: fixed;
  left:50%;
  transform:translate(-50%);
  display: flex;
  justify-content: center;
  padding-right:10px;

  .text {
    margin-right:10px;
    font-weight:bold;
  }
}

/* 动画 */
.search-enter ,.search-exit-done{
  border-radius:24px;
  height:48px;
  width: 100%;
  transform:translate(-50%, 0);
}
.search-enter-active {
  border-radius:32px;
  height:68px;
  width: 200%;
  transform:translate(-50%, 50px);
  transition:all .2s !important;
}
.search-enter-done,.search-exit {
  border-radius:32px;
  height:68px;
  width: 200%;
  transform:translate(-50%, 50px);
}
.search-exit-active {
  border-radius:24px;
  height:48px;
  transform:translate(-50%, 0);
  width: 100%;
  transition:all .2s !important;
}


`
export default SearchBarrWrapper