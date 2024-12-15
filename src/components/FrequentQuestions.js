import React, { useState } from "react";

const FrequentQuestions = () => {
  
  const [openQuestion, setOpenQuestion] = useState(null);

  
  const handleToggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const questions = [
    {
      question: "What Is Netflix?",
      answer: `
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, 
        movies, anime, documentaries, and more – on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want, without a single ad – all for 
        one low monthly price. There's always something new to discover, and new TV shows 
        and movies are added every week!`,
    },
    {
      question: "How much does Netflix cost?",
      answer: `
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, 
        all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra 
        costs, no contracts.`,
    },
    {
      question: "Where can I watch?",
      answer: `
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on 
        the web at netflix.com from your personal computer or on any internet-connected 
        device that offers the Netflix app, including smart TVs, smartphones, tablets, 
        streaming media players, and game consoles.
 
        You can also download your favorite shows with the iOS or Android app. Use downloads 
        to watch while you're on the go and without an internet connection. Take Netflix 
        with you anywhere.`,
    },
    {
      question: "How do I cancel?",
      answer: `
        Netflix is flexible. There are no annoying contracts and no commitments. You can 
        easily cancel your account online in two clicks. There are no cancellation fees – 
        start or stop your account anytime.`,
    },
    {
      question: "Is Netflix safe for Kids?",
      answer: `
        The Netflix Kids experience is included in your membership to give parents control 
        while kids enjoy family-friendly TV shows and films in their own space.
        
        Kids profiles come with PIN-protected parental controls that let you restrict the 
        maturity rating of content kids can watch and block specific titles you don’t want 
        kids to see.`,
    },
  ];

  return (
    <div className="frequentQuestions">
      {questions.map((item, index) => (
        <div key={index} className="frequentQuestion">
          
          <div
            className="frequentquestionsheader"
            onClick={() => handleToggleQuestion(index)}
          >
            <h2>{item.question}</h2>
            <button>{openQuestion === index ? "x" : "+"}</button>
          </div>

          
          {openQuestion === index && (
            <div className="frequentquestionsBody">
              <span>{item.answer}</span>
            </div>
          )}
        </div>
      ))}
      <p>Questions? contact NetflixIndiaOfficial@gmail.com</p>
    </div>
  );
};

export default FrequentQuestions;
