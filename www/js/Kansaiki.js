// 艦載機ページ用やで(*'v'*)
function func_pageKansaiki()
{
    var i, j, elm_i, elm_j;

    $.each(arrayKansaiki["リスト"]["艦種"], function(i, elm_i)
    {
        //console.log(" i=" + i + ":.setKanmusuType: elm_i = " + elm_i);

        //コピー元に通し番号を追加して.Kansaiki_Templateに追加する
        $(".setKanmusuType_Origin").clone(true)
            .removeAttr("class")
            .addClass("setKanmusuType_" + i)
            .appendTo(".Kansaiki_Template_Kanmusu");
        $(".setKanmusuTypeNode_Origin").children().clone(true)
            .appendTo(".setKanmusuType_" + i);

        //appendしたons-list-itemに艦種を挿入する
        $(".setKanmusuType_" + i).children()
            .html(elm_i);

        //コピー元に通し番号を追加して.setKanmusuTypeに追加する
        $(".setKanmusu_Origin").clone(true)
            .removeAttr("class")
            .addClass("setKanmusu_" + i)
            .appendTo(".setKanmusuType_" + i);

        $.each(arrayKansaiki["リスト"]["艦娘"][elm_i], function(j, elm_j)
        {
            //console.log("  j=" + j + ":.setKanmusu: elm_j[0] = " + elm_j[0]);

            $(".setKanmusuNode_Origin").children().clone(true)
                .appendTo(".setKanmusu_" + i);
            //appendしたons-list-itemに艦名を挿入する
            $(".setKanmusu_" + i).children().eq(j)
                .html(elm_j);
        });
    });

    //setKansaikiMasteryの下準備
    $(".setKansaikiMastery_Origin").clone(true)
        .removeAttr("class")
        .addClass("setKansaikiMastery_array")
        .appendTo(".Kansaiki_Template_Kansaiki");

    $.each(arrayKansaiki["リスト"]["熟練度"], function(i, elm_i)
    {
        //console.log(" i=" + i + ":.setKansaikiMastery: elm_i = " + elm_i);
        $(".setKansaikiMasteryNode_Origin").children().clone(true)
            .appendTo(".setKansaikiMastery_array");
        //上でappendしたons-list-itemに熟練度を挿入する
        $(".setKansaikiMastery_array").children().eq(i)
            .html("+" + i + " " + elm_i);
    });

    $.each(arrayKansaiki["リスト"]["機種"], function(i, elm_i)
    {
        //console.log(" i=" + i + ":.setKansaikiType: elm_i = " + elm_i);

        //コピー元に通し番号を追加して#collapseSetKansaikiに追加する
        $(".setKansaikiType_Origin").clone(true)
            .removeAttr("class")
            .addClass("setKansaikiType_" + i)
            .appendTo(".Kansaiki_Template_Kansaiki");
        $(".setKansaikiTypeNode_Origin").children().clone(true)
            .appendTo(".setKansaikiType_" + i);

        //上でappendしたons-list-itemに機種を挿入する
        $(".setKansaikiType_" + i).children()
            .html(elm_i);

        //コピー元に通し番号を追加して.setKansaikiTypeに追加する
        $(".setKansaiki_Origin").clone(true)
            .removeAttr("class")
            .addClass("setKansaiki_" + i)
            .appendTo(".setKansaikiType_" + i);

        $.each(arrayKansaiki["リスト"]["艦載機"][elm_i], function(j, elm_j)
        {
            //console.log("  j=" + j + ":.setKansaiki: elm_j[0] = " + elm_j[0]);
            $(".setKansaikiNode_Origin").children().clone(true)
                .appendTo(".setKansaiki_" + i);

            //上でappendしたons-list-itemに機種名を挿入する
            $(".setKansaiki_" + i).children().eq(j)
                .html(elm_j);
        });

        //setKansaikiMasteryの挿入
        $.each(arrayKansaiki["リスト"]["艦載機"][elm_i], function(j, elm_j)
        {
            //console.log("  j=" + j + ":.setKansaikiMastery_array);

            $(".setKansaikiMastery_array").clone(true)
                .removeAttr("class")
                .addClass("setKansaikiMastery_" + i)
                .insertAfter(".setKansaiki_" + i + " > ons-list-item:eq(" + j + ")");
        });
    });

    //コピー元を削除する
    $("#Kansaiki_origin").remove();
    $(".setKansaikiMastery_array").remove();

    // idがsetKansaikiで始まる要素の数(6)だけ繰り返し
    for(i = 0; i < $("[id^='collapseSetKanmusu']").length; i++)
    {
        $(".Kansaiki_Template_Kanmusu").children().clone(true)
            .appendTo("#collapseSetKanmusu" + i);
        $(".Kansaiki_Template_Kansaiki").children().clone(true)
            .appendTo("#collapseSetKansaiki" + i);
    }
    //コピー元を削除する
    $(".Kansaiki_Template_Kanmusu").remove();
    $(".Kansaiki_Template_Kansaiki").remove();
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
    var hideLocation = $("[class^=setKanmusu_]:visible");
    // toggleLocation = .toggle()する場所
    var toggleLocation = $(obj).siblings("div[class^=setKanmusu_]");
    //console.log("  collapseSetKanmusu:" + $(obj).text() + ", idNum:" + idNum);

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
    var updateOrderX = pickNumber($("input:checked:visible").attr("id").slice(-1), false) - 1;
    console.log("    putKansaikiText:Kansaiki = " + kansaiki + ", Plus = " + updatePlus + ", Mastery = " + updateMastery + 
                ", orderY = " + updateOrderY + ", orderX = " + updateOrderX + ", index = " + updateIndex);

    // putLocation = 機種名、熟練度を書き込む場所(.detailKansaiki)
    var putLocation = $(".detailKansaiki" + updateOrderY).eq(updateOrderX);
    updateKansaiki(updateType, updateIndex, updatePlus, updateMastery, updateOrderX, updateOrderY);
    updateFleet();
}

