import axios from "axios";

const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = 'sk-or-v1-c4a5953046c39a33dfc53a750f88e98e605772b6c818826c7c90b7b8cd30b3409'

export const sendMessage = async (topic: string, level: string) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "deepseek/deepseek-r1-distill-llama-8b", // Укажи модель, если требуется
                messages: [
                    { role: "user", content: `Напиши художественный текст на тему "${topic}" на уровне ${level} Английского языка минимум на 150 слов, без вводных фраз и мыслей` }
                ],
                max_tokens: 1000, // Максимальное количество токенов
                temperature: 0.7, // Креативность
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`, // Подставь свой API-ключ
                },
            }
        );

        return response.data.choices[0].message.content; // Теперь получаем сообщение из response
    } catch (error) {
        console.error("Ошибка при генерации текста:", error);
        return "Не удалось сгенерировать текст.";
    }
};