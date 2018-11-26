var arrayProductName=["Ngọc Trinh","Angela Phương Trinh","Quỳnh Búp Bê","Á Hậu Xóm ","Hoa Hậu Thôn"];
function display()
{
    var sout = '<table id="table">';
    for (let i=0; i<arrayProductName.length; i++) {
        sout += '<tr class="row">';
        sout += '<td class="col1">' + arrayProductName[i] + '<td>';
        sout += '<td class="col2">' + '<input class="btnEdit" type="button" value="Edit">' + '<td>';
        sout += '<td calss="col3">' + '<input class="btnDelete" type="button" value="Delete">' + '<td>';
        sout += '</tr>';
    }
    sout += '</table>';
    document.getElementById("productList").innerHTML=sout;
    document.getElementById("numberOf").innerHTML = arrayProductName.length + " Products";
}
function addProduct()
{
    let arrNewProduct = document.getElementById("addNewProduct").value;
     if(arrNewProduct != '')
      {
          arrayProductName.push(arrNewProduct+" ");
      }
    display();
    document.getElementById("addNewProduct").value = "";
}
display();