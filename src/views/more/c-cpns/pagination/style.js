import styled from 'styled-components'

const PaginationWrapper = styled.div`
padding-top:30px;
ul {
  position: relative;
  left:50%;
  /* 滚动且溢出隐藏，不能直接使用自己的50% */
  transform:translate(-174px);
}
.tip {
  text-align:center;
  font-size:14px;
}
.Mui-selected {
  color:white;
  background-color: black !important;
}
`
export default PaginationWrapper