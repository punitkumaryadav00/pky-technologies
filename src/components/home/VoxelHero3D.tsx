"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

interface CubeData {
  target: THREE.Vector3;
  scatter: THREE.Vector3;
  out: THREE.Vector3;
  spin: THREE.Vector3;
  phase: number;
}

export function VoxelHero3D() {
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollProgressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position inside the sticky track (0 to 1)
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = trackRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollDist = trackHeight - windowHeight;

      if (scrollDist <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);
      scrollProgressRef.current = progress;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WebGL Three.js 3D Voxel Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 400);
    camera.position.set(0, 0, 48);

    // Build the 3D Voxel "P" Monogram
    const voxels: [number, number, number][] = [];
    const layers = 3; // 3 voxel layers in Z depth
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 18; y++) {
        const inStem = x >= 2 && x <= 4 && y >= 0 && y <= 17;
        const inTop = x >= 5 && x <= 11 && y >= 14 && y <= 17;
        const inRight = x >= 11 && x <= 13 && y >= 8 && y <= 15;
        const inMid = x >= 5 && x <= 11 && y >= 7 && y <= 9;

        if (inStem || inTop || inRight || inMid) {
          for (let z = 0; z < layers; z++) {
            voxels.push([x - 8, y - 9, z - (layers - 1) / 2]);
          }
        }
      }
    }

    const cubeCount = voxels.length;
    const geometry = new THREE.BoxGeometry(0.88, 0.88, 0.88);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.25,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, cubeCount);

    // Color Palette: Cyan, Indigo, Violet, White, Slate
    const colors = [
      new THREE.Color("#00d2ff"), // Electric Cyan
      new THREE.Color("#00e5ff"), // Vivid Cyan
      new THREE.Color("#6366f1"), // Indigo
      new THREE.Color("#818cf8"), // Soft Indigo
      new THREE.Color("#ffffff"), // Crisp White
      new THREE.Color("#1e293b"), // Deep Slate
    ];

    const cubesData: CubeData[] = [];
    for (let i = 0; i < cubeCount; i++) {
      const [vx, vy, vz] = voxels[i];
      const rand = Math.random();
      const color =
        rand < 0.45
          ? colors[0]
          : rand < 0.7
          ? colors[1]
          : rand < 0.85
          ? colors[2]
          : rand < 0.95
          ? colors[4]
          : colors[5];

      instancedMesh.setColorAt(i, color);

      // Random 3D scatter direction & spin
      const scatterDir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();

      cubesData.push({
        target: new THREE.Vector3(vx, vy, vz),
        scatter: scatterDir.clone().multiplyScalar(35 + Math.random() * 45),
        out: new THREE.Vector3(vx, vy, vz * 3)
          .normalize()
          .multiplyScalar(10 + Math.random() * 25),
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ),
        phase: Math.random() * Math.PI * 2,
      });
    }

    if (instancedMesh.instanceColor) {
      instancedMesh.instanceColor.needsUpdate = true;
    }

    const group = new THREE.Group();
    group.add(instancedMesh);
    scene.add(group);

    // Studio Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(-18, 24, 30);
    scene.add(keyLight);

    const cyanRim = new THREE.DirectionalLight(0x00d2ff, 1.8);
    cyanRim.position.set(22, -12, -18);
    scene.add(cyanRim);

    const violetGlow = new THREE.PointLight(0x7c3aed, 2.8, 60, 1.6);
    violetGlow.position.set(0, 0, 16);
    scene.add(violetGlow);

    // Resize Handler
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width === 0 || height === 0) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;

      // Adjust camera distance for mobile vs desktop
      if (width < 768) {
        camera.position.z = 58;
        group.position.x = 0;
        group.position.y = 2;
      } else {
        camera.position.z = 46;
        // Shift voxel "P" slightly to the right side on desktop so headline has space
        group.position.x = 10;
        group.position.y = 0;
      }

      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse Parallax Target
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Animation Loop
    const dummy = new THREE.Object3D();
    const clock = new THREE.Clock();
    let animId: number;

    let currentScroll = 0;

    const render = () => {
      animId = requestAnimationFrame(render);

      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Smooth scroll lerp (reads from scrollProgressRef)
      currentScroll += (scrollProgressRef.current - currentScroll) * 0.1;

      // Eased explosion progress: starts at 0.12, fully explodes by 0.65
      const explodeFactor = Math.min(
        Math.max((currentScroll - 0.1) / 0.55, 0),
        1
      );
      // Cubic ease out
      const easedExplode = 1 - Math.pow(1 - explodeFactor, 3);

      // Group rotation: gentle ambient float + mouse tilt + scroll rotation
      group.rotation.y = THREE.MathUtils.lerp(
        group.rotation.y,
        mouse.x * 0.45 + currentScroll * 1.8,
        0.08
      );
      group.rotation.x = THREE.MathUtils.lerp(
        group.rotation.x,
        mouse.y * -0.3 + Math.sin(time * 0.8) * 0.05,
        0.08
      );

      // Animate individual cubes: Explode & Scatter in 3D
      for (let i = 0; i < cubeCount; i++) {
        const cube = cubesData[i];

        // Position: from target P shape -> outward scatter vector
        const px =
          THREE.MathUtils.lerp(
            cube.target.x,
            cube.scatter.x + cube.out.x,
            easedExplode
          ) +
          Math.sin(time * 0.45 + cube.phase) * 1.2 * (easedExplode + 0.1);

        const py =
          THREE.MathUtils.lerp(
            cube.target.y,
            cube.scatter.y + cube.out.y,
            easedExplode
          ) +
          Math.cos(time * 0.4 + cube.phase) * 1.2 * (easedExplode + 0.1);

        const pz =
          THREE.MathUtils.lerp(
            cube.target.z,
            cube.scatter.z + cube.out.z,
            easedExplode
          ) +
          Math.sin(time * 0.55 + cube.phase) * 0.8 * (easedExplode + 0.1);

        // Rotation & Tumbling
        const spinMultiplier = easedExplode * 4.0;
        dummy.position.set(px, py, pz);
        dummy.rotation.set(
          cube.spin.x * spinMultiplier + time * 0.08,
          cube.spin.y * spinMultiplier + time * 0.08,
          cube.spin.z * spinMultiplier + time * 0.08
        );

        // Scale: cubes shrink slightly as they scatter
        const scale =
          (1 - easedExplode * 0.35) *
          (0.85 + 0.15 * Math.sin(time * 1.6 + cube.phase));
        dummy.scale.set(scale, scale, scale);

        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Phase thresholds
  // Phase 1 (Initial Hero): 0 <= scrollProgress < 0.4
  // Phase 2 (Showcase Window): 0.4 <= scrollProgress <= 1.0
  const isPhase2 = scrollProgress >= 0.38;
  const showcaseOpacity = Math.min(Math.max((scrollProgress - 0.35) / 0.3, 0), 1);
  const heroOpacity = Math.max(1 - scrollProgress / 0.3, 0);

  return (
    <div
      ref={trackRef}
      className="relative w-full"
      style={{ height: "280vh" }}
    >
      {/* Sticky Pinned Viewport */}
      <section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-[var(--pky-bg-primary)]">
        {/* Subtle Tech Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,210,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Technical Corner Crosshairs (like Cannyworx) */}
        <div className="absolute top-24 left-8 w-6 h-6 border-t-2 border-l-2 border-cyan-400/35 pointer-events-none" />
        <div className="absolute top-24 right-8 w-6 h-6 border-t-2 border-r-2 border-cyan-400/35 pointer-events-none" />
        <div className="absolute bottom-10 left-8 w-6 h-6 border-b-2 border-l-2 border-cyan-400/35 pointer-events-none" />
        <div className="absolute bottom-10 right-8 w-6 h-6 border-b-2 border-r-2 border-cyan-400/35 pointer-events-none" />

        {/* Three.js 3D Voxel WebGL Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* =========================================================
            STATE 1: INITIAL HERO CONTENT (Fades out on scroll)
            ========================================================= */}
        <div
          className="relative z-20 pky-container pt-28 pb-16 h-full flex flex-col justify-center transition-all duration-300"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${scrollProgress * -60}px)`,
            pointerEvents: heroOpacity > 0.3 ? "auto" : "none",
          }}
        >
          <div className="max-w-2xl">
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="pky-badge">
                <span className="w-2 h-2 rounded-full bg-[var(--pky-cyan)] animate-pulse shadow-[0_0_8px_var(--pky-cyan)]" />
                HUMAN × AI STUDIO
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70 text-xs font-mono text-slate-300 tracking-wider">
                ENGINEERING-FIRST
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70 text-xs font-mono text-slate-300 tracking-wider hidden sm:inline-block">
                DESIGN • CODE • AGENTS
              </span>
            </div>

            {/* Giant Main Headline */}
            <h1 className="pky-heading-display mb-6 tracking-tight text-white leading-[0.92]">
              Look{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                10x
              </span>
              <br />
              <span className="pky-gradient-text">bigger.</span>
            </h1>

            <p className="pky-body text-lg mb-8 max-w-xl text-slate-200 font-normal leading-relaxed">
              We design and build high-performance websites, AI autonomous agents,
              and digital platforms that make growing businesses look like category
              leaders. Sub-second speed and measurable revenue engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                data-cursor-label="START"
                className="pky-btn pky-btn-primary pky-btn-lg font-bold"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                data-cursor-label="WORK"
                className="pky-btn pky-btn-secondary pky-btn-lg font-semibold"
              >
                <Play size={16} />
                See the Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll To Explode Prompt at bottom */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
          style={{ opacity: heroOpacity }}
        >
          <div className="w-5 h-9 rounded-full border-2 border-cyan-400/50 flex justify-center p-1">
            <span className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase">
            Scroll to Explode 3D Space
          </span>
        </div>

        {/* =========================================================
            STATE 2: 3D FLOATING BROWSER & ASSETS SHOWCASE
            (Scales in as voxel cubes explode)
            ========================================================= */}
        <div
          className="absolute inset-0 z-30 pky-container flex items-center justify-between pointer-events-none transition-all duration-500"
          style={{
            opacity: showcaseOpacity,
            pointerEvents: showcaseOpacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            {/* Left Headline Morph */}
            <div className="lg:col-span-5 max-w-xl">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>We Build</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-4">
                digital
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300">
                  assets
                </span>
              </h2>

              <p className="text-xl sm:text-2xl font-serif italic text-slate-200 mb-6">
                that turn casual visitors into high-ticket clients.
              </p>

              <div className="w-28 h-1.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
            </div>

            {/* Right: 3D Interactive Browser Showcase Window */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              {/* Floating Chips around Browser Window */}
              <div className="absolute -top-6 left-6 z-40 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-bold text-cyan-200 shadow-lg shadow-cyan-950/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Websites</span>
              </div>
              <div className="absolute -top-6 right-6 z-40 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-400/50 text-xs font-bold text-indigo-200 shadow-lg shadow-indigo-950/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Landing Pages</span>
              </div>
              <div className="absolute -bottom-6 left-12 z-40 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-xs font-bold text-cyan-200 shadow-lg shadow-cyan-950/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>AI Automation</span>
              </div>
              <div className="absolute -bottom-6 right-12 z-40 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-400/50 text-xs font-bold text-purple-200 shadow-lg shadow-purple-950/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Web Apps</span>
              </div>

              {/* Browser Window Card */}
              <div
                className="relative w-full max-w-[560px] aspect-[16/10] rounded-2xl bg-slate-900/95 border-2 border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(0,210,255,0.2)] overflow-hidden transition-transform duration-500"
                style={{
                  transform: `scale(${0.88 + showcaseOpacity * 0.12}) perspective(1000px) rotateX(${
                    (1 - showcaseOpacity) * 12
                  }deg)`,
                }}
              >
                {/* Browser Top Window Bar */}
                <div className="h-11 px-4 bg-slate-950/90 border-b border-slate-800 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  {/* URL Pill */}
                  <div className="mx-auto px-4 py-1 rounded-full bg-slate-800/90 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 shadow-inner">
                    <span className="text-cyan-400">🔒</span>
                    <span>pkytechnologies.com/app</span>
                  </div>
                </div>

                {/* Simulated Content inside window */}
                <div className="p-6 flex flex-col justify-between h-[calc(100%-44px)] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                        P
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide">
                        Enterprise Growth Portal
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-mono font-bold">
                      ● Active Edge
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 my-auto">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <span className="text-[10px] text-slate-400 block mb-1">
                        First Contentful Paint
                      </span>
                      <span className="text-xl font-black text-cyan-300">
                        &lt; 0.3s
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <span className="text-[10px] text-slate-400 block mb-1">
                        Avg. Conversion Lift
                      </span>
                      <span className="text-xl font-black text-emerald-300">
                        +340%
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <span className="text-[10px] text-slate-400 block mb-1">
                        AI Workflow Bots
                      </span>
                      <span className="text-xl font-black text-indigo-300">
                        24/7 Live
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-3">
                    <span>Next.js 16 • React 19 • Turbopack Edge</span>
                    <span className="text-cyan-400 font-mono font-bold">
                      Lighthouse 99+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Status Bar (as seen in Cannyworx video) */}
        <div className="relative z-20 px-8 py-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00d2ff]" />
            <span>HUMAN × AI DIGITAL STUDIO</span>
          </div>
          <div>
            <span>01 / 04 • DIGITAL ASSETS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
