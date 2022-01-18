const screen = document.querySelector('#screen');
const button = document.querySelector('#generate');

button.addEventListener("click", () => {

    const quant = document.querySelector('#quant').value;

    screen.innerHTML = "";

    for (let i = 0; i <= quant; i++) {

        let randomNUM1 = Math.floor(Math.random() * 10 + 1);
        let randomNUM2 = Math.floor(Math.random() * 10 + 1);
        let randomNUM3 = Math.floor(Math.random() * 1000 + 100);
        
        let imgid   = "id" + randomNUM1;
        let durtime = quant/3+randomNUM1 + "s";
        let deltime = quant/15+randomNUM2 + "s";
        
        let image =  document.createElement('img');
        image.src   =  `https://picsum.photos/${randomNUM3}/400/`;
        image.className = "block img-thumbnail rounded " + imgid  ;
        image.style.opacity = 0;
        image.style.position = "absolute";
        image.style.animationName = "anime";
        image.style.animationDuration= durtime;
        image.style.animationDelay = deltime;
        screen.append(image);
        console.log(randomNUM1 , randomNUM2 , randomNUM3 , imgid)

    }
});