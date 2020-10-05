function validate() {
    var itemname = document.getElementById("name2").value;
    var itemprice = document.getElementById("price2").value;
    var itemdate = document.getElementById("date2").value;
    var itemcategory = document.getElementById("category2").value;
    if (itemname == ""){
        alert("title is required");
    }
    if (itemPRICE == ""){
        alert("title is required");
    }
    if (itemprice == ""){
        alert("title is required");
    }
    if (itemprice == ""){
        alert("title is required");
    }
    alert("completed");
}
function deleted(){
    alert("item deleted successfully");
    return false;
}