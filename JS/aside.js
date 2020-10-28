function aside(){
    return"<aside class=\"ctt\">\n" +
        "                <div class=\"ctt-body\">\n" +
        "                    <h4><b class=\"ctt-1\">TÌM SẢN PHẨM</b></h4>\n" +
        "                    <div class=\"ctt-2\"></div>\n" +
        "                        <form class=\"ctt-3\" method=\"get\" action=\"https://tokyogateaux.vn/\" role=\"search\">\n" +
        "                            <div>\n" +
        "                                <input class=\"ctt-3-1\" type=\"search\" placeholder=\"Tìm sản phẩm\" />\n" +
        "                                <button class=\"ctt-3-2\" type=\"submit\" aria-label=\"submit\">\n" +
        "                                    <i class=\"fas fa-search ctt-3-3\"></i>\n" +
        "                                </button>\n" +
        "                            </div>\n" +
        "                        </form>\n" +
        "                    <div class=\"ctt-4\">\n" +
        "                        <h4><b class=\"ctt-1\">DANH MỤC SẢN PHẨM</b></h4>\n" +
        "                        <div class=\"ctt-2\"></div>\n" +
        "                        <ul>\n" +
        "                            <li class=\"ctt-4-1\"><a class=\"ctt-4-2\" href=\"https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/\">Bánh sinh nhật hiện đại</a></li>\n" +
        "                            <li class=\"ctt-4-1\"><a class=\"ctt-4-2\" href=\"https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/\">Bánh sinh nhật bé trai</a></li>\n" +
        "                            <li class=\"ctt-4-1\"><a class=\"ctt-4-2\" href=\"https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/\">Bánh sinh nhật bé gái</a></li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                    <div class=\"ctt-5\">\n" +
        "                        <h4><b class=\"ctt-1\">FILTER BY PRICE</b></h4>\n" +
        "                        <div class=\"ctt-2\"></div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </aside>"
}
var hd = document.getElementById("aside");
hd.innerHTML = aside();