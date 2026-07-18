/**
 * CSSFloatingShape — CSS-only animated geometric shapes
 * Digunakan sebagai fallback di mobile menggantikan object 3D WebGL.
 *
 * Setiap index punya bentuk yang menyerupai padanan 3D-nya:
 *  0 → Hexagon  (icosahedron)
 *  1 → Pentagon (dodecahedron)
 *  2 → Triangle (tetrahedron)
 *  3 → Diamond  (octahedron)
 */

// Konfigurasi per-index: clip-path, gradien, glow, timing animasi
const CSS_SHAPE_CONFIGS = {
  0: {
    // Hexagon — icosahedron
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    gradient: 'linear-gradient(135deg, #8aaeff 0%, #5e7bff 40%, #2a3fbf 100%)',
    glow: 'rgba(94, 123, 255, 0.45)',
    floatDuration: '6s',
    spinDuration: '14s',
    floatDelay: '0s',
  },
  1: {
    // Pentagon — dodecahedron
    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    gradient: 'linear-gradient(135deg, #a0bcff 0%, #76a2f9 45%, #3355cc 100%)',
    glow: 'rgba(118, 162, 249, 0.42)',
    floatDuration: '8s',
    spinDuration: '18s',
    floatDelay: '-2s',
  },
  2: {
    // Triangle — tetrahedron
    clipPath: 'polygon(50% 0%, 100% 87%, 0% 87%)',
    gradient: 'linear-gradient(160deg, #90b2ff 0%, #5577ee 50%, #243dc0 100%)',
    glow: 'rgba(118, 162, 249, 0.38)',
    floatDuration: '5s',
    spinDuration: '11s',
    floatDelay: '-1s',
  },
  3: {
    // Diamond — octahedron
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    gradient: 'linear-gradient(135deg, #7898ff 0%, #4466dd 45%, #1e35aa 100%)',
    glow: 'rgba(118, 162, 249, 0.40)',
    floatDuration: '7s',
    spinDuration: '16s',
    floatDelay: '-3s',
  },
};

/**
 * @param {number} index     - Index shape (0-3), memetakan ke konfigurasi di atas
 * @param {number} size      - Ukuran dalam px (dari SHAPE_CONFIGS.position.mobileSize)
 */
export const CSSFloatingShape = ({ index, size }) => {
  const cfg = CSS_SHAPE_CONFIGS[index] ?? CSS_SHAPE_CONFIGS[0];

  return (
    // Wrapper: animasi float (translateY) — tidak konflik dengan spin
    <div
      className="css-shape-float-wrapper"
      style={{
        '--float-duration': cfg.floatDuration,
        '--float-delay':    cfg.floatDelay,
        width:  size,
        height: size,
      }}
    >
      {/* Body: animasi spin (rotate) + visual shape */}
      <div
        className="css-shape-body"
        style={{
          '--clip-path':       cfg.clipPath,
          '--shape-gradient':  cfg.gradient,
          '--shape-glow':      cfg.glow,
          '--spin-duration':   cfg.spinDuration,
        }}
      />
    </div>
  );
};
