function typeWriter(sentences, typingSpeed, delayBetweenSentences, callback) {
    let sentenceIndex = 0;
    let charIndex = 0;
    const typingContainer = document.getElementById("typing-container");
    const rat = document.getElementById("funny-img");

    function type() {

        if (sentenceIndex < sentences.length) {
            const currentSentence = sentences[sentenceIndex];

            if (charIndex === 0) {
                typingContainer.innerHTML = "";
                rat.classList.add("shake");
            }

            typingContainer.innerHTML = currentSentence.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex < currentSentence.length) {
                setTimeout(type, typingSpeed);
            } else {
                sentenceIndex++;
                charIndex = 0;
                setTimeout(type, delayBetweenSentences);
                rat.classList.remove("shake");
            }
        } else if (callback) {
            callback();
        }
    }

    type();
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const typingSpeed = 100;
const delayBetween = 500;

document.getElementById("bola").onclick = function() {
    const rat = document.getElementById("funny-img");

    rat.style.display = 'block';
    this.style.display = 'none';
    const sentences1 = ["hi","you can use this code","to make a talking character"


    ];

    typeWriter(sentences1, typingSpeed, delayBetween, function() {
      const smashImage = document.getElementById("smash-image");
    smashImage.style.display = 'block';


    setTimeout(() => {
        smashImage.classList.add("show");
    }, 10); 

    const s = ["you can include other characters too","and add interactive actions","press the chipmunk"]
    typeWriter(s, typingSpeed, delayBetween, function() {
        document.getElementById('typing-container').textContent='press the chipmunk'
    })
});
};
let clickCount = 0;
document.getElementById("smash-image").onclick = function() {
    this.style.width = this.clientWidth*.8 + 'px';
    clickCount++;

    this.classList.add("smash");
    setTimeout(() => {
        this.classList.remove("smash");

        if (clickCount >= 5) {
            

            this.style.animation = "disappear 0.5s forwards";

            setTimeout(() => {
                this.style.display = 'none';
                const sentences2 = ["you can include objects"];

                typeWriter(sentences2, typingSpeed, 500, function() {
                    document.getElementById("box-container").style.display = 'block';
                    document.getElementById("box-closed").style.display = 'block';
                    document.getElementById("box-closed").style.animation = "fall 1s ease-in-out";


                    const sentences3 = ["!!!", "look a box", "click to open it"];
                    

                    typeWriter(sentences3, typingSpeed, 500, function() {
                        setTimeout(() => {
                            document.getElementById("typing-container").textContent="click to open it";
                            document.getElementById("open-box").style.display = 'block';
                        }, 1000);
                    });
                });
            }, 500);
        }
    }, 300);
};

// Box shaking and opening event
document.getElementById("open-box").onclick = function() {
    document.getElementById("box-closed").style.animation = "shake 0.5s";
    document.getElementById("cheems").style.animation = "shake 0.5s";
    setTimeout(() => {
        document.getElementById("box-closed").style.display = 'none';
        document.getElementById("box-opened").style.display = 'block';
        document.getElementById("cheems").style.display = 'block';
        s3 = ["it's your new friend", "do you want to give him a name?"]
        typeWriter(s3, typingSpeed, delayBetween , function() {
            document.getElementById("typing-container").textContent = "do you want to give him a name?";
        })
        
        document.getElementById("select").style.display = 'block';

        document.getElementById("btnTi").onclick = function() {
            document.getElementById('select').style.display = 'none';
            
            s4 = ["nice!","what is his name?"]

            typeWriter(s4, typingSpeed, 500, function() {
            
                document.getElementById("typing-container").textContent = "what is his name?";
            document.getElementById("name-container").style.display = 'block';})};

        document.getElementById("btnNo").onclick = function() {
            document.getElementById('typing-container').textContent=''
            typeWriter(["but he needs a name!"], typingSpeed, 500, function(){})
    }}, 500);
};

document.getElementById("confirm-name").onclick = function() {
    document.getElementById("cheems").style.display = 'none';

    document.getElementById("cheems").style.display = 'block';
    document.getElementById("cheems").classList.add("jump");
    
    setTimeout(() => {
        document.getElementById("cheems").classList.remove("jump");
    }, 500); 


    document.getElementById("name-container").style.display = 'none';

    document.getElementById("box-opened").style.display = 'none';
    const name = document.getElementById("cheems-name").value;

    typeWriter(["I was thinking the same", `${name} is the perfect name`], typingSpeed, 500, function() {
    document.getElementById("funny-img").style.display='none';

    document.getElementById("cheems").style.display='none';
    s4 =["I hoped you enjoyed this game", "Thanks for playing<3" ]

    typeWriter(s4, 60, delayBetween, function(){
        document.getElementById("typing-container").textContent =  "Thanks for playing<3" ;

    })
    
   });

};
