const STORAGE_KEY_TOKEN = 'token';
const STORAGE_KEY_LAST_PAGE = 'pageBeforeAuthRedirect';
const GITHUB_LOGIN_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/oauth/github/login`;

const saveValue = (key, val) => sessionStorage.setItem(key, val);
const clearValue = (key) => sessionStorage.removeItem(key);
const getValue = (key) => sessionStorage.getItem(key);
const getAndRemoveValue = (key) => {
  const val = getValue(key);
  clearValue(key);
  return val;
};

const setSession = ({token}) => {
  if (token) saveValue(STORAGE_KEY_TOKEN, token);
  else clearValue(STORAGE_KEY_TOKEN);
};

export const loginWithRedirect = () => {
  saveValue(STORAGE_KEY_LAST_PAGE, window.location.href);
  window.location.assign(GITHUB_LOGIN_URL);
};

export const handleAuthRedirect = async () => {
  const parsedUrl = new URL(window.location.href);
  const githubAccessToken = parsedUrl.searchParams.get("access_token");
  const pageToShow = getAndRemoveValue(STORAGE_KEY_LAST_PAGE) || "/";
  if (githubAccessToken == null || !githubAccessToken.trim().length) {
    setSession({});
    window.location.replace(window.location.protocol + "//" + window.location.host);
  } else {
    setSession({token: githubAccessToken});
    window.location.replace(pageToShow);
  }
};

export const logout = () => {
  setSession({});
  window.location.replace(window.location.protocol + "//" + window.location.host);
};

export const getToken = () => getValue(STORAGE_KEY_TOKEN);
export const hasToken = () => {
  return !!getToken();
};
