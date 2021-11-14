 exports.getHint = function (str) {
    var names = ["Anna", "Brittany", "Cinderella", "Diana", "Eva", "Fiona", "Gunda", "Hege", "Inga", "Johanna", "Kitty", "Linda", "Nina", "Ophelia", "Petunia", "Amanda", "Raquel", "Cindy", "Doris", "Eve", "Evita", "Sunniva", "Tove", "Unni", "Violet", "Liza", "Elizabeth", "Ellen", "Wenche", "Vicky"];
    var hint = "";
    if (str.length != 0) {
        // lookup all hints from array if length of str>0
        for (i = 0; i < names.length; i++) {
            if (names[i].indexOf(str) == 0) {
                if (hint.length == 0)
                    hint = names[i];
                else
                    hint = hint + ", " + names[i];
            }
        }
    }
    return hint;
}
