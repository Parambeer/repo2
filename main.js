let tags =['one', 'tag1', 'two', 'tag2', 'tag3', 'three'];

document.getElementById("addBtn").addEventListener('click', addItem);
var allItems = document.getElementById("items").addEventListener('click', deleteItem);
document.getElementById("search").addEventListener("keyup", search);

function addItem() {
    var newItem = document.getElementById("addItem").value;
    
    var itemAdd = document.createElement("li");
    var addDelete = document.createElement("span");
    addDelete.appendChild(document.createTextNode("X"));
    addDelete.classList.add("delete");

    itemAdd.appendChild(document.createTextNode(newItem));
    itemAdd.appendChild(addDelete);
    document.getElementById("items").appendChild(itemAdd);
}

function deleteItem(e) {
    if (e.target.classList.contains("delete")) {
        document.getElementById("items").removeChild(e.target.parentElement)
    }
}

function search(e) {
    
    var oldItems = document.getElementById("items").getElementsByTagName("li");
    //var oldItems = document.querySelectorAll("ul li");
    Array.from(oldItems).forEach(function(item) {
        var itemText = item.firstChild.textContent.toLowerCase();
        var searchVal = e.target.value.toLowerCase();
        // console.log(item);
        if (itemText.indexOf(searchVal) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });


    // console.log(oldItems);
}