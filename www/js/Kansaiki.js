//艦載機ページ用やで(*'v'*)
function func_pageKansaiki()
{
    var DOM = "";

    //putKanmusu用
    var m;
    var DOMListItem;

    var DOMOnsRow = "vertical-align='center'";
    var DOMPutKanmusuId = "id='putKanmusu[m]' onclick='collapseSetKanmusuType(this);' modifier='chevron'";
    var DOMPutKanmusuText = ["一番艦", "二番艦", "三番艦", "四番艦", "五番艦", "六番艦"];

    //putKansaiki用
    var n;

    var DOMPutKansaikiId = "id='putKansaiki[m]' onclick='collapseSetKansaikiSlot(this);' modifier='chevron'";
    var DOMAlignKansaiki = "class='alignKansaiki'";
    var DOMDetailKansaiki = "class='detailKansaiki[m]'";
    var DOMDetailKansaikiSpan = "\
    <span class='alignKansaikiSlot'>-</span>\
        <span class='alignKansaikiName'> </span>\
        <span class='alignKansaikiFloat'>\
            <span class='alignKansaikiPlus'> </span>\
            <span class='alignKansaikiMastery'> </span>\
        </span>\
    </span>";

    //collapseSetKanmusu用
    var DOMKanmusu;
    var i;
    var elm_i = arrayKansaiki["リスト"]["艦種"];
    var elm_i_Length = elm_i.length;
    var j;
    var elm_j;
    var elm_j_Length;

    var DOMCollapseSetKanmusu = "id='collapseSetKanmusu[m]' style='display: none;'";
    var DOMSetKanmusuType = "class='setKanmusuType_[i]'";
    var DOMKanmusuType = "onclick='collapseSetKanmusu(this);' modifier='chevron'";
    var DOMSetKanmusuName = "class='setKanmusuName_[i]' style='display: none;'";
    var DOMPutKanmusu = "onclick='putKanmusuText(this);' modifier='chevron'";

    //collapseSetKansaiki用
    var DOMKansaiki;
    var v;
    var w;
    var elm_w = arrayKansaiki["リスト"]["機種"];
    var elm_w_Length = elm_w.length;
    var x;
    var elm_x;
    var elm_x_Length;
    var y;

    var DOMCollapseSetKansaiki = "id='collapseSetKansaiki[m]' style='display: none;'";
    var DOMSetKansaiki = "class='setKansaiki[m]' onclick='collapseSetKansaikiType(this);' tappable";
    var DOMLabelLeft = "class='left'";
    var DOMLabelCenter = "for='[m]-[v]' class='center'";
    var DOMOnsInput = "name='setKansaiki[m]' type='radio' class='setKansaiki[m]' input-id='[m]-[v]'";
    var DOMInputKansaikiText = ["1番機", "2番機", "3番機", "4番機"];

    var DOMSetKansaikiType = "class='setKansaikiType_[w]' style='display: none;'";
    var DOMKansaikiType = "onclick='collapseSetKansaiki(this);' modifier='chevron'";
    var DOMSetKansaikiName = "class='setKansaiki_[w]' style='display: none;'";
    var DOMKansaikiName = "onclick='collapseSetKansaikiMastery(this);' modifier='chevron'";
    var DOMSetKansaikiMastery = "class='setKansaikiMastery_[y]' style='display: none;'";
    var DOMKansaikiMastery = "onclick='putKansaikiText(this);' modifier='chevron'";
    var DOMKansaikiMasteryText = ["+0 -", "+1 |", "+2 ||", "+3 |||", "+4 /", "+5 //", "+6 ///", "+7 >>"];

    var DOMPutKansaiki = "onclick='putKansaikiText(this);' modifier='chevron'";

    //艦隊の艦娘の数(6)だけ繰り返し
    for(m = 0; m < 6; m++)
    {
        DOMListItem = generateDOM("ons-row", "start", DOMOnsRow);
            DOMListItem += generateDOM("ons-col", "start");
                DOMListItem += generateDOM("ons-list-item", "start", DOMPutKanmusuId, [m]);
                    DOMListItem += DOMPutKanmusuText[m];
                DOMListItem += generateDOM("ons-list-item", "end");
            DOMListItem += generateDOM("ons-col", "end");
            DOMListItem += generateDOM("ons-col", "start");
                DOMListItem += generateDOM("ons-list-item", "start", DOMPutKansaikiId, [m]);

        //艦娘のスロット数(4)だけ繰り返し
        for(n = 0; n < 4; n++)
        {
                    DOMListItem += generateDOM("ons-row", "start", DOMAlignKansaiki);
                        DOMListItem += generateDOM("ons-col", "start");
                            DOMListItem += generateDOM("div", "start", DOMDetailKansaiki, [m]);
                                DOMListItem += DOMDetailKansaikiSpan;
                            DOMListItem += generateDOM("div", "end");
                        DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-row", "end");
        }
                DOMListItem += generateDOM("ons-list-item", "end");
            DOMListItem += generateDOM("ons-col", "end");
        DOMListItem += generateDOM("ons-row", "end");

        DOM += DOMListItem;

        //艦種の数だけ繰り返し
        DOMKanmusu = generateDOM("div", "start", DOMCollapseSetKanmusu, [m]);
        for(i = 0; i < elm_i_Length; i++)
        {
            DOMKanmusu += generateDOM("div", "start", DOMSetKanmusuType, [i]);
                DOMKanmusu += generateDOM("ons-list-item", "start", DOMKanmusuType);
                    DOMKanmusu += elm_i[i];
                DOMKanmusu += generateDOM("ons-list-item", "end");
                DOMKanmusu += generateDOM("div", "start", DOMSetKanmusuName, [i]);

            //その艦種の艦娘の数だけ繰り返し
            elm_j = arrayKansaiki["リスト"]["艦娘"][elm_i[i]];
            elm_j_Length = elm_j.length;
            for(j = 0; j < elm_j_Length; j++)
            {
                    DOMKanmusu += generateDOM("ons-list-item", "start", DOMPutKanmusu);
                        DOMKanmusu += elm_j[j];
                    DOMKanmusu += generateDOM("ons-list-item", "end");
            }
                DOMKanmusu += generateDOM("div", "end");
            DOMKanmusu += generateDOM("div", "end");
        }
        DOMKanmusu += generateDOM("div", "end");

        DOM += DOMKanmusu;

        DOMKansaiki = generateDOM("div", "start", DOMCollapseSetKansaiki, [m]);
            DOMKansaiki += generateDOM("ons-row", "start", DOMOnsRow);
        //艦娘のスロット数(4)だけ繰り返し
        for(v = 0; v < 4; v++)
        {
                DOMKansaiki += generateDOM("ons-col", "start");
                    DOMKansaiki += generateDOM("ons-list-item", "start", DOMSetKansaiki, [m]);
                        DOMKansaiki += generateDOM("label", "start", DOMLabelLeft);
                            DOMKansaiki += generateDOM("ons-input", "start", DOMOnsInput, [m, m, m, v]);
                            DOMKansaiki += generateDOM("ons-input", "end");
                        DOMKansaiki += generateDOM("label", "end");
                        DOMKansaiki += generateDOM("label", "start", DOMLabelCenter, [m, v]);
                            DOMKansaiki += DOMInputKansaikiText[v];
                        DOMKansaiki += generateDOM("label", "end");
                    DOMKansaiki += generateDOM("ons-list-item", "end");
                DOMKansaiki += generateDOM("ons-col", "end");
        }

            DOMKansaiki += generateDOM("ons-row", "end");

        //機種の数だけ繰り返し
        for(w = 0; w < elm_w_Length; w++)
        {
            DOMKansaiki += generateDOM("div", "start", DOMSetKansaikiType, [w]);
                DOMKansaiki += generateDOM("ons-list-item", "start", DOMKansaikiType);
                    DOMKansaiki += elm_w[w];
                DOMKansaiki += generateDOM("ons-list-item", "end");
                DOMKansaiki += generateDOM("div", "start", DOMSetKansaikiName, [w]);

            //その機種の機体の数だけ繰り返し
            elm_x = arrayKansaiki["リスト"]["艦載機"][elm_w[w]];
            elm_x_Length = elm_x.length;
            for(x = 0; x < elm_x_Length; x++)
            {
                    DOMKansaiki += generateDOM("ons-list-item", "start", DOMKansaikiName);
                        DOMKansaiki += elm_x[x];
                    DOMKansaiki += generateDOM("ons-list-item", "end");
                    DOMKansaiki += generateDOM("div", "start", DOMSetKansaikiMastery, [x]);
                //熟練度の数(8)だけ繰り返し
                for(y = 0; y < 8; y++)
                {
                        DOMKansaiki += generateDOM("ons-list-item", "start", DOMKansaikiMastery);
                            DOMKansaiki += DOMKansaikiMasteryText[y];
                        DOMKansaiki += generateDOM("ons-list-item", "end");
                }
                    DOMKansaiki += generateDOM("div", "end");
            }
                DOMKansaiki += generateDOM("div", "end");
            DOMKansaiki += generateDOM("div", "end");
        }
        DOMKansaiki += generateDOM("div", "end");

        DOM += DOMKansaiki;
    }

    $("#Kansaiki_Main").append(DOM);
}

