var asset = 1000000;
var item = 0;
var total_os = 0; //총 구매 금액
var total_mr = 0;
var total_pp = 0;
var total_rg = 0;
var total_ts = 0;
var total_co = 0;
var total_dg = 0;
var total_np = 0;
var val_os = 1000; //현재가
var val_mr = 1000;
var val_pp = 1000;
var val_rg = 1000;
var val_ts = 1000;
var val_co = 1000;
var val_dg = 1000;
var val_np = 1000;
var purpri_os = 0; //구매가
var purpri_mr = 0;
var purpri_pp = 0;
var purpri_rg = 0;
var purpri_ts = 0;
var purpri_co = 0;
var purpri_dg = 0;
var purpri_np = 0;
var os = 0; // 보유량
var mr = 0;
var pp = 0;
var rg = 0;
var ts = 0;
var co = 0;
var dg = 0;
var np = 0;
var oldVal_os = 0;
var oldVal_mr = 0;
var oldVal_pp = 0;
var oldVal_rg = 0;
var oldVal_ts = 0;
var oldVal_co = 0;
var oldVal_dg = 0;
var oldVal_np = 0;
document.querySelector('#asset').innerText = asset.toLocaleString('ko-KR');
document.querySelector('#buy').value = 0;
document.querySelector('#sell').value = 0;


function stock(select) {

    switch (select) {
        case 1:
            item = 1;
            document.querySelector('#choice_stock').innerText = "오성 전자 ";
            
            break;
        case 2:
            item = 2;
            document.querySelector('#choice_stock').innerText = "미래 자동차";
            break;
        case 3:
            item = 3;
            document.querySelector('#choice_stock').innerText = "파파야 게임즈";
            break;
        case 4:
            item = 4;
            document.querySelector('#choice_stock').innerText = "알지 화학";
            break;
        case 5:
            item = 5;
            document.querySelector('#choice_stock').innerText = "떼쓸라";
            break;
        case 6:
            item = 6;
            document.querySelector('#choice_stock').innerText = "고가콜라";
            break;
        case 7:
            item = 7;
            document.querySelector('#choice_stock').innerText = "뒤즈니";
            break;
        case 8:
            item = 8;
            document.querySelector('#choice_stock').innerText = "넷플렉스";
            break;
    }
}

// sam 변수는 종목 수량 변수 sam = 0;
// b 변수는 종목 금액 변수
// item은 종목 변수이나 어떤 종목인지 가려내는 변수임
// 지역 변수 설정도 괜찮을듯


