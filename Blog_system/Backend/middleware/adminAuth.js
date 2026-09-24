import jwt from "jsonwebtoken";

export function requireAdmin(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")
    ) {
        return res.status(401).json({
            message: "Admin authentification required"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET

        );
        if (decoded.role !== "admin") {

        }
    }
}