// 遠征ページ用やで(*'v'*)
function func_pageEnsei()
{
    var i, j, elm_i, elm_j;
    var targetEnseiName, targetEnseiFlagshipLv, targetEnseiMinNum, targetEnseiNecessary;
    var setEnseiPointer = 0;

    $.each(arrayEnsei["リスト"]["海域"], function(i, elm_i)
    {
        //.Ensei_Headerに通し番号を追加して.Ensei_Cloneに追加する
        $(".Ensei_Header").clone(true)
        .removeClass("Ensei_Header")
        .addClass("Ensei_Header_" + i)
        .appendTo(".Ensei_Clone");

        //ons-list-headerに海域名を挿入する
        $(".Ensei_Clone .Ensei_Area").eq(i).html(elm_i);

        $.each(arrayEnsei["リスト"]["遠征"][elm_i], function(j, elm_j)
        {
            //.Ensei_Listに通し番号を追加して.Ensei_Cloneに追加する
            $(".Ensei_List").clone(true)
            .removeClass("Ensei_List")
            .addClass("Ensei_List_" + j)
            .appendTo(".Ensei_Clone");

            //遠征名、旗艦Lv、最小隻数、必要艦種を挿入する
            targetEnseiName = ".Ensei_Header_" + i + " ~ .Ensei_List_" + j + " .Ensei_Name";
            targetEnseiFlagshipLv = ".Ensei_Header_" + i + " ~ .Ensei_List_" + j + " .Ensei_FlagshipLv";
            targetEnseiMinNum = ".Ensei_Header_" + i + " ~ .Ensei_List_" + j + " .Ensei_MinNum";
            targetEnseiNecessary = ".Ensei_Header_" + i + " ~ .Ensei_List_" + j + " .Ensei_Necessary";
            $(targetEnseiName).html(elm_j);
            $(targetEnseiFlagshipLv).html(arrayEnsei[elm_i][elm_j]["基本"]["旗艦Lv"]);
            $(targetEnseiMinNum).html(arrayEnsei[elm_i][elm_j]["基本"]["必要隻数"]);
            $(targetEnseiNecessary).html(arrayEnsei[elm_i][elm_j]["基本"]["必要艦種"]);
        });
    });
    //コピー元を消す
    $(".Ensei_origin").remove();
}

//showPopoverとfunc_pagePopoverEnseiを同時に呼びつつ、func_～～にobjを渡したかったんやで(*'v'*)
function preparePopoverEnsei(obj, bePopoveredPage, bePopoveredPageVar)
{
    showPopover(obj, bePopoveredPage, bePopoveredPageVar);
    $('#pagepopover_Ensei').load(func_pagePopoverEnsei(obj));
}

function func_DialogEnsei(obj)
{
    var i, elm_i;
    var sourceLiteral, sourceIndex;
    var tmpEnseiName = $(obj).find(".Ensei_Name").text();

    //console.log("$(obj).find(\".Ensei_Name\").text():" + tmpEnseiName);

    $.each(arrayEnsei["リスト"]["遠征"], function(i, elm_i)
    {
        //console.log(i + ", " + elm_i + $.inArray(tmpEnseiName, elm_i));

        if($.inArray(tmpEnseiName, elm_i) != -1)
        {
            sourceIndex = i;
            sourceLiteral = arrayEnsei[sourceIndex][tmpEnseiName];
            //return false になるとこの$.each()ループを中断する
            return false;
        }
    });

    //console.log("sourceLiteral = ");
    //console.log(sourceLiteral);
    //console.log("sourceIndex = " + sourceIndex);

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
