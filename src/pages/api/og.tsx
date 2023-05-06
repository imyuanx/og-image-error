import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(request: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: 'white',
          backgroundImage: 'radial-gradient(#bfbfbf 0.5px,transparent 0%)', // TODO: Throw a error: Error [TypeError]: Cannot read properties of undefined (reading '0')
          // backgroundImage: 'radial-gradient(circle at 25px 25px, #bfbfbf 2%,transparent 0%)', // It's work
          backgroundSize: '11px 11px',
        }}
      >
        👋 Hello 你好 नमस्ते こんにちは สวัสดีค่ะ 안녕 добрий день Hallá
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
