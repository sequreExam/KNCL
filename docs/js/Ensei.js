// 遠征ページ用やで(*'v'*)
function func_pageEnsei()
{
    var DOM = "";

    //共通用
    var DOMOnsRow = "vertical-align='center'";
    var DOMOnsColWidth = ["width='50%'", "", "", "width='25%'"];

    //ons-list-header用
    var i;
    var elm_i = arrayEnsei["リスト"]["海域"];
    var elm_i_Length = elm_i.length;
    var DOMListHeader;

    var DOMListHeaderText = ["", "旗艦Lv", "隻数", "必須艦種"];

    //ons-list-item用
    var j;
    var elm_j;
    var elm_j_Length;
    var DOMListItem;

    var DOMOnsListItem = "modifier='tappable' onclick='func_DialogEnsei(this);'";
    var DOMOnsColClass = ["class='Ensei_Area' width='50%'", "class='Ensei_FlagshipLv'", 
                                "class='Ensei_MinNum'", "class='Ensei_Necessary' width='25%'"];

    //海域の数だけ繰り返し
    for(i = 0; i < elm_i_Length; i++)
    {
        DOMListHeader = generateDOM("ons-list-header", "start");
            DOMListHeader += generateDOM("ons-row", "start", DOMOnsRow);
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[0]);
                    DOMListHeader += elm_i[i];
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start");
                    DOMListHeader += DOMListHeaderText[1];
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start");
                    DOMListHeader += DOMListHeaderText[2];
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[3]);
                    DOMListHeader += DOMListHeaderText[3];
                DOMListHeader += generateDOM("ons-col", "end");
            DOMListHeader += generateDOM("ons-row", "end");
        DOMListHeader += generateDOM("ons-list-header", "end");

        DOM += DOMListHeader;

        //その海域の遠征の数だけ繰り返し
        elm_j = arrayEnsei["リスト"]["遠征"][elm_i[i]];
        elm_j_Length = elm_j.length;
        for(j = 0; j < elm_j_Length; j++)
        {
            DOMListItem = generateDOM("ons-list-item", "start", DOMOnsListItem);
                DOMListItem += generateDOM("ons-row", "start", DOMOnsRow);
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColClass[0]);
                        DOMListItem += elm_j[j];
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColClass[1]);
                        DOMListItem += arrayEnsei[elm_i[i]][elm_j[j]]["基本"]["旗艦Lv"];
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColClass[2]);
                        DOMListItem += arrayEnsei[elm_i[i]][elm_j[j]]["基本"]["必要隻数"];
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColClass[3]);
                        DOMListItem += arrayEnsei[elm_i[i]][elm_j[j]]["基本"]["必要艦種"];
                    DOMListItem += generateDOM("ons-col", "end");
                DOMListItem += generateDOM("ons-row", "end");
            DOMListItem += generateDOM("ons-list-item", "end");
            DOM += DOMListItem;
        }
    }
    $("#Ensei_Main").append(DOM);
}

// アラートダイアログで遠征の詳細を表示する
function func_DialogEnsei(obj)
{
    var i;
    var elm_i = arrayEnsei["リスト"]["海域"];
    var elm_i_Length = elm_i.length;
    var elm_j;
    var returnInArray;
    var sourceLiteral;
    var tmpEnseiName = $(obj).html();
    tmpEnseiName = $(tmpEnseiName).find("ons-col:first").text();

    //console.log("tmpEnseiName: " + tmpEnseiName);

    for(i = 0; i < elm_i_Length; i++)
    {
        elm_j = arrayEnsei["リスト"]["遠征"][elm_i[i]];
        returnInArray = $.inArray(tmpEnseiName, elm_j);
        if(returnInArray != -1)
        {
            //console.log("arrayEnsei[" + elm_i + "[" + i + "]][" + tmpEnseiName + "]");
            sourceLiteral = arrayEnsei[elm_i[i]][tmpEnseiName];
            break;
        }
    }

/*
    console.log("sourceLiteral = ");
    console.log(sourceLiteral);
*/

    $(".Alert_Ensei_Name").html(tmpEnseiName);
    $(".Alert_Ensei_FlagshipLv").html(sourceLiteral["基本"]["旗艦Lv"]);
    $(".Alert_Ensei_MinNum").html(sourceLiteral["基本"]["必要隻数"]);
    $(".Alert_Ensei_Necessary").html(sourceLiteral["基本"]["必要艦種"]);
    $(".Alert_Ensei_Necessary_Drum").html(sourceLiteral["基本"]["ドラム缶"]);
    $(".Alert_Ensei_Time").html(sourceLiteral["詳細"]["時間"]);
    $(".Alert_Ensei_AdmiralExp").html(sourceLiteral["詳細"]["提督経験値"]);
    $(".Alert_Ensei_KanmusuExp").html(sourceLiteral["詳細"]["艦娘経験値"]);
    $(".Alert_Ensei_Fuel").html(sourceLiteral["詳細"]["燃"]);
    $(".Alert_Ensei_Ammo").html(sourceLiteral["詳細"]["弾"]);
    $(".Alert_Ensei_Steel").html(sourceLiteral["詳細"]["鋼"]);
    $(".Alert_Ensei_Bauxite").html(sourceLiteral["詳細"]["ボ"]);
    $(".Alert_Ensei_Bonus1").html(sourceLiteral["詳細"]["報酬"][0]);
    $(".Alert_Ensei_Bonus2").html(sourceLiteral["詳細"]["報酬"][1]);
    $(".Alert_Ensei_ConsumeFuel").html(sourceLiteral["詳細"]["消費燃"]);
    $(".Alert_Ensei_ConsumeAmmo").html(sourceLiteral["詳細"]["消費弾"]);
    $('#Ensei_Alert').show("fast");
}
