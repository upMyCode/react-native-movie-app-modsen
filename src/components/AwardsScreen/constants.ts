import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  searchInput: Yup.string().max(15, 'Too long'),
});

export default validationSchema;
