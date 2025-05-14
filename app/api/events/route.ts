import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb"; // assumed default export

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const events = await db.collection("events").find().toArray();

    // Optionally convert ObjectId to string if needed
    const formatted = events.map((event) => ({
      ...event,
      _id: event._id.toString(),
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return NextResponse.json(
      { error: "Failed to load events" },
      { status: 500 }
    );
  }
}
