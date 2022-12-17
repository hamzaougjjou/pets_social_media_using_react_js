

function seiImogies(btn, container) {
    const imogies = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥",
        "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬",
        "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪",
        "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀",
        "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜",
        "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱",
        "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"];

    let template = '';
    imogies.forEach(imogie => {
        template += `<span class="imogi-item">${imogie}</span>`;
    });
    container.innerHTML = template;

    let isHide = true;

    btn.addEventListener('click', (e) => {

        if (e.target == btn) {
            if (isHide) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';
            }
            isHide = !isHide;
        } else {
            console.log(23456);
        }
    })

    const imogiItem = document.querySelectorAll('.imogi-item');

    for (let i = 0; i < imogiItem.length; i++) {
        const myImogi = imogiItem[i];
        myImogi.onclick = function () {
            document.querySelector('#message-input').value += imogies[i];
        }
    }
} //seiImogies