//collapseSetKanmusuType(this)
function collapseSetKanmusuType(obj)
{
    // idNum = .toggle()する要素のidの数字部分を抜き出す
    var idNum = pickNumber($(obj).attr("id"), false);
    // hideLocation = .hide()する場所
    var hideLocation = $("[id^=collapseSetKanmusu]:visible");
    // toggleLocation = .toggle()する場所
    var toggleLocation = $("#collapseSetKanmusu" + idNum);
    //console.log(" collapseSetKanmusuType:" + $(obj).attr("id") + ", idNum:" + idNum);

    if(hideLocation.length > 0 && toggleLocation.is(":visible") == false)
    {
        hideLocation.hide("fast");
    }
    toggleLocation.toggle("fast");
    $("[class^=setKanmusu_]:visible").hide("fast");
}

//collapseSetKanmusu(this)
function collapseSetKanmusu(obj)
{
    // classNum = .toggle()する要素のclassの数字部分を抜き出す
    var classNum = pickNumber($(obj).parent().attr("class"), false);
    // hideLocation = .hide()する場所
    var hideLocation = $("[class^=setKanmusuName_]:visible");
    // toggleLocation = .toggle()する場所
    var toggleLocation = $(obj).siblings("div[class^=setKanmusuName_]");
    //console.log("  collapseSetKanmusu:" + $(obj).text() + ", classNum:" + classNum);

    if(hideLocation.length > 0 && toggleLocation.is(":visible") == false)
    {
        hideLocation.hide("fast");
    }
    toggleLocation.toggle("fast");
}

