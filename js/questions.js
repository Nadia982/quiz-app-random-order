const questions = [
  {
    id: 1,
    q: "La matière",
    options: ["The manner", "The subject", "The Earth", "The Maths"],
    answer: 1,
  },
  {
    id: 2,
    q: "Je crois que",
    options: ["I create", "I am craving", "I believe that", "I cross the..."],
    answer: 2,
  },

  {
    id: 3,
    q: "Court",
    options: ["Short", "Cars", "Cord", "Shard"],
    answer: 0,
  },

  {
    id: 4,
    q: "Causé par",
    options: ["Cured by", "Caused by", "Caused per", "Cursed by"],
    answer: 1,
  },

  {
    id: 5,
    q: "Le boeuf",
    options: ["The beef", "The buffer", "The best", "The boast"],
    answer: 0,
  },

  {
    id: 6,
    q: "L'arrière petite fille (féminin)",
    options: ["Behind the little daughter", "Great niece", "Great granddaughter", "Granddaughter"],
    answer: 2,
  },
  {
    id: 7,
    q: "Croire",
    options: ["To believe", "To cruise", "To create", "Croissant"],
    answer: 0,
  },

  {
    id: 8,
    q: "De marque",
    options: ["Designer", "Marked", "Damaged", "Demarcated"],
    answer: 0,
  },
  {
    id: 9,
    q: "La fraise",
    options: ["The strawberry", "The phrase", "The grapefruit", "The fruit"],
    answer: 0,
  },
  {
    id: 10,
    q: "Les frites (féminin)",
    options: ["Chips", "Fried", "Fretting", "Cakes"],
    answer: 0,
  },
  {
    id: 10,
    q: "Les frites (féminin)",
    options: ["Chips", "Fried", "Fretting", "Cakes"],
    answer: 0,
  },
  {
    id: 11,
    q: "Bienvenue",
    options: ["Welcome", "Good", "Benefit"],
    answer: 0,
  },
  {
    id: 12,
    q: "Je peux vous aider?",
    options: ["Can I help you?", "Can she help?", "Can I attend?"],
    answer: 0,
  },
  {
    id: 13,
    q: "Pouvoir",
    options: ["To be able to", "To say", "To play"],
    answer: 0,
  },
  {
    id: 14,
    q: "Je peux y aller?",
    options: ["Can I go there", "Can I stay there?", "Can I go?"],
    answer: 0,
  },
  {
    id: 15,
    q: "Je dirais que",
    options: ["I would say that", "I think that", "I would dare to"],
    answer: 0,
  },
  {
    id: 16,
    q: "Je voudrais",
    options: ["I would like", "I want", "I will do"],
    answer: 0,
  },
  {
    id: 17,
    q: "Vouloir",
    options: ["To want to", "To be able to", "To vanish"],
    answer: 0,
  },
  {
    id: 18,
    q: "Je veux",
    options: ["I want", "I will", "I went"],
    answer: 0,
  },
  {
    id: 19,
    q: "Je suis allé",
    options: ["I went (masculine)", "I went (feminine)", "Alleyway"],
    answer: 0,
  },
  {
    id: 20,
    q: "devenir",
    options: ["To become", "To come", "To guess"],
    answer: 0,
  },
  {
    id: 21,
    q: "deviner",
    options: ["To guess", "To become", "Deviate"],
    answer: 0,
  },
  {
    id: 22,
    q: "le membre",
    options: ["The member", "The memory", "The membrane"],
    answer: 0,
  },
  {
    id: 23,
    q: "Vous pouvez",
    options: ["You can", "You have the power", "You must"],
    answer: 0,
  },
  {
    id: 24,
    q: "nager",
    options: ["To swim", "Eager", "To navigate"],
    answer: 0,
  },
  {
    id: 25,
    q: "naviguer",
    options: ["To navigate", "To swim", "Navigating"],
    answer: 0,
  },
  {
    id: 26,
    q: "Quand",
    options: ["When", "where", "why"],
    answer: 0,
  },
  {
    id: 27,
    q: "Quand vous voulez",
    options: ["When you want", "Where you want", "If you want"],
    answer: 0,
  },
  {
    id: 28,
    q: "Quoi",
    options: ["What", "When", "Quay"],
    answer: 0,
  },
  {
    id: 29,
    q: "Aller",
    options: ["To go", "I went", "Alley"],
    answer: 0,
  },
  {
    id: 30,
    q: "Le cours",
    options: ["The class", "The current", "Coarse"],
    answer: 0,
  },
  {
    id: 31,
    q: "Tout/tous/toute/toutes",
    options: ["All", "Took", "Everyone"],
    answer: 0,
  },
  {
    id: 32,
    q: "Courir",
    options: ["To run", "To cover", "Currant"],
    answer: 0,
  },
  {
    id: 33,
    q: "Sans",
    options: ["Without", "Sent", "Sand"],
    answer: 0,
  },
  {
    id: 34,
    q: "Limite",
    options: ["Limit", "Limited", "Length"],
    answer: 0,
  },
  {
    id: 35,
    q: "Horaires",
    options: ["Timetable/hours", "Horror", "Honorary"],
    answer: 0,
  },
  {
    id: 36,
    q: "Vos",
    options: ["Your", "You", "Voice"],
    answer: 0,
  },
  {
    id: 37,
    q: "Jamais",
    options: ["Never", "Jam", "Gang"],
    answer: 0,
  },
  {
    id: 38,
    q: "Nous ouvrons",
    options: ["We open", "We forget", "Ourselves"],
    answer: 0,
  },
  {
    id: 39,
    q: "Sept jours sur sept",
    options: ["Seven days a week", "It is in September", "Seven days a month"],
    answer: 0,
  },
  {
    id: 40,
    q: "Les devoirs",
    options: ["Homework", "To want to", "To be able to"],
    answer: 0,
  },
  {
    id: 41,
    q: "même",
    options: ["Even", "Memory", "Member"],
    answer: 0,
  },
  {
    id: 42,
    q: "le vingt-cinq",
    options: ["The twenty-fifth", "Five past eight", "The fifteenth"],
    answer: 0,
  },
  // {
  //   id: 43,
  //   q: "Voici",
  //   options: ["Here is", "Voice", "There is"],
  //   answer: 0,
  // },
  // {
  //   id: 44,
  //   q: "Voilà",
  //   options: ["There is", "Veil", "Here is"],
  //   answer: 0,
  // },
  // {
  //   id: 45,
  //   q: "",
  //   options: ["", "", ""],
  //   answer: 0,
  // },
  // {
  //   id: 46,
  //   q: "exampleToCopy",
  //   options: ["", "", ""],
  //   answer: 0,
  // },
  // {
  //   id: 47,
  //   q: "exampleToCopy",
  //   options: ["", "", ""],
  //   answer: 0,
  // },
  // {
  //   id: 48,
  //   q: "exampleToCopy",
  //   options: ["", "", ""],
  //   answer: 0,
  // },
  // {
  //   id: 49,
  //   q: "exampleToCopy",
  //   options: ["", "", ""],
  //   answer: 0,
  // },
  // {
  //   id: 50,
  //   q: "exampleToCopy",
  //   options: ["", "", ""],
  //   answer: 0,
  // },
  // {
  //   id: 21,
  //   q: "exampleToCopy",
  //   options: ["", "", ""],
  //   answer: 0,
  // },
  
  
//example of an image-based question
// {
//   id: 11,
//   q: "How many squares are showing in this pic?",
//   options: ["3", "2", "1"],
//   answer: 2,
//   img: "img/square.jpg"
//   }
  
];