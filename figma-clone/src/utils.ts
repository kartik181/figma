import type { Camera, Color, Point } from "./types";


export function colorToCss(color: Color) {
    return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
  }

export function hexToRgb(hex: string): Color {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }
  
  const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

  export const pointerEventToCanvasPoint = (
    e: React.PointerEvent,
    camera: Camera,
  ): Point => {
    return {
      x: Math.round(e.clientX) - camera.x,
      y: Math.round(e.clientY) - camera.y,
    };
  };