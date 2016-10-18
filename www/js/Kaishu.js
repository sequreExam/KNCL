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
        console.log(" tabKaishu:prechange");
    }, false);

    //postchange時に発火
    tabKaishu.addEventListener("postchange", function()
    {
        console.log(" tabKaishu:postchange");
    }, false);

    //reactive時に発火
    tabKaishu.addEventListener("reactive", function()
    {
        console.log(" tabKaishu:reactive");
    }, false);

    //tabKaishu.loadPage("Kaishu_" + arrayDayId[indexDate] + ".html");
    tabKaishu.setActiveTab(indexDate);
    return indexDate;
}

function func_pageKaishuDay(indexDate)
{
    var i, j, k, elm_i, elm_j, day;
    var loadingDayIndex, loadingIdIndex;

    var targetNibankan;
    var tmpNibankanText = "";

    var targetKaishuHeader;
    var targetKaishuSoubi;
    var targetKaishuNibankan;

    //ここから改修ページコンテンツのロード
    for(day = 0; day < arrayDayId.length; day++)
    {
        //今日の曜日のページを一番に更新したい
        loadingDayIndex = (day + indexDate) % 7;
        loadingIdIndex = "#pageKaishu_" + arrayDayId[loadingDayIndex];
        console.log("  loading... " + loadingIdIndex);

        //ページ上部の表示を曜日ごとに変える
        $(loadingIdIndex + " ons-toolbar .center").text("改修工廠" + "(" + arrayDay[loadingDayIndex] + ")");

        $.each(arrayKaishu["リスト"]["分類"], function(i, elm_i)
        {
            //console.log(i + ":" + elm_i);

            //#Kaishu_Typeに通し番号を追加して.Ensei_Cloneに追加する
            $(loadingIdIndex + " .Kaishu_Origin .Kaishu_Type").clone(true)
                .removeClass("Kaishu_Type")
                .addClass("Kaishu_Type" + i)
                .appendTo(loadingIdIndex + " .Kaishu_Clone");
            //ons-list-headerに装備種別を挿入する
            $(loadingIdIndex + " .Kaishu_Origin .Kaishu_Header").clone(true)
                .removeClass("Kaishu_Header")
                .addClass("Kaishu_Header" + i)
                .appendTo(loadingIdIndex + " .Kaishu_Type" + i);

            targetKaishuHeader = loadingIdIndex + " .Kaishu_Header" + i + " > .Kaishu_Headercss";
            $(targetKaishuHeader).html(elm_i);

            $.each(arrayKaishu["リスト"]["装備名"][elm_i], function(j, elm_j)
            {
                targetNibankan = arrayKaishu[elm_i][elm_j][arrayDay[loadingDayIndex]];
                //console.log(" " + j + ":" + elm_j);
                //console.log(" " + j + ":" + targetNibankan);

                if(targetNibankan != -1)
                {
                    //#Kaishu_Listに通し番号を追加して.Ensei_Cloneに追加する
                    $(loadingIdIndex + " .Kaishu_Origin .Kaishu_List").clone(true)
                        .removeClass("Kaishu_List")
                        .addClass("Kaishu_List" + j)
                        .appendTo(loadingIdIndex + " .Kaishu_Type" + i);
                    //遠征名、旗艦Lv、最小隻数、必要艦種を挿入する
                    targetKaishuSoubi = loadingIdIndex + " .Kaishu_Type" + i + " > .Kaishu_List" + j + " .Kaishu_Soubi";
                    $(targetKaishuSoubi).html(elm_j);
                    //arrayKaishu["小口径主砲"]["12.7cm連装砲"]["月"] = "-"
                    if(targetNibankan.length > 1)
                    {
                        for(k = 0, tmpNibankanText = ""; k < targetNibankan.length; k++)
                        {
                            tmpNibankanText += targetNibankan[k];
                            if(k < targetNibankan.length)
                            {
                                tmpNibankanText += "<br />";
                            }
                        }
                        //console.log(tmpNibankanText);
                        targetKaishuNibankan = loadingIdIndex + " .Kaishu_Type" + i + " > .Kaishu_List" + j + " .Kaishu_Nibankan";
                        $(targetKaishuNibankan).html(tmpNibankanText);
                    }
                    else
                    {
                        targetKaishuNibankan = loadingIdIndex + " .Kaishu_Type" + i + " > .Kaishu_List" + j + " .Kaishu_Nibankan";
                        $(targetKaishuNibankan).html(targetNibankan);
                    }
                }
            });
        });
        $(loadingIdIndex + " .Kaishu_Origin").remove();
    }
}
/*
if($(loadingIdIndex + " .Kaishu_Origin .Kaishu_List")[0]){
}else{console.log("   doesntExist:" + loadingIdIndex + " .Kaishu_Origin .Kaishu_List");}
*/

