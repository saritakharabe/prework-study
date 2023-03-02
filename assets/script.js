var topics = ["HTML", "CSS", "Javascript", "Git"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for(var i=0; i< topics.length; i++){
        console.log(topics[i]);
    }
}

function selectTopic(){
    if(randomTopic === "HTML"){
        console.log("let's study HTML");
    }else if( randomTopic === "CSS"){
        console.log("let's study CSS");
    }else if( randomTopic === "Javascript"){
        console.log("lets study javascript");
    }else if(randomTopic === "Git"){
        console.log("let's study git");
    }else{
        console.log("Please try again");
    }
}
 
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();