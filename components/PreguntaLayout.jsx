"use client";
import { quizData } from "../libs/modulo1";
import React, { useState, useEffect } from "react";
import { quizData3 } from "@/libs/modulo3";

const PreguntaLayout = (modulo) => {
  //const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsShown, setQuestionsShown] = useState(0);
  const [result, setResult] = useState("");
  const quizDataModulo = quizData + modulo.modulo;
  useEffect(() => {
    // Carga el archivo JSON

    fetch(quizDataModulo)
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
        setQuestionsShown(1); // La primera pregunta se muestra inmediatamente
      });
  }, []);

  const checkAnswer = (selectedIndex) => {
    const correctIndex = quizDataModulo[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
      setResult("¡Correcto!");
      setResultColor("green");
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setResult("Incorrecto, inténtalo de nuevo.");
      setResultColor("red");
    }
  };

  const showNextQuestion = () => {
    const nextIndex = (currentQuestionIndex + 1) % quizData.length;
    setCurrentQuestionIndex(nextIndex);
    setQuestionsShown(questionsShown + 1);
    setResult("");
  };

  const resetScore = () => {
    setCorrectAnswers(0);
    setQuestionsShown(0);
    setResult("");
  };

  const [resultColor, setResultColor] = useState("");

  if (quizData.length === 0) {
    return <div>Cargando preguntas...</div>;
  }

  return (
    <div className="container mt-10">
      <div>
        <div id="quiz-container" className="m-20">
          <h2
            id="question"
            className="text-xl text-center mb-10 p-5 border-4  border-[#232ED1] rounded shadow-xl"
          >
            {quizData[currentQuestionIndex].question}
          </h2>
          <div
            id="answers"
            className="flex flex-col md:flex-row w-80% justify-center"
          >
            {quizData[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => checkAnswer(index)}
                className="w-45% mb-5 border border-[#219EBC] py-2 px-2 rounded mx-2 shadow-xl"
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
        <p
          id="result"
          style={{ color: resultColor }}
          className="flex justify-center"
        >
          {result}
        </p>
        <p id="score" className="flex justify-center">
          Preguntas correctas: {correctAnswers} / Preguntas mostradas:{" "}
          {questionsShown}
        </p>
        <div className="flex justify-center mt-10">
          <button
            id="next-question"
            onClick={showNextQuestion}
            className="border px-5 py-2 m-2"
          >
            Siguiente pregunta
          </button>
          <button
            id="reset-score"
            onClick={resetScore}
            className="border px-5 py-2 m-2"
          >
            Limpiar resultados
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreguntaLayout;
