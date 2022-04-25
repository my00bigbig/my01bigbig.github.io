// source --> https://anosaka.com/customjs/nogizaka_data.js 
var memberArray = [
	["齋藤飛鳥","https://anosaka.com/images/nogizaka46/saitouasuka_prof.jpg",1],
	["与田祐希","https://anosaka.com/images/nogizaka46/yodayuuki_prof.jpg",3],
	["山下美月","https://anosaka.com/images/nogizaka46/yamashitamizuki_prof.jpg",3],
	["遠藤さくら","https://anosaka.com/images/nogizaka46/endousakura_prof.jpg",4],
	["賀喜遥香","https://anosaka.com/images/nogizaka46/kakiharuka_prof.jpg",4],
	["秋元真夏","https://anosaka.com/images/nogizaka46/akimotomanatsu_prof.jpg",1],
	["梅澤美波","https://anosaka.com/images/nogizaka46/umezawaminami_prof.jpg",3],
	["久保史緒里","https://anosaka.com/images/nogizaka46/kuboshiori_prof.jpg",3],
	["岩本蓮加","https://anosaka.com/images/nogizaka46/iwamotorenka_prof.jpg",3],
	["筒井あやめ","https://anosaka.com/images/nogizaka46/tsutsuiayame_prof.jpg",4],
	["北野日奈子","https://anosaka.com/images/nogizaka46/kitanohinako_prof.jpg",2],
	["田村真佑","https://anosaka.com/images/nogizaka46/tamuramayu_prof.jpg",4],
	["掛橋沙耶香","https://anosaka.com/images/nogizaka46/kakehashisayaka_prof.jpg",4],
	["清宮レイ","https://anosaka.com/images/nogizaka46/seimiyarei_prof.jpg",4],
	["早川聖来","https://anosaka.com/images/nogizaka46/hayakawaseira_prof.jpg",4],
	["鈴木絢音","https://anosaka.com/images/nogizaka46/suzukiayane_prof.jpg",2],
	["柴田柚菜","https://anosaka.com/images/nogizaka46/shibatayuna_prof.jpg",4],
	["樋口日奈","https://anosaka.com/images/nogizaka46/higuchihina_prof.jpg",1],
	["金川紗耶","https://anosaka.com/images/nogizaka46/kanagawasaya_prof.jpg",4],
	["佐藤璃果","https://anosaka.com/images/nogizaka46/satourika_prof.jpg",4],
	["山﨑怜奈","https://anosaka.com/images/nogizaka46/yamazakirena_prof.jpg",2],
	["伊藤理々杏","https://anosaka.com/images/nogizaka46/itouriria_prof.jpg",3],
	["阪口珠美","https://anosaka.com/images/nogizaka46/sakaguchitamami_prof.jpg",3],
	["佐藤楓","https://anosaka.com/images/nogizaka46/satoukaede_prof.jpg",3],
	["松尾美佑","https://anosaka.com/images/nogizaka46/matsuomiyu_prof.jpg",4],
	["中村麗乃","https://anosaka.com/images/nogizaka46/nakamurareno_prof.jpg",3],
	["矢久保美緒","https://anosaka.com/images/nogizaka46/yakubomio_prof.jpg",4],
	["向井葉月","https://anosaka.com/images/nogizaka46/mukaihazuki_prof.jpg",3],
	["林瑠奈","https://anosaka.com/images/nogizaka46/hayashiruna_prof.jpg",4],
	["吉田綾乃クリスティー","https://anosaka.com/images/nogizaka46/yoshidaayanochristie_prof.jpg",3],
	["弓木奈於","https://anosaka.com/images/nogizaka46/yumikinao_prof.jpg",4],
	["北川悠理","https://anosaka.com/images/nogizaka46/kitagawayuri_prof.jpg",4],
	["和田まあや","https://anosaka.com/images/nogizaka46/wadamaaya_prof.jpg",1],
	["黒見明香","https://anosaka.com/images/nogizaka46/kuromiharuka_prof.jpg",4],
	["井上和","https://anosaka.com/images/nogizaka46/inouenagi_prof.jpg",5],
	["一ノ瀬美空","https://anosaka.com/images/nogizaka46/ichinosemiku_prof.jpg",5],
	["菅原咲月","https://anosaka.com/images/nogizaka46/sugawarasatsuki_prof.jpg",5],
	["小川彩","https://anosaka.com/images/nogizaka46/ogawaaya_prof.jpg",5],
	["冨里奈央","https://anosaka.com/images/nogizaka46/tomisatonao_prof.jpg",5],
	["奥田いろは","https://anosaka.com/images/nogizaka46/okudairoha_prof.jpg",5],
	["中西アルノ","https://anosaka.com/images/nogizaka46/nakanishiaruno_prof.jpg",5],
	["五百城茉央","https://anosaka.com/images/nogizaka46/iokimao_prof.jpg",5],
	["池田瑛紗","https://anosaka.com/images/nogizaka46/ikedateresa_prof.jpg",5],
	["川崎桜","https://anosaka.com/images/nogizaka46/kawasakisakura_prof.jpg",5],
	["岡本姫奈","https://anosaka.com/images/nogizaka46/okamotohina_prof.jpg",5],
    ];
	
