import jwt from "jsonwebtoken";

export function requireAdmin(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")
    ) {
        return res.status(401).json({
            
        })
    }
}