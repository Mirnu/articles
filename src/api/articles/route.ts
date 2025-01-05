import { prisma } from "@/shared/lib/db";
import { getArticles } from "@/widgets/articles-tape/actions/get-articles";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const page = req.nextUrl.searchParams.get("page") ?? "0";

    console.log(1);

    return NextResponse.json(await prisma.article.findMany());
}
