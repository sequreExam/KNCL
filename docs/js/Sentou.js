// 戦闘ページ用やで(*'v'*)
function func_pageSentou()
{
    var tabSentou = document.getElementById("tabSentou");

    //prechange時に発火
    tabSentou.addEventListener("prechange", function()
    {
        //console.log(" tabSentou:prechange");
    }, false);
    //postchange時に発火
    tabSentou.addEventListener("postchange", function()
    {
        //console.log(" tabSentou:postchange");
    }, false);
    //reactive時に発火
    tabSentou.addEventListener("reactive", function()
    {
        //console.log(" tabSentou:reactive");
    }, false);
    tabSentou.setActiveTab(1);
}

// 対空ページ用やで(*'v'*)
function func_pageSentou_AA()
{
    var DOM ="";

    //共通用
    var DOMOnsRow = "vertical-align='center'";
    var DOMOnsColWidth = "width='30%'";

    //ons-list-header用
    var i;
    var elm_i = arraySentouAA["リスト"];
    var elm_i_Length = elm_i.length;
    var DOMListHeader;

    var DOMListHeaderText = "撃墜数";

    //ons-list-item用
    var j;
    var elm_j;
    var elm_j_Length;
    var DOMListItem;

    var DOMDivClass = ["class='Sentou_AA_Equipment'", "class='Sentou_AA_ShootDown'"];

    //攻撃の種類の数だけ繰り返し
    for(i = 0; i < elm_i_Length; i++)
    {
        DOMListHeader = generateDOM("ons-list-header", "start");
            DOMListHeader += generateDOM("ons-row", "start", DOMOnsRow);
                DOMListHeader += generateDOM("ons-col", "start");
                    DOMListHeader += elm_i[i];
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth);
                    DOMListHeader += DOMListHeaderText;
                DOMListHeader += generateDOM("ons-col", "end");
            DOMListHeader += generateDOM("ons-row", "end");
        DOMListHeader += generateDOM("ons-list-header", "end");

        DOM += DOMListHeader;

        //その攻撃の種類の組み合わせの数だけ繰り返し
        elm_j = arraySentouAA[elm_i[i]]["組み合わせ"];
        elm_j_Length = elm_j.length;
        for(j = 0; j < elm_j_Length; j++)
        {
            DOMListItem = generateDOM("ons-list-item", "start");
                DOMListItem += generateDOM("ons-row", "start", DOMOnsRow);
                    DOMListItem += generateDOM("ons-col", "start");
                        DOMListItem += generateDOM("div", "start", DOMDivClass[0]);
                            DOMListItem += arraySentouAA[elm_i[i]]["組み合わせ"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[1]);
                            DOMListItem += arraySentouAA[elm_i[i]]["撃墜数"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                DOMListItem += generateDOM("ons-row", "end");
            DOMListItem += generateDOM("ons-list-item", "end");

            DOM += DOMListItem;
        }
    }
    $("#Sentou_AA_Main").append(DOM);
}

// 弾着ページ用やで(*'v'*)
function func_pageSentou_OF()
{
    var DOM ="";

    //共通用
    var DOMOnsRow = "vertical-align='center'";
    var DOMOnsColWidth = ["width='30%'", "width='12.5%'", "width='12.5%'", "width='12.5%'", "width='12.5%'", "width='20%'"];

    //ons-list-header用
    var i;
    var elm_i = arraySentouOF["リスト"];
    var elm_i_Length = elm_i.length;
    var DOMListHeader;

    var DOMListHeaderText = ["", "主砲", "副砲", "徹甲", "電探", "倍率"];

    //ons-list-item用
    var j;
    var elm_j;
    var elm_j_Length;
    var DOMListItem;

    var DOMDivClass = ["class='Sentou_OF_Empty'", "class='Sentou_OF_EquipmentA'",
                       "class='Sentou_OF_EquipmentB'", "class='Sentou_OF_EquipmentC'",
                       "class='Sentou_OF_EquipmentD'", "class='Sentou_OF_Correction'"];

    //攻撃の種類の数だけ繰り返し
    for(i = 0; i < elm_i_Length; i++)
    {
        DOMListHeader = generateDOM("ons-list-header", "start");
            DOMListHeader += generateDOM("ons-row", "start", DOMOnsRow);
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[0]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += elm_i[i];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[1]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[1];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[2]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[2];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[3]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[3];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[4]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[4];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[5]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[5];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
            DOMListHeader += generateDOM("ons-row", "end");
        DOMListHeader += generateDOM("ons-list-header", "end");

        DOM += DOMListHeader;

        //その攻撃の種類の組み合わせの数だけ繰り返し
        elm_j = arraySentouOF[elm_i[i]]["組み合わせ"]["主砲"];
        elm_j_Length = elm_j.length;
        for(j = 0; j < elm_j_Length; j++)
        {
            DOMListItem = generateDOM("ons-list-item", "start");
                DOMListItem += generateDOM("ons-row", "start", DOMOnsRow);
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[0]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[0]);
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[1]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[1]);
                            DOMListItem += arraySentouOF[elm_i[i]]["組み合わせ"]["主砲"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[2]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[2]);
                            DOMListItem += arraySentouOF[elm_i[i]]["組み合わせ"]["副砲"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[3]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[3]);
                            DOMListItem += arraySentouOF[elm_i[i]]["組み合わせ"]["徹甲"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[4]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[4]);
                            DOMListItem += arraySentouOF[elm_i[i]]["組み合わせ"]["電探"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[5]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[5]);
                            DOMListItem += arraySentouOF[elm_i[i]]["組み合わせ"]["倍率"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                DOMListItem += generateDOM("ons-row", "end");
            DOMListItem += generateDOM("ons-list-item", "end");

            DOM += DOMListItem;
        }
    }
    $("#Sentou_OF_Main").append(DOM);
}

