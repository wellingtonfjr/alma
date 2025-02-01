import { destroyCookie, parseCookies } from 'nookies';

export enum COOKIES {
  AUTH_COOKIE = 'auth'
}

export const getCookie = (cookie: COOKIES) => {
  const cookies = parseCookies();
  return cookies[cookie];
};

export const removeCookie = (cookie: COOKIES) => {
  destroyCookie(undefined, cookie);
};
