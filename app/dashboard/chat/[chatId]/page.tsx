import ChatInterface from "@/components/ChatInterface";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { getConvexClient } from "@/lib/convex";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface ChatPageProps {
  params: {
    chatId: string;  // Params are passed as strings from Next.js routing
  };
}

async function Chatpage({ params }: ChatPageProps) {
  const { chatId } = params;

  // Convert chatId from string to Id<"chats"> using type assertion
  const chatIdTyped = chatId as Id<"chats">;

  // Get user authentication
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  try {
    // Get Convex client and fetch chat and messages
    const convex = getConvexClient();

    // Get messages
    const initialMessages = await convex.query(api.messages.list, { chatId: chatIdTyped });

    return (
      <div className="flex-1 overflow-hidden">
        <ChatInterface chatId={chatIdTyped} initialMessages={initialMessages} />
      </div>
    );
  } catch (error) {
    console.error("🔥 Error loading chat:", error);
    redirect("/dashboard");
  }
}

export default Chatpage;
