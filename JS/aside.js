function aside(){
    return"<h4><b class=\"ctt-1\">TÌM SẢN PHẨM</b></h4>\n" +
        "                    <div class=\"ctt-2\"></div>\n" +
        "                        <form class=\"ctt-3\" method=\"get\" action=\"https://tokyogateaux.vn/\" role=\"search\">\n" +
        "                            <div>\n" +
        "                                <input class=\"ctt-3-1\" type=\"search\" placeholder=\"Tìm sản phẩm\" />\n" +
        "                                <button class=\"ctt-3-2\" type=\"submit\" aria-label=\"submit\">\n" +
        "                                    <i class=\"fas fa-search ctt-3-3\"></i>\n" +
        "                                </button>\n" +
        "                            </div>"
}

var hd = document.getElementById("aside");
hd.innerHTML = aside();