//collapseSetKansaikiSlot(this)
function collapseSetKansaikiSlot(obj)
{
    // idNum = .toggle()する要素のidの数字部分を抜き出す
    var idNum = pickNumber($(obj).attr("id"), false);
    // hideLocation = .hide()する場所
    var hideLocation = $("[id^=collapseSetKansaiki]:visible");
    // toggleLocation = .toggle()する場所
    var toggleLocation = $("#collapseSetKansaiki" + idNum);
    //console.log("  collapseSetKansakiSlot:" + $(obj).attr("class") + ", idNum:" + idNum);
    if(hideLocation.length > 0 && toggleLocation.is(":visible") == false)
    {
        hideLocation.hide("fast");
    }
    toggleLocation.toggle("fast");
}

//collapseSetKansaikiType(this)
function collapseSetKansaikiType(obj)
{
    // classNum = .toggle()する要素のclassの数字部分を抜き出す
    var classNum = pickNumber($(obj).attr("class"), false);
    // hideLocation = .hide()する場所
    var hideLocation = $("[class^=setKansaikiType_]:visible");
    // toggleLocation = .toggle()する場所
    var toggleLocation = $("#collapseSetKansaiki" + classNum).children("[class^=setKansaikiType_]");
    //console.log(" collapseSetKansaikiType:" + $(obj).attr("class") + ", classNum:" + classNum);
/* OnsenUI1.0
    if(hideLocation.length == 0 || $(obj).css("background-color") == "rgb(128, 128, 128)")
    {
        toggleLocation.toggle("fast");
    }
*/
    if(hideLocation.length == 0)
    {
        toggleLocation.toggle("fast");
    }

}

