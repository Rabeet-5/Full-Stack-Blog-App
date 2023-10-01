import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Get all comments
export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get('postSlug');

    

    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify(
        {
          message: "Something went wrong",
        },
        { status: 500 }
      )
    );
  }
};
