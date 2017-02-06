//generateDOM(タグ名、タグ状態、属性、変数)
//DOMを生成する。
//タグ名　：文字列("ons-list-item", "div"など)
//タグ状態："start":開始タグ, "end":終了タグ, "empty":空要素
//属性　　；文字列、変数を入れたい場合は、入れる箇所に["変数名"]を入れておく。無いときは不要
//変数　　：変数名、配列(大かっこで囲む)にする。無いときは不要
function generateDOM(element, state, attribute, variables)
{
    var i = 0;
    var attr;

    if(attribute)
    {
        attr = attribute.replace(/\[\w+\]/g, function()
        {
            return variables[i++];
        });
        //console.log("  generateDOM: " + attr);

        switch(state)
        {
            //<ons-page>
            case "start":
                //console.log("  generateDOM: " + "<" + element + " " + attr + ">");
                return "<" + element + " " + attr + ">";
                break;

            //<br />
            case "empty":
                //console.log("  generateDOM: " + "<" + element + " " + attr + " />");
                return "<" + element + " " + attr + " />";
                break;
        }
    }
    else
    {
        switch(state)
        {
            //<ons-page>
            case "start":
                //console.log("  generateDOM: " + "<" + element + ">");
                return "<" + element + ">";
                break;

            //</ons-page>
            case "end":
                //console.log("  generateDOM: " + "</" + element + ">");
                return "</" + element + ">";
                break;

            //<br />
            case "empty":
                //console.log("  generateDOM: " + "<" + element + " />");
                return "<" + element + " />";
                break;
        }
    }
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
