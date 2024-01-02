import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { arrow } from "../assets_3d/assets/icons";

const Gemini = () => {
  const [data, setData] = useState(undefined);
  let res;
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
  };

  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
  });
  async function generateContent() {
    try {
      const prompt = "Create a meal plan for today";
      const result = await model.generateContent(prompt);
      const response = await result.response;
      console.log(response.text());
      res = result.response.text();
      setData(res);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  }

  return (
    <section className="text-xl w-screen h-screen flex items-center bg-black text-white">
      Gemini
      <button
        className="ml-5 rounded-md bg-yellow-50 w-10"
        onClick={() => {
          generateContent();
        }}
      >
        <img src={arrow} className="w-7 h-4 object-cover" />
      </button>
      <p className="ml-60 rounded-3xl h-64 w-4/6 bg-neutral-500 neo-brutalism-blue ">
        <p className="font-poppins text-left">{data}</p>
      </p>
    </section>
  );
};

export default Gemini;
