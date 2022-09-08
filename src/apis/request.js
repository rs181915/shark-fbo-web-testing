import { dataFetcher, myIpAddress } from '.';
import ep from './endpoints';

const methods = {
  post: 'POST',
  get: 'GET',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE'

};
const getQuery = (formData) => {
  const query = new URLSearchParams(formData).toString();
  return `?${query}`;
};

export const endpoints = ep;
export const requestBackendVersion = (formData) => dataFetcher({ url: endpoints.backendVersion, method: methods.get, data: formData });

// auth apis...
export const requestSignIn = (formData) => dataFetcher({ url: endpoints.signIn, method: methods.post, data: formData });
export const requestSignUp = (formData) => dataFetcher({ url: endpoints.signUp, method: methods.post, data: formData });
export const requestSignOut = (formData) => dataFetcher({ url: endpoints.signOut, method: methods.post, data: formData });

// ip address
export const requestIpAddress = (formData) => myIpAddress(formData);
