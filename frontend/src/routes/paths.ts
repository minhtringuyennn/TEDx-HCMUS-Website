enum Path {
  ALL = '*',
  ROOT = '/',
  App = 'app',
  Auth = 'auth',
  NotFound = '404',
}

export enum AppPath {
  Home = 'home',
  Track = 'track-ticket',
  Purchase = 'purchase-ticket',
}

export enum AuthPath {
  ROOT = '',
  Login = 'login',
  Logout = 'logout',
}

export default Path;