var title = "乃木坂46ソート"
var pageurl = "https://anosaka.com/nogizaka46-sort";
// source --> https://anosaka.com/customjs/member_sort.js 
function loopImageLoader(i){
  var image1 = new Image();
  image1.src = memberArray[i][1];
  image1.onload = function(){
    i++;
    if(memberArray.length != i){
      loopImageLoader(i);
    }
  }
}
loopImageLoader(0);

var lstMember = new Array();
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1,cmp2;
var head1,head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;
var finishFlag;

function initList(){
    var n = 0;
    var mid;
    var i;

    lstMember[n] = new Array();
    for (i=0; i<memberArray.length; i++) {
        lstMember[n][i] = i;
    }
    parent[n] = -1;
    totalSize = 0;
    n++;

    for (i=0; i<lstMember.length; i++) {
        if(lstMember[i].length>=2) {
            mid = Math.ceil(lstMember[i].length/2);
            lstMember[n] = new Array();
            lstMember[n] = lstMember[i].slice(0,mid);
            totalSize += lstMember[n].length;
            parent[n] = i;
            n++;
            lstMember[n] = new Array();
            lstMember[n] = lstMember[i].slice(mid,lstMember[i].length);
            totalSize += lstMember[n].length;
            parent[n] = i;
            n++;
        }
    }

    for (i=0; i<memberArray.length; i++) {
        rec[i] = 0;
    }
    nrec = 0;

    for (i=0; i<=memberArray.length; i++) {
        equal[i] = -1;
    }

cmp1 = lstMember.length-2;
cmp2 = lstMember.length-1;
head1 = 0;
head2 = 0;
numQuestion = 1;
finishSize = 0;
finishFlag = 0;
}

function sortList(flag){
    var i;
    var str;

    if (flag<0) {
        rec[nrec] = lstMember[cmp1][head1];
        head1++;
        nrec++;
        finishSize++;
        while (equal[rec[nrec-1]]!=-1) {
            rec[nrec] = lstMember[cmp1][head1];
            head1++;
            nrec++;
            finishSize++;
        }
    }
    else if (flag>0) {
        rec[nrec] = lstMember[cmp2][head2];
        head2++;
        nrec++;
        finishSize++;
        while (equal[rec[nrec-1]]!=-1) {
            rec[nrec] = lstMember[cmp2][head2];
            head2++;
            nrec++;
            finishSize++;
        }
    }
    else {
        rec[nrec] = lstMember[cmp1][head1];
        head1++;
        nrec++;
        finishSize++;
        while (equal[rec[nrec-1]]!=-1) {
            rec[nrec] = lstMember[cmp1][head1];
            head1++;
            nrec++;
            finishSize++;
        }
        equal[rec[nrec-1]] = lstMember[cmp2][head2];
        rec[nrec] = lstMember[cmp2][head2];
        head2++;
        nrec++;
        finishSize++;
        while (equal[rec[nrec-1]]!=-1) {
            rec[nrec] = lstMember[cmp2][head2];
            head2++;
            nrec++;
            finishSize++;
        }
    }

    if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
        while (head1<lstMember[cmp1].length){
            rec[nrec] = lstMember[cmp1][head1];
            head1++;
            nrec++;
            finishSize++;
        }
    }
    else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
        while (head2<lstMember[cmp2].length){
            rec[nrec] = lstMember[cmp2][head2];
            head2++;
            nrec++;
            finishSize++;
        }
    }

    if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) {
        for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) {
            lstMember[parent[cmp1]][i] = rec[i];
        }
        lstMember.pop();
        lstMember.pop();
        cmp1 = cmp1-2;
        cmp2 = cmp2-2;
        head1 = 0;
        head2 = 0;

        if (head1==0 && head2==0) {
            for (i=0; i<memberArray.length; i++) {
                rec[i] = 0;
            }
            nrec = 0;
        }
    }

    if (cmp1<0) {
        str = "比較 No."+(numQuestion-1)+"<br>"+Math.floor(finishSize*100/totalSize)+"% 比較済";
        document.getElementById("battleNumber").innerHTML = str;

        showResult();
        finishFlag = 1;
    }
    else {
        showImage();
    }
}

