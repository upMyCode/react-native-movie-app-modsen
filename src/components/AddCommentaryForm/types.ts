export interface FormValues {
  comment: string;
}

export interface AddCommentaryFormProps {
  imdbid: string;
  setCommentChangeStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
