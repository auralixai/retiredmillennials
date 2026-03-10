import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to top right, #C5A059, #E2C07D)',
          color: 'white',
          fontSize: 16,
          fontWeight: 900,
          borderRadius: '25%',
          fontFamily: 'serif'
        }}
      >
        RM
      </div>
    ),
    {
      ...size,
    }
  )
}