//collapseSetKansaiki(this)
function collapseSetKansaiki(obj)
{
    // classNum = .toggle()する要素のclassの数字部分を抜き出す
    var classNum = pickNumber($(obj).parent().attr("class"), false);
    // hideLocation = .hide()する場所
    var hideLocation = $("[class^=setKansaiki_]:visible");
    // toggleLocation = .toggle()する場所
    var toggleLocation = $(obj).siblings("div[class^=setKansaiki_]");
    //console.log("  collapseSetKansaiki:" + $(obj).text() + ", classNum:" + classNum);

    if(hideLocation.length > 0 && toggleLocation.is(":visible") == false)
    {
        hideLocation.hide("fast");
    }
    toggleLocation.toggle("fast");
}

//collapseSetKansaikiMastery(this)
function collapseSetKansaikiMastery(obj)
{
    // idNum = .toggle()する要素のidの数字部分を抜き出す
    var idNum = pickNumber($(obj).parents("[id^=collapseSetKansaiki]").attr("id"), false);
    // classNum = .toggle()する要素のclassの数字部分を抜き出す
    var classNum = pickNumber($(obj).parents("[class^=setKansaiki_]").attr("class"), false);
    // index = あやしい！
    var index = $(obj).index("#collapseSetKansaiki" + idNum + " .setKansaiki_" + classNum +  " > ons-list-item");
    // hideLocation = .hide()する場所
    var hideLocation = $("[class^=setKansaikiMastery_]:visible");
    // toggleLocation = .toggle()する場所
    var toggleLocation = $(obj).siblings("div[class^=setKansaikiMastery_]").eq(index);
    //console.log("   collapseSetKansaikiMastery:" + $(obj).text() + ", classNum:" + classNum + ", index:" + index);

    if(hideLocation.length > 0 && toggleLocation.is(":visible") == false)
    {
        hideLocation.hide("fast");
    }
    toggleLocation.toggle("fast");
}

//putKanmusuText(オブジェクト(艦名))
function putKanmusuText(obj)
{
    //idNum = 何番艦か
    var idNum = pickNumber($(obj).parents("[id^=collapseSetKanmusu]").attr("id"), false);
    //putLocation = 艦名の配置場所
    var putLocation = $("#putKanmusu" + idNum);
    var updateType = pickNumber($(obj).parents("[class^=setKanmusuType]").attr("class"), false);
    var updateIndex = $(obj).index();
    var updateOrder = pickNumber($(obj).parents("[id^=collapseSetKanmusu]").attr("id"), false);
    console.log("   putKanmusuText:" + $(obj).parent().attr("class") + ", putLocation:" + putLocation.attr("id") + 
                ", .text():" + $(obj).text() + ", idNum:" + idNum);

    updateKanmusu(updateType, updateIndex, updateOrder);
    updateFleet();

    //艦娘を設定し終わったので閉じる
    $("[id^=collapseSetKanmusu]:visible").hide("fast");
    $("[class^=setKanmusu_]:visible").hide("fast");

    //艦載機の設定を表示する
    collapseSetKansaikiSlot($(obj).parents("[id^=collapseSetKanmusu]"));
}

