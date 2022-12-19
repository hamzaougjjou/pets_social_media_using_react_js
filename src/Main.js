



export function show_new_user_box() {

    alert("document.getElementById(box_id).textContent");
    // if (document.getElementById(box_id).style.opacity == 0) {
    //     document.getElementById(box_id).style.transitionDuration = "0s";
    //     document.getElementById(box_id).style.zIndex = 2;
    //     document.getElementById(box_id).style.transitionDuration = ".3s";
    //     document.getElementById(box_id).style.opacity = 1;
    //     document.getElementById(box_id).style.transform = tranup;
    //     // document.getElementById(box_icon).style.color = "#009ef7";
    //     // document.getElementById(box_icon).style.backgroundColor = "#F5F8FA";
    // }
    // else {
    //     document.getElementById(box_id).style.transitionDuration = "0s";
    //     document.getElementById(box_id).style.opacity = 0;
    //     document.getElementById(box_id).style.transform = trandow;
    //     // document.getElementById(box_icon).style.color = "#A1A5B7";
    //     // document.getElementById(box_icon).style.backgroundColor = "#FFFFFF";
    //     document.getElementById(box_id).style.transitionDuration = ".6s";
    //     document.getElementById(box_id).style.zIndex = -1;
    // }
}

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

