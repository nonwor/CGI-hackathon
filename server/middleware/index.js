const Admin = require('../models/admins');

const verifyAdmin = async (req, res, next) => {
    const adminId = req.headers.authorization; 

    if (!adminId) {
        return res.status(401).json({ error: 'Unauthorized: Admin ID is missing' });
    }

    try {
        const admin = await Admin.findById(adminId);
        if (!admin) {
        return res.status(401).json({ error: 'Unauthorized: Admin ID not found' });
        }

        req.admin = admin;
        next(); 

    } catch (error) {
        res.status(500).json({ error: 'Failed to check admin existence' });
    }
};


module.exports = { verifyAdmin }