// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';

// Arrays for each type of phrase list
var noun = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var place = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

//Assign the HTML button attribute to a variable 

var nounButton = document.getElementById('noun');
var verbButton = document.getElementById('verb');
var adjectiveButton = document.getElementById('adjective');
var noun2Button = document.getElementById('noun2');
var placeButton = document.getElementById('place');
var speakButton = document.getElementById('toSpeak');

// To get the output for the story
var storyOutput = document.getElementById('storyOutput');

//Variables to store the selected phrases
var selectedNoun = '';
var selectedVerb = '';
var selectedAdjective = '';
var selectedNoun2 = '';
var selectedPlace = '';


/* Functions
-------------------------------------------------- */

// The function takes an array as input, selects a random element from it, and returns it
function getRandomPhrase(array){
	return array[Math.floor(Math.random() * array.length)];
}

// Function to build the sentence from selected phrases and output it
function buildSentence(){
	textToSpeak = `${selectedNoun} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedPlace}.`;
	console.log("Sentence: " + textToSpeak);

	storyOutput.textContent = textToSpeak;
}

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// Noun button
nounButton.onclick = function() {
	selectedNoun = getRandomPhrase(noun);
	console.log("Selected noun: " + selectedNoun);
};

// Verb button
verbButton.onclick = function() {
	selectedVerb = getRandomPhrase(verb);
	console.log("Selected verb: " + selectedVerb);
};

// Adjective button
adjectiveButton.onclick = function() {
	selectedAdjective = getRandomPhrase(adjective);
	console.log("Selected adjective: " + selectedAdjective);
};

// Another noun button
noun2Button.onclick = function() {
	selectedNoun2 = getRandomPhrase(noun2);
	console.log("Selected second noun: " + selectedNoun2);
};

// Place button
placeButton.onclick = function() {
	selectedPlace = getRandomPhrase(place);
	console.log("Selected place: " + selectedPlace);
};

speakButton.onclick = function() {
	buildSentence();
	speakNow(textToSpeak);
}
