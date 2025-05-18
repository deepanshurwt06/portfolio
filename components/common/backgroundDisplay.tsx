'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RealisticSky = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000010); // Deep navy blue
    containerRef.current?.appendChild(renderer.domElement);

    // Create stars
    const starCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 600;
      positions[i3 + 1] = (Math.random() - 0.5) * 600;
      positions[i3 + 2] = -Math.random() * 500;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x48cae4,
      size: 1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const mouse = { x: 0, y: 0 };
    document.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Sinusoidal oscillation
      stars.rotation.x = Math.sin(elapsed * 0.2) * 0.2; // up and down
      stars.rotation.y = Math.cos(elapsed * 0.2) * 0.2; // left and right

      // Camera parallax
      camera.position.x += (mouse.x * 0.05 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.05 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default RealisticSky;
