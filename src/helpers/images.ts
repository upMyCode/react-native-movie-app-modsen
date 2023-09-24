import { LogoIMG, UserRegistrationNameIMG } from '@assets';
import { Image } from 'react-native';

export const ModsenLogoIMG = Image.resolveAssetSource(LogoIMG).uri;
export const UserNameIMG = Image.resolveAssetSource(
  UserRegistrationNameIMG
).uri;
