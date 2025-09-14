/* eslint-disable @typescript-eslint/no-explicit-any */
import { allPens } from "content-collections";
import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Trong Duong - Open Graph Image";
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const pen = await allPens.find((pen) => pen._meta.path === params.id);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "#0F0F0F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "70%",
            width: "100%",
            border: "1px dashed rgba(255, 255, 255, 0.1)",
            borderLeft: "0",
            borderRight: "0",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "50%",
            border: "1px dashed rgba(255, 255, 255, 0.1)",
            borderTop: "0",
            borderBottom: "0",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            // background: "rgba(0, 0, 0, 0.2)",
          }}
        />

        <div
          style={{
            // width: "128px",
            // height: "128px",
            padding: "16px 32px",
            // background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            // border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "rgb(255, 255, 255, 0.8)",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "56px",
            }}
          >
            {pen?.title}
          </span>
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "24px",
              color: "rgb(255, 255, 255, 0.3)",
              maxWidth: "600px",
            }}
          >
            {pen?.summary}
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "18px",
            color: "rgb(255, 255, 255, 0.3)",
          }}
        >
          Made by Trong Duong
        </div>
      </div>
    ),
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
