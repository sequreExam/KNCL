// 改修ページ用やで(*'v'*)
function func_pageKaishu()
{
    var tabKaishu = document.getElementById("tabKaishu");

    //曜日を取得する
    var indexDate = new Date().getDay();

    //月曜日(1)から始めたいのでごにょごにょ
    indexDate = (indexDate + 6) % 7;
    console.log(" indexDate:" + indexDate);

    //prechange時に発火
    tabKaishu.addEventListener("prechange", function()
    {
        //console.log(" tabKaishu:prechange");
    }, false);

    //postchange時に発火
    tabKaishu.addEventListener("postchange", function()
    {
        //console.log(" tabKaishu:postchange");
    }, false);

    //reactive時に発火
    tabKaishu.addEventListener("reactive", function()
    {
        //console.log(" tabKaishu:reactive");
    }, false);

    tabKaishu.setActiveTab(indexDate);
    return indexDate;
}

function func_pageKaishuDay(indexDate)
{
    var day, loadingDayIndex, loadingIdIndex;

    var DOM ="";

    //ons-list-header用
    var i;
    var elm_i = arrayKaishu["リスト"]["分類"];
    var elm_i_Length = elm_i.length;
    var DOMListHeader;

    //ons-list-item用
    var j;
    var elm_j;
    var elm_j_Length;
    var DOMListItem;

    var DOMOnsListItem = "onclick='func_DialogKaishu(this);' modifier='tappable'";
    var DOMOnsRow = "vertical-align='center'";
    var DOMOnsColWidth = "width='75%'";
    var DOMDivClass = ["class='Kaishu_Soubi'", "class='Kaishu_Nibankan'"];

    var k, targetNibankan, targetNibankan_Length, tmpNibankanText;

    //ここから改修ページコンテンツのロード
    for(day = 0; day < arrayDayId_Length; day++)
    {
        //今日の曜日のページを一番に更新したい
        loadingDayIndex = (day + indexDate) % 7;
        loadingIdIndex = "#pageKaishu_" + arrayDayId[loadingDayIndex];
        //console.log("  loading... " + loadingIdIndex);

        //追加するDOMをリセット
        DOM = "";

        //武器種の数だけ繰り返し
        for(i = 0; i < elm_i_Length; i++)
        {
            DOMListHeader = generateDOM("ons-list-header", "start");
                DOMListHeader += elm_i[i];
            DOMListHeader += generateDOM("ons-list-header", "end");

            DOM += DOMListHeader;

            //その武器種の武器の数だけ繰り返し
            elm_j = arrayKaishu["リスト"]["装備名"][elm_i[i]];
            elm_j_Length = elm_j.length;
            for(j = 0; j < elm_j_Length; j++)
            {
                targetNibankan = arrayKaishu[elm_i[i]][elm_j[j]][arrayDay[loadingDayIndex]];
                targetNibankan_Length = targetNibankan.length;
                if(targetNibankan != -1)
                {
                    if(targetNibankan_Length > 1)
                    {
                        for(k = 0, tmpNibankanText = ""; k < targetNibankan_Length; k++)
                        {
                            tmpNibankanText += targetNibankan[k];
                            if(k < targetNibankan_Length)
                            {
                                tmpNibankanText += "<br />";
                            }
                        }
                        //console.log(tmpNibankanText);
                    }
                    else
                    {
                        tmpNibankanText = targetNibankan;
                    }
                    DOMListItem = generateDOM("ons-list-item", "start", DOMOnsListItem);
                        DOMListItem += generateDOM("ons-row", "start", DOMOnsRow);
                            DOMListItem += generateDOM("ons-col", "start", DOMOnsColWidth);
                                DOMListItem += generateDOM("div", "start", DOMDivClass[0]);
                                    DOMListItem += elm_j[j];
                                DOMListItem += generateDOM("div", "end");
                            DOMListItem += generateDOM("ons-col", "end");
                            DOMListItem += generateDOM("ons-col", "start");
                                DOMListItem += generateDOM("div", "start", DOMDivClass[1]);
                                    DOMListItem += tmpNibankanText;
                                DOMListItem += generateDOM("div", "end");
                            DOMListItem += generateDOM("ons-col", "end");
                        DOMListItem += generateDOM("ons-row", "end");
                    DOMListItem += generateDOM("ons-list-item", "end");

                    DOM += DOMListItem;
                }
            }
        }
        $("#Kaishu_" + arrayDayId[loadingDayIndex] + "_Main").append(DOM);
    }
}

