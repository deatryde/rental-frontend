import HTTP from '../utils/httpInstances';
import { AUTH_URL } from '../constants/ServiceConstants';

export const signinUser = (body: any) => {
  return HTTP.post(`${AUTH_URL}signin`, body);
};

export const signupUser = (body: any) => {
  return HTTP.post(`${AUTH_URL}signup`, body);
};

export const signoutUser = (body: any) => {
  return HTTP.post(`${AUTH_URL}signout`, body);
};
