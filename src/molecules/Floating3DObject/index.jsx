import { Component, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Octahedron, Icosahedron, Tetrahedron, Dodecahedron } from '@react-three/drei';

// ─── WebGL support check ────────────────────────────────────────────────────
function isWebGLSupported() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// ─── Error Boundary — mencegah crash jika Three.js gagal ────────────────────
class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null; // silent fallback
    return this.props.children;
  }
}

// ─── Rotating Shape ──────────────────────────────────────────────────────────
const RotatingShape = ({
  color,
  speed,
  rotationAxis = { x: 0.5, y: 1, z: 0 },
  shapeType = 'octahedron',
  shapeSize = 1,
  metalness = 0.2,
  roughness = 0.1,
  clearcoat = 1.0,
}) => {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * rotationAxis.x;
      meshRef.current.rotation.y += delta * speed * rotationAxis.y;
      meshRef.current.rotation.z += delta * speed * rotationAxis.z;
    }
  });

  const material = (
    <meshPhysicalMaterial
      color={color}
      metalness={metalness}
      roughness={roughness}
      clearcoat={clearcoat}
      clearcoatRoughness={0.1}
      reflectivity={0.6}
      envMapIntensity={1.2}
    />
  );

  const shapeProps = { ref: meshRef };

  switch (shapeType) {
    case 'icosahedron':
      return <Icosahedron {...shapeProps} args={[shapeSize, 0]}>{material}</Icosahedron>;
    case 'tetrahedron':
      return <Tetrahedron {...shapeProps} args={[shapeSize, 0]}>{material}</Tetrahedron>;
    case 'dodecahedron':
      return <Dodecahedron {...shapeProps} args={[shapeSize, 0]}>{material}</Dodecahedron>;
    case 'octahedron':
    default:
      return <Octahedron {...shapeProps} args={[shapeSize, 0]}>{material}</Octahedron>;
  }
};

/**
 * Floating3DObject — Canvas wrapper untuk 3D shape.
 *
 * Menggunakan IntersectionObserver untuk mount/unmount Canvas hanya saat
 * shape terlihat di viewport. Ini mencegah WebGL context exhaustion —
 * browser membatasi ~8-16 WebGL context aktif sekaligus, lebih dari itu
 * context lama dimatikan otomatis (menyebabkan shape ilang-ilangan di PC).
 */
export const Floating3DObject = ({
  color = '#344CB7',
  speed = 0.5,
  rotationAxis = { x: 0.5, y: 1, z: 0 },
  shapeType = 'octahedron',
  shapeSize = 1,
  metalness = 0,
  roughness = 0.1,
  clearcoat = 1.0,
  cameraZ = 2.5,
}) => {
  const wrapperRef = useRef(null);

  // Canvas hanya di-mount saat elemen masuk viewport (± 150px margin)
  // → WebGL context dibebaskan saat section tidak terlihat
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShouldMount(entry.isIntersecting),
      { rootMargin: '150px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Jika WebGL tidak didukung device, skip render — tidak ada broken icon
  if (!isWebGLSupported()) return null;

  return (
    <div ref={wrapperRef} className="w-full h-full">
      {shouldMount && (
        <ThreeErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, cameraZ], fov: 45 }}
            // Batasi DPR & matikan antialias → lebih hemat GPU & VRAM
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: 'high-performance' }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 8, 5]} intensity={2.0} />
            <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#a8c4f0" />
            <pointLight position={[3, 3, 3]} intensity={1.2} color="#ffffff" />
            <pointLight position={[-3, -2, 4]} intensity={0.8} color="#5599ff" />

            <RotatingShape
              color={color}
              speed={speed}
              rotationAxis={rotationAxis}
              shapeType={shapeType}
              shapeSize={shapeSize}
              metalness={metalness}
              roughness={roughness}
              clearcoat={clearcoat}
            />
          </Canvas>
        </ThreeErrorBoundary>
      )}
    </div>
  );
};
