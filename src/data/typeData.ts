// This file contains the data for each enneagram type and their comparisons

// Helper function to get data for a specific type
export const getTypeData = (typeNumber: number) => {
  return typeData[typeNumber];
};

// Helper function to get comparison data for two types
export const getTypeComparison = (type1: number, type2: number) => {
  // Ensure consistent ordering (smaller type first)
  const [smallerType, largerType] = type1 < type2 ? [type1, type2] : [type2, type1];
  const key = `${smallerType}_${largerType}`;
  
  const comparison = typeComparisons[key];
  
  // If we need to swap the advice based on the original order
  if (type1 > type2) {
    return {
      ...comparison,
      adviceForType1: comparison.adviceForType2,
      adviceForType2: comparison.adviceForType1
    };
  }
  
  return comparison;
};

// Type data
const typeData: { [key: number]: any } = {
  1: {
    name: "Le Perfectionniste",
    alias: "Le Réformateur",
    overview: "Le Type 1 est motivé par un désir profond d'être bon, correct et en équilibre. Les Uns sont consciencieux et éthiques, avec un fort sens de ce qui est bien et mal. Ils s'efforcent d'améliorer le monde, de vivre selon des principes élevés et d'éviter la colère.",
    keyTraits: [
      "Organisé et méthodique",
      "Éthique et principiel",
      "Perfectionniste et attentif aux détails",
      "Responsable et fiable",
      "Critique envers soi-même et les autres"
    ],
    basicDesire: "Être bon, avoir de l'intégrité, être équilibré",
    basicFear: "Être corrompu, mauvais ou défectueux",
    healthy: [
      "Accepte l'imperfection tout en maintenant des standards élevés",
      "Est tolérant et patient avec les autres",
      "Est sage et discernant dans ses jugements",
      "Est capable de se détendre et de profiter de la vie"
    ],
    unhealthy: [
      "Devient excessivement critique et jugeant",
      "Est rigide et inflexible dans ses opinions",
      "Réprime sa colère qui peut exploser de façon disproportionnée",
      "Souffre d'anxiété due à la peur de faire des erreurs"
    ],
    wings: [
      {
        number: 9,
        description: "Le Type 1 avec une aile 9 (1w9) est plus calme, patient et réservé. Il cherche l'harmonie tout en maintenant ses standards élevés."
      },
      {
        number: 2,
        description: "Le Type 1 avec une aile 2 (1w2) est plus chaleureux, empathique et orienté vers les relations. Il combine son désir d'amélioration avec un désir d'aider les autres."
      }
    ],
    growthTips: [
      "Pratiquer l'auto-compassion et accepter l'imperfection",
      "Reconnaître et exprimer sa colère de manière saine",
      "Cultiver la spontanéité et la joie dans le moment présent",
      "Développer la tolérance face aux différentes perspectives"
    ]
  },
  2: {
    name: "L'Altruiste",
    alias: "L'Aidant",
    overview: "Le Type 2 est motivé par un désir profond d'être aimé et apprécié. Les Deux sont empathiques, sincères et chaleureux. Ils sont généreux et attentionnés, mais peuvent aussi chercher à être indispensables pour répondre à leur besoin d'être valorisés.",
    keyTraits: [
      "Empathique et attentionné",
      "Chaleureux et affectueux",
      "Généreux et serviable",
      "Intuitif aux besoins des autres",
      "Désireux de plaire et d'être apprécié"
    ],
    basicDesire: "Être aimé et apprécié",
    basicFear: "Être indésirable et non aimé",
    healthy: [
      "Donne sans attendre de retour",
      "Établit des limites saines dans les relations",
      "Reconnaît et exprime ses propres besoins",
      "Est authentiquement altruiste"
    ],
    unhealthy: [
      "Devient manipulateur pour obtenir de l'affection",
      "S'immisce dans la vie des autres pour se sentir nécessaire",
      "Néglige ses propres besoins jusqu'à l'épuisement",
      "Devient possessif et contrôlant dans ses relations"
    ],
    wings: [
      {
        number: 1,
        description: "Le Type 2 avec une aile 1 (2w1) est plus organisé, principiel et perfectionniste. Il combine son désir d'aider avec un fort sens moral."
      },
      {
        number: 3,
        description: "Le Type 2 avec une aile 3 (2w3) est plus ambitieux, adaptable et conscient de son image. Il aide les autres tout en cherchant à être reconnu pour ses accomplissements."
      }
    ],
    growthTips: [
      "Apprendre à identifier et exprimer ses propres besoins",
      "Établir des limites saines dans les relations",
      "Pratiquer l'auto-soin sans culpabilité",
      "Donner sans attendre de reconnaissance ou de retour"
    ]
  },
  3: {
    name: "Le Battant",
    alias: "Le Performant",
    overview: "Le Type 3 est motivé par un désir profond de réussir et d'être valorisé pour ses accomplissements. Les Trois sont efficaces, adaptables et orientés vers les résultats. Ils excellent dans la présentation de soi et peuvent adapter leur image pour répondre aux attentes sociales.",
    keyTraits: [
      "Ambitieux et orienté vers le succès",
      "Efficace et productif",
      "Adaptable et pragmatique",
      "Conscient de son image",
      "Compétitif et déterminé"
    ],
    basicDesire: "Se sentir valorisé et admiré",
    basicFear: "Être sans valeur ou échouer",
    healthy: [
      "Est authentique et fidèle à ses vraies valeurs",
      "Utilise ses talents pour contribuer positivement",
      "Accepte ses limites et vulnérabilités",
      "Trouve un équilibre entre travail et vie personnelle"
    ],
    unhealthy: [
      "Devient obsédé par son statut et son image",
      "Sacrifie son authenticité pour le succès",
      "Évite l'intimité émotionnelle",
      "S'épuise dans la poursuite de la reconnaissance"
    ],
    wings: [
      {
        number: 2,
        description: "Le Type 3 avec une aile 2 (3w2) est plus chaleureux, empathique et relationnel. Il combine son ambition avec un désir d'aider et de plaire aux autres."
      },
      {
        number: 4,
        description: "Le Type 3 avec une aile 4 (3w4) est plus introspectif, créatif et sensible. Il cherche le succès tout en aspirant à l'authenticité et l'expression personnelle."
      }
    ],
    growthTips: [
      "Cultiver l'authenticité et l'honnêteté émotionnelle",
      "Définir le succès selon ses propres termes plutôt que les attentes externes",
      "Développer des relations basées sur la vulnérabilité et la confiance",
      "Prendre du temps pour l'introspection et la découverte de soi"
    ]
  },
  4: {
    name: "Le Romantique",
    alias: "L'Individualiste",
    overview: "Le Type 4 est motivé par un désir profond d'authenticité et de signification personnelle. Les Quatre sont sensibles, expressifs et introspectifs. Ils cherchent à comprendre leur identité unique et peuvent se sentir différents ou incompris par les autres.",
    keyTraits: [
      "Sensible et émotionnel",
      "Créatif et expressif",
      "Introspectif et authentique",
      "Attiré par la mélancolie et la profondeur",
      "Désireux d'être unique et spécial"
    ],
    basicDesire: "Trouver son identité et sa signification personnelle",
    basicFear: "Ne pas avoir d'identité ou de signification personnelle",
    healthy: [
      "Transforme ses émotions en créativité et expression",
      "Accepte les hauts et les bas émotionnels comme partie de la vie",
      "Développe la compassion pour soi et les autres",
      "Trouve un équilibre entre introspection et action"
    ],
    unhealthy: [
      "S'enlise dans la mélancolie et l'auto-apitoiement",
      "Devient envieux et jaloux des autres",
      "Cultive un sentiment d'être incompris et différent",
      "Rejette ce qui est ordinaire ou conventionnel"
    ],
    wings: [
      {
        number: 3,
        description: "Le Type 4 avec une aile 3 (4w3) est plus ambitieux, adaptable et conscient de son image. Il combine sa quête d'authenticité avec un désir de reconnaissance sociale."
      },
      {
        number: 5,
        description: "Le Type 4 avec une aile 5 (4w5) est plus introverti, analytique et détaché. Il explore son monde intérieur avec une approche plus intellectuelle et observatrice."
      }
    ],
    growthTips: [
      "Cultiver la discipline et l'action plutôt que de rester dans l'introspection",
      "Reconnaître que les émotions sont temporaires et ne définissent pas l'identité",
      "Développer la gratitude pour les aspects ordinaires de la vie",
      "Trouver des moyens constructifs d'exprimer sa créativité"
    ]
  },
  5: {
    name: "L'Observateur",
    alias: "L'Investigateur",
    overview: "Le Type 5 est motivé par un désir profond de comprendre le monde et de maîtriser des compétences. Les Cinq sont analytiques, perspicaces et indépendants. Ils cherchent à préserver leur énergie et leurs ressources, préférant observer avant d'agir.",
    keyTraits: [
      "Analytique et observateur",
      "Indépendant et autonome",
      "Curieux et avide de connaissances",
      "Réservé et économe de son énergie",
      "Détaché et objectif"
    ],
    basicDesire: "Être compétent et capable",
    basicFear: "Être impuissant, inutile ou incompétent",
    healthy: [
      "Partage ses connaissances et insights avec les autres",
      "Équilibre l'observation et la participation active",
      "Développe des connexions émotionnelles profondes",
      "Utilise son intellect pour résoudre des problèmes concrets"
    ],
    unhealthy: [
      "S'isole socialement et émotionnellement",
      "Devient excessivement avare de son temps et ressources",
      "Développe des théories détachées de la réalité",
      "Néglige ses besoins physiques et émotionnels"
    ],
    wings: [
      {
        number: 4,
        description: "Le Type 5 avec une aile 4 (5w4) est plus créatif, émotionnel et introspectif. Il combine son analyse intellectuelle avec une sensibilité artistique et une quête d'identité."
      },
      {
        number: 6,
        description: "Le Type 5 avec une aile 6 (5w6) est plus loyal, vigilant et orienté vers la sécurité. Il analyse le monde avec un souci particulier pour les risques potentiels et la fiabilité des systèmes."
      }
    ],
    growthTips: [
      "S'engager activement dans le monde plutôt que de simplement l'observer",
      "Reconnaître et exprimer ses émotions",
      "Cultiver des relations de confiance et d'intimité",
      "Pratiquer la générosité avec son temps, son énergie et ses connaissances"
    ]
  },
  6: {
    name: "Le Loyal",
    alias: "Le Loyaliste",
    overview: "Le Type 6 est motivé par un désir profond de sécurité et de soutien. Les Six sont loyaux, responsables et vigilants. Ils anticipent les problèmes potentiels et cherchent à créer de la stabilité dans un monde qu'ils perçoivent comme incertain.",
    keyTraits: [
      "Loyal et engagé",
      "Vigilant et prévoyant",
      "Responsable et fiable",
      "Sceptique et questionnant",
      "Anxieux face à l'incertitude"
    ],
    basicDesire: "Avoir sécurité et soutien",
    basicFear: "Être sans soutien et sans guidance",
    healthy: [
      "Développe un courage intérieur face à l'adversité",
      "Fait confiance à son propre jugement",
      "Est loyal sans être dépendant",
      "Utilise son anticipation des problèmes de manière constructive"
    ],
    unhealthy: [
      "Devient excessivement anxieux et paranoïaque",
      "Oscille entre la rébellion et la soumission à l'autorité",
      "Doute constamment de soi et des autres",
      "Projette ses peurs sur des situations neutres"
    ],
    wings: [
      {
        number: 5,
        description: "Le Type 6 avec une aile 5 (6w5) est plus analytique, détaché et indépendant. Il aborde ses inquiétudes avec une approche plus intellectuelle et observatrice."
      },
      {
        number: 7,
        description: "Le Type 6 avec une aile 7 (6w7) est plus optimiste, enthousiaste et aventureux. Il équilibre sa vigilance avec une ouverture aux nouvelles expériences et possibilités."
      }
    ],
    growthTips: [
      "Développer la confiance en soi et en ses propres décisions",
      "Distinguer entre les peurs réelles et imaginaires",
      "Pratiquer la pleine conscience pour gérer l'anxiété",
      "Cultiver le courage d'affronter l'incertitude"
    ]
  },
  7: {
    name: "L'Épicurien",
    alias: "L'Enthousiaste",
    overview: "Le Type 7 est motivé par un désir profond d'expériences positives et de liberté. Les Sept sont enthousiastes, optimistes et spontanés. Ils cherchent à maximiser le plaisir et à éviter la douleur, toujours à la recherche de nouvelles aventures et possibilités.",
    keyTraits: [
      "Enthousiaste et optimiste",
      "Spontané et aventureux",
      "Versatile et curieux",
      "Charmant et énergique",
      "Évite la douleur et les contraintes"
    ],
    basicDesire: "Être heureux et satisfait",
    basicFear: "Être privé et souffrir",
    healthy: [
      "Apprécie pleinement le moment présent",
      "S'engage dans des projets à long terme avec persévérance",
      "Transforme ses idées en actions concrètes",
      "Fait face à la douleur et aux difficultés avec maturité"
    ],
    unhealthy: [
      "Devient dispersé et incapable de se concentrer",
      "Évite les engagements et les responsabilités",
      "Recherche constamment de nouvelles stimulations",
      "Fuit la douleur émotionnelle par l'excès"
    ],
    wings: [
      {
        number: 6,
        description: "Le Type 7 avec une aile 6 (7w6) est plus loyal, responsable et conscient des risques. Il équilibre son enthousiasme avec une certaine prudence et un sens des responsabilités."
      },
      {
        number: 8,
        description: "Le Type 7 avec une aile 8 (7w8) est plus assertif, indépendant et orienté vers l'action. Il poursuit ses plaisirs avec plus de détermination et d'assurance."
      }
    ],
    growthTips: [
      "Cultiver la discipline et la persévérance dans les projets",
      "Apprendre à être présent plutôt que de toujours anticiper la prochaine expérience",
      "Faire face aux émotions négatives plutôt que de les éviter",
      "Approfondir les expériences plutôt que de les multiplier"
    ]
  },
  8: {
    name: "Le Chef",
    alias: "Le Challenger",
    overview: "Le Type 8 est motivé par un désir profond de force et de contrôle. Les Huit sont assertifs, protecteurs et décisifs. Ils affrontent les défis directement et protègent ceux qu'ils considèrent comme vulnérables, tout en évitant de montrer leur propre vulnérabilité.",
    keyTraits: [
      "Assertif et direct",
      "Protecteur et juste",
      "Décisif et confiant",
      "Indépendant et autonome",
      "Résistant à la vulnérabilité"
    ],
    basicDesire: "Se protéger et être en contrôle",
    basicFear: "Être contrôlé ou dominé par les autres",
    healthy: [
      "Utilise sa force pour protéger et défendre les autres",
      "Fait preuve de magnanimité et de générosité",
      "Accepte sa vulnérabilité sans la percevoir comme une faiblesse",
      "Exerce son pouvoir avec justice et retenue"
    ],
    unhealthy: [
      "Devient intimidant et dominateur",
      "Défie l'autorité de manière excessive",
      "Refuse toute forme de vulnérabilité ou de faiblesse",
      "Peut recourir à la vengeance quand il se sent trahi"
    ],
    wings: [
      {
        number: 7,
        description: "Le Type 8 avec une aile 7 (8w7) est plus enthousiaste, optimiste et aventureux. Il combine sa force avec une joie de vivre et une ouverture aux nouvelles expériences."
      },
      {
        number: 9,
        description: "Le Type 8 avec une aile 9 (8w9) est plus calme, patient et réceptif. Il exerce son pouvoir de manière plus mesurée et peut être plus tolérant envers les autres."
      }
    ],
    growthTips: [
      "Cultiver la douceur et la retenue dans l'expression de sa force",
      "Reconnaître et accepter sa propre vulnérabilité",
      "Développer l'écoute et l'empathie envers les autres",
      "Utiliser son influence pour créer des situations gagnant-gagnant"
    ]
  },
  9: {
    name: "Le Médiateur",
    alias: "Le Pacificateur",
    overview: "Le Type 9 est motivé par un désir profond de paix intérieure et extérieure. Les Neuf sont réceptifs, conciliants et stables. Ils cherchent à éviter les conflits et à maintenir l'harmonie, parfois au détriment de leurs propres désirs et besoins.",
    keyTraits: [
      "Pacifique et harmonieux",
      "Patient et réceptif",
      "Accommodant et conciliant",
      "Stable et rassurant",
      "Évite les conflits et la confrontation"
    ],
    basicDesire: "Avoir la paix intérieure et l'harmonie",
    basicFear: "La perte et la séparation",
    healthy: [
      "Affirme ses propres besoins et opinions",
      "Reste présent et engagé dans sa vie",
      "Utilise sa capacité de médiation pour résoudre les conflits",
      "Trouve un équilibre entre l'harmonie et l'action"
    ],
    unhealthy: [
      "Devient passif et résistant passivement",
      "Évite les décisions et les prises de position",
      "Se distrait pour éviter les problèmes",
      "Néglige ses propres priorités et besoins"
    ],
    wings: [
      {
        number: 8,
        description: "Le Type 9 avec une aile 8 (9w8) est plus assertif, indépendant et énergique. Il peut mieux défendre ses positions tout en maintenant son désir d'harmonie."
      },
      {
        number: 1,
        description: "Le Type 9 avec une aile 1 (9w1) est plus organisé, principiel et perfectionniste. Il combine son désir de paix avec un sens moral et un souci du bien et du mal."
      }
    ],
    growthTips: [
      "Pratiquer l'affirmation de soi et l'expression de ses opinions",
      "Reconnaître l'importance de l'action et de la prise de décision",
      "Rester présent et engagé plutôt que de se distraire",
      "Identifier et poursuivre ses propres priorités"
    ]
  }
};

