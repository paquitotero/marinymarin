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
    }, 2000);
}

domSlider('top-slider');
domSlider('mid-slider');
