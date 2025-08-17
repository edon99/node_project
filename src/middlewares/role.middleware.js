export function isOwner(req, res, next) {

  if (req.user.role !== "owner") {
    return res.status(403).json({ message: "Forbidden: Owners only" });
  }
  next();
}
