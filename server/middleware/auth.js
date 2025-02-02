import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication required' });
  }
};

export const checkWebDevRole = (req, res, next) => {
  if (req.user.role !== 'webdev') {
    return res.status(403).json({ message: 'Access denied. Web dev role required.' });
  }
  next();
};

export const checkAdminRole = (req, res, next) => {
  if (!['webdev', 'admin'].includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }
  next();
};