//putKansaikiText(オブジェクト(何番艦か))
function putKansaikiText(obj)
{
    // updateType = 機種
    var updateType = pickNumber($(obj).parents("[class^=setKansaikiType_]").attr("class"), false);
    // updateIndex = 選択した機種名がリストの何番目にあるか取得する
    var updateIndex = $(obj).parent().index("[class^=setKansaiki_]:visible > div");
    // kansaiki = 機種名
    var kansaiki = $(obj).parent().siblings("ons-list-item").eq(updateIndex).text();
    // updatePlus = +の数
    var updatePlus = 0;
    // updateMastery = 艦載機熟練度
    var updateMastery = $(obj).index();
    // updateOrderY = 何番艦の艦載機を指定しようとしているか取得する
    var updateOrderY = pickNumber($(obj).parents("[id^=collapseSetKansaiki]:visible").attr("id"), false);
    // updateOrderX = 何番機を指定しようとしているか取得する
    /* OnsenUI1.0
    var updateOrderX = pickNumber($(".setKansaiki" + updateOrderY + "[style='background-color: gray;']").text(), false) - 1;
    */
    var updateOrderX = pickNumber($("input:checked:visible").attr("id").slice(-1), false);
    console.log("    putKansaikiText:Kansaiki = " + kansaiki + ", Plus = " + updatePlus + ", Mastery = " + updateMastery + 
                ", orderY = " + updateOrderY + ", orderX = " + updateOrderX + ", index = " + updateIndex);

    // putLocation = 機種名、熟練度を書き込む場所(.detailKansaiki)
    var putLocation = $(".detailKansaiki" + updateOrderY).eq(updateOrderX);
    updateKansaiki(updateType, updateIndex, updatePlus, updateMastery, updateOrderX, updateOrderY);
    updateFleet();
}

