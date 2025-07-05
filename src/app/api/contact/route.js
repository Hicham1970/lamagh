import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contact from "@/models/contact/contact-model";

export async function POST(request) {
  console.log("POST request received");
  try {
    await connect();
    console.log("Connected to MongoDB");

    const { name, email, message, username } = await request.json();
    console.log("Received data:", { name, email, message, username });

    const newContact = new Contact({ name, email, message, username });
    console.log("New contact:", newContact);

    try {
      await newContact.save();
      console.log("Contact saved successfully");
      return new NextResponse("Message sent successfully", { status: 201 });
    } catch (err) {
      console.error("Error saving contact:", err);
      return new NextResponse("Error sending message", { status: 500 });
    }
  } catch (error) {
    console.error("Error saving contact message:", error);
    return new NextResponse("Error sending message", { status: 500 });
  }
}