export interface Comment {
  currentDate: string;
  comment: string;
  userId: string;
}

export interface USER {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
}

export interface CommentProps {
  comment: Comment;
  userData: USER | null;
}
