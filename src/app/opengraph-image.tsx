import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Retired Millennials'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          color: '#000000',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <div
            style={{
              width: 140,
              height: 140,
              background: 'linear-gradient(to top right, #C5A059, #E2C07D)',
              borderRadius: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 72,
              fontWeight: 900,
            }}
          >
            RM
          </div>
        </div>
        <div style={{ fontSize: 72, marginTop: 40, fontWeight: 900, fontFamily: 'serif' }}>
          Retired Millennials
        </div>
        <div style={{ fontSize: 40, marginTop: 20, color: '#C5A059', fontStyle: 'italic', fontFamily: 'serif' }}>
          Retired, not old.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
