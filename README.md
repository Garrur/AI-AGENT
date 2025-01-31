# AI Chat Application with Next.js 15

A sophisticated AI chat application built with **Next.js 15**, featuring real-time conversations, advanced prompt caching, and intelligent tool orchestration powered by **LangChain** and **Claude 3.5 Sonnet**. This project integrates modern technologies like **Clerk** for authentication, **Convex** for real-time data storage, and **IBM's WxFlows** for advanced tool integration.

---

## 🚀 Before You Get Started

Before diving into the project, make sure to:

1. **Sign Up for a Free Clerk Account**: [Clerk](https://clerk.com/)  
   Clerk provides seamless authentication for your application.

2. **Sign Up for IBM's Free WxFlows Tools**: [IBM WxFlows](https://www.ibm.com/wxflows)  
   WxFlows enables quick integration of various data sources like YouTube transcripts, Google Books API, and custom tools.

---

## ✨ Features

- **🤖 Advanced AI Chat Interface**: Powered by **Claude 3.5 Sonnet** for intelligent and context-aware conversations.
- **🎨 Modern UI**: Built with **Tailwind CSS** for a responsive and sleek design.
- **🔐 Authentication**: Secure user authentication with **Clerk**.
- **💾 Real-Time Data Storage**: Utilizes **Convex** for seamless real-time data management.
- **⚡ Next.js 15 & React 19**: Built with the latest versions for optimal performance.
- **🌊 Advanced Streaming**: Custom implementation for real-time token streaming and tool execution feedback.
- **📱 Mobile-Friendly**: Fully responsive design for all devices.
- **🧠 Prompt Caching**: Optimized token usage with **Anthropic's caching feature**.
- **🔧 Intelligent Tool Orchestration**: Powered by **LangGraph** for advanced tool management.
- **📚 Data Source Integration**: Seamless integration with **IBM's WxFlows** for YouTube transcripts, Google Books API, and custom data sources.

---

## 🚀 Advanced Features

### **AI and Prompt Management**
- **Prompt Caching**: Reduces token usage with efficient caching.
- **Context Window**: Manages a 4096-token context window for optimal performance.
- **Tool-Augmented Responses**: Enhances AI capabilities with custom tools.
- **Context-Aware Conversations**: Intelligent conversation management for better user interaction.

### **Tool Integration**
- **WxFlows Integration**: Quick integration of various data sources.
  - YouTube transcripts
  - Google Books API
  - Custom data source tooling

### **LangChain & LangGraph Features**
- **State Management**: Sophisticated state handling with **StateGraph**.
- **Tool Orchestration**: Advanced tool management with **ToolNode**.
- **Memory Management**: Efficient context tracking with **MemorySaver**.
- **Message Optimization**: Intelligent message trimming and context management.

### **Streaming Implementation**
- **Custom Streaming Solution**: Real-time token streaming with tool execution feedback.
- **Error Handling**: Robust error handling for failed tool calls.
- **Workarounds**: Solutions for **LangChainAdapter** limitations.

### **Real-Time Features**
- **Live Updates**: Instant message delivery and updates.
- **Tool Visualization**: Real-time display of tool interactions.
- **History Management**: Efficient tracking of message history.

---

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15.1.3
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Convex
- **AI Integration**: LangChain
- **Icons**: Lucide React & Radix UI Icons
- **Type Safety**: TypeScript

---

## 📋 Prerequisites

Before you begin, ensure you have the following:

1. **Node.js**: Latest LTS version recommended.
2. **Package Manager**: PNPM, NPM, or Yarn.
3. **Clerk Account**: For authentication. [Sign up here](https://clerk.dev).
4. **Convex Account**: For real-time database. [Sign up here](https://convex.dev).
5. **Anthropic API Key**: For AI capabilities. [Get your API key](https://www.anthropic.com).

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
ANTHROPIC_API_KEY=your_anthropic_api_key