// middleware/session.js

import session from "express-session";

const sessionMiddleware = session({
  secret: "secret", // Change this to a secure secret for production
  resave: false,
  saveUninitialized: true
});

const trackLastVisit = (req, res, next) => {
  if (req.session.lastVisit) {
    console.log('Last visit:', req.session.lastVisit);
  } else {
    console.log('Welcome, first time visitor!');
  }

  req.session.lastVisit = new Date();
  next();
};

export { sessionMiddleware, trackLastVisit };
