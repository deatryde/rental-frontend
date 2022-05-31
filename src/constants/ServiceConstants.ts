export const BASE_URL = getDashboardBaseUrl();
export const AUTH_URL = BASE_URL + '/auth/';

function getDashboardBaseUrl() {
  let baseUrl;
  let windowUrl = window.location.href;

  if (windowUrl) {
    baseUrl = windowUrl.split('/', 4).join('/');
  }

  if (window.location.hostname == 'localhost') {
    baseUrl = 'http://localhost:8080';
  }

  return baseUrl;
}
