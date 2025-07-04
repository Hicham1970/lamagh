import { NextResponse } from 'next/server';
import connect from "@/utils/db";
import Post from "@/models/post/post-model";


// http://localhost:3000/api/posts/id

export const GET = async (req, { params }) => {

    const { id } = params;


    try {
        await connect()

        let post = await Post.findById(id);
        if (!post) {
            post = [];
        }
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse("Failed to fetch posts", { status: 500 });
    }
}


export const DELETE = async (req, { params }) => {

    const { id } = params;


    try {
        await connect()

        await Post.findByIdAndDelete(id);
        
        return new NextResponse("Post has been deleted", { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse("Failed to fetch posts", { status: 500 });
    }
}