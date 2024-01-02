import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./styles.module.css";
import { arrow } from "../assets_3d/assets/icons";
let timer;

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

  let dummyText;
  async function generateContent() {
    try {
      const prompt = "What is 9 + 10";
      const result = await model.generateContent(prompt);
      const response = await result.response;
      dummyText = response.text();
    } catch (error) {
      console.error("Error generating content:", error);
    }
  }
  generateContent();

  //TYPE WRITER EFFECT
  const [started, setStarted] = useState(false);
  const handleGenerate = () => {
    if (started) {
      return;
    }
    setStarted(true);
    let i = -1;

    timer = setInterval(() => {
      i++;
      if (i === dummyText.length - 1) clearInterval(timer);
      setData((prev) => prev + dummyText[i]);
    }, 20);
  };
  const handleReset = () => {
    setData("");
    clearInterval(timer);
    setStarted(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="text-xl w-screen h-screen flex items-center bg-black text-white resize">
      Gemini
      <button
        className="ml-5 rounded-md bg-yellow-50 w-10"
        onClick={handleGenerate}
      >
        <img src={arrow} className="w-7 h-4 object-contain resize" />

        <button onClick={handleReset} className="neo-btn">
          Reset
        </button>
      </button>
      <div className={styles.container}> {!data ? "" : data}</div>
    </section>
  );
};

export default Gemini;