// Type comparisons
const typeComparisons: { [key: string]: any } = {
  "1_2": {
    overview: "La relation entre les Types 1 et 2 peut être complémentaire, combinant le sens moral du Type 1 avec la chaleur et l'empathie du Type 2. Les deux types partagent un désir d'aider et d'améliorer, bien que leurs approches diffèrent.",
    commonalities: [
      "Désir d'aider et d'améliorer la vie des autres",
      "Sens élevé de la responsabilité",
      "Tendance à être critiques envers eux-mêmes",
      "Valorisation du service et de la contribution"
    ],
    differences: [
      "Le Type 1 est guidé par des principes et des standards, tandis que le Type 2 est guidé par les relations et les sentiments",
      "Le Type 1 peut sembler rigide et jugeant, alors que le Type 2 est plus adaptable et accommodant",
      "Le Type 1 exprime plus facilement sa colère, le Type 2 a tendance à la réprimer",
      "Le Type 2 cherche l'approbation et l'appréciation, le Type 1 cherche à être correct et juste"
    ],
    potentialConflicts: [
      "Le Type 1 peut trouver le Type 2 trop émotionnel et pas assez objectif",
      "Le Type 2 peut trouver le Type 1 trop critique et pas assez chaleureux",
      "Le Type 1 peut être frustré par le besoin d'approbation du Type 2",
      "Le Type 2 peut se sentir blessé par les critiques du Type 1"
    ],
    adviceForType1: [
      "Reconnaître et apprécier l'empathie et la générosité du Type 2",
      "Adoucir vos critiques et exprimer plus d'appréciation",
      "Être attentif aux besoins émotionnels du Type 2",
      "Accepter que les relations sont parfois plus importantes que les principes"
    ],
    adviceForType2: [
      "Respecter le besoin d'intégrité et de principes du Type 1",
      "Ne pas prendre personnellement les critiques du Type 1",
      "Exprimer vos besoins clairement plutôt que d'attendre qu'ils soient devinés",
      "Établir des limites saines dans votre désir d'aider"
    ]
  },
  "1_3": {
    overview: "La relation entre les Types 1 et 3 est souvent productive, les deux types étant orientés vers l'accomplissement et l'amélioration. Le Type 1 apporte l'intégrité et les principes, tandis que le Type 3 apporte l'efficacité et l'adaptabilité.",
    commonalities: [
      "Orientation vers les objectifs et les résultats",
      "Désir d'amélioration et de progrès",
      "Tendance à être exigeants envers eux-mêmes",
      "Valorisation du travail et de l'effort"
    ],
    differences: [
      "Le Type 1 est guidé par des principes internes, le Type 3 par la reconnaissance externe",
      "Le Type 1 se concentre sur la correction et la justesse, le Type 3 sur l'efficacité et le succès",
      "Le Type 1 peut être rigide dans ses méthodes, le Type 3 est plus adaptable",
      "Le Type 3 est plus préoccupé par son image que le Type 1"
    ],
    potentialConflicts: [
      "Le Type 1 peut trouver le Type 3 trop préoccupé par les apparences et pas assez par l'intégrité",
      "Le Type 3 peut trouver le Type 1 trop rigide et perfectionniste",
      "Des désaccords sur les moyens d'atteindre les objectifs (éthique vs efficacité)",
      "Le Type 1 peut critiquer le Type 3 pour ses raccourcis ou son manque de profondeur"
    ],
    adviceForType1: [
      "Apprécier l'efficacité et l'adaptabilité du Type 3",
      "Reconnaître que l'image et la présentation ont leur importance",
      "Être moins critique et plus encourageant",
      "Accepter que la perfection n'est pas toujours nécessaire pour réussir"
    ],
    adviceForType3: [
      "Valoriser l'intégrité et les principes du Type 1",
      "Prendre le temps de réfléchir à la dimension éthique de vos actions",
      "Être authentique plutôt que de chercher à projeter une image",
      "Reconnaître que le succès ne se mesure pas uniquement aux résultats visibles"
    ]
  },
  // Ajoutez les autres comparaisons ici
  // Pour simplifier, nous n'incluons que quelques comparaisons dans cet exemple
};