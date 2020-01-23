//テキストエリア(id = yomiage)へ入力された文字列を1文字ずつ分割して配列に格納した後、その配列を返すメソッド inputText:textareaに入力された文字列 textArray:inputTextを１文字ずつ分割して配列に格納した配列
function returnTextArray(){
    var inputText = document.getElementById('yomiage').value;
    var textArray = inputText.split('');
    return textArray;
}

//textArray（配列）の中身を探査して、１文字ずつ音声ファイルに当てはまるキー値を当てはめていく 例:'あ'→1、'い'→2
function setNumberToElement(){
    var voiceDictionary={1:'あ',2:'い',3:'う',4:'え',5:'お',6:'か',7:'き',8:'く',9:'け',10:'こ',11:'さ',12:'し',13:'す',14:'せ',15:'そ',16:'た',17:'ち',18:'つ',19:'て',20:'と',21:'な',22:'に',23:'ぬ',24:'ね',25:'の',26:'は',27:'ひ',28:'ふ',29:'へ',30:'ほ',31:'ま',32:'み',33:'む',34:'め',35:'も',36:'や',37:'ゆ',38:'よ',39:'ら',40:'り',41:'る',42:'れ',43:'ろ',44:'わ',45:'を',46:'ん',47:'が',48:'ぎ',49:'ぐ',50:'げ',51:'ご',52:'ざ',53:'じ',54:'ず',55:'ぜ',56:'ぞ',57:'だ',58:'ぢ',59:'づ',60:'で',61:'ど',62:'ば',63:'び',64:'ぶ',65:'べ',66:'ぼ',67:'ぱ',68:'ぴ',69:'ぷ',70:'ぺ',71:'ぽ'};
    //textArrayの1文字1文字をvoiceDictionaryのキー値と対応させて数値化したものを格納する配列
    var numbersOfWord = [];
    var result = null;
    var useTextArray = returnTextArray();
    for(var i = 0; i<useTextArray.length; i++){
        var keys = Object.keys(voiceDictionary);
        for(var k = 0; k<keys.length; k++){
            if(voiceDictionary[keys[k]] === useTextArray[i]){
                result = keys[k];
            }
        }
        numbersOfWord.push(result);
        console.log(numbersOfWord);
    }
    return numbersOfWord;
}

//音声を鳴らすメソッド
function playSound(){
    
    var playlist=['./sounds/1.mp3','./sounds/あ.mp3','./sounds/い.mp3','./sounds/う.mp3','./sounds/え.mp3','./sounds/お.mp3','./sounds/か.mp3','./sounds/き.mp3','./sounds/く.mp3','./sounds/け.mp3','./sounds/こ.mp3','./sounds/さ.mp3','./sounds/し.mp3','./sounds/す.mp3','./sounds/せ.mp3','./sounds/そ.mp3','./sounds/た.mp3','./sounds/ち.mp3','./sounds/つ.mp3','./sounds/て.mp3','./sounds/と.mp3','./sounds/な.mp3','./sounds/に.mp3','./sounds/ぬ.mp3','./sounds/ね.mp3','./sounds/の.mp3','./sounds/は.mp3','./sounds/ひ.mp3','./sounds/ふ.mp3','./sounds/へ.mp3','./sounds/ほ.mp3','./sounds/ま.mp3','./sounds/み.mp3','./sounds/む.mp3','./sounds/め.mp3','./sounds/も.mp3','./sounds/や.mp3','./sounds/ゆ.mp3','./sounds/よ.mp3','./sounds/ら.mp3','./sounds/り.mp3','./sounds/る.mp3','./sounds/れ.mp3','./sounds/ろ.mp3','./sounds/わ.mp3','./sounds/を.mp3','./sounds/ん.mp3','./sounds/が.mp3','./sounds/ぎ.mp3','./sounds/ぐ.mp3','./sounds/げ.mp3','./sounds/ご.mp3','./sounds/ざ.mp3','./sounds/じ.mp3','./sounds/ず.mp3','./sounds/ぜ.mp3','./sounds/ぞ.mp3','./sounds/だ.mp3','./sounds/ぢ.mp3','./sounds/づ.mp3','./sounds/で.mp3','./sounds/ど.mp3','./sounds/ば.mp3','./sounds/び.mp3','./sounds/ぶ.mp3','./sounds/べ.mp3','./sounds/ぼ.mp3','./sounds/ぱ.mp3','./sounds/ぴ.mp3','./sounds/ぷ.mp3','./sounds/ぺ.mp3','./sounds/ぽ.mp3',];
    
    //audioインスタンスの作成
    var audio=document.createElement('audio');
    document.body.appendChild(audio);
    
    //入力された文字列をキー値と対応させた配列
    var useNumbersOfWord = setNumberToElement();
    //useNumbersOfWordの一番最初の文字を格納
    var index = 0;
    audio.src = playlist[useNumbersOfWord[index]];
    audio.play();
    
    //addEventListner('ended')はaudioが終了したことを検知して発火する
    audio.addEventListener('ended',function(){
        index++;
        if(index>useNumbersOfWord.length){
            return;
        }else{
            audio.src=playlist[useNumbersOfWord[index]];
            audio.play();
        }
    });
    
}

//リセットに関する関数
function doReset(){
    //inputButtonを押せるようにする
    document.getElementById("inputButton").disabled = false;
    var resetNumbers = setNumberToElement();
    //numbersOfWordの中身を空にする
    resetNumbers = [];
    return resetNumbers;
}

//最初に呼ばれる起動用関数
function start(){
    document.getElementById("inputButton").disabled = true;
    playSound();
    //ボタンのオンオフ
    document.getElementById("resetButton").disabled = false;
}











