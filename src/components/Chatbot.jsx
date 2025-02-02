import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Murakaza neza kuri KGL AI! Mubaze ikintu icyo ari cyo cyose.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulated AI Response (Replace with API later)
    setTimeout(() => {
      setMessages([...newMessages, { text: "Ndabizi! Ndacyakora...🔄", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <Card>
        <CardContent className="h-96 overflow-y-auto space-y-4 p-4">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "bot" ? "text-left" : "text-right"}>
              <span className={`px-3 py-2 rounded-lg inline-block ${msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex mt-4 gap-2">
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Andika hano..." />
        <Button onClick={handleSend} className="flex items-center gap-1">
          Ohereza <Send size={16} />
        </Button>
      </div>
    </div>
  );
}