function buy() {

    switch (item) {
        // 아이템이 1(오성전자)인 경우
        case 1:
            // 수량 변수(구매하는 수량만큼의 금액) 설정
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_os * buyValue;
            // 자산이 수량 변수보다 작으면 리턴
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                os = os + buyValue;

                console.log("보유량 = " + os);

                document.querySelector('#display_os').innerText = os.toLocaleString('ko-KR');

                console.log("총 구매금액 = " + total_os + " + " + "현재 주가 = " + val_os + " * " + "구매 밸류 = " + buyValue)

                total_os = Math.floor(total_os + val_os * buyValue);

                console.log("현재가 = " + val_os);

                purpri_os = Math.floor(total_os / os);

                console.log("구매가 = " + purpri_os + ":" + total_os + " / " + os);

                document.querySelector('#purpri_os').innerText = purpri_os;

                asset = asset - buystock

                document.querySelector('#asset').innerText = asset;

                document.querySelector('#buy').value = 0;
                
            }
            break;
        case 2:
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_mr * buyValue;
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                mr = mr + buyValue;
                document.querySelector('#display_mr').innerText = mr.toLocaleString('ko-KR');
                total_mr = Math.floor(total_mr + val_mr * buyValue);
                purpri_mr = Math.floor(total_mr / mr);
                document.querySelector('#purpri_mr').innerText = purpri_mr;
                asset = asset - buystock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#buy').value = 0;
            }
            break;
        case 3:
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_pp * buyValue;
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                pp = pp + buyValue;
                document.querySelector('#display_pp').innerText = pp.toLocaleString('ko-KR');
                total_pp = Math.floor(total_pp + val_pp * buyValue);
                purpri_pp = Math.floor(total_pp / pp);
                document.querySelector('#purpri_pp').innerText = purpri_pp;
                asset = asset - buystock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#buy').value = 0;
            }
            break;
        case 4:
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_rg * buyValue;
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                rg = rg + buyValue;
                document.querySelector('#display_rg').innerText = rg.toLocaleString('ko-KR');
                total_rg = Math.floor(total_rg + val_rg * buyValue);
                purpri_rg = Math.floor(total_rg / rg);
                document.querySelector('#purpri_rg').innerText = purpri_rg;
                asset = asset - buystock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#buy').value = 0;
            }
            break;
        case 5:
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_ts * buyValue;
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                ts = ts + buyValue;
                document.querySelector('#display_ts').innerText = ts.toLocaleString('ko-KR');
                total_ts = Math.floor(total_ts + val_ts * buyValue);
                purpri_ts = Math.floor(total_ts / ts);
                document.querySelector('#purpri_ts').innerText = purpri_ts;
                asset = asset - buystock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#buy').value = 0;
            }
            break;
        case 6:
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_co * buyValue;
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                co = co + buyValue;
                document.querySelector('#display_co').innerText = co.toLocaleString('ko-KR');
                total_co = Math.floor(total_co + val_co * buyValue);
                purpri_co = Math.floor(total_co / co);
                document.querySelector('#purpri_co').innerText = purpri_co;
                asset = asset - buystock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#buy').value = 0;
            }
            break;
        case 7:
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_dg * buyValue;
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                dg = dg + buyValue;
                document.querySelector('#display_dg').innerText = dg.toLocaleString('ko-KR');
                total_dg = Math.floor(total_dg + val_dg * buyValue);
                purpri_dg = Math.floor(total_dg / dg);
                document.querySelector('#purpri_dg').innerText = purpri_dg;
                asset = asset - buystock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#buy').value = 0;
            }
            break;
        case 8:
            var buyValue = Number(document.querySelector('#buy').value);
            var buystock = val_np * buyValue;
            if(asset < buystock) {
                alert('구매하기에는 자산이 부족합니다')
                return
            } else {
                np = np + buyValue;
                document.querySelector('#display_np').innerText = np.toLocaleString('ko-KR');
                total_np = Math.floor(total_np + val_np * buyValue);
                purpri_np = Math.floor(total_np / np);
                document.querySelector('#purpri_np').innerText = purpri_np;
                asset = asset - buystock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#buy').value = 0;
            }
            break;
    }

}

function sell() {
    var sellValue = Number(document.querySelector('#sell').value);
    switch (item) {
        // 아이템이 1(오성전자)인 경우
        case 1:
            // 판매 수량 밸류 가져오기
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_os * sellValue
            // 자산이 수량 변수보다 작으면 리턴
            if(os < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                // total_os = total_os - val_os * sellValue;
                // 판매한 만큼의 소유 주식을 차감
                os = os - sellValue;
                document.querySelector('#display_os').innerText = os.toLocaleString('ko-KR');
                // 자산에 종목 가격 * 밸류값 만큼의 금액 제공
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_os = total_os - sellValue * purpri_os
                if(os == 0){
                    document.getElementById("purpri_os").innerText = 0;
                    purpri_os = 0;
                    document.getElementById("rate_os").innerText = 0 + '%';
                }
            }
            break;
        case 2:
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_mr * sellValue
            if(mr < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                mr = mr - sellValue;
                document.querySelector('#display_mr').innerText = mr.toLocaleString('ko-KR');
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_mr = total_mr - sellValue * purpri_mr
                if(mr == 0){
                    document.getElementById("purpri_mr").innerText = 0;
                    purpri_mr = 0;
                    document.getElementById("rate_mr").innerText = 0 + '%';
                }
            }
            break;
        case 3:
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_pp * sellValue
            if(pp < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                pp = pp - sellValue;
                document.querySelector('#display_pp').innerText = pp.toLocaleString('ko-KR');
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_pp = total_pp - sellValue * purpri_pp
                if(pp == 0){
                    document.getElementById("purpri_pp").innerText = 0;
                    purpri_pp = 0;
                    document.getElementById("rate_pp").innerText = 0 + '%';
                }
            }
            break;
        case 4:
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_rg * sellValue
            if(rg < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                rg = rg - sellValue;
                document.querySelector('#display_rg').innerText = rg.toLocaleString('ko-KR');
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_rg = total_rg - sellValue * purpri_rg
                if(rg == 0){
                    document.getElementById("purpri_rg").innerText = 0;
                    purpri_rg = 0;
                    document.getElementById("rate_rg").innerText = 0 + '%';
                }
            }
            break;
        case 5:
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_ts * sellValue
            if(ts < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                ts = ts - sellValue;
                document.querySelector('#display_ts').innerText = ts.toLocaleString('ko-KR');
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_ts = total_ts - sellValue * purpri_ts
                if(ts == 0){
                    document.getElementById("purpri_ts").innerText = 0;
                    purpri_ts = 0;
                    document.getElementById("rate_ts").innerText = 0 + '%';
                }
            }
            break;
        case 6:
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_co * sellValue
            if(co < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                co = co - sellValue;
                document.querySelector('#display_co').innerText = co.toLocaleString('ko-KR');
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_co = total_co - sellValue * purpri_co
                if(co == 0){
                    document.getElementById("purpri_co").innerText = 0;
                    purpri_co = 0;
                    document.getElementById("rate_co").innerText = 0 + '%';
                }
            }
            break;
        case 7:
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_dg * sellValue
            if(dg < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                dg = dg - sellValue;
                document.querySelector('#display_dg').innerText = dg.toLocaleString('ko-KR');
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_dg = total_dg - sellValue * purpri_dg
                if(dg == 0){
                    document.getElementById("purpri_dg").innerText = 0;
                    purpri_dg = 0;
                    document.getElementById("rate_dg").innerText = 0 + '%';
                }
            }
            break;
        case 8:
            var sellValue = Number(document.querySelector('#sell').value);
            var sellstock = val_np * sellValue
            if(np < sellValue) {
                alert('판매를 위한 소유 주식이 부족합니다.')
                return
            } else {
                np = np - sellValue;
                document.querySelector('#display_np').innerText = np.toLocaleString('ko-KR');
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
                total_np = total_np - sellValue * purpri_np
                if(np == 0){
                    document.getElementById("purpri_np").innerText = 0;
                    purpri_np = 0;
                    document.getElementById("rate_np").innerText = 0 + '%';
                }
            }
            break;
    }


}

