"use client";

import axios, { AxiosError } from "axios";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "@repo/ui/Button";
import {
  LuCopy,
  LuLoader,
  LuLogIn,
  LuPlus,
  LuSparkles,
  LuTrash2,
} from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";

export default function Dashboard() {
  return (
    <SessionProvider>
      <ClientDashboard />
    </SessionProvider>
  );
}

type Room = { name: string; roomId: string; adminId?: string };
type UserRoom = {
  name: string;
  roomId: string;
  adminId: string;
  createdAt: string;
};

function generateRoomId() {
  return `room-${Math.random().toString(36).slice(2, 10)}`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function ClientDashboard() {
  const [room, setRoom] = useState<Room>({ name: "", roomId: "", adminId: "" });
  const [joinRoomId, setJoinRoomId] = useState("");
  const [rooms, setRooms] = useState<UserRoom[]>([]);
  const [loadingRooms, setLoadingRooms] = useState(true);
  const [creating, setCreating] = useState(false);
  const [joining, setJoining] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session.data?.user?.id) return;
    fetchAllUserRooms(session.data.user.id);
  }, [session.data?.user?.id]);

  async function fetchAllUserRooms(id: string) {
    setLoadingRooms(true);
    try {
      const res = await axios.get(`/api/user/room/all/${id}`);
      setRooms(res.data.rooms || []);
    } catch (err) {
      if (err instanceof AxiosError)
        alert(err.response?.data?.error || "Failed to load rooms");
      else alert((err as Error).message || "Failed to load rooms");
    } finally {
      setLoadingRooms(false);
    }
  }

  function updateRoom(e: ChangeEvent<HTMLInputElement>) {
    setRoom({ ...room, [e.target.name]: e.target.value });
  }

  async function createNewRoom() {
    const { name, roomId } = room;
    if (!name.trim() || !roomId.trim()) return;

    const adminId = session.data!.user.id;
    setCreating(true);
    try {
      const res = await axios.post("/api/user/room/create", {
        name: name.trim(),
        roomId: roomId.trim(),
        adminId,
      });
      if (res.status === 201) {
        const id = res.data?.roomId ?? roomId.trim();
        router.push(`/drawing?roomId=${id}`);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data?.errors)
          for (const e of err.response.data.errors) alert(e);
        else alert(err.response?.data?.error || "Failed to create room");
      } else alert((err as Error).message);
    } finally {
      setCreating(false);
    }
  }

  async function joinRoom(roomId?: string) {
    const id = (roomId ?? joinRoomId).trim();
    if (!id) return;

    setJoining(true);
    try {
      const res = await axios.get("/api/user/room/get", { params: { roomId: id } });
      if (res.status === 200) {
        router.push(`/drawing?roomId=${res.data?.roomId ?? id}`);
      }
    } catch (err) {
      if (err instanceof AxiosError)
        alert(err.response?.data?.error || "Room not found");
      else alert((err as Error).message);
    } finally {
      setJoining(false);
    }
  }

  async function deleteRoom(roomId: string) {
    if (!confirm("Delete this room? This action cannot be undone.")) return;

    setDeletingId(roomId);
    try {
      await axios.delete("/api/user/room/delete", { params: { roomId } });
      setRooms((prev) => prev.filter((r) => r.roomId !== roomId));
    } catch (err) {
      if (err instanceof AxiosError)
        alert(err.response?.data?.error || "Failed to delete room");
      else alert((err as Error).message);
    } finally {
      setDeletingId(null);
    }
  }

  async function copyRoomId(roomId: string) {
    try {
      await navigator.clipboard.writeText(roomId);
    } catch {
      alert("Could not copy room ID");
    }
  }

  const firstName = session.data?.user?.name?.split(" ")[0] ?? "Creator";

  return (
    <>
      <Header session={session.data} />
      <main className="min-h-[calc(100vh-73px)] px-5 py-12 md:py-16 cursor-default">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          {/* Hero */}
          <section className="flex flex-col gap-6">
            <span className="flex w-fit items-center gap-1.5 rounded-full border border-[#3e325b] bg-[#1b1036] px-3 py-2 text-[#fffffff7]">
              <LuSparkles className="h-4 w-4 text-[#5d5ff2]" />
              <span className="text-sm font-medium">Your creative workspace</span>
            </span>
            <div className="flex flex-col gap-3 text-white">
              <h1 className="text-4xl font-semibold md:text-5xl">
                Welcome back,{" "}
                <span className="text-[#5d5ff2]">{firstName}</span>
              </h1>
              <p className="max-w-2xl text-lg font-light tracking-wide opacity-60">
                Create a new drawing room or jump back into one of your existing
                canvases. Share the room ID to collaborate in real time.
              </p>
            </div>
          </section>

          {/* Create & Join */}
          <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-2xl border border-[#ffffff27] bg-[#12101c] p-6 transition-all duration-300 hover:shadow-[0_0_2rem_#4a388533]">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-[#5d5ff2] p-2.5 text-white">
                  <LuPlus className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white">Create Room</h2>
                  <p className="text-sm font-light opacity-60">
                    Start a fresh canvas and invite others
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm text-white/70">
                    Room name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={room.name}
                    onChange={updateRoom}
                    placeholder="My sketch session"
                    className="rounded-xl border border-[#ffffff20] bg-[#0b0914] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#6b4def]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="roomId" className="text-sm text-white/70">
                    Room ID
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="roomId"
                      name="roomId"
                      value={room.roomId}
                      onChange={updateRoom}
                      placeholder="room-abc123"
                      className="min-w-0 flex-1 rounded-xl border border-[#ffffff20] bg-[#0b0914] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#6b4def]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setRoom((prev) => ({ ...prev, roomId: generateRoomId() }))
                      }
                      className="shrink-0 rounded-xl border border-[#ffffff25] px-4 py-3 text-xs font-medium text-white/70 transition-colors hover:border-[#6b4def] hover:text-white"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <Button
                  text={creating ? "Creating..." : "Create & Open"}
                  icon={
                    creating ? (
                      <LuLoader className="ml-2 h-4 w-4 animate-spin" />
                    ) : (
                      <GoArrowRight className="ml-2 text-lg" />
                    )
                  }
                  backgroundColor="bg-[#6b4def]"
                  fontWeignt="font-medium"
                  textSize="text-sm"
                  textColor="text-white"
                  Vpad="py-3"
                  Hpad="px-6"
                  radius="rounded-xl"
                  className="w-full hover:bg-[#6147d6] transition-all disabled:opacity-60"
                  onClick={createNewRoom}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-[#ffffff27] bg-[#12101c] p-6 transition-all duration-300 hover:shadow-[0_0_2rem_#4a388533]">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-[#6b4def] p-2.5 text-white">
                  <LuLogIn className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white">Join Room</h2>
                  <p className="text-sm font-light opacity-60">
                    Enter a room ID shared by someone else
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="joinRoomId" className="text-sm text-white/70">
                    Room ID
                  </label>
                  <input
                    id="joinRoomId"
                    value={joinRoomId}
                    onChange={(e) => setJoinRoomId(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && joinRoom()}
                    placeholder="Paste room ID here"
                    className="rounded-xl border border-[#ffffff20] bg-[#0b0914] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#6b4def]"
                  />
                </div>
                <Button
                  text={joining ? "Joining..." : "Join Room"}
                  icon={
                    joining ? (
                      <LuLoader className="ml-2 h-4 w-4 animate-spin" />
                    ) : (
                      <FiArrowRight className="ml-2 text-base" />
                    )
                  }
                  backgroundColor="bg-[#090812]"
                  fontWeignt="font-medium"
                  borderLine="border-2"
                  borderColor="border-[#ffffff25]"
                  textSize="text-sm"
                  textColor="text-white"
                  Vpad="py-3"
                  Hpad="px-6"
                  radius="rounded-xl"
                  className="w-full transition-all hover:border-[#6b4def]"
                  onClick={() => joinRoom()}
                />
              </div>
            </div>
          </section>

          {/* Rooms list */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Your Rooms</h2>
                <p className="text-sm font-light opacity-50">
                  {rooms.length} room{rooms.length !== 1 ? "s" : ""} in your workspace
                </p>
              </div>
            </div>

            {loadingRooms ? (
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#ffffff15] py-20 text-white/50">
                <LuLoader className="h-5 w-5 animate-spin" />
                <span className="text-sm">Loading your rooms...</span>
              </div>
            ) : rooms.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[#ffffff20] bg-[#12101c]/50 py-20 text-center">
                <span className="rounded-xl bg-[#1b1036] p-4">
                  <LuPlus className="h-8 w-8 text-[#5d5ff2]" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-white">No rooms yet</p>
                  <p className="max-w-sm text-sm font-light opacity-50">
                    Create your first room above to start drawing and collaborating
                    with others.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rooms.map((r) => (
                  <article
                    key={r.roomId}
                    className="group flex flex-col gap-4 rounded-2xl border border-[#ffffff27] bg-[#12101c] p-5 transition-all duration-300 hover:border-[#6b4def55] hover:shadow-[0_0_1.5rem_#4a388544]"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="truncate text-lg font-semibold text-white">
                        {r.name}
                      </h3>
                      <p className="text-xs font-light opacity-40">
                        Created {formatDate(r.createdAt)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg border border-[#ffffff15] bg-[#0b0914] px-3 py-2">
                      <code className="min-w-0 flex-1 truncate text-xs text-[#5d5ff2]">
                        {r.roomId}
                      </code>
                      <button
                        type="button"
                        onClick={() => copyRoomId(r.roomId)}
                        title="Copy room ID"
                        className="shrink-0 rounded-md p-1.5 text-white/40 transition-colors hover:bg-[#ffffff10] hover:text-white"
                      >
                        <LuCopy className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="mt-auto flex gap-2">
                      <Button
                        text="Open"
                        icon={<GoArrowRight className="ml-1.5 text-base" />}
                        backgroundColor="bg-[#6b4def]"
                        fontWeignt="font-medium"
                        textSize="text-xs"
                        textColor="text-white"
                        Vpad="py-2"
                        Hpad="px-4"
                        radius="rounded-lg"
                        className="flex-1 hover:bg-[#6147d6] transition-all"
                        onClick={() => joinRoom(r.roomId)}
                      />
                      <button
                        type="button"
                        onClick={() => deleteRoom(r.roomId)}
                        disabled={deletingId === r.roomId}
                        title="Delete room"
                        className="flex items-center justify-center rounded-lg border border-[#ffffff20] px-3 py-2 text-red-400/70 transition-all hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-400 disabled:opacity-50"
                      >
                        {deletingId === r.roomId ? (
                          <LuLoader className="h-4 w-4 animate-spin" />
                        ) : (
                          <LuTrash2 className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
