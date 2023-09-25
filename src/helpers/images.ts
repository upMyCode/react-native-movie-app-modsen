import {
  CrossIMG,
  EmailIMG,
  LogoIMG,
  PasswordIMG,
  UserRegistrationNameIMG,
  UserSurnameIMG,
} from '@assets';
import { Image } from 'react-native';

export const ModsenLogoIMG = Image.resolveAssetSource(LogoIMG).uri;
export const UserNameIMG = Image.resolveAssetSource(
  UserRegistrationNameIMG
).uri;
export const CrossButtonIMG = Image.resolveAssetSource(CrossIMG).uri;
export const UserSurnameImg = Image.resolveAssetSource(UserSurnameIMG).uri;
export const UserEmail = Image.resolveAssetSource(EmailIMG).uri;
export const UserPassword = Image.resolveAssetSource(PasswordIMG).uri;
