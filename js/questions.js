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
    options: ["Can I go there?", "Can I stay there?", "Can I go?"],
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
  //   id: [],
  //   q: "Voici",
  //   options: ["Here is", "Voice", "There is"],
  //   answer: 0,
  // },
  // {
  //   id: [],
  //   q: "Voilà",
  //   options: ["There is", "Veil", "Here is"],
  //   answer: 0,
  // },
  {
    id: 45,
    q: "devoir",
    options: ["to have to", "homework", "development"],
    answer: 0,
  },
  {
    id: 46,
    q: "tu dois",
    options: ["you have to", "you can", "Do your homework"],
    answer: 0,
  },
  {
    id: 47,
    q: "D'abord",
    options: ["first", "board", "overboard"],
    answer: 0,
  },
  {
    id: 48,
    q: "pour",
    options: ["for", "pour", "purse", "form"],
    answer: 0,
  },
  {
    id: 49,
    q: "faire",
    options: ["to do/to make", "ferry", "to ferry", "fair"],
    answer: 0,
  },
  {
    id: 50,
    q: "ce que",
    options: ["that which", "I will", "this one"],
    answer: 0,
  },
  {
    id: 51,
    q: "dernier/dernière",
    options: ["last", "next", "first"],
    answer: 0,
  },
  {
    id: 52, 
    q: "le jour", 
    options: ["the day", "the juice", "the journey"], 
    answer: 0
  }, {
    id: 53, 
    q: "il faut", 
    options: ["It is necessary to", "it is faulty", "it fails"], 
    answer: 0
  }, {
    id: 54, 
    q: "prendre", 
    options: ["to take", "to be able to", "to present"], 
    answer: 0
  }, {
    id: 55, 
    q: "de nous", 
    options: ["of us", "of them", "of you"], 
    answer: 0
  }, {
    id: 56, 
    q: "de la maison", 
    options: ["of the house", "of the mansion", "of the manor"], 
    answer: 0
  }, {
    id: 57, 
    q: "Ensuite", 
    options: ["then", "followed by", "bathroom"], 
    answer: 0
  }, {
    id: 58, 
    q: "ta soeur", 
    options: ["your sister", "my sister", "her sister"], 
    answer: 0
  }, {
    id: 59, 
    q: "oublier", 
    options: ["to forget", "to open", "to blow"], 
    answer: 0
  }, {
    id: 60, 
    q: "N'oublies pas", 
    options: ["Don't forget", "Don't remember", "Don't open it"], 
    answer: 0
  }, {
    id: 61, 
    q: "lui envoyer", 
    options: ["to send him/her", "to send me", "to send them"], 
    answer: 0
  }, {
    id: 62, 
    q: "une carte postale", 
    options: ["a postcard", "a letter", "a post office"], 
    answer: 0
  }, {
    id: 63, 
    q: "ta mère", 
    options: ["your mother", "my mother", "the mother"], 
    answer: 0
  }, {
    id: 64, 
    q: "tu devrais", 
    options: ["you should", "you will deliver", "you need to"], 
    answer: 0
  }, {
    id: 65, 
    q: "J'ai besoin de", 
    options: ["I need to", "My best friend is", "I have a best friend"], 
    answer: 0
  }, {
    id: 66, 
    q: "choisir", 
    options: ["to choose", "to change", "choosing"], 
    answer: 0
  }, {
    id: 67, 
    q: "Une boîte", 
    options: ["a box", "a boat", "a boast"], 
    answer: 0
  }, 
  {
    id: 68, 
    q: "Oublier", 
    options: ["To forget", "Overblown", "To allow"], 
    answer: 0
  }, {
    id: 69, 
    q: "N'oublies pas", 
    options: ["Don't forget", "Don't overrun", "Don't blink"], 
    answer: 0
  }, {
    id: 70, 
    q: "La grand-mère", 
    options: ["The grandmother", "The mother", "The tall mother"], 
    answer: 0
  }, {
    id: 71, 
    q: "Penser", 
    options: ["To think", "Pensive", "Thought"], 
    answer: 0
  }, {
    id: 72, 
    q: "Ton père", 
    options: ["Your father", "Your brother", "Your pear"], 
    answer: 0
  }, {
    id: 73, 
    q: "Aussi", 
    options: ["Also", "Automatic", "Else"], 
    answer: 0
  }, {
    id: 74, 
    q: "Trouver", 
    options: ["To find", "To trade", "To follow"], 
    answer: 0
  }, {
    id: 75, 
    q: "Penser à", 
    options: ["To think of", "Pending", "To be pending"], 
    answer: 0
  }, {
    id: 76, 
    q: "Quelle chance", 
    options: ["What good luck", "What a change", "Is there a chance?"], 
    answer: 0
  }, {
    id: 77, 
    q: "Pour nous", 
    options: ["For us", "For you", "For them"], 
    answer: 0
  }, {
    id: 78, 
    q: "Quel dommage", 
    options: ["What a shame", "What is the damage?", "What a danger"], 
    answer: 0
  }, {
    id: 79, 
    q: "Casse-pieds", 
    options: ["A pain in the neck", "Cassette", "Broke my feet"], 
    answer: 0
  }, {
    id: 80, 
    q: "Puis-je ...?", 
    options: ["Can I...?", "Can you...?", "I can..."], 
    answer: 0
  }, {
    id: 81, 
    q: "Les profs", 
    options: ["The teachers", "The profession", "The proverb"], 
    answer: 0
  }, {
    id: 82, 
    q: "Est-ce que je peux...?", 
    options: ["Can I...?", "When can I...?", "What can I...?"], 
    answer: 0
  }, {
    id: 83, 
    q: "Un pouvoir", 
    options: ["A power", "To be able to", "A powder"], 
    answer: 0
  }, {
    id: 84, 
    q: "Une pomme", 
    options: ["An apple", "A pom-pom", "A cream"], 
    answer: 0
  }, {
    id: 85, 
    q: "La qualité", 
    options: ["The quality", "Qualified", "Cauliflower"], 
    answer: 0
  }, {
    id: 86, 
    q: "Chercher", 
    options: ["To look for", "To cherish", "To teach"], 
    answer: 0
  }, 
  {
    id: 87, 
    q: "Souvent", 
    options: ["Often", "Solvent", "To solve"], 
    answer: 0
  }, 
  {
    id: 88, 
    q: "demander", 
    options: ["to ask", "I demand", "asked"], 
    answer: 0
  }, 
  {
    id: 89, 
    q: "Qu'est ce qui t'énerve avec...", 
    options: ["What annoys you about ...?", "Why did you annoy...?", "Why are you annoyed?"], 
    answer: 0
  }, {
    id: 90, 
    q: "utiliser", 
    options: ["To use", "utilities", "utensils"], 
    answer: 0
  }, {
    id: 91, 
    q: "Je utilise", 
    options: ["I use", "I used", "I will use"], 
    answer: 0
  }, {
    id: 92, 
    q: "Je vais utiliser", 
    options: ["I will use", "I am using", "I used"], 
    answer: 0
  }, {
    id: 93, 
    q: "J'ai utilisé", 
    options: ["I used", "I have a use for", "I am using"], 
    answer: 0
  }, {
    id: 94, 
    q: "faire ses devoirs", 
    options: ["To do his homework", "To be able to", "He will do it"], 
    answer: 0
  }, 
  {
    id: 95, 
    q: "le cahier", 
    options: ["The exercise book", "The cashier", "The book"], 
    answer: 0
  },
  {
    id: 96, 
    q: "exactement", 
    options: ["exactly", "about", "exact"], 
    answer: 0
  },
  {
    id: 97, 
    q: "la réponse", 
    options: ["the answer", "to answer", "she answers"], 
    answer: 0
  },
  {
    id: 98, 
    q: "les mêmes réponses", 
    options: ["the same answers", "the even answers"], 
    answer: 0
  },
  {
    id: 99, 
    q: "Il dit que", 
    options: ["He says that", "He says", "They say that"], 
    answer: 0
  },
  {
    id: 100, 
    q: "c'est moi", 
    options: ["It's me", "It's mine"], 
    answer: 0
  },
  {
    id: 101, 
    q: "c'est à moi", 
    options: ["It's mine", "it's me"], 
    answer: 0
  },
  {
    id: 102, 
    q: "copier", 
    options: ["to copy", "I copy", "to cope"], 
    answer: 0
  },
  // {
  //   id: [], 
  //   q: "", 
  //   options: ["last", "next", "first"], 
  //   answer: 0
  // },
  // {
  //   id: [], 
  //   q: "", 
  //   options: ["last", "next", "first"], 
  //   answer: 0
  // },
  // {
  //   id: [], 
  //   q: "", 
  //   options: ["last", "next", "first"], 
  //   answer: 0
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