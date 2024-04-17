document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function() {
        console.log("hello");
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = function() {
            console.log('Voice recognition started. Speak into the microphone.');
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('transcript').innerText = transcript;
        };

        recognition.onerror = function(event) {
            if (event.error == 'not-allowed') {
                document.getElementById('transcript').innerText = 'Microphone access denied. Please allow access to use this feature.';
                document.getElementById('openSettings').style.display = 'block';
            }
        };

        recognition.start();
    });
});
