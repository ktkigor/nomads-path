import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const places = await db.collection("places").find().toArray();

    const formatted = places.map((place) => ({
      ...place,
      _id: place._id.toString(),
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch places:", error);
    return NextResponse.json(
      { error: "Failed to load places" },
      { status: 500 }
    );
  }
}
