const $newProductForm = document.querySelector("#newProductForm");
console.log($newProductForm);

const $buttonColDiv = document.querySelector("#buttonCol");

const product =
{
    prodName: "",
    prodDesc: "",
    prodPrice: "",
    prodAvaible: "",
};

window.onload = function() {
    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
    console.log(sessionStorage);
    feedProductTable();
};

$buttonColDiv.addEventListener('submit', function buttonColController(data){
    data.preventDefault();
})

$newProductForm.addEventListener('submit', function newProductController(productData) {
    productData.preventDefault();
    const $nameField = document.querySelector("#name").value;
    const $descField = document.querySelector("#desc").value;
    const $priceField = document.querySelector("#price").value;
});

function validateNewProduct(){
    
}



function createProd() {
    var prodName = $newProductForm.querySelector("#name").value;
    var desc = $newProductForm.querySelector("#desc").value;
    var price = $newProductForm.querySelector("#price").value;
    var avaible = $newProductForm.querySelector("#status").textContent;
    if(prodName == ""){
        alert("O produto deve ter um nome!");
        return false;
    }
    else if(desc == ""){
        alert("O produto deve ter uma descrição!");
        return false;
    }
    else if(price == ""){
        alert("O produto deve ter um preço!")
        return false;
    }
    if (avaible == "Sim")
        avaible = true
    else
        avaible = false
    product.prodName = prodName;
    product.prodDesc = desc;
    product.prodPrice = price;
    product.prodAvaible = avaible;
    console.log(sessionStorage.length);
    sessionStorage.setItem("prod_" + sessionStorage.length, JSON.stringify(product));
    console.log(sessionStorage);
};

function feedProductTable() {
    var i = sessionStorage.length - 1;
    const $productTableBody = document.querySelector("#productTableBody");
    while (i >= 0) {
        var prod = JSON.parse(sessionStorage.getItem("prod_" + i));
        $productTableBody.insertAdjacentHTML("afterbegin", '<tr> <td id="prodId" class="hidden-td">prod_'+ i +'</td></td><td class="name-td">' + prod.prodName + '</td> <td>R$' + prod.prodPrice + ',00</td> <div id="buttonCol" class="col"> <td class="btn-td"><input class="btn btn-outline-success btn-sm" type="button" value="Atualizar"> <input id="deleteBtn_' + i + '"class="btn btn-outline-danger btn-sm" type="button" value="Excluir" onclick="prodDelete(this.id)">');
        i--;
    }
};

function prodDelete(btn){
    var stringBtnId = btn.split('_');
    var rowNumber = stringBtnId[1];
    sessionStorage.removeItem("prod_" + rowNumber);
    location.reload();
}

function changeAvaible(){
    const stts = document.getElementById("status").textContent;
    if (stts == "Sim")
        document.getElementById('status').innerHTML = 'Não'
    else
        document.getElementById('status').innerHTML = 'Sim'
};