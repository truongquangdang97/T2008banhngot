function navq(){
    "    <div class=\"container nav1\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"d\">\n" +
    "                <ul>\n" +
    "                    <li class=\"d1\">\n" +
    "                        <a class=\"d2\" href=\"#\">Home</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"d1\">\n" +
    "                        /\n" +
    "                    </li>\n" +
    "                    <li class=\"d1\">\n" +
    "                        <a class=\"d2\" href=\"#\">Bánh sinh nhật  </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"d1\">\n" +
    "                        /\n" +
    "                    </li>\n" +
    "                    <li class=\"d1\">\n" +
    "                        <a class=\"d2\" href=\"#\"><b>Bánh sinh nhât bé </b></a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"e\">\n" +
    "                <select class=\"e1\">\n" +
    "                    <option class=\"e2\" value=\"popularity\" selected=\"selected\">Sort by popularity</option>\n" +
    "                    <option class=\"e2\" value=\"rating\">Sort by average rating</option>\n" +
    "                    <option class=\"e2\" value=\"date\">Sort by latest</option>\n" +
    "                    <option class=\"e2\" value=\"price\">Sort by price: low to high</option>\n" +
    "                    <option class=\"e2\" value=\"price-desc\">Sort by price: high to low</option>\n" +
    "                    <option class=\"e2\" value=\"random_list\">Sắp xếp sản phẩm ngẫu nhiên</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n"
}
var navqq =document.getElementById("navq");
navqq.innerHTML = navq();