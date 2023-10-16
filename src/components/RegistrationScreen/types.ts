import type { ImageSourcePropType } from 'react-native';

export interface AuthTextContentProps {
  textColor: string;
}

export interface RenderAuthItemProps {
  id: string;
  bgColor: string;
  textContent: string;
  textColor: string;
  logo: ImageSourcePropType;
  bRadius: number;
  width: number;
  height: number;
  onPress: () => void;
}

export interface RenderFooterImageItemProps {
  id: string;
  logo: ImageSourcePropType;
  width: number;
  height: number;
}

export interface AuthDescriptionItemProps {
  isUnderlined: boolean;
}

export interface AuthErrors {
  googleError: string;
  facebookError: string;
  githubError: string;
}
