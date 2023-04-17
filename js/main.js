window.onload = () => {
    console.log("On load...")
    initiateListener();
}
const getFortuneImgSrc = () => {
    const images = [
        "magic8ball_1.png",
        "magic8ball_2.png",
        "magic8ball_3.png",
        "magic8ball_4.png",
        "magic8ball_5.png",
        "magic8ball_6.png",
        "magic8ball_7.png",
        "magic8ball_8.png",
        "magic8ball_9.png",
        "magic8ball_10.png",
        "magic8ball_11.png",
        "magic8ball_12.png",
        "magic8ball_13.png",
        "magic8ball_14.png",
        "magic8ball_15.png",
        "magic8ball_16.png",
        "magic8ball_17.png",
        "magic8ball_18.png",
        "magic8ball_19.png",
        "magic8ball_20.png"
    ];
    const imagesLength = images.length;
    const randomImgSrc = images[Math.floor(Math.random() * imagesLength)];
    return randomImgSrc;
}
const cloneFunk = async (val) => {
    const altTextImages = [
        {
           id: 1,
           text: "It is certain" 
        },
        {
            id: 2,
            text: "It is decidedly so"
        },
        {
            id: 3,
            text: "Without a doubt"
        },
        {
            id: 4,
            text: "Yes, definitely"
        },
        {
            id: 5,
            text: "You may rely on it"
        },
        {
            id: 6,
            text: "As I see it, yes"
        },
        {
            id: 7,
            text: "Most likely"
        },
        {
            id: 8,
            text: "Outlook good"
        },
        {
            id: 9,
            text: "Yes"
        },
        {
            id: 10,
            text: "Signs point to yes"
        },
        {
            id: 11,
            text: "Reply hazy. Try again"
        },
        {
            id: 12,
            text: "Ask again later"
        },
        {
            id: 13,
            text: "Better not tell you now"
        },
        {
            id: 14,
            text: "Cannot predict now"
        },
        {
            id: 15,
            text: "Concentrate and ask again"
        },
        {
            id: 16,
            text: "Don't count on it"
        },
        {
            id: 17,
            text: "My reply is no"
        },
        {
            id: 18,
            text: "My sources say no"
        },
        {
            id: 19,
            text: "Outlook not so good"
        },
        {
            id: 20,
            text: "Very doubtful"
        }
    ];
    
    const getFortuneImgVal = await getFortuneImgSrc();
    const getAltTxt = await altTextImages[altTextImages.indexOf(getFortuneImgVal)];
    
    const youAskedTemplate = document.getElementById("question-answer-template");
    const cloneTemplate = youAskedTemplate.content.cloneNode(true);
    const imgTemplate = document.getElementById("fortune8ball-template");
    const imgClone = imgTemplate.content.cloneNode(true);
    
    const fortuneWrapper = document.querySelector("[data-fortune8ball-col]");
    const questionWrapper = document.querySelector("[data-fortune-question-col]");
    fortuneWrapper.childNodes = [];
    questionWrapper.childNodes = [];
    
    imgClone.src = `img/${getFortuneImgVal}`;
    imgClone.alt = getAltTxt;
    const ddClone = cloneTemplate.querySelector("dd");
    ddClone.textContent = val;
    const dtClone = cloneTemplate.querySelector("dt");
    dtClone.textContent = getAltTxt;
    questionWrapper.appendChild(cloneTemplate);
    fortuneWrapper.appendChild(imgClone);
    const fortuneResponseWrapper = document.getElementById("fortune_response-wrapper");
    fortuneResponseWrapper.classList.remove("d-none");
}

function shuffleFortune(val) {
    const altTextImages = [
        {
           id: 1,
           text: "It is certain" 
        },
        {
            id: 2,
            text: "It is decidedly so"
        },
        {
            id: 3,
            text: "Without a doubt"
        },
        {
            id: 4,
            text: "Yes, definitely"
        },
        {
            id: 5,
            text: "You may rely on it"
        },
        {
            id: 6,
            text: "As I see it, yes"
        },
        {
            id: 7,
            text: "Most likely"
        },
        {
            id: 8,
            text: "Outlook good"
        },
        {
            id: 9,
            text: "Yes"
        },
        {
            id: 10,
            text: "Signs point to yes"
        },
        {
            id: 11,
            text: "Reply hazy. Try again"
        },
        {
            id: 12,
            text: "Ask again later"
        },
        {
            id: 13,
            text: "Better not tell you now"
        },
        {
            id: 14,
            text: "Cannot predict now"
        },
        {
            id: 15,
            text: "Concentrate and ask again"
        },
        {
            id: 16,
            text: "Don't count on it"
        },
        {
            id: 17,
            text: "My reply is no"
        },
        {
            id: 18,
            text: "My sources say no"
        },
        {
            id: 19,
            text: "Outlook not so good"
        },
        {
            id: 20,
            text: "Very doubtful"
        }
    ];
    const getFortuneImgVal = getFortuneImgSrc();
    //MAP THIS OUT!
    const regex = /magic8ball\D/ig;
    const fortuneID = getFortuneImgVal.replaceAll(regex, "").replace(".png","");

    const getAltTxt = altTextImages.filter(item => item.id === Number(fortuneID))[0].text;
    
    const youAskedWrapper = document.querySelector("[data-fortune-question-col]");
    const question = youAskedWrapper.querySelector("dt");
    question.textContent = `${val}?`;
    const answerTxt = youAskedWrapper.querySelector("dd");
    answerTxt.textContent = getAltTxt;
    const fortuneWrapper = document.querySelector("[data-fortune8ball-col]");
    const img = fortuneWrapper.querySelector("img");
    
    img.src = `img/${getFortuneImgVal}`;
    img.alt = getAltTxt;
    const fortuneResponseWrapper = document.getElementById("fortune_response-wrapper");
    fortuneResponseWrapper.classList.remove("d-none");
}
function initiateListener() {
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const value =  
        e.target["question"].value.endsWith("?") 
            ? e.target["question"].value.slice(0, -1)
            : e.target["question"].value;
            
        shuffleFortune(value);
        
    })
}


