import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Protocol — Peptide & Wellness Tracker';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0c1524',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(20,184,166,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Glow orb */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)',
        }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(20,184,166,0.12)',
            border: '1px solid rgba(20,184,166,0.3)',
            borderRadius: '999px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#14b8a6' }} />
            <span style={{ color: '#14b8a6', fontSize: '18px', fontWeight: 600 }}>
              Available on the App Store
            </span>
          </div>

          {/* Headline */}
          <div style={{
            fontSize: '80px',
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.05,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #14b8a6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            It&apos;s all about
            <br />
            the Protocol.
          </div>

          {/* Subheadline */}
          <div style={{
            fontSize: '26px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '700px',
          }}>
            The most complete peptide &amp; wellness tracker.
            Built for precision. Designed for privacy.
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '40px',
          }}>
            {['🔥 89-day streak', '✓ 100% adherence', '🔒 Zero data shared'].map((s) => (
              <div key={s} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '999px',
                padding: '10px 20px',
                color: '#cbd5e1',
                fontSize: '18px',
              }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wordmark */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span style={{ color: '#475569', fontSize: '18px', fontWeight: 600, letterSpacing: '2px' }}>
            PROTOCOLAPP.HEALTH
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
