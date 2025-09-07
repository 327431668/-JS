// 游戏变量
let number = document.querySelector(".number span");//显示的分数
let holeBox = document.querySelector(".holeBox");
let score = 0;  //分数
let arr = [];   //随机数数组

// 在所有地洞中随机生成4个蜀黍
function showMoles() {
    // 渲染9个树洞
    for (let i = 0; i < 9; i++) {
        const MinBox = document.createElement("div"); //大盒子装树洞和蜀黍
        const hole = document.createElement("div");//树洞

        // 给div添加css类
        MinBox.className = "MinBox";
        hole.className = "hole";

        // 渲染添加
        holeBox.appendChild(MinBox);
        MinBox.appendChild(hole);
    };

    // 获得随机数
    while (arr.length < 4) {
        let randomNum = Math.floor(Math.random() * 9);
        if (arr.indexOf(randomNum) === -1) {
            arr.push(randomNum);
        };
    };
    playing();
}
showMoles();

function playing() {
    let mouseNum = 4;
    // 根据随机数生成蜀黍
    for (let j = 0; j < arr.length; j++) {
        let mouse = document.createElement("div");  //创建蜀黍
        let MinBox = document.querySelectorAll(".MinBox");
        MinBox[arr[j]].appendChild(mouse);   //添加到页面中
        mouse.classList.add("SS", "show");  //添加class

        mouse.addEventListener("click", () => {
            // 生成电棍
            const bangZi = document.createElement("div");
            bangZi.className = "bang";
            mouse.appendChild(bangZi);

            // 电击音效
            const music = new Audio("./img/电击音效.mp3");
            music.volume = 0.15;
            music.play();

            setTimeout(() => {
                // 打中后删除地树
                mouseNum--;
                score += 10;
                number.innerHTML = score;
                mouse.remove();
                // 当地树打完时，重新生成地树
                if (mouseNum === 0) {
                    mouseNum = 4;
                    playing();
                };
            }, 100);

        });
    }
};
