
import styled from "styled-components";
export const Main=styled("Main")`

max-width: 1920px;
`

export const MainContainer=styled("MainContainer")`


  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  flex-direction: row;
`
export const Nav=styled("Nav")`
height:100%;
`
export const NavBar=styled("NavBar")`
display: flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
background:black;
height:85px;

`
export const ProfileCard=styled("ProfileCard")`

display: flex;
flex-direction: column;
justify-content:start;
align-items:center;
height: 100%;
background:#F2F2F2;
width: 398px;
height: 528px;

`
export const ProfileDetail=styled("ProfileDetail")`

display: flex;
flex-direction: row;
justify-content:start;
align-items:start;
height: 100%;
background:#F2F2F2;
width: 950px;
height: 528px;

`
export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
`
export const Button = styled("button")`
 
  height: 40px;
  border: none;
  font-size: ${(props) => props.fontSize}px;
  background: ${(props) => props.background};
  font-weight: ${(props) => props.fontWeight}px;
  cursor: pointer;
  `
;