function showResult() {
    var ranking = 1;
    var sameRank = 1;
    var str = "";
    var i;
    var twitterString = title+' 私の推しメンランキング'+"%0D%0A%0D%0A";

    str += "<div id=\"rankingtitle\">"+title+" 結果</div>";
	str += "<br>"
	// 表彰台
	str += "<table id=\"rankingImage\" >";
	// 1位
	str += "<tr><td id=\"1st\" class=\"podium\" colspan=\"5\">1位<\/td><\/tr>";
	str += "<tr><td id=\"1stName\" class=\"podium\" colspan=\"5\">"+memberArray[lstMember[0][0]][0]+"<br>"+"<img src=\"" + memberArray[lstMember[0][0]][1] + '\" border="0" width="50%" /><\/td><\/tr>';
	// 2-5位
	str += "<tr><td id=\"2nd\" class=\"podium\">2位<\/td><td id=\"3rd\" class=\"podium\">3位<\/td><td id=\"4th\" class=\"podium\">4位<\/td><td id=\"5th\" class=\"podium\">5位<\/td><\/tr>";
	str += "<tr>"
	str += "<td id=\"2ndName\" class=\"podium\">"+memberArray[lstMember[0][1]][0]+"<br>"+"<img src=\"" + memberArray[lstMember[0][1]][1] + '\" border="0" width="100%" /><\/td>';
	str += "<td id=\"3rdName\" class=\"podium\">"+memberArray[lstMember[0][2]][0]+"<br>"+"<img src=\"" + memberArray[lstMember[0][2]][1] + '\" border="0" width="100%" /><\/td>';
	str += "<td id=\"4thName\" class=\"podium\">"+memberArray[lstMember[0][3]][0]+"<br>"+"<img src=\"" + memberArray[lstMember[0][3]][1] + '\" border="0" width="100%" /><\/td>';
	str += "<td id=\"5thName\" class=\"podium\">"+memberArray[lstMember[0][4]][0]+"<br>"+"<img src=\"" + memberArray[lstMember[0][4]][1] + '\" border="0" width="100%" /><\/td>';
	str += "<\/tr>";
	str += "<\/table>";
	// 全ランキング
    str += "<table id=\"mainranking\" >";
    str += "<tr><td id=\"juni\" >順位<\/td><td id=\"name\" >名前<\/td><td id=\"gen\" >期<\/td><\/tr>";
    for (i=0; i<memberArray.length; i++) {
        str += "<tr><td id=\"ranking\" >"+ranking+"<\/td><td id=\"memberArray\" >"+memberArray[lstMember[0][i]][0]+"<\/td><td id=\"genArray\" >"+memberArray[lstMember[0][i]][2]+"<\/td><\/tr>";
        if (i < 10) {
            twitterString += ranking + "位 " + memberArray[lstMember[0][i]][0] + "%0D%0A";
        }
        if (i<memberArray.length-1) {
            if (equal[lstMember[0][i]]==lstMember[0][i+1]) {
                sameRank++;
            } else {
                ranking += sameRank;
                sameRank = 1;
            }
        }
    }
    
    str += "<\/table>";
    str += "<br>"
    str += "<br>"
    str += '<a href="https://twitter.com/intent/tweet?text=' + twitterString + '%0D%0A' + pageurl + '%0D%0A%23'+title+'" target="_blank" id="btn">Twitterでシェア</a>';
    str += "<br>"
    str += "<br>"
    
    document.getElementById("mainTable").style.display = "none";
    document.getElementById("resultField").innerHTML = str;
}

function showImage() {
    var str0 = "比較 No."+numQuestion+"<br>"+Math.floor(finishSize*100/totalSize)+"% 比較済.";
    var str1 = ""+toNameFace(lstMember[cmp1][head1]);
    var str2 = ""+toNameFace(lstMember[cmp2][head2]);

    document.getElementById("battleNumber").innerHTML = str0;
    document.getElementById("leftField").innerHTML = str1;
    document.getElementById("rightField").innerHTML = str2;

    numQuestion++;
}

function toNameFace(n){
    var str = memberArray[n][0];
    str += "<br>";
    str += "<img src=\"" + memberArray[n][1] + '\" border="0" width="100%" />';
    return str;
};
