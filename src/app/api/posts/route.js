import { NextResponse } from 'next/server';
import connect from "@/utils/db";
import Post from "@/models/post/post-model";


// http://localhost:3000/api/posts

export const GET = async (req) => { 
    //fetch
    try {
        await connect()

        let posts = await Post.find();
        if (!posts || posts.length === 0) {
            posts = [];
        }
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse("Failed to fetch posts", { status: 500 });
    }
}