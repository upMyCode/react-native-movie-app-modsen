import {
  ActiveAwardIMG,
  ActiveHomeIMG,
  ActiveTicketIMG,
  ActiveUserProfileIMG,
  CrossIMG,
  EmailIMG,
  LogoIMG,
  PasswordIMG,
  UnActiveAwardIMG,
  UnActiveHomeIMG,
  UnActiveTicketIMG,
  UnActiveUserProfileIMG,
  UserRegistrationNameIMG,
  UserSurnameIMG,
} from '@assets';
import { Image } from 'react-native';

export const ActiveHome = Image.resolveAssetSource(ActiveHomeIMG).uri;
export const ActiveAward = Image.resolveAssetSource(ActiveAwardIMG).uri;
export const ActiveTicket = Image.resolveAssetSource(ActiveTicketIMG).uri;
export const ActiveUserProfile =
  Image.resolveAssetSource(ActiveUserProfileIMG).uri;
export const ModsenLogoIMG = Image.resolveAssetSource(LogoIMG).uri;
export const UserNameIMG = Image.resolveAssetSource(
  UserRegistrationNameIMG
).uri;
export const CrossButtonIMG = Image.resolveAssetSource(CrossIMG).uri;
export const UserSurnameImg = Image.resolveAssetSource(UserSurnameIMG).uri;
export const UserEmail = Image.resolveAssetSource(EmailIMG).uri;
export const UserPassword = Image.resolveAssetSource(PasswordIMG).uri;
export const UnActiveHome = Image.resolveAssetSource(UnActiveHomeIMG).uri;
export const UnActiveAward = Image.resolveAssetSource(UnActiveAwardIMG).uri;
export const UnActiveTicket = Image.resolveAssetSource(UnActiveTicketIMG).uri;
export const UnActiveUserProfile = Image.resolveAssetSource(
  UnActiveUserProfileIMG
).uri;
