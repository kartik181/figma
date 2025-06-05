import type { TriangleLayer } from "~/types";
import { colorToCss } from "~/utils";

export default function Triangle({
  id,
  layer,
  // onPointerDown,
}: {
  id: string;
  layer: TriangleLayer;
  // onPointerDown: (e: React.PointerEvent, layerId: string) => void;
}) {
  const { x, y, width, height, fill, stroke, opacity } = layer;

  // Absolute triangle points
  const points = [
    `${x + width / 2},${y}`, // top middle
    `${x},${y + height}`, // bottom left
    `${x + width},${y + height}`, // bottom right
  ].join(" ");

  return (
    <g className="group">
      <polygon
        points={points}
        fill="none"
        stroke="#0b99ff"
        strokeWidth="4"
        className="pointer-events-none opacity-0 group-hover:opacity-100"
      />
      <polygon
        // onPointerDown={(e) => onPointerDown(e, id)}
        points={points}
        fill={fill ? colorToCss(fill) : "#CCC"}
        stroke={stroke ? colorToCss(stroke) : "#CCC"}
        strokeWidth="1"
        opacity={`${opacity ?? 100}%`}
      />
    </g>
  );
}
