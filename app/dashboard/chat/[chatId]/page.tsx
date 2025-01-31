import ChatInterface from "@/components/ChatInterface";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { getConvexClient } from "@/lib/convex";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface ChatPageProps {
    params: {
        chatId: string;  // Changed this from Id<"chats"> to string, as the chatId is typically a string
    };
}

async function Chatpage({ params }: ChatPageProps) {
  const chatId = params.chatId as Id<"chats">; // Destructure params directly without await

    // Get user authentication
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    try {
        // Get Convex client and fetch chat and messages
        const convex = getConvexClient();

        // Get messages
        const initialMessages = await convex.query(api.messages.list, { chatId });

        return (
            <div className="flex-1 overflow-hidden">
                <ChatInterface chatId={chatId} initialMessages={initialMessages} />
            </div>
        );
    } catch (error) {
        console.error("🔥 Error loading chat:", error);
        redirect("/dashboard");
    }
}

export default Chatpage;