//configFleet()
//艦娘、艦載機の配置を管理する。
function configFleet()
{
    //arrayKanmusuConfig = 艦娘の艦種とindex(どちらも添字)を格納する
    var arrayKanmusuConfig = 
    {
        "Type":
        {
            "1st":-1, "2nd":-1, "3rd":-1, "4th":-1, "5th":-1, "6th":-1
        },
        "Index":
        {
            "1st":-1, "2nd":-1, "3rd":-1, "4th":-1, "5th":-1, "6th":-1
        }
    };
    //arrayKansaikiConfig = 各艦の艦載機の機種、index、改修値、熟練度(すべて添字)を格納する
    var arrayKansaikiConfig = 
    {
        "Type":
        {
            "1st":[-1, -1, -1, -1], "2nd":[-1, -1, -1, -1], "3rd":[-1, -1, -1, -1], 
            "4th":[-1, -1, -1, -1], "5th":[-1, -1, -1, -1], "6th":[-1, -1, -1, -1]
        },
        "Index":
        {
            "1st":[-1, -1, -1, -1], "2nd":[-1, -1, -1, -1], "3rd":[-1, -1, -1, -1], 
            "4th":[-1, -1, -1, -1], "5th":[-1, -1, -1, -1], "6th":[-1, -1, -1, -1]
        },
        "Plus":
        {
            "1st":[-1, -1, -1, -1], "2nd":[-1, -1, -1, -1], "3rd":[-1, -1, -1, -1], 
            "4th":[-1, -1, -1, -1], "5th":[-1, -1, -1, -1], "6th":[-1, -1, -1, -1]
        },
        "Mastery":
        {
            "1st":[-1, -1, -1, -1], "2nd":[-1, -1, -1, -1], "3rd":[-1, -1, -1, -1], 
            "4th":[-1, -1, -1, -1], "5th":[-1, -1, -1, -1], "6th":[-1, -1, -1, -1]
        }
    };
    //arraySeikuConfig = スロットごとの制空値(実数)を格納する
    var arraySeikuConfig = 
    {
        "1st":[0, 0, 0, 0], "2nd":[0, 0, 0, 0], "3rd":[0, 0, 0, 0], 
        "4th":[0, 0, 0, 0], "5th":[0, 0, 0, 0], "6th":[0, 0, 0, 0]
    };

    //updateKanmusu(艦種、艦種のindex、何番艦か)
    //クロージャ。
    updateKanmusu = function(type, index, order)
    {
        console.log("updateKanmusuConfig:type = " + type + ", index = " + index + ", order = " + order);
        var Order = generalOrder[order];

        arrayKanmusuConfig.Type[Order] = type;
        arrayKanmusuConfig.Index[Order] = index;
    };

    //updateKansaiki(機種、機種のindex、改修値、熟練度、何番艦か)
    //クロージャ。
    updateKansaiki = function(type, index, plus, mastery, orderX, Y)
    {
        console.log("updateKansaikiConfig:type = " + type + ", index = " + index + ", plus = " + plus + 
                    ", mastery = " + mastery + ", orderX = " + orderX + ", orderY = " + Y);
        var orderY = generalOrder[Y];

        arrayKansaikiConfig.Type[orderY][orderX] = type;
        arrayKansaikiConfig.Index[orderY][orderX] = index;
        arrayKansaikiConfig.Plus[orderY][orderX] = plus;
        arrayKansaikiConfig.Mastery[orderY][orderX] = mastery;
    };
    //updateFleet()
    //艦名、機種名の表示を更新する。
    //クロージャ。
    updateFleet = function()
    {
        var i, j, Order;
        var configKanmusuType, updateKanmusuName;
        var configKansaikiType, updateSlot, updateKansaikiName, updatePlus, updateMastery;

        for(i = 0; i < 6; i++)
        {
            Order = generalOrder[i];

            //艦名を表示する
            if(arrayKanmusuConfig.Type[Order] != -1)
            {
                configKanmusuType = arrayKansaiki["リスト"]["艦種"][arrayKanmusuConfig.Type[Order]];
                updateKanmusuName = arrayKansaiki["リスト"]["艦娘"][configKanmusuType][arrayKanmusuConfig.Index[Order]];
                $("#putKanmusu" + i).text(updateKanmusuName);
            }

            for(j = 0; j < 4; j++)
            {
                //スロットごとの搭載数を表示する
                if(arrayKanmusuConfig.Type[Order] != -1){
                    updateSlot = arrayKansaiki["艦娘"][configKanmusuType][updateKanmusuName]["スロット" + (j + 1)];
                    console.log(" updateFleet:Slot = " + updateSlot);

                    $(".detailKansaiki" + i + ":eq(" + j + ") .alignKansaikiSlot").html(updateSlot);
                }

                //機種名、改修値、熟練度を表示する
                if(arrayKansaikiConfig.Type[Order][j] != -1)
                {
                    configKansaikiType = arrayKansaiki["リスト"]["機種"][arrayKansaikiConfig.Type[Order][j]];
                    updateKansaikiName = arrayKansaiki["リスト"]["艦載機"][configKansaikiType][arrayKansaikiConfig.Index[Order][j]];
                    updatePlus = "★" + arrayKansaikiConfig.Plus[Order][j];
                    updateMastery = arrayKansaiki["リスト"]["熟練度"][arrayKansaikiConfig.Mastery[Order][j]];
                    console.log(" updateFleet:Name = " + updateKansaikiName + ", Plus = " + updatePlus + ", Mastery = " + updateMastery);
    
                    $(".detailKansaiki" + i + ":eq(" + j + ") .alignKansaikiName").html(updateKansaikiName);
                    $(".detailKansaiki" + i + ":eq(" + j + ") .alignKansaikiPlus").html(updatePlus);
                    $(".detailKansaiki" + i + ":eq(" + j + ") .alignKansaikiMastery").html(updateMastery);
                }
            }
        }
        calculateSeiku();
    };

    //calculateSeiku(更新する艦載機の位置, 更新する艦娘の位置)
    //制空値を更新する。なお、制空状態に関係するのは対空値を持つ艦戦、艦攻、艦爆、水爆のみ。
    //計算式：制空値 = [(艦載機の対空値) × √(搭載数)] + √(内部熟練度/10) + 制空ボーナス(艦戦/水戦/水爆のみ)
    //クロージャ。
    calculateSeiku = function()
    {
        var y, x, orderY;
        var tmpSeiku = 0;
        var paramAA;
        var paramSlot;
        var indivisualAABonus;
        var masteryAABonus = [0, 10, 25, 40, 55, 70, 85, 100];

        for(y = 0; y < 6; y++)
        {
            for(x = 0; x < 4; x++)
            {
                orderY = generalOrder[y];
                if(arrayKansaikiConfig.Type[orderY][x] != -1 && arrayKanmusuConfig.Type[orderY] != -1)
                {
                    configKansaikiType = arrayKansaiki["リスト"]["機種"][arrayKansaikiConfig.Type[orderY][x]];
                    kansaikiName = arrayKansaiki["リスト"]["艦載機"][configKansaikiType][arrayKansaikiConfig.Index[orderY][x]];
                    configKanmusuType = arrayKansaiki["リスト"]["艦種"][arrayKanmusuConfig.Type[orderY]];
                    kanmusuName = arrayKansaiki["リスト"]["艦娘"][configKanmusuType][arrayKanmusuConfig.Index[orderY]];

                    //paramAA = arrayKansaikiTable[arrayKansaikiConfig.Type[orderY][x]][arrayKansaikiConfig.Index[orderY][x]][1];
                    paramAA = arrayKansaiki["艦載機"][configKansaikiType][kansaikiName]["対空"];
                    //paramSlot = arrayKansaikiKanmusuTable[arrayKanmusuConfig.Type[orderY]][arrayKanmusuConfig.Index[orderY]][x + 1];
                    paramSlot = arrayKansaiki["艦娘"][configKanmusuType][kanmusuName]["スロット" + (x + 1)];

                    //制空ボーナスの設定。艦戦/水戦/水爆のみ対象。
                    if(arrayKansaikiConfig.Type[orderY][x] == $.inArray("艦上戦闘機", arrayKansaiki["リスト"]["機種"]))
                    {
                        indivisualAABonus = [0, 0, 2, 5, 9, 14, 14, 22];
                    }
                    else if(arrayKansaikiConfig.Type[orderY][x] == $.inArray("水上戦闘機", arrayKansaiki["リスト"]["機種"]))
                    {
                        indivisualAABonus = [0, 0, 2, 5, 9, 14, 14, 22];
                    }
                    else if(arrayKansaikiConfig.Type[orderY][x] == $.inArray("水上爆撃機", arrayKansaiki["リスト"]["機種"]))
                    {
                        indivisualAABonus = [0, 0, 1, 1, 1, 3, 3, 6];
                    }
                    else
                    {
                        indivisualAABonus = [0, 0, 0, 0, 0, 0, 0, 0];
                    }

                    //制空値を計算する。
                    arraySeikuConfig[orderY][x] = paramAA * Math.sqrt(paramSlot) + 
                                                  Math.sqrt(masteryAABonus[arrayKansaikiConfig.Mastery[orderY][x]] / 10) + 
                                                  indivisualAABonus[arrayKansaikiConfig.Mastery[orderY][x]];
                    console.log("  calculateSeiku:arraySeikuConfig[" + y + "][" + x + "] = " + 
                                paramAA + " * Math.sqrt(" + paramSlot + ") + " + 
                                "Math.sqrt(" + masteryAABonus[arrayKansaikiConfig.Mastery[orderY][x]] + "/ 10) + " + 
                                indivisualAABonus[arrayKansaikiConfig.Mastery[orderY][x]] + " = " + arraySeikuConfig[orderY][x]);

                    tmpSeiku += arraySeikuConfig[orderY][x];
                }
            }
        }
        $(".calcSeiku").html(tmpSeiku);
    };
}
