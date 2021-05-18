import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      alignItems: 'center'
    },
    base: {
      width: RFValue(32),
      height: RFValue(32),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
      fontSize: RFValue(16),
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      ...appStyle.textDayStyle
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: RFValue(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
      borderRadius: RFValue(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.dotStyle
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
