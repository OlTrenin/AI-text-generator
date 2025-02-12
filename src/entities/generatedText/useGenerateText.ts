import {sendMessage} from "../../app/server/api/deepSeek.api.ts";
import {useState} from "react";

export function useGenerateText() {
    const [generatedText, setGeneratedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateText = async (topic: string, level: string) => {
        try {
            setIsLoading(true);
            const text: string = await sendMessage(topic, level);
            setGeneratedText(text);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    };
    return { isLoading, generatedText, handleGenerateText };
}