window.onload = function() {
    var fortuneSpan     = document.getElementById("fortuneText");
    var submitButton  	= document.getElementById('submit');
    var oldFortuneIndex = -1;
    var newFortuneIndex = -1;
	var fortunearray 	= [
	{'text': "You shouldn't quit your day job."},
	{'text':"You're like totally an imposter. Get a life, dude."},
	{'text':"I tried to write something nice but I can't even."},
	{'text':"You go, Glen Coco!"},
	{'text':"Nothing is impossible, the word itself says ‘I’m possible’!"},
	{'text':"A guilty conscience needs to confess. A work of art is a confession."},
	{'text':"The visionary is the only realist."},
	{'text':"A day without sunshine is like, you know, night."},
	{'text':"Whatever you are, be a good one."},
	{'text':"Every hero becomes a bore at last."},
	{'text':"You are so fetch. Like, seriously."},
	{'text':"Hipster Ariel is life. She was cool before you were."},
	{'text':"Dude, where's your raybans?"},
	{'text':"If you're not composting, you fail at life."},
	{'text':"You drink Starbucks- that is your downfall."},
	{'text':"Life is hard; it’s harder if you’re stupid."},
	{'text':"Don’t use a big word where a diminutive one will suffice."},
	{'text':"When shit brings you down, just say ‘fuck it’, and eat yourself some motherfucking candy."},
	{'text':"If you go home with somebody and they don’t have books, don’t fuck them!"},
	{'text':"Sometimes the sins you haven’t committed are all you have left to hold onto."},
	{'text':"We are mature in one realm, childish in another."},
	{'text':"I am so clever that sometimes I don’t understand a single word of what I am saying."},
	{'text':"A guilty conscience needs to confess. A work of art is a confession."},
	{'text':"Future hipsters will love you ironically."},
	{'text':"Part of growing up is not waiting in line at a hipster breakfast restaurant."},
	{'text':"Nobody hates hipsters more than hipsters."},
	{'text':"There might be a need to fabricate your own beauty paradigms."}
	];

   function nextFortune() {
        
        newFortuneIndex = Math.floor(Math.random() * fortunearray.length);
        //iterates through the array

        fortuneSpan.innerHTML  = fortunearray[newFortuneIndex].text; 
        //makes HTML's fortuneText random fortune

 		oldFortuneIndex = newFortuneIndex;
 		//picks a new index number from the fortune list
    }

	submitButton.onclick= nextFortune;
	//when you click the button, a new fortune pops up 
};
