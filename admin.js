var objectList = getObjects();
listObjects();

function HOUZ(name, category, price, image) {
    this.name = name
    this.category = category
    this.price = price
    this.image = image
}

function addNewObject() {
    var name = $("[name='name']").val();
    var category = $("[name='category']").val();
    var price = $("[name='price']").val();
    var image = '';

    var object = new HOUZ(name, category, price, image);
    objectList.push(object);
    saveObjects();
    console.log(getObjects());
    listObjects();
}

function removeObjectAtIndex(index) {
    objectList.splice(index,1);
    saveObjects();
}

function getObjectAtIndex(index) {
    return objectList[index];
}

function saveObjects() {
    var str = JSON.stringify(objectList)
    localStorage.setItem("objectList", str)
}

function getObjects() {
    var str = localStorage.getItem("objectList")
    objects = JSON.parse(str)
    if (!objects) {
        objects = []
    }
    return objects
}

function listObjects() {
    getObjects()
    text = "<ol>";
    for (i = 0; i < objectList.length; i++) {
        text += "<li>" + "NAME: " + objectList[i].name +" ,CATEGORY: " + objectList[i].category + '<button onclick="deleteHouse(this)">Delete</button>' + "</li>";
    }
    text += "</ol>";
    element = document.getElementById('list')
    element.innerHTML = text;
}

function deleteHouse(currentElement) {
    currentElement.parentNode.parentNode.removeChild(currentElement.parentNode);
    var index = objectList.indexOf(currentElement)
    removeObjectAtIndex(index)
}

function clearDatabase() {
    localStorage.clear()
    objectList = [];
    saveObjects();
    listObjects();
}
