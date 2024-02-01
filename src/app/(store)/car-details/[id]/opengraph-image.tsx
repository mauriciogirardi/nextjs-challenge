/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og"
import colors from "tailwindcss/colors"

import { getCar } from "@/api/get-car"
import { env } from "@/env"
export const runtime = "edge"

export const alt = "About Acme"
export const size = {
  width: 1200,
  height: 630
}

export const contentType = "image/png"

export default async function OgImage({ params }: { params: { id: string } }) {
  const { car } = await getCar(params.id)
  const pathImage = new URL(car.img, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <img
          src={pathImage}
          alt={`Carro ${car.car}`}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
    ),
    {
      ...size
    }
  )
}
