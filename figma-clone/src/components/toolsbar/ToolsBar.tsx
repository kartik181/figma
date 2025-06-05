import { CanvasMode, LayerType } from "~/types";
import type { CanvasState } from "~/types";
import SelectionButton from "./SelectionButton";
import ShapesSelectionButton from "./ShapesSelectionButton";
import ZoomInButton from "./ZoominButton";
import ZoomOutButton from "./ZoomOutButton";

export default function ToolsBar({
  canvasState,
  setCanvasState,
  zoomIn,
  zoomOut,
  canZoomIn,
  canZoomOut,
}: {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-10 items-center justify-center rounded-lg bg-white p-1 shadow-[0_0_3px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-center gap-2">
        <SelectionButton
          isActive={canvasState.mode === CanvasMode.None}
          canvasMode={canvasState.mode}
          onClick={(canvasMode) =>
            setCanvasState(
              canvasMode === CanvasMode.Dragging
                ? { mode: canvasMode, origin: null }
                : { mode: canvasMode },
            )
          }
        />
        <ShapesSelectionButton
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            [
              LayerType.Rectangle,
              LayerType.Ellipse,
              LayerType.Triangle,
            ].includes(canvasState.layerType)
          }
          canvasState={canvasState}
          onClick={(layerType) =>
            setCanvasState({ mode: CanvasMode.Inserting, layerType })
          }
        />
        <div className="w-[1px] self-stretch bg-black/10">
          <div className="flex items-center justify-center">
            <ZoomInButton onClick={zoomIn} disabled={!canZoomIn} />
            <ZoomOutButton onClick={zoomOut} disabled={!canZoomOut} />
          </div>
        </div>
      </div>
    </div>
  );
}
