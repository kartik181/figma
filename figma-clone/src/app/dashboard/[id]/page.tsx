import Canvas from "~/components/canvas/Canvas";
import { Room } from "~/components/liveblocks/Room";
import { auth } from "~/server/auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();

  return (
    <Room roomId={`room:${params.id}`}>
      <Canvas />
    </Room>
  );
}
