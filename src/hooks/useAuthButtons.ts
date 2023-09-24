import { FacebookIMG, GithubIMG, GoogleIMG, PersonIMG } from '@assets';

export default function useAuthButtons() {
  const BUTTONS_LIST = [
    {
      id: '1',
      bgColor: '#404040',
      textContent: 'Create an Account',
      textColor: '#FFFFFF',
      logo: PersonIMG,
      bRadius: 10,
      width: 310,
      height: 45,
    },
    {
      id: '2',
      bgColor: '#FFFFFF',
      textContent: 'Continue with Google',
      textColor: '#000000',
      logo: GoogleIMG,
      bRadius: 10,
      width: 310,
      height: 45,
    },
    {
      id: '3',
      bgColor: '#1877F2',
      textContent: 'Sign up with Facebook',
      textColor: '#FFFFFF',
      logo: FacebookIMG,
      bRadius: 10,
      width: 310,
      height: 45,
    },
    {
      id: '4',
      bgColor: '#000000',
      textContent: 'Sign up with GitHub',
      textColor: '#FFFFFF',
      logo: GithubIMG,
      bRadius: 10,
      width: 310,
      height: 45,
    },
  ];

  return { BUTTONS_LIST };
}
