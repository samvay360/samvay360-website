import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/sanity/client";

/**
 * Called by a Sanity webhook whenever a document is published, so the live
 * site shows the change on the next visit instead of waiting for the hourly
 * refresh. The webhook must be signed with SANITY_REVALIDATE_SECRET.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET is not set" }, { status: 500 });
  }

  try {
    // `true` waits for Sanity's API to have the new content before we clear the cache.
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    // `expire: 0` makes the next visitor get fresh content rather than a stale copy.
    revalidateTag(SANITY_TAG, { expire: 0 });
    return NextResponse.json({ revalidated: true, type: body?._type ?? null });
  } catch (error) {
    console.error("[revalidate]", error);
    return NextResponse.json({ message: "Could not read webhook body" }, { status: 400 });
  }
}
