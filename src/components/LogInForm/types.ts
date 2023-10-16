export interface FormValues {
  useremail: string;
  userpassword: string;
}

export interface LogInFormProps {
  setModalName: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type StackScreensParamList = {
  WelcomeScreen: undefined;
  TabScreens: undefined;
};
