import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv()

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Cek apakah header Authorization ada
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Missing or invalid authorization header" });
    }

    // Ekstrak token dari header
    const accessToken = authHeader.split(" ")[1];

    try {
        // Verifikasi token
        const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);

        // Simpan data pengguna dari token ke request (opsional)
        req.user = decodedToken;

        // Lanjutkan ke handler berikutnya
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired access token" });
    }
};
