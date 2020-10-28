function aside(){
    return"<aside class=\"content\">\n" +
        "                <div class=\"content-body\">\n" +
        "                    <h4><b class=\"content-1\">TÌM SẢN PHẨM</b></h4>\n" +
        "                    <div class=\"content-2\"></div>\n" +
        "                        <form class=\"content-3\" method=\"get\" action=\"https://tokyogateaux.vn/\" role=\"search\">\n" +
        "                            <div>\n" +
        "                                <input class=\"content-3-1\" type=\"search\" placeholder=\"Tìm sản phẩm\" />\n" +
        "                                <button class=\"content-3-2\" type=\"submit\" aria-label=\"submit\">\n" +
        "                                    <i class=\"fas fa-search content-3-3\"></i>\n" +
        "                                </button>\n" +
        "                            </div>\n" +
        "                        </form>\n" +
        "                    <div class=\"content-4\">\n" +
        "                        <h4><b class=\"content-1\">DANH MỤC SẢN PHẨM</b></h4>\n" +
        "                        <div class=\"content-2\"></div>\n" +
        "                        <ul>\n" +
        "                            <li class=\"content-4-1\"><a class=\"content-4-2\" href=\"https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/\">Bánh sinh nhật hiện đại</a></li>\n" +
        "                            <li class=\"content-4-1\"><a class=\"content-4-3\" href=\"https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/\"><b>Bánh sinh nhật bé trai</b></a></li>\n" +
        "                            <li class=\"content-4-1\"><a class=\"content-4-2\" href=\"https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/\">Bánh sinh nhật bé gái</a></li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                    <div class=\"content-5\">\n" +
        "                        <h4><b class=\"content-1\">FILTER BY PRICE</b></h4>\n" +
        "                        <div class=\"content-2\"></div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </aside>"
}
var hd = document.getElementById("aside");
hd.innerHTML = aside();