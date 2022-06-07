var asset = 1000000;
var item = 0;
var val_os = 1000;
var val_mr = 1000;
var val_pp = 1000;
var val_rg = 1000;
var val_ts = 1000;
var val_co = 1000;
var val_dg = 1000;
var val_np = 1000;
var os = 0;
var mr = 0;
var pp = 0;
var rg = 0;
var ts = 0;
var co = 0;
var dg = 0;
var np = 0;
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
            document.querySelector('#choice_stock').innerText = "넷플링스";
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
                // 구매가 된 경우 종목에 밸류값만큼의 수량 추가
                os = os + buyValue;
                document.querySelector('#display_os').innerText = os;
                // 자산에 종목 가격 * 밸류값 만큼의 가격 차감
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
                document.querySelector('#display_mr').innerText = mr;
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
                document.querySelector('#display_pp').innerText = pp;
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
                document.querySelector('#display_rg').innerText = rg;
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
                document.querySelector('#display_ts').innerText = ts;
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
                document.querySelector('#display_co').innerText = co;
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
                document.querySelector('#display_dg').innerText = dg;
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
                document.querySelector('#display_np').innerText = np;
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
                // 판매한 만큼의 소유 주식을 차감
                os = os - sellValue;
                document.querySelector('#display_os').innerText = os;
                // 자산에 종목 가격 * 밸류값 만큼의 금액 제공
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
                document.querySelector('#display_mr').innerText = mr;
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
                document.querySelector('#display_pp').innerText = pp;
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
                document.querySelector('#display_rg').innerText = rg;
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
                document.querySelector('#display_ts').innerText = ts;
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
                document.querySelector('#display_co').innerText = co;
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
                document.querySelector('#display_dg').innerText = dg;
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
                document.querySelector('#display_np').innerText = np;
                asset = asset + sellstock
                document.querySelector('#asset').innerText = asset;
                document.querySelector('#sell').value = 0;
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
    const oldVal = val_os;
    rate = randRate_os();
    document.getElementById("mux_os").innerText = rate + '%';
    const mux = 1 + (rate * 0.01);
    val_os = Math.floor(oldVal * mux);
    document.getElementById("price_os").innerText = val_os;
    }
    
    setInterval(upDown_os, 30000);

    const randRate_mr = function() {
        return -30 + Math.floor(Math.random() * 61);
        }
        
        const upDown_mr = function() {
        const oldVal = val_mr;
        rate = randRate_mr();
        document.getElementById("mux_mr").innerText = rate + '%';
        const mux = 1 + (rate * 0.01);
        val_mr = Math.floor(oldVal * mux);
        document.getElementById("price_mr").innerText = val_mr;
        }
        
        setInterval(upDown_mr, 30000);

    const randRate_pp = function() {
        return -30 + Math.floor(Math.random() * 61);
        }
        
        const upDown_pp = function() {
        const oldVal = val_pp;
        rate = randRate_pp();
        document.getElementById("mux_pp").innerText = rate + '%';
        const mux = 1 + (rate * 0.01);
        val_pp = Math.floor(oldVal * mux);
        document.getElementById("price_pp").innerText = val_pp;
        }
        
        setInterval(upDown_pp, 30000);

    const randRate_rg = function() {
        return -30 + Math.floor(Math.random() * 61);
        }
        
        const upDown_rg = function() {
        const oldVal = val_rg;
        rate = randRate_rg();
        document.getElementById("mux_rg").innerText = rate + '%';
        const mux = 1 + (rate * 0.01);
        val_rg = Math.floor(oldVal * mux);
        document.getElementById("price_rg").innerText = val_rg;
        }
        
        setInterval(upDown_rg, 30000);

    const randRate_ts = function() {
        return -30 + Math.floor(Math.random() * 61);
        }
        
        const upDown_ts = function() {
        const oldVal = val_ts;
        rate = randRate_ts();
        document.getElementById("mux_ts").innerText = rate + '%';
        const mux = 1 + (rate * 0.01);
        val_ts = Math.floor(oldVal * mux);
        document.getElementById("price_ts").innerText = val_ts;
        }
        
        setInterval(upDown_ts, 30000);

    const randRate_co = function() {
        return -30 + Math.floor(Math.random() * 61);
        }
        
        const upDown_co = function() {
        const oldVal = val_co;
        rate = randRate_co();
        document.getElementById("mux_co").innerText = rate + '%';
        const mux = 1 + (rate * 0.01);
        val_co = Math.floor(oldVal * mux);
        document.getElementById("price_co").innerText = val_co;
        }
        
        setInterval(upDown_co, 30000);

            
    const randRate_dg = function() {
        return -30 + Math.floor(Math.random() * 61);
        }
        
        const upDown_dg = function() {
        const oldVal = val_dg;
        rate = randRate_dg();
        document.getElementById("mux_dg").innerText = rate + '%';
        const mux = 1 + (rate * 0.01);
        val_dg = Math.floor(oldVal * mux);
        document.getElementById("price_dg").innerText = val_dg;
        }
        
        setInterval(upDown_dg, 30000);

                    
    const randRate_np = function() {
        return -30 + Math.floor(Math.random() * 61);
        }
        
        const upDown_np = function() {
        const oldVal = val_np;
        rate = randRate_np();
        document.getElementById("mux_np").innerText = rate + '%';
        const mux = 1 + (rate * 0.01);
        val_np = Math.floor(oldVal * mux);
        document.getElementById("price_np").innerText = val_np;
        }
        
        setInterval(upDown_np, 30000);

        var time = 30;

        const upDown = function() {
            if(time == 1){
              time = 30;
            } else {
              time = time - 1;
              document.getElementById("time").innerText = time;
             }
        }
        
        setInterval(upDown, 1000);
            


    
    