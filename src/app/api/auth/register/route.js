//to fetch:http://localhost:3000/api/auth/register

import connect from "@/utils/db"
import User from "@/models/user/user-model"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"


export const POST = async (req) => { 
    const { name, email, password } = await req.json();
    
    await connect()

    const hashedPassword = await bcrypt.hash(password, 5);
    try {
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return NextResponse.json({ message: "Username already exists" }, { status: 400 });
        }
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to create a new user", error: error.message }, { status: 500 });
    }
}