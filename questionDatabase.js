const STORE = {
    questions: [//1
      {
        question: "What is the motto of the Boy Scouts?",
        options: [
          "for God and country",
          "be prepared",
          "scout's honor",
          "obey the Scout Law"
        ],
        answer: "be prepared",
        feedback: "The motto 'be prepared' speaks to the Boy Scouts of America's focus on preparation and planning, both in the short and long terms."
      },
      //2
      {
        question: "Who established the Boy Scouts of America?",
        options: [
          "William Boyd",
          "W.D. Boyce", 
          "W.E.B. Du Bois",
          "Robert Baden-Powell"        
        ],
        answer: "W.D. Boyce",
        feedback: "W.D. Boyce, a publisher from Chicago, established the Boy Scouts after learning about the British scouting movement while on a trip to England."
      },
      //3
      {
        question: "When was the Boy Scouts of America organization established?",
        options: [
          "1900",
          "1910",
          "1920 ",
          "1922"
        ],
        answer: "1910",
        feedback: "It was established in 1910, based on the British scouting movement."
      },
      //4
      {
        question: "What is the name of the youngest Boy Scout group?	", 
        options: ["Lion Cubs", "Bear Cubs", "Tiger Cubs", "Tenderfoot"],
        answer: "Tiger Cubs",
        feedback:"At the youngest end of the spectrum are the Tiger Cubs."
      },
      //5
      {
        question: "At what age does a boy qualify for Boy Scouts?",
        options: [
          "9 years old", "11 years old", "13 years old","15 years old"],
        answer: "11 years old",
        feedback: "A boy who is 11 years old, or one who has completed the fifth grade or earned the Arrow of Light Award and is at least 10 years old but is not yet 18 years old qualifies for Boy Scouts."
      },
      
    ],
    currentQuestion: 0,
    score: 0
  };