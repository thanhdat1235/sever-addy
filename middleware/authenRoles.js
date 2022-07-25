function authBasicRole(req, res, next) {
  const roles = ["User", "Admin", "Manager"];

  if (roles.includes(req.role)) next();

  return res.sendStatus(403);
}

function authManagerRole(req, res, next) {
  const roles = ["Admin", "Manager"];

  if (!roles.includes(req.user.role)) {
    return res.sendStatus(403);
  }
  next();
}

function authAdminRole(req, res, next) {
  const roles = ["Admin"];

  if (!roles.includes(req.user.role)) {
    return res.sendStatus(403);
  }
  next();
}

module.exports = {
  authManagerRole,
  authBasicRole,
  authAdminRole,
};
