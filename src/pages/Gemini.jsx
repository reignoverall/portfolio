import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./styles.module.css";
import { arrow } from "../assets_3d/assets/icons";
let timer;

const Gemini = () => {
  const [data, setData] = useState(undefined);
  const [ques, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  let dummyText;
  async function generateContent() {
    try {
      setLoading(true);
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
      const prompt = "How many days in January";
      const result = await model.generateContent(ques);
      const response = await result.response;
      console.log(result);

      setLoading(false);
      dummyText = response.text();
      return dummyText;
    } catch (error) {
      console.error("Error generating content:", error);
    }
  }

  //TYPE WRITER EFFECT
  const [started, setStarted] = useState(false);
  async function handleGenerate() {
    let res = await generateContent();
    if (started) {
      return;
    }
    setStarted(true);
    let i = -1;
    timer = setInterval(() => {
      i++;

      if (i === res.length - 1) clearInterval(timer);

      setData((prev) => prev + res[i]);
    }, 20);
  }
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
    <section className="text-xl w-screen h-screen flex items-center bg-black text-white ">
      Gemini
      <textarea
        className="text-black ml-6 rounded font-poppins"
        value={ques}
        placeholder="Write here"
        onChange={(e) => {
          setPrompt(e.target.value);
          handleReset();
        }}
        autoFocus={true}
      ></textarea>
      <button
        className="ml-5 rounded-md bg-yellow-50 w-10"
        disabled={loading}
        onClick={handleGenerate}
      >
        <img src={arrow} className="w-7 h-4 object-contain resize" />

        <button onClick={handleReset} className="neo-btn">
          Reset
        </button>
      </button>
      <dialog className={styles.container}> {data}</dialog>
    </section>
  );
};

export default Gemini;
