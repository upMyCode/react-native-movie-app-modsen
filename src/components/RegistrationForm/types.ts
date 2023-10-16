export interface FormValues {
  username: string;
  usersurname: string;
  useremail: string;
  userpassword: string;
}

export interface RegistrationFormProps {
  setModalName: React.Dispatch<React.SetStateAction<string>>;
  modalName: string;
}
