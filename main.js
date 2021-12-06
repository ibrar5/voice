var speech = window.webkitSpeechRecognition;

var recognition = new speech;

var text_1 = document.getElementById("voice");
function mic(){
    document.getElementById("voice").innerHTML = "";
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("voice").innerHTML = content;
}
function cop(){
    text_1.select();

    document.execCommand("Copy");
}