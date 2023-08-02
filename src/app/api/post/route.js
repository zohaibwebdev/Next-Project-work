import Post from "@/models/Post";
import connect from "@/utilis/dbConfig";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
