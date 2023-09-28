interface USER {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
  userpassword: string;
}

interface User {
  user: USER | null;
}

export interface State {
  createUserSlice: User;
}
