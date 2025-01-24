import { Id } from "@/convex/_generated/dataModel";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface ChatPageProps {
    params: {
      chatId: Id<"chats">;
    };
  }
  

async function Chatpage({params}:ChatPageProps) {

    const { chatId } = await params;

    // Get user authentication
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  
  return (
    <div>Chatpage:{chatId}</div>
  )
}

export default Chatpage