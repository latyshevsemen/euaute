function getRandomSnarkySlogan(snarkySlogans) {
    return snarkySlogans[Math.floor(Math.random() * snarkySlogans.length)];
}

// Example array of snarky slogans
const snarkySlogans = [
    "Sarcasm is my love language.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "I'm not lazy, I'm on energy-saving mode.",
    "I put the 'pro' in procrastinate.",
    "I'm not short, I'm space-efficient.",
    // Add more snarky slogans as needed
];

// Get a random snarky slogan
const randomSnarkySlogan = getRandomSnarkySlogan(snarkySlogans);
console.log(randomSnarkySlogan);
