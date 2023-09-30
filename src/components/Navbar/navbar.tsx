import React from "react";
import { useLocation } from "react-router-dom";
import { NavbarContainer, LogoAndName, ActionButtonContainer, ActionButton, Img, Name } from "./navbar.styles";
import { IBorderStyle, IButtonStyle, IFontStyle, IPositionStyle, ITextStyle } from "../../models";

export interface IUserInfo {
  name: string;
  nameFont?: IFontStyle;
  logoAndName: boolean;
  showLogo: boolean;
  logoSrc?: string;
}

export interface IMenuItem {
  name: string;
  link: string;
}

interface NavbarProps {
  positionStyle: IPositionStyle;
  userInfo: IUserInfo;
  userInfoNameTextStyle: ITextStyle;
  borderStyle?: IBorderStyle;
  menuItemStyle?: IButtonStyle;
  menuItems: IMenuItem[];
  bgColor: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const location = useLocation()

  const { positionStyle, userInfo, bgColor, userInfoNameTextStyle, menuItemStyle, borderStyle, menuItems } = props;

  return <NavbarContainer positionStyle={positionStyle} logoAndName={userInfo.logoAndName} bgColor={bgColor} borderStyle={borderStyle}>
      <LogoAndName logoAndName={userInfo.logoAndName}>
          <Img alt="logo" src={userInfo.logoSrc} showLogo={userInfo.showLogo} />
          <Name nameFont={userInfo.nameFont} userInfoNameTextStyle={userInfoNameTextStyle}>{userInfo.name}</Name>
      </LogoAndName>
      <ActionButtonContainer gap={menuItemStyle?.gap}>
          {menuItems.map((menuItem, id) => <ActionButton menuItemStyle={menuItemStyle} key={id} to={menuItem.link} focus={ menuItem.link === location.pathname } >{menuItem.name}</ActionButton>)}
      </ActionButtonContainer>
  </NavbarContainer>
}