let play_one = 0; // 플레이어 카드 1th
let play_two = 0; // 플레이어 카드 2th
let play_thr = 0; // 플레이어 카드 3th
let deal_one = 0; // 딜러 카드 1th
let deal_two = 0; // 딜러 카드 2th
let deal_thr = 0; // 딜러 카드 3th
let sum_deal = 0;
let sum_play = 0;
let playCnt = 0;

function randomNum() {
    play_one = Math.floor(Math.random() * 11) +1;
    document.getElementById('play_one').innerText = play_one;
    play_two = Math.floor(Math.random() * 11) +1;
    document.getElementById('play_two').innerText = play_two;
    play_thr = Math.floor(Math.random() * 11) +1;
    document.getElementById('play_thr').innerText = play_thr;
    deal_one = Math.floor(Math.random() * 11) +1;
    document.getElementById('deal_one').innerText = deal_one;
    deal_two = Math.floor(Math.random() * 11) +1;
    // document.getElementById('deal_two').innerText = deal_two;
    deal_thr = Math.floor(Math.random() * 11) +1;
    document.getElementById('deal_thr').innerText = deal_thr;
}

function hit() {
    playCnt = 1;
    sum_play = Number(play_one + play_two + play_thr);
    document.querySelector('.thr_card').style.display = 'block';
    document.getElementById('player').style.padding = '30px 124px'; //padding: 30px 203px;
    document.getElementById('player').style.transition =  '.5s';

    setTimeout(() => {
        document.querySelector('.thr_card').classList.add('slide_up');
        document.querySelector('.thr_card').style.opacity = 1;
    }, 500);

    setTimeout(() => {
        if(sum_play > 21) {
            alert('숫자가 21이 넘어 패배하였습니다');
            endGame()
        }
    }, 1500);


}

function endGame() {
    document.getElementById('deal_two').innerText = "?";
    document.querySelector('.thr_card').style.display = 'none';
    document.getElementById('player').style.padding = '30px 203px'; //padding: 30px 203px;
    document.getElementById('dealer').style.padding = '30px 203px'; //padding: 30px 203px;
    document.querySelector('.btn_red').style.opacity = 0;
    document.querySelector('.btn_blue').style.opacity = 0;
    document.querySelector('.btn_mint').style.opacity = 1;
    document.querySelector('.fir_card').style.opacity = 0;
    document.querySelector('.sec_card').style.opacity = 0;
    document.querySelector('.thr_card').style.opacity = 0;
    document.querySelector('.dealer_fir_card').style.opacity = 0;
    document.querySelector('.dealer_sec_card').style.opacity = 0;
    document.querySelector('.dealer_thr_card').style.opacity = 0;
    play_one = 0;
    play_two = 0;
    play_thr = 0;
    deal_one = 0;
    deal_two = 0;
    deal_thr = 0;
    sum_deal = 0;
    sum_play = 0;
    playCnt = 0;
    document.querySelector('.fir_card').classList.remove('slide_up');
    document.querySelector('.dealer_fir_card').classList.remove('slide_down');
    document.querySelector('.sec_card').classList.remove('slide_up');
    document.querySelector('.dealer_sec_card').classList.remove('slide_down');
    document.querySelector('.thr_card').classList.remove('slide_up');
    document.querySelector('.dealer_thr_card').classList.remove('slide_down');
}

function gameStart() {
    randomNum()
    document.querySelector('.btn_red').style.opacity = 1;
    document.querySelector('.btn_blue').style.opacity = 1;
    document.querySelector('.btn_mint').style.opacity = 0;
    document.querySelector('.fir_card').style.opacity = 0;
    document.querySelector('.dealer_fir_card').style.opacity = 0;
    document.querySelector('.sec_card').style.opacity = 0;
    document.querySelector('.dealer_sec_card').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.fir_card').classList.add('slide_up');
        document.querySelector('.fir_card').style.opacity = 1;
        document.querySelector('.dealer_fir_card').classList.add('slide_down');
        document.querySelector('.dealer_fir_card').style.opacity = 1;
    }, 1000);
    setTimeout(() => {
        document.querySelector('.sec_card').classList.add('slide_up');
        document.querySelector('.sec_card').style.opacity = 1;
        document.querySelector('.dealer_sec_card').classList.add('slide_down');
        document.querySelector('.dealer_sec_card').style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        if(sum_play > 21) {
            alert('숫자가 21이 넘어 패배하였습니다');
            endGame()
        }
        else if(sum_play == 21) {
            alert(`Black Jack!! 축하합니다\n플레이어가 승리하였습니다`);
            endGame()
        }
    }, 1800);
    
}

