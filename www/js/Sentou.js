// 戦闘ページ用やで(*'v'*)
function func_pageSentou()
{
    var tabSentou = document.getElementById("tabSentou");

    //prechange時に発火
    tabSentou.addEventListener("prechange", function()
    {
        console.log(" tabSentou:prechange");
    }, false);
    //postchange時に発火
    tabSentou.addEventListener("postchange", function()
    {
        console.log(" tabSentou:postchange");
    }, false);
    //reactive時に発火
    tabSentou.addEventListener("reactive", function()
    {
        console.log(" tabSentou:reactive");
    }, false);
    tabSentou.setActiveTab(1);
}

// 対空ページ用やで(*'v'*)
function func_pageSentou_AA()
{
    var i, j, elm_i, elm_j;
    var targetEquipment, targetShootDown;

    $.each(arraySentouAA["リスト"], function(i, elm_i)
    {
        //console.log(" #" + $(".Sentou_AA_Clone ons-list-header").eq(i).attr("id") + ": elm_i = " + elm_i);

        //#Sentou_AA_Headerに通し番号を追加して.Sentou_AA_Cloneに追加する
        $(".Sentou_AA_Header").clone(true)
        .removeClass("Sentou_AA_Header")
        .addClass("Sentou_AA_Header_" + i)
        .appendTo(".Sentou_AA_Clone");

        //ons-list-headerに列名を挿入する
        $(".Sentou_AA_Clone .Sentou_AA_Type").eq(i).html(elm_i);

        $.each(arraySentouAA[elm_i]["組み合わせ"], function(j, elm_j)
        {
            //console.log("  #" + $(".Sentou_AA_Clone ons-list-item").eq(j).attr("id") + ": elm_j = " + arraySentouAAEquipment[j]);

            //#Sentou_AA_Listに通し番号を追加して.Sentou_OF_Cloneに追加する
            $(".Sentou_AA_List").clone(true)
            .removeClass("Sentou_AA_List")
            .addClass("Sentou_AA_List_" + j)
            .appendTo(".Sentou_AA_Clone");

            //必要装備、撃墜数を挿入する
            targetEquipment = ".Sentou_AA_Header_" + i + " ~ .Sentou_AA_List_" + j + " .Sentou_AA_Equipment";
            targetShootDown = ".Sentou_AA_Header_" + i + " ~ .Sentou_AA_List_" + j + " .Sentou_AA_ShootDown";
            $(targetEquipment).html(arraySentouAA[elm_i]["組み合わせ"][j]);
            $(targetShootDown).html(arraySentouAA[elm_i]["撃墜数"][j]);
        });
    });
    $(".Sentou_AA_origin").remove();
}

// 弾着ページ用やで(*'v'*)
function func_pageSentou_OF()
{
    var i, j, elm_i, elm_j;
    var targetEquipmentA, targetEquipmentB, targetEquipmentC, targetEquipmentD, targetCorrection;

    $.each(arraySentouOF["リスト"], function(i, elm_i)
    {
        //console.log(" #" + $(".Sentou_OF_Clone ons-list-header").eq(i).attr("id") + ": elm_i = " + elm_i);

        //#Sentou_OF_Headerに通し番号を追加して.Sentou_OF_Cloneに追加する
        $(".Sentou_OF_Header").clone(true)
        .removeClass("Sentou_OF_Header")
        .addClass("Sentou_OF_Header_" + i)
        .appendTo(".Sentou_OF_Clone");

        //ons-list-headerに列名を挿入する
        $(".Sentou_OF_Clone .Sentou_OF_Type").eq(i).html(elm_i);

        $.each(arraySentouOF[elm_i]["組み合わせ"]["主砲"], function(j, elm_j)
        {
            //console.log("  #" + $(".Sentou_OF_Clone ons-list-item").eq(j).attr("id") + ": elm_j = " + arraySentouAOCorrection[j]);

            //#Sentou_OF_Listに通し番号を追加して.Sentou_OF_Cloneに追加する
            $(".Sentou_OF_List").clone(true)
            .removeClass("Sentou_OF_List")
            .addClass("Sentou_OF_List_" + j)
            .appendTo(".Sentou_OF_Clone");

            //必要装備1, 2, 3, 4、倍率を挿入する
            targetEquipmentA = ".Sentou_OF_Header_" + i + " ~ .Sentou_OF_List_" + j + " .Sentou_OF_EquipmentA";
            targetEquipmentB = ".Sentou_OF_Header_" + i + " ~ .Sentou_OF_List_" + j + " .Sentou_OF_EquipmentB";
            targetEquipmentC = ".Sentou_OF_Header_" + i + " ~ .Sentou_OF_List_" + j + " .Sentou_OF_EquipmentC";
            targetEquipmentD = ".Sentou_OF_Header_" + i + " ~ .Sentou_OF_List_" + j + " .Sentou_OF_EquipmentD";
            targetCorrection = ".Sentou_OF_Header_" + i + " ~ .Sentou_OF_List_" + j + " .Sentou_OF_Correction";
            $(targetEquipmentA).html(arraySentouOF[elm_i]["組み合わせ"]["主砲"][j]);
            $(targetEquipmentB).html(arraySentouOF[elm_i]["組み合わせ"]["副砲"][j]);
            $(targetEquipmentC).html(arraySentouOF[elm_i]["組み合わせ"]["徹甲"][j]);
            $(targetEquipmentD).html(arraySentouOF[elm_i]["組み合わせ"]["電探"][j]);
            $(targetCorrection).html(arraySentouOF[elm_i]["組み合わせ"]["倍率"][j]);
        });
    });
    $(".Sentou_OF_origin").remove();
}

