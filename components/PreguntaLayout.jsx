"use client";
import { quizData } from "../libs/modulo1";
import React, { useState, useEffect } from "react";

const PreguntaLayout = () => {
  //const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsShown, setQuestionsShown] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    // Carga el archivo JSON
    fetch(quizData)
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
        setQuestionsShown(1); // La primera pregunta se muestra inmediatamente
      });
  }, []);

  const checkAnswer = (selectedIndex) => {
    const correctIndex = quizData[currentQuestionIndex].correct;
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
            className="text-xl text-center mb-10 p-5 border-4  border-[#232ED1]"
          >
            {quizData[currentQuestionIndex].question}
          </h2>
          <div id="answers" className="flex w-80%">
            {quizData[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => checkAnswer(index)}
                className="w-45%"
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
