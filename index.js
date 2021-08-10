
// じゃんけんのかき方
// goo=0
// choki=1
// paa=2

// clickするとgetelementidbyでvalueを取得する＝変数zibunに代入
$("#mychoice-item0").on('click',function(){
    $('#result1').text("");

    // 自分のじゃんけんを選ぶ＝じゃんけんの値が決まる
    var zibun = document.getElementById('mychoice-item0').value;
    
    // じゃんけんの結果は3の倍数となる
    // // 相手の手は変数enemyにする
    var enemy = Math.floor(Math.random()*3);

    // // バグチェック
    // console.log(zibun);
    // console.log(enemy);

    // zibunからenemyを引き算する
    var result = zibun - enemy;
    // zibun 0 - enemy 0 = 0 =aiko
    // zibun 0 - enemy 1 = -1 = win
    // zibun 0 - enemy 2 = -2 = lose
    
    // // バグチェック
    // console.log(result);

    // ifでresultを判定する
    if(result==0){
        $('#result1').append("aiko again");
        // console.log("aiko");
    }else if(result == 1 || result == -1){
        $('#result1').append("you win!");
        // console.log("you win");
    }else {
        $('#result1').append("you lose!");
        // console.log("you lose");
    };
});


// チョキの場合
    // zibun 1 - enemy 1 = 0 =aiko
    // zibun 1 - enemy 2 = -1 = win
    // zibun 1 - enemy 0 = 1 = lose
$("#mychoice-item1").on('click',function(){
    $('#result1').text("");
    var zibun = document.getElementById('mychoice-item1').value;
    var enemy = Math.floor(Math.random()*3);
    var result = zibun - enemy;
    if(result==0){
        $('#result1').append("aiko again");
    }else if(result == -1){
        $('#result1').append("you win!");
    }else {
        $('#result1').append("you lose!");
    };
});

// パーの場合
    // zibun 2 - enemy 2 = 0 =aiko
    // zibun 2 - enemy 1 = 1 = lose
    // zibun 2 - enemy 0 = 2 = win
$("#mychoice-item2").on('click',function(){
    $('#result1').text("");
    var zibun = document.getElementById('mychoice-item1').value;
    var enemy = Math.floor(Math.random()*3);
    var result = zibun - enemy;
    if(result==0){
        $('#result1').append("aiko again");
    }else if(result == 2){
        $('#result1').append("you win!");
    }else {
        $('#result1').append("you lose!");
    };
});