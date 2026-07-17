import { NextResponse } from "next/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI assistant inside a Notion-like workspace.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API Error:", data);

      return NextResponse.json(
        {
          role: "assistant",
          content:
            data?.error?.message || "AI is temporarily unavailable.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        role: "assistant",
        content: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}