function stand() {
    document.getElementById('deal_two').innerText = deal_two;
    sum_deal = Number(deal_one + deal_two);
    if(sum_deal < 15) {
        document.querySelector('.thr_card').style.display = 'block';
        document.getElementById('dealer').style.padding = '30px 124px';
        document.getElementById('dealer').style.transition =  '.5s';
    
        setTimeout(() => {
            document.querySelector('.dealer_thr_card').classList.add('slide_down');
            document.querySelector('.dealer_thr_card').style.opacity = 1;
        }, 500);

        setTimeout(() => {
            if(playCnt == 1) {
                sum_deal = Number(deal_one + deal_two + deal_thr);
                sum_play = Number(play_one + play_two + play_thr);
                if(sum_deal < 22 && sum_deal > sum_play) { // 딜러의 숫자가 22보다 작으면서 플레이어보다 숫자가 높으면
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } 
                else if(sum_deal < 22 && sum_deal == sum_play)  {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } else {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n플레이어가 승리하였습니다`);
                    endGame()
                }
            } else {
                sum_deal = Number(deal_one + deal_two + deal_thr);
                sum_play = Number(play_one + play_two);
                if(sum_deal < 22 && sum_deal > sum_play) {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } 
                else if(sum_deal < 22 && sum_deal == sum_play)  {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } else {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n플레이어가 승리하였습니다`);
                    endGame()
                }
            }
        }, 1500);
    } else {
        setTimeout(() => {
            if(playCnt == 1) {
                sum_deal = Number(deal_one + deal_two);
                sum_play = Number(play_one + play_two + play_thr);
                if(sum_deal < 22 && sum_deal > sum_play) {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } 
                else if(sum_deal < 22 && sum_deal == sum_play)  {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } else {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n플레이어가 승리하였습니다`);
                    endGame()
                }
            } else {
                sum_deal = Number(deal_one + deal_two);
                sum_play = Number(play_one + play_two);
                if(sum_deal < 22 && sum_deal > sum_play) {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } 
                else if(sum_deal < 22 && sum_deal == sum_play)  {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n딜러가 승리하였습니다`);
                    endGame()
                } else {
                    alert(`딜러 : ${sum_deal}\n플레이어 : ${sum_play}\n플레이어가 승리하였습니다`);
                    endGame()
                }
            }
        }, 1500);
    }
}




// function openCard() {
//     document.querySelector('.thr_card').style.display = 'block';
//     document.getElementById('player').style.padding = '30px 124px';
// }

// (function () {
    // setTimeout(() => {
    //     document.querySelector('.fir_card').classList.add('slide_up');
    //     document.querySelector('.fir_card').style.opacity = 1;
    // }, 1000);
    // setTimeout(() => {
    //     document.querySelector('.sec_card').classList.add('slide_up');
    //     document.querySelector('.sec_card').style.opacity = 1;
    // }, 1500);
//     setTimeout(() => {
//         document.querySelector('.thr_card').classList.add('slide_up');
//         document.querySelector('.thr_card').style.opacity = 1;
//     }, 2000);

//     setTimeout(() => {
//         document.querySelector('.dealer_fir_card').classList.add('slide_down');
//         document.querySelector('.dealer_fir_card').style.opacity = 1;
//     }, 1000);
//     setTimeout(() => {
//         document.querySelector('.dealer_sec_card').classList.add('slide_down');
//         document.querySelector('.dealer_sec_card').style.opacity = 1;
//     }, 1500);
//     setTimeout(() => {
//         document.querySelector('.dealer_thr_card').classList.add('slide_down');
//         document.querySelector('.dealer_thr_card').style.opacity = 1;
//     }, 2000);
// }())