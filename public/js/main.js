//textarea'yomiage'に入力された文字列を配列'textArray'に1文字ずつ分割して格納
var inputText='';
//textArray:textareaに入力された文字列を分割して配列としたもの
var textArray=[];
//単語に対応する50音順の定義した数値を格納する配列
var numbersOfWord=[];
//オーディオファイルの設定
var playlist=[
    'sounds/1.mp3'
];
var audio=document.createElement('audio');
document.body.appendChild(audio);
audio.style.width='100%';
audio.style.height='auto';
audio.controls=true;
audio.volume=0.2;

//音声の連想配列("あいうえお"の50音順を昇順に数値として定義) 例：あ→１、ん→50
var voiceDictionary={1:'あ',2:'い',3:'う',4:'え',5:'お',6:'か',7:'き',8:'く',9:'け',10:'こ',11:'さ',12:'し',13:'す',14:'せ',15:'そ',16:'た',17:'ち',18:'つ',19:'て',20:'と',21:'な',22:'に',23:'ぬ',24:'ね',25:'の',26:'は',27:'ひ',28:'ふ',29:'へ',30:'ほ',31:'ま',32:'み',33:'む',34:'め',35:'も',36:'や',37:'ゆ',38:'よ',39:'ら',40:'り',41:'る',42:'れ',43:'ろ',44:'わ',45:'を',46:'ん',47:'が',48:'ぎ',49:'ぐ',50:'げ',51:'ご',52:'ざ',53:'じ',54:'ず',55:'ぜ',56:'ぞ',57:'だ',58:'ぢ',59:'づ',60:'で',61:'ど',62:'ば',63:'び',64:'ぶ',65:'べ',66:'ぼ',67:'ぱ',68:'ぴ',69:'ぷ',70:'ぺ',71:'ぽ'};

//入力された文章を1文字ずつ分割して配列に入れる yomiage:index.htmlのtextarea
function kakunin(){
    inputText=document.getElementById('yomiage').value;
    //textArray:textareaに入力された文字列を分割して配列としたもの
    textArray=inputText.split('');
    setNumberToWord();
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
    //numbersOfWordから1つずつ数値を取り出して、数値に沿ったidの音声ファイルを開く
    for(var i=0,len=numbersOfWord.length;i<len;i++){
        audio.src=playlist[numbersOfWord[i]];
        setTimeout(function(){
            audio.play();
        },1000);
//        audio.currentTime=0;
//        audio.src='';
    }
}