// 夜戦ページ用やで(*'v'*)
function func_pageSentou_NC()
{
    var i, j, elm_i, elm_j;
    var targetEquipmentA, targetEquipmentB, targetEquipmentC, targetCorrection;

    $.each(arraySentouNC["リスト"], function(i, elm_i)
    {
        //console.log(" #" + $(".Sentou_NC_Clone ons-list-header").eq(i).attr("id") + ": elm_i = " + elm_i);

        //#Sentou_NC_Headerに通し番号を追加して.Sentou_NC_Cloneに追加する
        $(".Sentou_NC_Header").clone(true)
        .removeClass("Sentou_NC_Header")
        .addClass("Sentou_NC_Header_" + i)
        .appendTo(".Sentou_NC_Clone");

        //ons-list-headerに列名を挿入する
        $(".Sentou_NC_Clone .Sentou_NC_Type").eq(i).html(elm_i);

        $.each(arraySentouNC[elm_i]["組み合わせ"]["主砲"], function(j, elm_j)
        {
            //console.log("  #" + $(".Sentou_NC_Clone ons-list-item").eq(j).attr("id") + ": elm_j = " + arraySentouNBCorrection[j]);

            //#Sentou_NC_Listに通し番号を追加して.Sentou_NC_Cloneに追加する
            $(".Sentou_NC_List").clone(true)
            .removeClass("Sentou_NC_List")
            .addClass("Sentou_NC_List_" + j)
            .appendTo(".Sentou_NC_Clone");

            //必要装備1, 2, 3、倍率を挿入する
            targetEquipmentA = ".Sentou_NC_Header_" + i + " ~ .Sentou_NC_List_" + j + " .Sentou_NC_EquipmentA";
            targetEquipmentB = ".Sentou_NC_Header_" + i + " ~ .Sentou_NC_List_" + j + " .Sentou_NC_EquipmentB";
            targetEquipmentC = ".Sentou_NC_Header_" + i + " ~ .Sentou_NC_List_" + j + " .Sentou_NC_EquipmentC";
            targetCorrection = ".Sentou_NC_Header_" + i + " ~ .Sentou_NC_List_" + j + " .Sentou_NC_Correction";
            $(targetEquipmentA).html(arraySentouNC[elm_i]["組み合わせ"]["主砲"][j]);
            $(targetEquipmentB).html(arraySentouNC[elm_i]["組み合わせ"]["副砲"][j]);
            $(targetEquipmentC).html(arraySentouNC[elm_i]["組み合わせ"]["魚雷"][j]);
            $(targetCorrection).html(arraySentouNC[elm_i]["組み合わせ"]["倍率"][j]);
        });
    });
    //コピー元を消す
    $(".Sentou_NC_origin").remove();
}
