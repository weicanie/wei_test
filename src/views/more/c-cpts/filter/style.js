import styled from "styled-components";

const FilterWrapper = styled.div`
position: fixed;
top:80px;
z-index:998;
height: 40px;
width: 100%;
min-width:1032px;

background-color: white;
border: 1px solid gray;
border-left:none;
border-right:none;

left: 0;
display: flex;
justify-content: center;

.list-container{
  width:1132px;
  height: 40px;
  position: fixed;
  top:80px;

  border: 1px solid gray;
  border-left:none;
  border-right:none;

  background-color: white;
  display: flex;
  align-items:center;
}
.item {
  flex-shrink:0;
  height: 30px;
  border: 1px solid gray;
  cursor: pointer;
  line-height:30px;
  text-align:center;
  margin-right:15px;
  border-radius:3px;
  padding:0px 5px;
}
.active{
  color:white;
  background-color: rgb(0, 132, 137);
}
`
export default FilterWrapper