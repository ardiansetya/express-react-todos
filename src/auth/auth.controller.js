import { prisma } from "../db/index.js";
import bcryptjs from "bcryptjs";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const router = Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(422).json({ message: "Missing required fields" });
        }

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })
        if (!user) {
            return res.status(401).json({ message: "email or password is incorrect" });
        }

        const matchedPassword = await bcryptjs.compare(password, user.password);
        if (!matchedPassword) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        res.status(200).json({token: accessToken, message: "Login successful" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
})

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
            select: {
                name: true,
                email: true
            }
        });
        return res.status(201).json({ user, message: "User created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
})

export default router