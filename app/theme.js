import {Platform} from "react-native";

export let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';

// export let boldFont = 'Dosis-ExtraBold';
export let boldFont = 'Dosis-Bold';
export let semiBoldFont = 'Dosis-SemiBold';
export let mediumFont = 'Dosis-Medium';
export let regularFont = 'Dosis-Regular';


export let titleColor = '#363434';

//Nav Shared Styles
export let headerStyle = {backgroundColor: '#fff', borderBottomWidth:0, shadowColor: 'transparent'};
export let headerTitleStyle = {fontWeight: 'bold', fontSize: 17, fontFamily: font, color: titleColor};

export const imageOptions = {allowsEditing: true, aspect: [4, 3]};