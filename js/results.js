// Results Content Database
// Categorized by category and overall severity status

const resultsDatabase = {
  fever: {
    severe: {
      title: "Seek Immediate Medical Attention",
      summary: "Your responses suggest a high fever or warning signs of a serious underlying condition. Please seek immediate professional medical evaluation.",
      tips: [
        "Go to the nearest emergency room or call emergency services (112) immediately.",
        "Do not attempt to treat these severe symptoms at home without professional guidance.",
        "Have someone stay with you if you feel confused, dizzy, or extremely weak.",
        "Keep a log of your body temperature and when it started rising to share with doctors."
      ],
      doctorAdvice: "Go to an emergency department or call emergency services (112) right away. Do not delay."
    },
    moderate: {
      title: "Consult a Healthcare Professional",
      summary: "Your symptoms, such as a persistent fever, require a professional medical evaluation to rule out complex infections or conditions.",
      tips: [
        "Schedule an appointment with your doctor or visit an urgent care clinic within the next 24 hours.",
        "Take over-the-counter fever reducers (like paracetamol or ibuprofen) strictly according to package instructions.",
        "Drink plenty of fluids (water, clear broths, oral rehydration solutions) to prevent dehydration.",
        "Rest in a cool room, use light bedding, and avoid heavy clothing or blankets."
      ],
      doctorAdvice: "Contact your primary care doctor or visit an urgent care center today for guidance."
    },
    mild: {
      title: "Rest, Hydrate, and Monitor Symptoms",
      summary: "Your fever appears to be mild and unaccompanied by major red flags. It can typically be managed with home care, but monitor it closely.",
      tips: [
        "Prioritize complete bed rest to help your immune system fight off the illness.",
        "Stay hydrated by sipping water, herbal tea, or electrolyte drinks regularly.",
        "You may take over-the-counter pain/fever relief if you experience discomfort or body aches.",
        "Keep your room at a comfortable temperature and wear light, breathable fabrics."
      ],
      doctorAdvice: "Consult a doctor if your fever rises above 39°C (102.2°F), lasts longer than 3 days, or if you develop new symptoms like a rash or breathing difficulty."
    }
  },
  headache: {
    severe: {
      title: "Immediate Emergency Care Required",
      summary: "A sudden, extremely painful headache ('thunderclap') or one accompanied by neurological symptoms (like numbness, weakness, or speech issues) requires immediate emergency care.",
      tips: [
        "Call emergency services (112) or have someone drive you to the nearest emergency room immediately.",
        "Do not take aspirin or other blood-thinning painkillers before being examined.",
        "Lie down in a dark, quiet room while waiting for medical assistance.",
        "Note exactly what time the headache began and any preceding sensations."
      ],
      doctorAdvice: "This situation requires immediate emergency medical evaluation. Go to an emergency room."
    },
    moderate: {
      title: "Schedule a Medical Examination",
      summary: "A headache linked to minor head trauma, vision changes, or persistent localized pain should be evaluated by a medical professional soon.",
      tips: [
        "Contact your doctor's office or visit an outpatient clinic today.",
        "Avoid bright lights, loud noises, and screen time, which can exacerbate the pain.",
        "Rest in a cool, quiet, and dark room.",
        "Keep track of the pain intensity, location (e.g., temples, behind eyes), and triggers."
      ],
      doctorAdvice: "We recommend consulting a doctor or visiting an urgent care clinic within 24 hours."
    },
    mild: {
      title: "Manage at Home & Monitor",
      summary: "Your headache appears consistent with a standard tension headache or mild migraine. Home remedies and rest should help.",
      tips: [
        "Rest in a dark, quiet room away from screens and noise.",
        "Apply a cold compress to your forehead or the back of your neck.",
        "Ensure you are fully hydrated, as dehydration is a very common headache trigger.",
        "Consider standard over-the-counter pain relievers if appropriate for you."
      ],
      doctorAdvice: "See a doctor if your headache does not respond to pain relievers, worsens significantly, or occurs more than 2-3 times a week."
    }
  },
  cold: {
    severe: {
      title: "Seek Urgent Medical Evaluation",
      summary: "Difficulty breathing, chest tightness, or coughing up blood are severe respiratory symptoms that require immediate medical attention.",
      tips: [
        "Go to the nearest emergency department or call emergency services (112) immediately.",
        "Sit upright to make breathing easier, and avoid lying flat on your back.",
        "If you use a prescribed inhaler, use it as directed and seek help.",
        "Do not attempt physical activity or exert yourself in any way."
      ],
      doctorAdvice: "Call emergency services or go to an emergency room immediately for oxygen and clinical evaluation."
    },
    moderate: {
      title: "Consult Your Doctor",
      summary: "A persistent cough (lasting over 3 weeks) or high fevers associated with respiratory symptoms suggest you may have a secondary infection, like bronchitis or pneumonia.",
      tips: [
        "Contact your healthcare provider to schedule an examination.",
        "Use a humidifier or inhale steam from a warm shower to soothe irritated airways.",
        "Stay hydrated with warm liquids (tea with honey, warm water, broths) to help thin mucus.",
        "Avoid environmental irritants such as tobacco smoke, dust, and cold dry air."
      ],
      doctorAdvice: "Consult a doctor in the next 1-2 days to check your lungs and determine if targeted medication is needed."
    },
    mild: {
      title: "Symptomatic Home Care",
      summary: "Your symptoms match a typical viral common cold. It is self-limiting and should improve with rest and fluids.",
      tips: [
        "Get plenty of sleep and rest to allow your body to heal.",
        "Drink warm liquids, water, and juices to soothe your throat and stay hydrated.",
        "Use saline nasal drops or sprays to relieve nasal congestion.",
        "Gargle with warm salt water (1/2 teaspoon salt in a glass of warm water) to soothe a sore throat."
      ],
      doctorAdvice: "Consult a doctor if your symptoms worsen after 10 days, if you develop a high fever, or if breathing becomes labored."
    }
  },
  stomach: {
    severe: {
      title: "Immediate Emergency Care Required",
      summary: "Severe, localized abdominal pain (such as in the lower right side) or blood in your vomit/stool can indicate life-threatening conditions like appendicitis or internal bleeding.",
      tips: [
        "Go to the emergency room immediately. Do not eat, drink, or take pain relievers before being evaluated.",
        "Do not use laxatives or enemas, as these can be dangerous for certain abdominal conditions.",
        "Rest in a comfortable position, usually lying down with your knees bent.",
        "Be prepared to describe the exact location and onset time of the pain to emergency staff."
      ],
      doctorAdvice: "Seek emergency medical care immediately. Call 112 or go to the nearest emergency department."
    },
    moderate: {
      title: "Medical Consultation Recommended",
      summary: "Inability to keep fluids down, severe tenderness, or bloating accompanying abdominal pain should be evaluated by a healthcare professional.",
      tips: [
        "Contact your doctor or visit a clinic for advice.",
        "If you can, take tiny, frequent sips of clear fluids (or oral rehydration salts) to prevent dehydration.",
        "Avoid eating solid foods, dairy, caffeine, alcohol, or greasy foods until evaluated.",
        "Apply a warm heating pad to your abdomen for comfort, unless appendicitis is suspected."
      ],
      doctorAdvice: "Consult a doctor or visit an urgent care center within the next 12-24 hours."
    },
    mild: {
      title: "Rest Stomach & Maintain Hydration",
      summary: "Your symptoms appear to be mild indigestion, gas, or a mild stomach bug. Home care and a gentle diet will help.",
      tips: [
        "Rest your stomach by consuming only clear liquids for a few hours, then transition to bland foods (bananas, rice, applesauce, toast - the BRAT diet).",
        "Drink fluids slowly and in small amounts to avoid triggering nausea.",
        "Avoid spicy, fatty, sugary, or dairy products for a couple of days.",
        "Avoid lying down flat immediately after drinking or eating to prevent acid reflux."
      ],
      doctorAdvice: "See a doctor if your symptoms do not improve after 48 hours, if vomiting/diarrhea becomes frequent, or if you develop a high fever."
    }
  },
  throat: {
    severe: {
      title: "Immediate Medical Emergency",
      summary: "Inability to swallow your own saliva, drooling, or difficulty breathing indicates a severe airway obstruction risk (like epiglottitis or severe tonsillitis). Seek immediate care.",
      tips: [
        "Call emergency services (112) or go to the nearest emergency room immediately.",
        "Do not attempt to swallow solid foods or large amounts of liquid.",
        "Try to stay calm and sit in an upright, slightly forward-leaning position to keep your airway open.",
        "Do not force anything down your throat."
      ],
      doctorAdvice: "This is a medical emergency. Go to an emergency department or call 112 immediately."
    },
    moderate: {
      title: "See a Doctor for Evaluation",
      summary: "White patches on your tonsils or a sore throat with high fever suggest a bacterial infection (like Strep throat) that may require antibiotics.",
      tips: [
        "Schedule an appointment with your doctor or visit an outpatient clinic today.",
        "Avoid sharing utensils, cups, or towels with family members to prevent spreading the infection.",
        "Gargle with warm salt water to relieve throat discomfort.",
        "Take over-the-counter pain relievers (e.g. paracetamol) to reduce throat pain and fever."
      ],
      doctorAdvice: "Consult a healthcare professional today. A rapid strep test or throat culture may be required."
    },
    mild: {
      title: "Home Remedies & Throat Soothing",
      summary: "Your sore throat is likely due to a mild viral infection (like a cold) or dry air. It can be managed at home.",
      tips: [
        "Gargle with warm salt water several times a day.",
        "Drink plenty of warm liquids (herbal tea with honey, warm broth) or very cold liquids to numb the throat.",
        "Use throat lozenges or hard candies to stimulate saliva production and lubricate the throat.",
        "Rest your voice and avoid smoking or exposure to secondhand smoke."
      ],
      doctorAdvice: "See a doctor if the sore throat lasts longer than 7 days, worsens, or is accompanied by joint pain, earache, or a rash."
    }
  },
  fatigue: {
    severe: {
      title: "Seek Immediate Emergency Assessment",
      summary: "Unexplained chest discomfort, shortness of breath, or fainting alongside fatigue can indicate cardiovascular or systemic emergencies.",
      tips: [
        "Call emergency services (112) or go to the emergency room immediately.",
        "Sit or lie down in a safe place. Do not attempt to drive yourself.",
        "Keep breathing slow and steady, and avoid any physical exertion.",
        "Have someone stay with you to help communicate with emergency workers."
      ],
      doctorAdvice: "Seek immediate emergency medical care. Do not wait to see if the fatigue passes."
    },
    moderate: {
      title: "Schedule a Clinic Appointment",
      summary: "Persistent fatigue lasting weeks, or fatigue accompanied by night sweats or unexplained weight loss, requires comprehensive laboratory investigations.",
      tips: [
        "Schedule a comprehensive health checkup with your primary care physician.",
        "Keep a daily log of your sleep hours, diet, physical activity, and times of peak exhaustion.",
        "Avoid relying on excessive caffeine or sugar for temporary energy boosts, as this leads to crashes.",
        "Prioritize light, low-impact movements like walking, and maintain a consistent sleep schedule."
      ],
      doctorAdvice: "Make an appointment with a doctor to discuss blood tests (checking thyroid, iron levels, vitamins, etc.)."
    },
    mild: {
      title: "Optimize Sleep, Nutrition & Stress",
      summary: "Your fatigue is likely related to lifestyle factors, stress, or lack of rest. Adjusting your daily routines should improve your energy.",
      tips: [
        "Aim for 7-9 hours of quality sleep per night, maintaining consistent sleep and wake times.",
        "Ensure you are drinking enough water throughout the day, as mild dehydration causes tiredness.",
        "Eat regular, balanced meals containing complex carbs, lean proteins, and healthy fats.",
        "Incorporate light exercise (like a 20-minute walk) and stress-reduction techniques (meditation, deep breathing)."
      ],
      doctorAdvice: "Consult a doctor if your fatigue persists for more than 2 weeks despite improving your sleep, diet, and stress levels."
    }
  }
};
