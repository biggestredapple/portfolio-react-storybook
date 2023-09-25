import styled from "styled-components";
import { Link } from "react-router-dom";
import { IFontStyle, IPositionStyle, IBorderStyle, ITextStyle, IButtonStyle } from "../../models";

export const NavbarContainer = styled.div<{
  positionStyle: IPositionStyle
  logoAndName: boolean
  bgColor: string
  borderStyle?: IBorderStyle
}>`
  background-color: ${props => props.bgColor};
  color: #000;
  height: ${props => props.positionStyle.height};
  width: ${props => props.positionStyle.width};
  margin: 0;
  position: fixed;
  top: ${props => props.positionStyle.top};
  bottom: ${props => props.positionStyle.bottom};
  display: flex;
  justify-content: ${props => props.logoAndName ? 'space-between' : 'center'};
  border: ${props => props.borderStyle && props.borderStyle.border};
  border-radius: ${props => props.borderStyle && props.borderStyle.borderRadius};
  padding: ${props => !props.positionStyle.padding ? '30px 20px' : props.positionStyle.padding };
  box-sizing: border-box;
  min-width: 480px;

  @media (max-width: 780px) {
    justify-content: center;
  }

`
export const LogoAndName = styled.div<{logoAndName: boolean}>`
  display: ${props => props.logoAndName ? 'flex' : 'none'};
  gap: 10px;
  cursor: pointer;

  @media (max-width: 780px) {
    display: none;
  }
`

export const Img = styled.img<{
  showLogo: boolean
}>`
  width: auto;
  height: 100%;
  display: ${props => !props.showLogo && 'none'}
`

export const Name = styled.div<{
  nameFont?: IFontStyle
  userInfoNameTextStyle?: ITextStyle
}>`
  align-self: center;=
  font-family: ${props => props.nameFont && !!props.nameFont.fontFamily ? props.nameFont.fontFamily : 'Montserrat,sans-serif' };
  font-size: ${props => props.nameFont && !!props.nameFont.fontSize ? props.nameFont.fontSize : '35px'};
  font-weight: ${props => props.nameFont && !!props.nameFont.fontWeight ? props.nameFont.fontWeight : '700'};
  color: ${props => props.nameFont && !!props.nameFont.fontColor ? props.nameFont.fontColor : '#222f5c'};
  text-transform: ${props => props.userInfoNameTextStyle && !!props.userInfoNameTextStyle.textTransform ? props.userInfoNameTextStyle.textTransform : 'none' }
`


export const ActionButtonContainer = styled.div<{
  gap?: string
}>`
  display: flex;
  gap: ${props => props.gap || "10px"};
  align-self: center;
`

export const ActionButton = styled(Link)<{
  menuItemStyle?: IButtonStyle
  focus: boolean
}>`
  background-color: ${props => !props.focus ? (!!props.menuItemStyle && !!props.menuItemStyle.bgColor ? props.menuItemStyle.bgColor : '#d4e7fe') : (!!props.menuItemStyle && !!props.menuItemStyle.bgFocusColor ? props.menuItemStyle.bgFocusColor : '#fff') };
  border: none;
  font-family: ${props => !props.focus ? (!!props.menuItemStyle && !!props.menuItemStyle.fontFamily ? props.menuItemStyle.fontFamily : 'Montserrat,sans-serif') : (!!props.menuItemStyle && !!props.menuItemStyle.focusFontFamily ? props.menuItemStyle.focusFontFamily : 'Montserrat,sans-serif') };
  font-size: ${props => !props.focus ? (!!props.menuItemStyle && !!props.menuItemStyle.fontSize ? props.menuItemStyle.fontSize : '18px') : (!!props.menuItemStyle && !!props.menuItemStyle.focusFontSize ? props.menuItemStyle.focusFontSize : '18px')};
  font-weight: ${props => !props.focus ? (!!props.menuItemStyle && !!props.menuItemStyle.fontWeight ? props.menuItemStyle.fontWeight : '400') : (!!props.menuItemStyle && !!props.menuItemStyle.focusFontWeight ? props.menuItemStyle.focusFontWeight : '400')};
  color: ${props => !props.focus ? (!!props.menuItemStyle && !!props.menuItemStyle.fontColor ? props.menuItemStyle.fontColor : '#222f5c') : (!!props.menuItemStyle && !!props.menuItemStyle.focusFontWeight ? props.menuItemStyle.focusFontWeight : '#222f5c')};
  cursor: pointer;
  text-decoration: ${props => !!props.menuItemStyle && !!props.menuItemStyle.textDecoration ? props.menuItemStyle.textDecoration : 'none' };
  text-transform: ${props => !!props.menuItemStyle && !!props.menuItemStyle.textTransform ? props.menuItemStyle.textTransform : 'none' };
  padding: ${props => props.menuItemStyle?.padding};
  border: ${props => props.menuItemStyle?.border};
  border-radius: ${props => props.menuItemStyle?.borderRadius};
`