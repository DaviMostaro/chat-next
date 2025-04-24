import { useChat } from "@/contexts/ChatContext";
import { useState } from "react";
import { KeyboardEvent } from "react"

type Props = {
    name: string;
}

export const ChatInput= ({name}: Props) => {
    const chatCtx = useChat();
    const [textInput, setTextInput] = useState('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter') {
            if(textInput.trim() !== '') {
                chatCtx?.addMessage(name, textInput.trim());
                setTextInput('');
            }
        }
    }

    return(
        <input
            className="w-full bg-transparent tex-white text-md outline-none"
            placeholder= {`${name}, digite sua mensagem (e aperte enter)`}
            value = {textInput}
            onChange= {e => setTextInput(e.target.value)}
            onKeyUp = {handleKeyUpAction}
        />
    )
}