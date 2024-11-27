import styled from "styled-components";

const DemoWrapper = styled.div`
.list {
  display: flex;
  .item {
    width: 100px;
    height: 100px;
    background-color: pink;
    border: 1px solid #000;
  }
}
.show, .hide {
  position:fixed;
  top: 150px;
  cursor: pointer;
}


.rtg_list-enter {
  transform:translate(0,-100px);
}

.rtg_list-enter-active {
  transform:translate(0);
  transition: transform .5s ease;
}
.rtg_list-enter-done {
  transform:translate(0);
}
.rtg_list-exit {
  transform:translate(0);
}

.rtg_list-exit-active {
  transform:translate(0,-100px);
  transition: transform .5s ease;
}
.rtg_list-exit-done {
  transform:translate(0,-100px);
  transition: transform .5s ease;
}

`
export default DemoWrapper