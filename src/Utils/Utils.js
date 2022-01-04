import { auth } from '../Firebase/index';
import { toast } from 'react-toastify';

export const notifyError = (error) => toast.error(error);
export const notifySuccess = (success) =>
  toast.success(success, { icon: '🚀' });

export const logout = () => {
  auth.signOut();
};

export const setToken = (token) => {
  sessionStorage.setItem('token', token);
};

export const getToken = () => {
  return sessionStorage.getItem('token')
    ? null
    : sessionStorage.getItem('token');
};

export const getPermission = () => {
  if (!sessionStorage.getItem('user')) return null;
  return JSON.parse(sessionStorage.getItem('user')).permission;
};
