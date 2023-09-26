import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Name is required!')
    .matches(/^[a-zA-Z]+$/, 'Must be only letters')
    .min(2, 'The minimum letters be 2!')
    .max(32, 'The maximum letters be 32!'),
  usersurname: yup
    .string()
    .required('Surname is required!')
    .matches(/^[a-zA-Z]+$/, 'Must be only letters!')
    .min(2, 'The minimum letters be 2!')
    .max(32, 'The maximum letters be 32!'),
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
