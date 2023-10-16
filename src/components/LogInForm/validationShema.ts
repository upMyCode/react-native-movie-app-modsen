import * as yup from 'yup';

const validationSchema = yup.object().shape({
  useremail: yup
    .string()
    .required('E-mail is required!')
    .email('You’ve entered invalid mail!'),
  userpassword: yup
    .string()
    .required('The Password is required!')
    .min(4, 'Password min characters is 4')
    .max(16, 'Password max characters is 16')

    .matches(
      /^((?=^\S+$)(?=.*\d)(?=.*[a-zA-Z]).{4,})$/,
      'Password must be complex and has no backspaces!'
    ),
});

export default validationSchema;
