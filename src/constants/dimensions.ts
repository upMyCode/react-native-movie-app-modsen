import { Dimensions } from 'react-native';

export const WindowDimensions = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
};

export const AddCommentaryFormDimensions = {
  imageWidth: 35,
  imageHeight: 35,
  keyboardVerticalOffset: 50,
};

export const FilmDetailsScreenDimensions = {
  playImageWidth: 12,
  playImageHeight: 13,
  youTubePlayWidth: 34,
  youTubePlayHeight: 34,
  youTubePlayBorderRadius: 34,
  ticketImageWidth: 18,
  ticketImageHeight: 18,
  bookingButtonWidth: 169,
  bookingButtonHeight: 57,
  bookingButtonBorderRadius: 10,
  clockImageWidth: 12,
  clockImageHeight: 12,
  moreButtonWidth: 50,
  moreButtonHeight: 20,
  moreButtonMTop: -4,
};

export const LogInFormDimensions = {
  loginButtonWidth: 100,
  loginButtonHeight: 31,
  loginButtonBorderRadius: 10,
  loginButtonMTop: 21,
};

export const MainScreenDimensions = {
  playImageWidth: 12,
  playImageHeight: 13,
  youTubePlayWidth: 34,
  youTubePlayHeight: 34,
  youTubePlayBorderRadius: 34,
};

export const UserCommentDimensions = {
  userProfileImageWidth: 35,
  userProfileImageHeight: 35,
};

export const TopFilmItemDimensions = {
  starImageWidth: 13,
  starImageHeight: 13,
  singleArrowRightImageWidth: 10,
  singleArrowRightImageHeight: 5,
  buttonWidth: 50,
  buttonHeight: 20,
  buttonRadius: 5,
};

export const TabBarItemDimensions = {
  imageWidth: 24,
  imageHeight: 24,
};

export const SessionButtonDimensions = {
  reclinerImageWidth: 13,
  reclinerImageHeight: 15,
};

export const RegistrationScreenDimensions = {
  modalWidth1: 350,
  modalLHeight1: 30,
  modalFSize1: 20,
  modalWidth2: 310,
  modalLHeight2: 30,
  modalFSize2: 20,
  logoImageWidth: 200,
  logoImageHeight: 50,
  buttonWidth: 18,
  buttonHeight: 18,
};

export const RegistrationFormDimensions = {
  buttonWidth: 100,
  buttonHeight: 31,
  buttonBRadius: 10,
  buttonMTop: 30,
  inputMLength: 30,
  inputMLengthXL: 16,
};

export const MovieButtonDimensions = {
  buttonWidth: 71,
  buttonHeight: 22,
  buttonBRadius: 5,
};

export const AwardScreenDimensions = {
  modalWidth: 280,
  modalFSize: 24,
  modalFLineHeight: 36,
  searchIconWidth: 15,
  searchIconHeight: 15,
  filtersIconWidth: 15,
  filtersIconHeight: 15,
};

export const InputDimensions = {
  imageWidth: 24,
  imageHeight: 26,
};

export const BookingSeatsScreenDimensions = {
  modalWidth: 280,
  modalFSize: 15,
  modalFLineHeight: 23,
  imageWidth: 18,
  imageHeight: 18,
  buttonWidth: 169,
  buttonHeight: 57,
  buttonBRadius: 10,
};

export const CustomCalendarDimensions = {
  arrowIconWidth: 15,
  arrowIconHeight: 10,
  modsenIconWidth: 60,
  modsenIconHeight: 15,
};

export const SRC_WIDTH = WindowDimensions.windowWidth;
export const CARD_LENGTH = SRC_WIDTH / 2;
export const SPACING = SRC_WIDTH * 0.02;
