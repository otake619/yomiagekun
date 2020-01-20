//textarea'yomiage'に入力された文字列を配列'textArray'に1文字ずつ分割して格納
var inputText='';
//textArray:textareaに入力された文字列を分割して配列としたもの
var textArray=[];
//単語に対応する50音順の定義した数値を格納する配列
var numbersOfWord=[];
//オーディオファイルの設定
//var playlist=[
//    './sounds/1.mp3'
//];

//オーディオの詳細設定
var audio=document.createElement('audio');
document.body.appendChild(audio);
audio.style.width='100%';
audio.style.height='auto';
audio.controls=true;
audio.volume=0.2;

//var music=new Audio();

var playlist=['./sounds/1.mp3','./sounds/あ.mp3','./sounds/い.mp3','./sounds/う.mp3','./sounds/え.mp3','./sounds/お.mp3','./sounds/か.mp3','./sounds/き.mp3','./sounds/く.mp3','./sounds/け.mp3','./sounds/こ.mp3','./sounds/さ.mp3','./sounds/し.mp3','./sounds/す.mp3','./sounds/せ.mp3','./sounds/そ.mp3','./sounds/た.mp3','./sounds/ち.mp3','./sounds/つ.mp3','./sounds/て.mp3','./sounds/と.mp3','./sounds/な.mp3','./sounds/に.mp3','./sounds/ぬ.mp3','./sounds/ね.mp3','./sounds/の.mp3','./sounds/は.mp3','./sounds/ひ.mp3','./sounds/ふ.mp3','./sounds/へ.mp3','./sounds/ほ.mp3','./sounds/ま.mp3','./sounds/み.mp3','./sounds/む.mp3','./sounds/め.mp3','./sounds/も.mp3','./sounds/や.mp3','./sounds/ゆ.mp3','./sounds/よ.mp3','./sounds/ら.mp3','./sounds/り.mp3','./sounds/る.mp3','./sounds/れ.mp3','./sounds/ろ.mp3','./sounds/わ.mp3','./sounds/を.mp3','./sounds/ん.mp3','./sounds/が.mp3','./sounds/ぎ.mp3','./sounds/ぐ.mp3','./sounds/げ.mp3','./sounds/ご.mp3','./sounds/ざ.mp3','./sounds/じ.mp3','./sounds/ず.mp3','./sounds/ぜ.mp3','./sounds/ぞ.mp3','./sounds/だ.mp3','./sounds/ぢ.mp3','./sounds/づ.mp3','./sounds/で.mp3','./sounds/ど.mp3','./sounds/ば.mp3','./sounds/び.mp3','./sounds/ぶ.mp3','./sounds/べ.mp3','./sounds/ぼ.mp3','./sounds/ぱ.mp3','./sounds/ぴ.mp3','./sounds/ぷ.mp3','./sounds/ぺ.mp3','./sounds/ぽ.mp3',];

//音声の連想配列("あいうえお"の50音順を昇順に数値として定義) 例：あ→１、ん→50
var voiceDictionary={1:'あ',2:'い',3:'う',4:'え',5:'お',6:'か',7:'き',8:'く',9:'け',10:'こ',11:'さ',12:'し',13:'す',14:'せ',15:'そ',16:'た',17:'ち',18:'つ',19:'て',20:'と',21:'な',22:'に',23:'ぬ',24:'ね',25:'の',26:'は',27:'ひ',28:'ふ',29:'へ',30:'ほ',31:'ま',32:'み',33:'む',34:'め',35:'も',36:'や',37:'ゆ',38:'よ',39:'ら',40:'り',41:'る',42:'れ',43:'ろ',44:'わ',45:'を',46:'ん',47:'が',48:'ぎ',49:'ぐ',50:'げ',51:'ご',52:'ざ',53:'じ',54:'ず',55:'ぜ',56:'ぞ',57:'だ',58:'ぢ',59:'づ',60:'で',61:'ど',62:'ば',63:'び',64:'ぶ',65:'べ',66:'ぼ',67:'ぱ',68:'ぴ',69:'ぷ',70:'ぺ',71:'ぽ'};

//入力された文章を1文字ずつ分割して配列に入れる yomiage:index.htmlのtextarea
function kakunin(){
    inputText=document.getElementById('yomiage').value;
    //textArray:textareaに入力された文字列を分割して配列としたもの
    textArray=inputText.split('');
    setNumberToWord();
    //読み上げボタンが押されたので、リセットボタンを押せるようにする
    document.getElementById("resetButton").disabled=false;
    document.getElementById("inputButton").disabled=true;
}

//inputButtonのdisabledを切り替える関数(リセットボタンが押された際に呼ばれる)
function changeDisabled(){
    document.getElementById("inputButton").disabled=false;
    //numbersOfWordの中身を空にする
    numbersOfWord=[];
}

//1文字ずつvoiceDictionaryで定義した数値を当てはめていく
function setNumberToWord(){
    let result=null;
    for(var k=0,len=textArray.length;k<len;k++){
        var keys=Object.keys(voiceDictionary);
        for(let i=0;i<keys.length;i++){
            if(voiceDictionary[keys[i]]===textArray[k]){
                result=keys[i];
            }
        }
        numbersOfWord.push(result);
        console.log(numbersOfWord);
    }
    playSound();
}

//setNumberToWord()で格納した数値のmp3ファイルを開く 1.mp3→'あ'の音声を再生、といった風に
function playSound(){
    init();
}

function init(){
    //numbersOfWordの一番最初の文字を格納(index=0)
    var index=0;
    audio.src=playlist[numbersOfWord[index]];
    audio.play();
    
    //addEventListner('ended')はaudioが終了したことを検知して発火する
    audio.addEventListener('ended',function(){
        index++;
        if(index>numbersOfWord.length){
            return;
        }else{
            audio.src=playlist[numbersOfWord[index]];
            audio.play();
        }
    });
}






