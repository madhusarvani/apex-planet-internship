const moodSelector = document.getElementById("moodSelector");
const body = document.body;
const moodEmoji = document.getElementById("moodEmoji");
const moodTitle = document.getElementById("moodTitle");
const moodDescription = document.getElementById("moodDescription");
const moodImage = document.getElementById("moodImage");

const moodMap = {
  neutral: {
    emoji: "😐",
    title: "Neutral",
    description: "You feel steady and composed – balanced in thought and emotion. This is your equilibrium state.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8affa429-7a11-42c7-b9b6-835e6687a830.png"
  },
  happy: {
    emoji: "😄",
    title: "Happy",
    description: "Your spirit shines bright like the sun. Embrace joy, positivity, and warmth in your day.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b61d3f7d-cdd9-4a9c-80de-769ccd11591d.png"
  },
  calm: {
    emoji: "😌",
    title: "Calm",
    description: "A serene and peaceful mindset guides you. Find stillness and harmony in the present moment.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7abefa57-0cbd-47f1-8578-d414a4c9f0cd.png"
  },
  sad: {
    emoji: "😔",
    title: "Sad",
    description: "It’s okay to feel blue. Moments of reflection and gentleness will help you heal and grow.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76442869-0551-4397-8a64-91604c34f20c.png"
  },
  energetic: {
    emoji: "⚡",
    title: "Energetic",
    description: "You’re full of vitality and zest. Harness your drive and excitement to achieve great things.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e9edbc4-c8c5-4d90-8362-375f10687b83.png"
  }
};

function updateMood(mood) {
  const moodData = moodMap[mood] || moodMap["neutral"];
  body.setAttribute("data-mood", mood);
  moodEmoji.textContent = moodData.emoji;
  moodTitle.textContent = moodData.title;
  moodDescription.textContent = moodData.description;
  moodImage.src = moodData.image;
  moodImage.alt = `${moodData.title} face icon`;
}

moodSelector.addEventListener("change", (e) => updateMood(e.target.value));

// Set default
updateMood(moodSelector.value);
