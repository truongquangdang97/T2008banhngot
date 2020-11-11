document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('.nentrang');
    var menu = menu[0];
    //Truy xuất div menu
    var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 200){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('cuonttrang');
            }
        }
        else{
            if(trangthai=="tren300"){
                menu.classList.remove('cuonttrang');
                trangthai="duoi300";}
        }

    })
})
function myFunction() {
    var x = document.getElementById('anhien');
    var y = document.getElementById('toggle');
    var iconup = "<i class=\"fas fa-chevron-up\"></i>";
    var icondown= "<i class=\"fas fa-chevron-down\"></i>";
    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.innerHTML=icondown;
    } else {
        x.style.display = 'block';
        y.innerHTML=iconup;


    }
}