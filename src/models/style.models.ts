
export interface IFontStyle {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
}
  
export interface ITextStyle {
  textTransform: string;
  textDecoration?: string;
}

export interface IPositionStyle {
  width: string;
  height: string;
  top?: string;
  bottom?: string;
  padding?: string;
}

export interface IBorderStyle {
  border: string;
  borderRadius: string
}
  
export interface IButtonStyle {
  bgColor?: string;  
  bgFocusColor?: string;
  fontFamily?: string;
  focusFontFamily?: string;
  fontSize?: string;
  focusFontSize?: string;
  fontWeight?: string;
  focusFontWeight?: string;
  fontColor?: string;
  focusFontColor?: string;
  textTransform?: string;
  textDecoration?: string;
  gap?: string;
  padding?: string;
  border?: string;
  borderRadius?: string
}
