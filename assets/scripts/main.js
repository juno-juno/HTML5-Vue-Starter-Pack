// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Homepage
  home
});

// Load Events
document.addEventListener("DOMContentLoaded", () => routes.loadEvents());