// 夜戦ページ用やで(*'v'*)
function func_pageSentou_NC()
{
    var DOM = "";

    //共通用
    var DOMOnsRow = "vertical-align='center'";
    var DOMOnsColWidth = ["", "width='16.6%'", "width='16.6%'", "width='16.6%'", "width='20%'"];

    //ons-list-header用
    var i;
    var elm_i = arraySentouNC["リスト"];
    var elm_i_Length = elm_i.length;
    var DOMListHeader;

    var DOMListHeaderText = ["", "主砲", "副砲", "魚雷", "倍率"];

    //ons-list-item用
    var j;
    var elm_j;
    var elm_j_Length;
    var DOMListItem;

    var DOMDivClass = ["class='Sentou_NC_Empty'", "class='Sentou_NC_EquipmentA'", 
                       "class='Sentou_NC_EquipmentB'", "class='Sentou_NC_EquipmentC'",
                       "class='Sentou_NC_Correction'"];

    //攻撃の種類の数だけ繰り返し
    for(i = 0; i < elm_i_Length; i++)
    {
        DOMListHeader = generateDOM("ons-list-header", "start");
            DOMListHeader += generateDOM("ons-row", "start", DOMOnsRow);
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[0]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += elm_i[i];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[1]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[1];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[2]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[2];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[3]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[3];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
                DOMListHeader += generateDOM("ons-col", "start", DOMOnsColWidth[4]);
                    DOMListHeader += generateDOM("div", "start");
                        DOMListHeader += DOMListHeaderText[4];
                    DOMListHeader += generateDOM("div", "end");
                DOMListHeader += generateDOM("ons-col", "end");
            DOMListHeader += generateDOM("ons-row", "end");
        DOMListHeader += generateDOM("ons-list-header", "end");

        DOM += DOMListHeader;

        //その攻撃の種類の組み合わせの数だけ繰り返し
        elm_j = arraySentouNC[elm_i[i]]["組み合わせ"]["主砲"];
        elm_j_Length = elm_j.length;
        for(j = 0; j < elm_j_Length; j++)
        {
            DOMListItem = generateDOM("ons-list-item", "start");
                DOMListItem += generateDOM("ons-row", "start", DOMOnsRow);;
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[0]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[0]);
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[1]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[1]);
                            DOMListItem += arraySentouNC[elm_i[i]]["組み合わせ"]["主砲"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[2]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[2]);
                            DOMListItem += arraySentouNC[elm_i[i]]["組み合わせ"]["副砲"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[3]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[3]);
                            DOMListItem += arraySentouNC[elm_i[i]]["組み合わせ"]["魚雷"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                    DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth[4]);
                        DOMListItem += generateDOM("div", "start", DOMDivClass[4]);
                            DOMListItem += arraySentouNC[elm_i[i]]["組み合わせ"]["倍率"][j];
                        DOMListItem += generateDOM("div", "end");
                    DOMListItem += generateDOM("ons-col", "end");
                DOMListItem += generateDOM("ons-row", "end");
            DOMListItem += generateDOM("ons-list-item", "end");

            DOM += DOMListItem;
        }
    }
    $("#Sentou_NC_Main").append(DOM);
}
