const TOKEN_KEY = "token";

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = () => {
  const token = createToken()
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export const createToken = () => {
  return 'super_secret_token';
};

export default { getToken, saveToken, deleteToken, createToken };
