interface Comment {
  currentDate: string;
  comment: string;
  userId: string;
}

const convertCommentsToArray = (data: Record<string, Comment>) => {
  return Object.keys(data).map((key) => {
    return {
      comment: data[key].comment,
      userId: data[key].userId,
      currentDate: data[key].currentDate,
    };
  });
};

export default convertCommentsToArray;
