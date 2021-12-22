const switchMode = document.querySelector('input[type=checkbox]');
const root = document.querySelector(':root');

switchMode.addEventListener('click', function() {
    if(switchMode.checked) {
        root.style.setProperty('--top-bg', 'hsl(232, 19%, 15%)');
        root.style.setProperty('--bg', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--cards-bg', 'hsl(228, 28%, 20%)');
        root.style.setProperty('--text-color1', 'hsl(228, 34%, 66%)');
        root.style.setProperty('--text-color2', 'hsl(0, 0%, 100%)');
    }else {
        root.style.setProperty('--top-bg', 'hsl(225, 100%, 98%)');
        root.style.setProperty('--bg', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--cards-bg', 'hsl(225, 100%, 98%)');
        root.style.setProperty('--text-color1', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--text-color2', 'black');
    }
}
)