// アラートダイアログで改修の詳細を表示する
function func_DialogKaishu(obj)
{
    var i;
    var elm_i = arrayKaishu["リスト"]["分類"];
    var elm_i_Length = elm_i.length;
    var elm_j;
    var returnInArray;
    var sourceLiteral;
    var tmpKaishuName = $(obj).find(".Kaishu_Soubi").text();

    //console.log("tmpKaishuName: " + tmpKaishuName);

    for(i = 0; i < elm_i_Length; i++)
    {
        elm_j = arrayKaishu["リスト"]["装備名"][elm_i[i]];
        returnInArray = $.inArray(tmpKaishuName, elm_j);
        if(returnInArray != -1)
        {
            //console.log("arrayKaishu[" + elm_i + "[" + i + "]][" + tmpKaishuName + "]");
            sourceLiteral = arrayKaishu[elm_i[i]][tmpKaishuName];
            break;
        }
    }

/*
    console.log("sourceLiteral = ");
    console.log(sourceLiteral);
*/

    $("#Kaishu_Alert").find("[class ^= Alert_Kaishu_Group]").css("display", "block");
    $(".Alert_Kaishu_Name").html(tmpKaishuName);
    $(".Alert_Kaishu_ConsumeFuel").html(sourceLiteral["燃"]);
    $(".Alert_Kaishu_ConsumeAmmo").html(sourceLiteral["弾"]);
    $(".Alert_Kaishu_ConsumeSteel").html(sourceLiteral["鋼"]);
    $(".Alert_Kaishu_ConsumeBauxite").html(sourceLiteral["ボ"]);
    $(".Alert_Kaishu_DevelopNum0").html(sourceLiteral["☆0"]["開発"][0]);
    $(".Alert_Kaishu_Develop100Num0").html(sourceLiteral["☆0"]["開発"][1]);
    $(".Alert_Kaishu_ImproveNum0").html(sourceLiteral["☆0"]["改修"][0]);
    $(".Alert_Kaishu_Improve100Num0").html(sourceLiteral["☆0"]["改修"][1]);
    $(".Alert_Kaishu_ConsumeEquip0").html(sourceLiteral["☆0"]["装備"]);
    $(".Alert_Kaishu_EquipNum0").html(sourceLiteral["☆0"]["装備名"]);
    $(".Alert_Kaishu_DevelopNum6").html(sourceLiteral["☆6"]["開発"][0]);
    $(".Alert_Kaishu_Develop100Num6").html(sourceLiteral["☆6"]["開発"][1]);
    $(".Alert_Kaishu_ImproveNum6").html(sourceLiteral["☆6"]["改修"][0]);
    $(".Alert_Kaishu_Improve100Num6").html(sourceLiteral["☆6"]["改修"][1]);
    $(".Alert_Kaishu_ConsumeEquip6").html(sourceLiteral["☆6"]["装備"]);
    $(".Alert_Kaishu_EquipNum6").html(sourceLiteral["☆6"]["装備名"]);
    $(".Alert_Kaishu_DevelopNum10").html(sourceLiteral["☆10"]["開発"][0]);
    $(".Alert_Kaishu_Develop100Num10").html(sourceLiteral["☆10"]["開発"][1]);
    $(".Alert_Kaishu_ImproveNum10").html(sourceLiteral["☆10"]["改修"][0]);
    $(".Alert_Kaishu_Improve100Num10").html(sourceLiteral["☆10"]["改修"][1]);
    $(".Alert_Kaishu_ConsumeEquip10").html(sourceLiteral["☆10"]["装備"]);
    $(".Alert_Kaishu_EquipNum10").html(sourceLiteral["☆10"]["装備名"]);
    $(".Alert_Kaishu_NextEquip").html(sourceLiteral["☆10"]["次"]);
    $(".Alert_Kaishu_Monday").html(sourceLiteral["月"]);
    $(".Alert_Kaishu_Tuesday").html(sourceLiteral["火"]);
    $(".Alert_Kaishu_Wednesday").html(sourceLiteral["水"]);
    $(".Alert_Kaishu_Thursday").html(sourceLiteral["木"]);
    $(".Alert_Kaishu_Friday").html(sourceLiteral["金"]);
    $(".Alert_Kaishu_Saturday").html(sourceLiteral["土"]);
    $(".Alert_Kaishu_Sunday").html(sourceLiteral["日"]);

    if($(".Alert_Kaishu_NextEquip").text() == "-")
    {
        //console.log("  func_DialogKaishu: hide Alert_Kaishu_Group_10");
        $(".Alert_Kaishu_Group_10").css("display", "none");
    }
    $("#Kaishu_Alert").show("fast");
}
