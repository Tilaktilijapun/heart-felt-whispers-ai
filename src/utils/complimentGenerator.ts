
// This is a simplified compliment generator
// In a real app, this would be much more sophisticated or use an API

const generateCompliment = (mood: string, personality: string, preferences: string): string => {
  // Simple mapping for different moods
  const moodMap: Record<string, string[]> = {
    // Happy, joyful, excited moods
    happy: [
      "Your joy is infectious—keep embracing life with that beautiful enthusiasm that makes everyone around you smile.",
      "The sparkle in your energy today is a perfect reflection of the radiant soul that you are every day.",
      "Your happiness creates ripples of positivity that touch everyone fortunate enough to be in your orbit.",
    ],
    joyful: [
      "You have a gift for finding beauty in life's smallest moments—never lose that miraculous way of seeing the world.",
      "The genuine joy you bring into rooms changes atmospheres—what a rare and precious talent to possess.",
    ],
    excited: [
      "Your enthusiasm creates possibilities where others see none—what a magnificent gift you give the world.",
      "The passion you bring to everything you do transforms the ordinary into something truly extraordinary.",
    ],
    
    // Sad, down, blue moods
    sad: [
      "Even in your sadness, there's a depth to you that speaks of your beautiful capacity to feel deeply—never apologize for your tender heart.",
      "Your strength isn't defined by always feeling happy, but by how you carry your heart through difficult seasons with such grace.",
      "The sensitivity that brings you pain also gives you your remarkable compassion—both are precious parts of who you are.",
    ],
    down: [
      "Your resilience is quietly working beneath the surface, even when you can't feel it—trust that this moment is not your forever.",
      "The gentleness with which you navigate hard days says so much about the remarkable person you are.",
    ],
    blue: [
      "Your ability to acknowledge your feelings shows wisdom beyond measure—this honesty is your superpower.",
      "Even on your cloudiest days, your inner light never truly dims—it's one of the many things that makes you extraordinary.",
    ],
    
    // Anxious, stressed, overwhelmed moods
    anxious: [
      "Your courage in facing each day despite your anxiety speaks volumes about your quiet, powerful strength.",
      "The care with which you approach life, even when it feels overwhelming, shows a thoughtfulness that makes you truly special.",
      "Your anxious heart has taught you empathy that few possess—what a beautiful gift you bring to this sometimes harsh world.",
    ],
    stressed: [
      "The dedication that sometimes leads to your stress also drives your remarkable accomplishments—what a wonderful paradox you are.",
      "Your capability under pressure reveals a resilience that's both inspiring and deeply admirable.",
    ],
    overwhelmed: [
      "Even when the world feels too heavy, you continue showing up with grace—that quiet persistence is your superpower.",
      "Your ability to navigate complexity, even when it feels overwhelming, shows an extraordinary capacity that you often underestimate.",
    ],
    
    // Tired, exhausted moods
    tired: [
      "Your tiredness today is evidence of how fully you've been investing yourself in what matters—what beautiful dedication.",
      "Even in your exhaustion, your essential warmth shines through—a testament to how deeply it runs in your soul.",
    ],
    exhausted: [
      "The fatigue you feel reflects the generosity with which you spend your energy on others—what a beautiful gift you give.",
      "Your willingness to push through exhaustion for what you believe in reveals a strength of character that's truly remarkable.",
    ],
    
    // Calm, peaceful moods
    calm: [
      "The tranquility you cultivate around you creates healing spaces for everyone fortunate enough to be in your presence.",
      "Your centered presence amidst chaos is a rare and precious gift this frantic world desperately needs.",
    ],
    peaceful: [
      "The gentle steadiness you bring to spaces changes the energy around you in ways more powerful than you realize.",
      "Your ability to find and create peace speaks to a wisdom that runs soul-deep within you.",
    ],
    
    // Default for unrecognized moods
    default: [
      "Your unique way of moving through the world creates ripples of goodness you'll never fully see.",
      "The authenticity with which you navigate life's complexities is both refreshing and deeply inspiring.",
      "The world is more colorful, more interesting, and infinitely better because your specific heart exists within it.",
      "There's a quiet magnificence in how you approach life that deserves to be celebrated more often.",
      "Your presence in others' lives is a gift they may not always acknowledge but certainly would feel missing if it were gone.",
    ],
  };

  // Convert input to lowercase and try to match with our mood categories
  const lowerMood = mood.toLowerCase();
  
  // Find matching mood keys (checking if any mood key is contained in the input)
  let matchedMoods: string[] = [];
  for (const key of Object.keys(moodMap)) {
    if (lowerMood.includes(key)) {
      matchedMoods.push(key);
    }
  }
  
  // If no specific moods matched, use the default category
  if (matchedMoods.length === 0) {
    matchedMoods = ['default'];
  }
  
  // Get all possible compliments from matched mood categories
  const possibleCompliments: string[] = [];
  matchedMoods.forEach(mood => {
    possibleCompliments.push(...moodMap[mood]);
  });
  
  // Select a random compliment from the possibilities
  const randomIndex = Math.floor(Math.random() * possibleCompliments.length);
  return possibleCompliments[randomIndex];
};

export default generateCompliment;
