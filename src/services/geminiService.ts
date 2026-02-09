/// <reference types="vite/client" />
import { GoogleGenAI, Type } from "@google/genai";
import { AiFeedback } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzeMessageContext = async (message: string, projectType: string): Promise<AiFeedback> => {
    if (!ai) {
        console.warn("API Key not found, returning mock data");
        return {
            completeness: 50,
            suggestions: ["Adicione sua localização", "Mencione o tamanho aproximado da área"],
            tone: "Neutro"
        };
    }

    if (message.length < 10) return {
        completeness: 10,
        suggestions: ["Conte-nos um pouco mais sobre o que você precisa."],
        tone: "Muito breve"
    };

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-exp",
            contents: `
        Analyze the following user message for a renewable energy company contact form.
        Project Type Selected: ${projectType}
        Message: "${message}"

        Return a JSON object assessing if the message provides enough detail for a quote.
        Check for: Location/City, approximate size of project (e.g. roof size, house size), and specific goals.
      `,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        completeness: { type: Type.INTEGER, description: "Score 0-100 based on detail level" },
                        suggestions: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: "Short, helpful tips to the user on what details to add for a faster quote (max 2 tips)"
                        },
                        tone: { type: Type.STRING, description: "Professional, Urgent, Casual, etc." }
                    }
                }
            }
        });

        const text = response.text;
        if (!text) throw new Error("No response from AI");

        return JSON.parse(text) as AiFeedback;

    } catch (error) {
        console.error("Gemini analysis failed", error);
        return {
            completeness: 0,
            suggestions: [],
            tone: "Error"
        };
    }
};
