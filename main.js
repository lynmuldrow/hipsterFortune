
function getMessage() {
var messagearray = new Array(
"You shouldn't quit your day job.",
"You're like totally an imposter. Get a life, dude.",
"I tried to write something nice but I can't even.",
"You go, Glen Coco!",
"Nothing is impossible, the word itself says ‘I’m possible’!",
"A guilty conscience needs to confess. A work of art is a confession.",
"The visionary is the only realist.",
"A day without sunshine is like, you know, night.",
"Whatever you are, be a good one.",
"Every hero becomes a bore at last.",
"You are so fetch. Like, seriously.",
"Hipster Ariel is life. She was cool before you were.",
"Dude, where's your raybans?",
"If you're not composting, you fail at life.",
"You drink Starbucks- that is your downfall.",
"Life is hard; it’s harder if you’re stupid.",
"Don’t use a big word where a diminutive one will suffice.",
"When shit brings you down, just say ‘fuck it’, and eat yourself some motherfucking candy.",
"If you go home with somebody and they don’t have books, don’t fuck them!",
"Sometimes the sins you haven’t committed are all you have left to hold onto.",
"We are mature in one realm, childish in another.",
"I am so clever that sometimes I don’t understand a single word of what I am saying.",
"A guilty conscience needs to confess. A work of art is a confession.",
"Future hipsters will love you ironically.",
"Part of growing up is not waiting in line at a hipster breakfast restaurant.",
"Nobody hates hipsters more than hipsters.",
"There might be a need to fabricate your own beauty paradigms."
);

   var sendmessages = messagearray[Math.floor(Math.random() * messagearray.length)];
   document.getElementById("message").innerHTML=random;
}

