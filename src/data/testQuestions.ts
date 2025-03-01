// This file contains the questions for the different tests

// Helper function to get questions for a specific test
export const getTestQuestions = (testType: string) => {
  switch (testType) {
    case 'complete':
      return completeTestQuestions;
    case 'quick':
      return quickTestQuestions;
    case 'wings':
      return wingsTestQuestions;
    default:
      return [];
  }
};

// Complete test questions (90 questions)
const completeTestQuestions = [
  {
    id: 1,
    text: "Je m'efforce constamment d'améliorer les choses et de corriger les erreurs.",
    types: [1],
  },
  {
    id: 2,
    text: "J'ai tendance à remarquer et à répondre aux besoins des autres avant qu'ils ne les expriment.",
    types: [2],
  },
  {
    id: 3,
    text: "Je suis motivé par l'accomplissement et la reconnaissance de mes succès.",
    types: [3],
  },
  {
    id: 4,
    text: "Je me sens souvent différent des autres et j'ai un fort désir d'authenticité.",
    types: [4],
  },
  {
    id: 5,
    text: "J'ai besoin de temps seul pour réfléchir et recharger mes batteries.",
    types: [5],
  },
  {
    id: 6,
    text: "Je suis constamment vigilant face aux dangers potentiels et aux problèmes qui pourraient survenir.",
    types: [6],
  },
  {
    id: 7,
    text: "Je cherche toujours de nouvelles expériences excitantes et j'évite la douleur ou l'ennui.",
    types: [7],
  },
  {
    id: 8,
    text: "Je préfère prendre le contrôle des situations et protéger les plus vulnérables.",
    types: [8],
  },
  {
    id: 9,
    text: "J'évite les conflits et cherche à créer de l'harmonie dans mon environnement.",
    types: [9],
  },
  {
    id: 10,
    text: "Je suis souvent critique envers moi-même et les autres lorsque les choses ne sont pas faites correctement.",
    types: [1],
  },
  // Ajoutez les 80 questions restantes ici
  // Pour simplifier, nous n'incluons que 10 questions dans cet exemple
];

// Quick test questions (36 questions)
const quickTestQuestions = [
  {
    id: 101,
    text: "Je m'efforce d'être parfait et j'ai du mal à tolérer les erreurs.",
    types: [1],
  },
  {
    id: 102,
    text: "J'ai tendance à mettre les besoins des autres avant les miens.",
    types: [2],
  },
  {
    id: 103,
    text: "Je suis très orienté vers les objectifs et les résultats.",
    types: [3],
  },
  {
    id: 104,
    text: "Je suis sensible et j'ai tendance à me sentir incompris.",
    types: [4],
  },
  {
    id: 105,
    text: "J'observe attentivement avant d'agir et je valorise mon indépendance.",
    types: [5],
  },
  {
    id: 106,
    text: "Je suis loyal et j'anticipe souvent les problèmes potentiels.",
    types: [6],
  },
  {
    id: 107,
    text: "Je cherche constamment de nouvelles expériences stimulantes.",
    types: [7],
  },
  {
    id: 108,
    text: "Je suis direct et j'aime prendre des décisions.",
    types: [8],
  },
  {
    id: 109,
    text: "Je préfère éviter les conflits et maintenir la paix.",
    types: [9],
  },
  // Ajoutez les 27 questions restantes ici
  // Pour simplifier, nous n'incluons que 9 questions dans cet exemple
];

// Wings test questions (18 questions)
const wingsTestQuestions = [
  {
    id: 201,
    text: "Je suis plus enclin à être critique et exigeant (Type 1) ou à éviter les conflits et rechercher la paix (Type 9).",
    types: [1, 9],
  },
  {
    id: 202,
    text: "Je suis plus enclin à aider les autres et être attentionné (Type 2) ou à être perfectionniste et ordonné (Type 1).",
    types: [1, 2],
  },
  {
    id: 203,
    text: "Je suis plus enclin à être ambitieux et orienté vers le succès (Type 3) ou à être attentionné et relationnel (Type 2).",
    types: [2, 3],
  },
  {
    id: 204,
    text: "Je suis plus enclin à être émotif et authentique (Type 4) ou à être performant et adaptable (Type 3).",
    types: [3, 4],
  },
  {
    id: 205,
    text: "Je suis plus enclin à être analytique et détaché (Type 5) ou à être sensible et expressif (Type 4).",
    types: [4, 5],
  },
  {
    id: 206,
    text: "Je suis plus enclin à être anxieux et loyal (Type 6) ou à être observateur et réservé (Type 5).",
    types: [5, 6],
  },
  {
    id: 207,
    text: "Je suis plus enclin à être enthousiaste et spontané (Type 7) ou à être prudent et loyal (Type 6).",
    types: [6, 7],
  },
  {
    id: 208,
    text: "Je suis plus enclin à être assertif et protecteur (Type 8) ou à être optimiste et aventureux (Type 7).",
    types: [7, 8],
  },
  {
    id: 209,
    text: "Je suis plus enclin à être conciliant et apaisant (Type 9) ou à être fort et confrontant (Type 8).",
    types: [8, 9],
  },
  // Ajoutez les 9 questions restantes ici
  // Pour simplifier, nous n'incluons que 9 questions dans cet exemple
];