// 1분마다 종목 가격이 랜덤 정수로 변경되는 함수를 구현하기
// 난수를 생성해서 주기에는 너무 정형화되어있을거 같은데..
// 난수를 1~500까지 생성한 다음 난수가 가격이 되는걸로?
// 랜덤으로 돈이 확 올라가고 내려가는거라서 돈을 쉽게 벌거같음..
// 현재 금액의 -30% ~ +30%까지 변동을 주려면 어떻게 해야하지;
// ex) 현재금액이 100인 경우 랜덤으로 -30% ~ +30% 사이로 올라가거나 내려가거나 하기
// 현재 내 지식선에서 가능한건 난수를 100줘서 1부터 50까지는 지정된 % 올리기 51~100까지는 ~% 내리기 이정도까진데..

const randRate_os = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_os = function() {
    oldVal_os = val_os;
    rate = randRate_os();
    document.getElementById("mux_os").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_os = Math.floor(oldVal_os * mux);
    document.getElementById("price_os").innerText = val_os.toLocaleString('ko-KR');
    document.querySelector("#disprice_os").innerText = val_os.toLocaleString('ko-KR');
    if(purpri_os == 0) {
        document.getElementById("rate_os").innerText = 0 + '%';
    }else {
        rate_os = Math.floor((val_os / purpri_os) * 100 - 100);
        document.getElementById("rate_os").innerText = rate_os + '%';
    }
    }
    
    setInterval(upDown_os, 30000);

const randRate_mr = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_mr = function() {
    oldVal_mr = val_mr;
    rate = randRate_mr();
    document.getElementById("mux_mr").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_mr = Math.floor(oldVal_mr * mux);
    document.getElementById("price_mr").innerText = val_mr.toLocaleString('ko-KR');
    document.querySelector("#disprice_mr").innerText = val_mr.toLocaleString('ko-KR');
    if(purpri_mr == 0) {
        document.getElementById("rate_mr").innerText = 0 + '%';
    }else {
        rate_mr = Math.floor((val_mr / purpri_mr) * 100 - 100);
        document.getElementById("rate_mr").innerText = rate_mr + '%';
    }
    }
    
    setInterval(upDown_mr, 30000);

