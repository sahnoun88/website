import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import { UserModel } from "../../../models/User";

export const POST = async (request: Request) => {
  try {
    await connectToDatabase();
    const data = await request.json();
    const existingUser = await UserModel.findOne({ email: data.email });

    if (existingUser) {
      data.message = { text: data.message, date: new Date() };
      await UserModel.updateOne(
        { email: data.email },
        { $push: { message: data.message } }
      );
      return NextResponse.json(
        { message: "Your Message has Been recived " },
        { status: 200 }
      );
    }

    await UserModel.create({
      ...data,
      message: { text: data.message, date: new Date() },
    });

    return NextResponse.json(
      { message: "Your Submission has been sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
