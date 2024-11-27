import styled from "styled-components";

const ProfilerWrapper = styled.div`
flex:1;
display: flex;
justify-content:flex-end;
height:48px;

.profile-login, .profile-submit ,.profile-global{
  margin-right:20px;
  display: flex;
  justify-content:center;
  align-items:center;

  font-weight:bold;
  padding:0 10px;
  &:hover {
    border-radius:25px;
    background-color: gray;
  }
}
.profile-global svg {
  color:${props => {
  if(props.bgColor === 'transparent') {
    return 'white'
  } else {
    return 'black'
  }
}};
}
.profile-global {
  padding:0 15px;
  &:hover {
    border-radius:30px;
    background-color: gray;
  }
}
`
export default ProfilerWrapper