const randRate_pp = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_pp = function() {
    oldVal_pp = val_pp;
    rate = randRate_pp();
    document.getElementById("mux_pp").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_pp = Math.floor(oldVal_pp * mux);
    document.getElementById("price_pp").innerText = val_pp.toLocaleString('ko-KR');
    document.querySelector("#disprice_pp").innerText = val_pp.toLocaleString('ko-KR');
    if(purpri_pp == 0) {
        document.getElementById("rate_pp").innerText = 0 + '%';
    }else {
        rate_pp = Math.floor((val_pp / purpri_pp) * 100 - 100);
        document.getElementById("rate_pp").innerText = rate_pp + '%';
    }
    }
    
    setInterval(upDown_pp, 30000);

const randRate_rg = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_rg = function() {
    oldVal_rg = val_rg;
    rate = randRate_rg();
    document.getElementById("mux_rg").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_rg = Math.floor(oldVal_rg * mux);
    document.getElementById("price_rg").innerText = val_rg.toLocaleString('ko-KR');
    document.querySelector("#disprice_rg").innerText = val_rg.toLocaleString('ko-KR');
    if(purpri_rg == 0) {
        document.getElementById("rate_rg").innerText = 0 + '%';
    }else {
        rate_rg = Math.floor((val_rg / purpri_rg) * 100 - 100);
        document.getElementById("rate_rg").innerText = rate_rg + '%';
    }
    }
    
    setInterval(upDown_rg, 30000);

const randRate_ts = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_ts = function() {
    oldVal_ts = val_ts;
    rate = randRate_ts();
    document.getElementById("mux_ts").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_ts = Math.floor(oldVal_ts * mux);
    document.getElementById("price_ts").innerText = val_ts.toLocaleString('ko-KR');
    document.querySelector("#disprice_ts").innerText = val_ts.toLocaleString('ko-KR');
    if(purpri_ts == 0) {
        document.getElementById("rate_ts").innerText = 0 + '%';
    }else {
        rate_ts = Math.floor((val_ts / purpri_ts) * 100 - 100);
        document.getElementById("rate_ts").innerText = rate_ts + '%';
    }
    }
    
    setInterval(upDown_ts, 30000);

const randRate_co = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_co = function() {
    oldVal_co = val_co;
    rate = randRate_co();
    document.getElementById("mux_co").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_co = Math.floor(oldVal_co * mux);
    document.getElementById("price_co").innerText = val_co.toLocaleString('ko-KR');
    document.querySelector("#disprice_co").innerText = val_co.toLocaleString('ko-KR');
    if(purpri_co == 0) {
        document.getElementById("rate_co").innerText = 0 + '%';
    }else {
        rate_co = Math.floor((val_co / purpri_co) * 100 - 100);
        document.getElementById("rate_co").innerText = rate_co + '%';
    }
    }
    
    setInterval(upDown_co, 30000);

        
const randRate_dg = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_dg = function() {
    oldVal_dg = val_dg;
    rate = randRate_dg();
    document.getElementById("mux_dg").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_dg = Math.floor(oldVal_dg * mux);
    document.getElementById("price_dg").innerText = val_dg.toLocaleString('ko-KR');
    document.querySelector("#disprice_dg").innerText = val_dg.toLocaleString('ko-KR');
    if(purpri_dg == 0) {
        document.getElementById("rate_dg").innerText = 0 + '%';
    }else {
        rate_dg = Math.floor((val_dg / purpri_dg) * 100 - 100);
        document.getElementById("rate_dg").innerText = rate_dg + '%';
    }
    }
    
    setInterval(upDown_dg, 30000);

                
const randRate_np = function() {
    return -30 + Math.floor(Math.random() * 61);
    }
    
    const upDown_np = function() {
    oldVal_np = val_np;
    rate = randRate_np();
    document.getElementById("mux_np").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_np = Math.floor(oldVal_np * mux);
    document.getElementById("price_np").innerText = val_np.toLocaleString('ko-KR');
    document.querySelector("#disprice_np").innerText = val_np.toLocaleString('ko-KR');
    if(purpri_np == 0) {
        document.getElementById("rate_np").innerText = 0 + '%';
    }else {
        rate_np = Math.floor((val_np / purpri_np) * 100 - 100);
        document.getElementById("rate_np").innerText = rate_np + '%';
    }
    }
    
    setInterval(upDown_np, 30000);

    var time = 31;

    const upDown = function() {
        if(time == 1){
            time = 30;
        } else {
            time = time - 1;
            document.getElementById("time").innerText = time;
            }
    }
    
    setInterval(upDown, 1000);
            


    
    