//highLightMe(オブジェクト(選択したons-list-item))
function highLightMe(obj)
{
    var targetCss = $(obj).css("background-color");

    //console.log(getProperties($(obj).parent("ons-row").children().childre(), "tagName"));

    //まだ何も選んでないとき、もしくはsetKansaikiを閉じた後のとき、
    //選択したsetKansaikiをグレーにし、それ以外をホワイトにする
    //background-colorの初期状態はrgba(0, 0, 0, 0)、whiteを設定した時はrgb(255, 255, 255)になる。
    if(targetCss == "rgba(0, 0, 0, 0)" || targetCss == "rgb(255, 255, 255)")
    {
        $(obj).parents("ons-row").children("ons-col").children("ons-list-item").css("background-color","white");
        $(obj).css("background-color","gray");
        //console.log("  highLightMe(grayed):" + $(obj).attr("class"));
    }

    //選択したsetKansaikiが選択中(グレー)のとき、
    //選択したsetKansaikiをホワイトにする
    //grayを設定した時はrgb(128, 128, 128)になる。
    else if(targetCss == "rgb(128, 128, 128)")
    {
        $(obj).css("background-color","white");
        //console.log("  highLightMe(whitened):" + $(obj).attr("class"));
    }
    //ふだんここを通ることはないはず。
    else
    {
        console.log("  highLightMe(no colorized):" + $(obj).attr("class") + ", " + $(obj).css("background-color"));
    }
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

//pickNumber(str, minus)
//文字列から数値のみ抜き出す。
//マイナスも含めて値を取得したい時は第2引数をtrueにする。
function pickNumber(str, minus)
{
    var array;
    console.log("pickNumber(" + str + ", " + minus + "): ");

    //-が欲しい場合
    if(minus == true)
    {
        array = str.match(/-?[0-9]+\.?[0-9]*/g);
    }
    //-がいらない場合
    else
    {
        array = str.match(/[0-9]+\.?[0-9]*/g);
    }

    for(var i = 0; i < array.length; i++)
    {
        console.log(" " + parseFloat(array[i]));
    }

    return array[0];
}

//paddingLeft(対象文字列, 埋める文字, 桁数)
//指定桁数まで、指定文字で左埋めする。
function paddingleft(val, char, n)
{
    var leftval = "";
    //ひとまず指定文字を指定文字数用意する。
	for(; leftval.length < n; leftval += char);
    //対象文字列と埋める文字を合成し、右から指定文字数で.slice()する。
	return (leftval + val).slice(-n);
}
