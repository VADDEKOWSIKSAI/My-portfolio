"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const PixelatedCanvas = ({
    src,
    width = 500,
    height = 500,
    cellSize = 5,
    dotScale = 0.8,
    shape = "circle",
    backgroundColor = "#000000",
    dropoutStrength = 0.0, // Default to 0
    interactive = false, // Default to false
    distortionStrength = 0,
    distortionRadius = 50,
    distortionMode = "repel",
    followSpeed = 0.1,
    jitterStrength = 0,
    jitterSpeed = 1,
    sampleAverage = false,
    tintColor = "",
    tintStrength = 0,
    className = "",
    style = {}
}) => {
    const [texture, setTexture] = React.useState(null);

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load(src, (loadedTexture) => {
            loadedTexture.minFilter = THREE.NearestFilter;
            loadedTexture.magFilter = THREE.NearestFilter;
            loadedTexture.generateMipmaps = false;
            // IMPORTANT: Clamp to edge to prevent tiling/artifacts
            loadedTexture.wrapS = THREE.ClampToEdgeWrapping;
            loadedTexture.wrapT = THREE.ClampToEdgeWrapping;
            loadedTexture.flipY = false;
            setTexture(loadedTexture);
        }, undefined, (err) => {
            console.error("Error loading texture:", src, err);
        });
    }, [src]);

    return (
        <div
            className={className}
            style={{
                width,
                height,
                backgroundColor,
                overflow: "hidden",
                position: "relative",
                ...style,
            }}>
            <Canvas
                key={`${src}-${width}-${height}`} // Force remount on resize
                gl={{
                    antialias: false,
                    preserveDrawingBuffer: true,
                    powerPreference: "high-performance",
                }}
                orthographic
                camera={{
                    position: [0, 0, 100],
                    left: 0,
                    right: width,
                    top: 0,
                    bottom: height,
                    near: 0.1,
                    far: 1000,
                }}
                style={{ width: "100%", height: "100%" }}>
                {texture && (
                    <ShaderScene
                        texture={texture}
                        width={width}
                        height={height}
                        cellSize={cellSize}
                        dotScale={dotScale}
                        shape={shape}
                        dropoutStrength={dropoutStrength}
                        interactive={interactive}
                        distortionStrength={distortionStrength}
                        distortionRadius={distortionRadius}
                        distortionMode={distortionMode}
                        followSpeed={followSpeed}
                        jitterStrength={jitterStrength}
                        jitterSpeed={jitterSpeed}
                        sampleAverage={sampleAverage}
                        tintColor={tintColor}
                        tintStrength={tintStrength} />
                )}
            </Canvas>
        </div>
    );
};

const ShaderScene = ({
    texture,
    width,
    height,
    cellSize,
    dotScale,
    shape,
    dropoutStrength,
    interactive,
    distortionStrength,
    distortionRadius,
    distortionMode,
    followSpeed,
    jitterStrength,
    jitterSpeed,
    sampleAverage,
    tintColor,
    tintStrength
}) => {
    const materialRef = useRef(null);
    const uMouse = useRef(new THREE.Vector2(-1000, -1000));
    const targetMouse = useRef(new THREE.Vector2(-1000, -1000));

    useFrame((state) => {
        if (interactive) {
            const currentMouseX = (state.mouse.x + 1) * 0.5 * width;
            const currentMouseY = (state.mouse.y + 1) * 0.5 * height;
            targetMouse.current.set(currentMouseX, currentMouseY);
            uMouse.current.lerp(targetMouse.current, followSpeed);

            if (materialRef.current) {
                materialRef.current.uniforms.uMouse.value.copy(uMouse.current);
                materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            }
        }
    });

    const uniforms = useMemo(() => ({
        uTexture: { value: texture },
        uResolution: { value: new THREE.Vector2(width, height) },
        uCellSize: { value: cellSize },
        uDotScale: { value: dotScale },
        uShape: { value: shape === "circle" ? 0 : 1 },
        uDropoutStrength: { value: dropoutStrength },
        uMouse: { value: new THREE.Vector2(-1000, -1000) },
        uDistortionStrength: { value: distortionStrength },
        uDistortionRadius: { value: distortionRadius },
        uDistortionMode: { value: distortionMode === "repel" ? 0 : 1 },
        uTime: { value: 0 },
        uJitterStrength: { value: jitterStrength },
        uJitterSpeed: { value: jitterSpeed },
        uSampleAverage: { value: sampleAverage ? 1 : 0 },
        uTintColor: { value: new THREE.Color(tintColor || "#ffffff") },
        uTintStrength: { value: tintStrength },
    }), [
        texture, width, height, cellSize, dotScale, shape,
        dropoutStrength, distortionStrength, distortionRadius, distortionMode,
        jitterStrength, jitterSpeed, sampleAverage, tintColor, tintStrength
    ]);

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTexture.value = texture;
        }
    }, [texture]);

    return (
        <mesh position={[width / 2, height / 2, 0]}>
            <planeGeometry args={[width, height]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                side={THREE.DoubleSide} />
        </mesh>
    );
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform float uCellSize;
  uniform float uDotScale;
  uniform int uShape;
  uniform float uDropoutStrength;
  uniform vec2 uMouse;
  uniform float uDistortionStrength;
  uniform float uDistortionRadius;
  uniform int uDistortionMode;
  uniform float uTime;
  uniform float uJitterStrength;
  uniform float uJitterSpeed;
  uniform int uSampleAverage;
  uniform vec3 uTintColor;
  uniform float uTintStrength;

  varying vec2 vUv;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec2 pixelCoord = vUv * uResolution;
    
    // 1. SIMPLE STRETCH MAPPING (Fill the circle)
    // We map the texture 0..1 directly to the canvas 0..1 (vUv).
    // This effectively "stretches" the image to fit the square bounds of the mesh.
    // If the canvas is square (250x250), the image behaves as "Fit to Square".
    vec2 finalTextureUv = vUv;

    // Apply pixelation grid logic for shape masking
    vec2 gridCoord = floor(pixelCoord / uCellSize);
    vec2 cellCenter = (gridCoord + 0.5) * uCellSize;
    
    // Sample texture
    vec4 color = texture2D(uTexture, finalTextureUv);
    
    // Apply Tint
    if (uTintStrength > 0.0) {
        color.rgb = mix(color.rgb, uTintColor, uTintStrength);
    }
    
    // Dot Shape Masking
    vec2 localPos = (pixelCoord - cellCenter) / (uCellSize * 0.5); 
    float d = 0.0;
    
    if (uShape == 0) { // Circle
       d = length(localPos);
    } else { // Square
       d = max(abs(localPos.x), abs(localPos.y));
    }
    
    if (d > uDotScale) {
       discard; 
    }
    
    // Global Circle Mask (to ensure the overall shape is circular if desired, usually handled by CSS rounded-full, 
    // but we can enforce strictly here if needed. For now, we rely on canvas size + CSS).
    
    gl_FragColor = color;
  }
`;
