export const questions = [
    {
        enonce: "Dans quel balise HTML plaçons-nous le code JavaScript ?",
        assertions: ["La balise js", "La balise javascript", "La balise script", "La balise rel",],
        reponse: "La balise script",
    },
    {
        enonce: "Comment faire appelle à une fonction nommée « sum »?",
        assertions: ["sum()", "call function sum()", "call sum()", "Aucune réponse.",],
        reponse: "sum()",
    },

    {
        enonce: "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »??",
        assertions: ['script href=myscript.js"', 'script name="myscript.js"', 'script src="myscript.js"', "Tout les réponses sont vrais"],
        reponse: 'script src="myscript.js"',
    },

    {
        enonce: "Comment écrire une condition IF en JavaScript?",
        assertions: ["if a = 2 then", "if a = 2", "if a == 2 else", "if (a == 2)"],
        reponse: "if (a == 2)",
    },

    {
        enonce: "Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?",
        assertions: ["if a <> 2", "if (a != 2)", "if a =! 2 then", "if (a <> 2)"],
        reponse: "if (a != 2)",
    },
    {
        enonce: "Comment créer une fonction en JavaScript?",
        assertions: ["function f()", "function = f()", "function:f()", "Aucune de ces réponses n’est vraie."],
        reponse: "function f()",
    },
    {
        enonce: "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?",
        assertions: ['if (c == "XYZ") then { } else { }', 'if (c = "XYZ") then { } else { }', 'if (c == "XYZ") { } else { }', 'if (c = "XYZ") { } else { }'],
        reponse: 'if (c == "XYZ") { } else { }',
    },
    {
        enonce: "Quel est le bon endroit pour insérer un code JavaScript?",
        assertions: ["La section head", "Les deux sections head et body sont correctes", "La section body", "Aucune de ces réponses n’est vraie."],
        reponse: "Les deux sections head et body sont correctes",
    },
    {
        enonce: "Comment écrivez-vous « Hello World » dans une boîte d’alerte?",
        assertions: ['msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'],
        reponse: 'alert("Hello World");',
    },
    {
        enonce:
            "Quel est l’objet qui se trouve dans TOP de la racine en JavaScript ?",
        assertions: ["url", "top", "window", "document"],
        reponse: "window",
    },
    {
        enonce: "Comment trouvez-vous le nombre avec la plus grande valeur de « a » et « b »?",
        assertions: ["Math.ceil(a, b)", "Math.max(a, b)", "ceil(a, b)", "top(a, b)"],
        reponse: "Math.max(a, b)",
    },
    {
        enonce: "Comment pouvez-vous ajouter un commentaire dans un code JavaScript?",
        assertions: ["//Ceci est un commentaire", '"Ceci est un commentaire"', "vide", "#Ceci est un commentaire"],
        reponse: "//Ceci est un commentaire",
    },
    {
        enonce: "Comment arrondir le nombre 3.12 à un nombre entier plus proche?",
        assertions: ["Math.round(3.12)", "Math.rnd(3.12)", "float(3.12)", "Math.float(3.12)"],
        reponse: "Math.round(3.12)",
    },
    {
        enonce: "Quelle est la syntaxe correct de la boucle while?",
        assertions: ["while i = 1 to 5", "while (i <= 5)", "while (i=0; i <= 5; i++)", "while (i <= 5; i++)"],
        reponse: "while (i <= 5)",
    },
    {
        enonce: "Quelle est la syntaxe correct de la boucle for?",
        assertions: ["for (i <= 10; i++)", "for i = 1 to 10", "for (i = 0; i <= 10)", "for (i = 0; i <= 10; i++)"],
        reponse: "for (i = 0; i <= 10; i++)",
    },
]; 