// Symptom Questions Database
// Categorized by main symptom. Each category has 5 questions.
// 'severity' indicates the level of medical concern if the user answers 'Yes'.

const symptomQuestions = {
  fever: [
    {
      text: "Is your body temperature 39.4°C (103°F) or higher?",
      severity: "severe"
    },
    {
      text: "Are you experiencing a stiff neck, extreme headache, confusion, or sensitivity to light?",
      severity: "severe"
    },
    {
      text: "Do you have difficulty breathing, rapid breathing, or chest pain?",
      severity: "severe"
    },
    {
      text: "Has the fever lasted for more than 3 consecutive days?",
      severity: "moderate"
    },
    {
      text: "Do you have other symptoms like a runny nose, mild sore throat, or body aches?",
      severity: "mild"
    }
  ],
  headache: [
    {
      text: "Did the headache start extremely suddenly and reach maximum intensity within seconds (often called a 'thunderclap' headache)?",
      severity: "severe"
    },
    {
      text: "Do you have a stiff neck, high fever, confusion, difficulty speaking, or weakness/numbness on one side?",
      severity: "severe"
    },
    {
      text: "Did the headache begin after a recent head injury or trauma?",
      severity: "severe"
    },
    {
      text: "Is the headache accompanied by vision changes (e.g. blurriness, double vision) or pain around one eye?",
      severity: "moderate"
    },
    {
      text: "Is the pain a throbbing sensation, mostly on one side, and accompanied by nausea or sensitivity to light/sound?",
      severity: "mild"
    }
  ],
  cold: [
    {
      text: "Are you experiencing severe shortness of breath, audible wheezing, or tightness in your chest?",
      severity: "severe"
    },
    {
      text: "Have you been coughing up blood or pink-tinged/rusty phlegm?",
      severity: "severe"
    },
    {
      text: "Has the cough persisted for more than 3 weeks without any signs of improvement?",
      severity: "moderate"
    },
    {
      text: "Do you have a high fever (above 38.5°C / 101.3°F) that is not lowered by standard medications?",
      severity: "moderate"
    },
    {
      text: "Do you mainly have a runny/stuffy nose, sneezing, mild dry cough, or tickling throat?",
      severity: "mild"
    }
  ],
  stomach: [
    {
      text: "Is the pain sudden, severe, and localized in a specific area (such as the lower right abdomen)?",
      severity: "severe"
    },
    {
      text: "Have you noticed blood in your stool (or dark, tarry stools) or are you vomiting blood?",
      severity: "severe"
    },
    {
      text: "Are you unable to keep any fluids down for more than 12-24 hours due to vomiting?",
      severity: "moderate"
    },
    {
      text: "Is your stomach extremely tender to the touch, or hard and bloated?",
      severity: "moderate"
    },
    {
      text: "Is the pain accompanied by mild nausea, gas, bloating, or loose stools after eating?",
      severity: "mild"
    }
  ],
  throat: [
    {
      text: "Are you having significant difficulty breathing, swallowing fluids, or opening your mouth fully?",
      severity: "severe"
    },
    {
      text: "Are you drooling or unable to swallow your own saliva?",
      severity: "severe"
    },
    {
      text: "Do you have a high fever accompanied by chills or body aches?",
      severity: "moderate"
    },
    {
      text: "Do you see white patches on the back of your throat or tonsils?",
      severity: "moderate"
    },
    {
      text: "Is the sore throat accompanied by a runny nose, sneezing, or a mild dry cough?",
      severity: "mild"
    }
  ],
  fatigue: [
    {
      text: "Is your fatigue accompanied by shortness of breath, unexplained chest discomfort, or irregular heartbeats?",
      severity: "severe"
    },
    {
      text: "Are you experiencing fainting spells, severe dizziness, or feel like you might pass out?",
      severity: "severe"
    },
    {
      text: "Have you had unexplained weight loss, night sweats, or swollen lymph nodes in your neck/armpits?",
      severity: "moderate"
    },
    {
      text: "Has the exhaustion lasted for over 2-3 weeks, severely interfering with your daily tasks?",
      severity: "moderate"
    },
    {
      text: "Is the fatigue mainly related to a busy week, stressful events, or a lack of consistent sleep?",
      severity: "mild"
    }
  ]
};
