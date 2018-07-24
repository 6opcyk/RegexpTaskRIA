function urlParse(url) {
    var geoKeyWords = ["-rayon",
        "-metro",
        "-levyy-bereg",
        "-pravyy-bereg",
        "-vozle-metro",
        "-ulitsa"].join("|")

    var paramsKeyWords = ["-sdannyye",
        "-stroyashchiyesya",
        "-kvartiry|-kottedzhi|-taunkhausy|-pomeshcheniya",
        "-ekonom-klassa|-standart|-biznes-klassa|-elit-klassa|-dachnyy|-komfort-klassa|-premium",
        "-odnokomnatnyye|-dvukhkomnatnyye|-trekhkomnatnyye|-chetyrekhkomnatnyye",
        "-rassrochka|s-remontom"].join("|")

    var lang = "(?:(\\w{2})/)"
    var oblast = "novostroyki(?:-(\\w+-?\\w+)-oblast)?";
    var city = `(?:-(\\w+(?:(?!${geoKeyWords}|${paramsKeyWords})-[^-]*)?))?`;

    var geo = [`(?:-rayon-(\\w+(?:(?!${paramsKeyWords})-[^-]*)?))?`,
        `(?:-metro-(\\w+(?:(?!${paramsKeyWords})-[^-]*)?))?`,
        `(?:-(levyy-bereg|pravyy-bereg))?`,
        `(?:-(vozle-metro))?`,
        `(?:-ulitsa-(\\w+(?:(?!${paramsKeyWords})-[^-]*)?))?`].join("");

    var options = ["(?:-(sdannyye))?",
        "(?:-(stroyashchiyesya))?",
        "(?:-(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?",
        "(?:-(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?",
        "(?:-(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?",
        "(?:-(rassrochka))?(?:-(s-remontom))?"].join("")

    var reStr = `${lang}${oblast}${city}${geo}${options}`;
    var re = new RegExp(reStr)
    var res = re.exec(url);

    return (res)
}

var test = "/ru/novostroyki-ivano-frankivska-oblast-ivano-frankivsk-levyy-bereg-sdannyye-stroyashchiyesya-kvartiry-ekonom-klassa-rassrochka-s-remontom"
console.log(urlParse(test))