function func_DialogKaishu(obj)
{
    var i, elm_i, j, ifCount = 0;
    var sourceLiteral, sourceIndex;
    var tmpKaishuName = $(obj).find(".Kaishu_Soubi").text();
    var tmpKaishuNibankan = $(obj).find(".Kaishu_Nibankan").html();
    console.log("$(obj).find(\".Kaishu_Nibankan\").html():" + tmpKaishuNibankan);
    tmpKaishuNibankan = tmpKaishuNibankan.split("<br>");
    var tmpKaishuNibankanlength = tmpKaishuNibankan.length;
    var indexdate = (new Date().getDay() + 6) % 7;

    console.log("$(obj).find(\".Kaishu_Soubi\").text():" + tmpKaishuName);
    console.log("$(obj).find(\".Kaishu_Nibankan\").html():" + tmpKaishuNibankan);

    $.each(arrayKaishu["リスト"]["装備名"], function(i, elm_i)
    {
        //console.log(i + ", " + elm_i + $.inArray(tmpKaishuName, elm_i));

        if($.inArray(tmpKaishuName, elm_i) != -1)
        {
            sourceIndex = i;
            sourceLiteral = arrayKaishu[sourceIndex][tmpKaishuName][arrayDay[indexdate]];
            for(j = 0; j < tmpKaishuNibankanlength; j++)
            {
                if($.inArray(tmpKaishuNibankan[j], sourceLiteral) != -1)
                {
                    console.log("tmpKaishuNibankan[" + j + "]:" +  tmpKaishuNibankan[j] + "== sourceLiteral[" + j + "]:" + sourceLiteral);
                    ifCount++;
                }
                
            }
            console.log(ifCount + ":" + tmpKaishuNibankanlength);
            //return false になるとこの$.each()ループを中断する
            if(ifCount == tmpKaishuNibankanlength)
            {
                sourceLiteral = arrayKaishu[sourceIndex][tmpKaishuName];
                return false;
            }
        }
    });

    console.log("sourceLiteral = ");
    console.log(sourceLiteral);
    console.log("sourceIndex = " + sourceIndex);

/*
            "12.7cm連装砲B型改二":{
                "燃":10, "弾":40, "鋼":70, "ボ":0, 
                 "☆0":{"開発":[2, 2], "改修":[2, 3], "装備": 0, "装備名": "-"},
                 "☆6":{"開発":[2, 3], "改修":[2, 4], "装備": 1, "装備名": "12.7cm連装砲B型改二"},
                "☆10":{"開発":[-1, -1], "改修":[-1, -1], "装備": -1, "装備名": "-", "次": "-"},
                "月":["夕立改二", "綾波改二"], 
                "火":["夕立改二", "綾波改二"], 
                "水":["夕立改二", "綾波改二"], 
                "木":[-1], 
                "金":[-1], 
                "土":[-1], 
                "日":[-1], 
            },
*/
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
    $(".Alert_Kaishu_Monday").html(sourceLiteral["月"]);
    $(".Alert_Kaishu_Tuesday").html(sourceLiteral["火"]);
    $(".Alert_Kaishu_Wednesday").html(sourceLiteral["水"]);
    $(".Alert_Kaishu_Thursday").html(sourceLiteral["木"]);
    $(".Alert_Kaishu_Friday").html(sourceLiteral["金"]);
    $(".Alert_Kaishu_Saturday").html(sourceLiteral["土"]);
    $(".Alert_Kaishu_Sunday").html(sourceLiteral["日"]);
    $('#Kaishu_Alert').show("fast");
}
