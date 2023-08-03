let btn = document.getElementById("changeColor");
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = "red";
    btn.textContent = "Button Clicked";
});

var itemList = [];


let addBtn = document.getElementById("addItem");
addBtn.addEventListener('click', () => {
    let itemName = document.getElementById("itemName").value;
    addItems(itemName);
    display();

});

function addItems(itemName) {
    itemList.push({ "itemName": itemName });
}

function display() {
    let OlElement = "";
    if (itemList.length > 0) {
        OlElement = document.createElement("ol");
        itemList.forEach(item => {
            debugger;


            var LiElement = document.createElement('li');

            OlElement.appendChild(LiElement);
            LiElement.innerHTML = LiElement.innerHTML + item.itemName;

        });
        OlElement.appendChild(LiElement);
    }

    document.getElementById("displayItems").innerHTML = OlElement;
}