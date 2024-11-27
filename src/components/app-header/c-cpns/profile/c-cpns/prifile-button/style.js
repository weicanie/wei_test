import styled from "styled-components";

const ButtonWrapper = styled.div`
background-color: #fff;
margin-right:20px;
display: flex;
justify-content:center;
align-items:center;

border: 1.5px solid gray;
border-radius:24px;
padding:10px 10px;
.toolkit {
  margin-right:10px;
}
${props => props.theme.mixin.boxShadow}

.toolkit svg, .avater svg {
  color:black;
}

`
export default ButtonWrapper