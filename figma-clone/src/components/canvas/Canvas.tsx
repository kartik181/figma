"use client";
import { useStorage } from "@liveblocks/react";
import { colorToCss } from "~/utils";
import LayerComponent from "./LayerComponent";
export default function Canvas() {
  const roomColor = useStorage((root) => root.roomColor);
  const layersIds = useStorage((root) => root.layersIds);
  return (
    <div className="flex h-screen w-full">
      <main className="fixed right-0 left-0 h-screen overflow-y-auto">
        <div
          style={{
            backgroundColor: roomColor ? colorToCss(roomColor) : "#1e1e1e",
          }}
          className="h-full w-full touch-none"
        >
          <svg className="h-full w-full">
            <g>
              <g>
                <rect x={0} y={0} width={200} height={200} fill="#FF0000" />
              </g>
              {layersIds?.map((layerId) => (
                <LayerComponent key={layerId} id={layerId} />
              ))}
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}
