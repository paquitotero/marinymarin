function domSlider(idSlider) {
    const slider = new Slider(0, document.querySelectorAll(`#${idSlider} li`));
    const nextNode = document.querySelector(`#${idSlider} .next`);
    const prevNode = document.querySelector(`#${idSlider} .prev`);
    nextNode.onclick = function () {
        slider.next();
    };
    prevNode.onclick = function () {
        slider.prev();
    };

    let intervalId = setInterval(() => {
        nextNode.click();
    }, 1000);
}

domSlider('top-slider');
domSlider('mid-slider');

function getCharacters() {
    let req = new XMLHttpRequest();
    req.open('POST', 'https://rickandmortyapi.com/api/character/');
    req.onreadystatechange = function () {
        if(req.readyState == 4) {
            console.log(req.responseText);
        }
    }
    req.send();
}

const myPromise = new Promise((resolve, reject) => {
    getCharacters();
    let images = JSON.parse('[{"name": "Toxic Rick","url": "https://rickandmortyapi.com/api/character/avatar/361.jpeg"},{"name": "Morty Smith", "url": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"}]');

    if (images.length < 1) {
        reject('there are no images');
    }
    let bottomSliderNode = document.getElementById('bottom-slider');

    images.forEach((img, index) => {
        let liNode = document.createElement('li');
        liNode.classList.add('slide');
        if (index === 0) {
            liNode.classList.add('visible');
        }
        let imgNode = document.createElement('img');
        imgNode.setAttribute('src', img.url);
        imgNode.setAttribute('alt', img.name);
        liNode.appendChild(imgNode);
        bottomSliderNode.appendChild(liNode);
    });

    resolve('Finished to build the slider images')
});

myPromise.then((msg) => {
    console.log(msg);
    domSlider('bottom-slider');
});

myPromise.catch(() => {
    console.log('NO HE TERMINADO');
});
