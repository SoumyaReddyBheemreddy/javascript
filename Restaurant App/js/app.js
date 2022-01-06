const tables =  [
    {
        "id":1,
        "name":"Table-1",
        "totalCost":250,
        "totalItems":1,
        "orders":[
                    {
                    "id":1,
                    "name":"Veg Biriyani",
                    "quantity":1,
                    "cost":250
                    }
                ]
    },
    {
        "id":2,
        "name":"Table-2",
        "totalCost":0,
        "totalItems":0,
        "orders":[]
    },
    {
        "id":3,
        "name":"Table-3",
        "totalCost":0,
        "totalItems":0,
        "orders":[]
    }
];
const items=[
    {
        "id":1,
        "name":"Veg Biriyani",
        "cost":250
    },
    {
      "id":2,
      "name":"Chicken Biriyani",
      "cost":350
    },
    {
        "id":3,
        "name":"French Fries",
        "cost":105
    },
    {
      "id":4,
      "name":"French Fries with Cheese",
      "cost":135 
    },
    {
        "id":5,
        "name":"Special Veg Biriyani",
        "cost":300
    },
    {
        "id":6,
        "name":"Boneless Chicken Biriyani",
        "cost":400
    },
    {
        "id":7,
        "name":"Paneer 65",
        "cost":200
    }  
  ]
document.addEventListener("DOMContentLoaded",  function load(){
        // load table details 
        for(let i = 0; i < tables.length;i++){
            let tableCard = document.createElement("div");
            let tableBody = document.createElement("div");
            let tableTitle = document.createElement("h5");
            let tableCost = document.createElement("h6");
            tableCard.setAttribute("class","card mt-2 table");
            tableCard.setAttribute("id","table-"+tables[i].id);
            tableCard.setAttribute("data-toggle","modal");
            tableCard.setAttribute("data-target","#exampleModal");
            tableBody.setAttribute("class","card-body");
            tableTitle.setAttribute("class","card-title");
            tableCost.setAttribute("class","card-subtitle mb-2 text-muted");
            tableTitle.innerHTML = `${tables[i].name}`;
            tableCost.innerHTML = `cost: ${tables[i].totalCost} | total items: ${tables[i].totalItems}`;
            tableBody.appendChild(tableTitle);
            tableBody.appendChild(tableCost);
            tableCard.appendChild(tableBody);
            document.getElementById("table-container").appendChild(tableCard);
            document.getElementById("table-"+tables[i].id).addEventListener("click",()=>{
                
                tableDetails(tables[i])
            });

      
        }
        
        //loading menu item details
        for(let i = 0; i < items.length;i++){
            let itemCard = document.createElement("div");
            let itemBody = document.createElement("div");
            let itemTitle = document.createElement("h5");
            let itemCost = document.createElement("h6");
            if(i===items.length-1)
                itemCard.setAttribute("class","card mt-2 mb-2 menu");
            else
                itemCard.setAttribute("class","card mt-2 menu");   
            itemBody.setAttribute("class","card-body");
            itemTitle.setAttribute("class","card-title");
            itemCost.setAttribute("class","card-subtitle mb-2 text-muted");
            itemTitle.innerHTML = `${items[i].name}`;
            itemCost.innerHTML = `cost: ${items[i].cost}`;
            itemBody.appendChild(itemTitle);
            itemBody.appendChild(itemCost);
            itemCard.appendChild(itemBody);
            document.getElementById("menu-container").appendChild(itemCard);
        }
        // model
        let model = document.createElement("div");
        model.setAttribute("class","modal fade");
        model.setAttribute("id","exampleModal");
        model.setAttribute("tabindex",-1);
        model.setAttribute("role","dialog");
        model.setAttribute("aria-labelledby","exampleModalLabel");
        model.setAttribute("aria-hidden","true");
        let modelDialog= document.createElement("div");
        modelDialog.setAttribute("class","modal-dialog modal-dialog-centered modal-lg");
        modelDialog.setAttribute("role","document");
        let modelContent = document.createElement("div");
        modelContent.setAttribute("class","modal-content");
        //header
        let modelHeader = document.createElement("div");
        modelHeader.setAttribute("class","modal-header");
        let modelTitle = document.createElement("h5");
        modelTitle.setAttribute("class","modal-title");
        modelTitle.setAttribute("id","exampleModalLabel");
        modelTitle.innerHTML = "Table";
        let headerClose = document.createElement("button");
        headerClose.setAttribute("id","modelHeaderClose")
        headerClose.setAttribute("type","button");
        headerClose.setAttribute("class","btn-close");
        headerClose.setAttribute("data-dismiss","modal");
        headerClose.setAttribute("aria-label","Close");
        //body
        let modelBody = document.createElement("div");
        modelBody.setAttribute("class","modal-body");
        modelBody.setAttribute("id","modelBodyId");
        //footer
        let modelFooter = document.createElement("div");
        modelFooter.setAttribute("class","modal-footer");
        let closeButton = document.createElement("button");
        closeButton.setAttribute("id","modelFooterClose");
        closeButton.setAttribute("type","button");
        closeButton.setAttribute("class","btn btn-secondary");
        closeButton.setAttribute("data-dismiss","modal");
        closeButton.innerHTML = "Close";
        modelFooter.appendChild(closeButton);
        modelHeader.appendChild(modelTitle);
        modelHeader.appendChild(headerClose);
        modelContent.appendChild(modelHeader);
        modelContent.appendChild(modelBody);
        modelContent.appendChild(modelFooter);
        modelDialog.appendChild(modelContent);
        model.appendChild(modelDialog);
        document.body.appendChild(model);
    }
    
    
);
function searchMenu(){
    let allCards = document.getElementsByClassName("card menu");
    let searchText = document.getElementById("searchMenuName").value.toUpperCase();
    console.log(searchText);
    for(let index=0;index<allCards.length;index++){
        let item = allCards[index].children[0].children[0].innerHTML.toUpperCase();
        if(item.includes(searchText))
            allCards[index].style.display = "block";
        else
        allCards[index].style.display = "none";
    }   
}
function searchTable(){
    let allCards = document.getElementsByClassName("card table");
    let searchText = document.getElementById("searchTableName").value.toUpperCase();
    console.log(searchText);
    
    for(let index=0;index<allCards.length;index++){
        let item = allCards[index].children[0].children[0].innerHTML.toUpperCase();
        console.log(item);
       
        if(item.includes(searchText))
            allCards[index].setAttribute("class","card mt-2 table"); 
        else
            allCards[index].setAttribute("class","card mt-2 table d-none");    
      
    }   
}
function tableDetails(table){
    document.getElementById("table-"+table.id).style.background="orange";
    document.getElementById("exampleModalLabel").innerHTML = table.name+"| Order Details";
    let modelBody = document.getElementById("modelBodyId");
    if(modelBody.hasChildNodes()){
        modelBody.innerHTML=""
    }
    let displayTable = document.createElement("table");
    displayTable.setAttribute("class","table");
    let tableHead = document.createElement("thead");
    let tableRow = document.createElement("tr");
    let sno = document.createElement("th");
    sno.setAttribute("scope","col");
    sno.innerHTML="S.NO"
    let item = document.createElement("th");
    item.setAttribute("scope","col");
    item.innerHTML="Item"
    let price = document.createElement("th");
    price.setAttribute("scope","col");
    price.innerHTML="Price"
    let quantity = document.createElement("th");
    quantity.setAttribute("scope","col");
    quantity.innerHTML="Quantity";
    let remove = document.createElement("th");
    remove.setAttribute("scope","col");
    remove.innerHTML="Delete"
    tableRow.appendChild(sno);
    tableRow.appendChild(item);
    tableRow.appendChild(price);
    tableRow.appendChild(quantity);
    tableRow.appendChild(remove);
    tableHead.appendChild(tableRow);
    displayTable.appendChild(tableHead);
    let tableBody = document.createElement("tbody");
    for(let i = 0; i < table.orders.length;i++){
        let tableRow1 = document.createElement("tr");
        let td1 = document.createElement("th");
        td1.setAttribute("scope","row");
        td1.innerHTML = i+1;
        let td2 = document.createElement("td");
        td2.innerHTML=table.orders[i].name;
        let td3 = document.createElement("td");
        td3.innerHTML=table.orders[i].cost;
        let td4 = document.createElement("input");
        td4.setAttribute("type","number");
        td4.setAttribute("class","form-control form-control-sm my-2");
        td4.setAttribute("min","1");
        td4.setAttribute("placeholder",table.orders[i].quantity);
        let td5 = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("type","button");
        deleteButton.setAttribute("class","btn btn-danger");
        deleteButton.innerHTML="Delete";
        td5.appendChild(deleteButton);
        tableRow1.appendChild(td1);
        tableRow1.appendChild(td2);
        tableRow1.appendChild(td3);
        tableRow1.appendChild(td4);
        tableRow1.appendChild(td5);
        tableBody.appendChild(tableRow1);
        console.log(table.orders[i]+" "+table.orders.length);
    }
    displayTable.appendChild(tableBody);
    modelBody.appendChild(displayTable);
    document.getElementById("modelHeaderClose").addEventListener("click",()=>{
        document.getElementById("table-"+table.id).style.background="white";
        }
    )
    document.getElementById("modelFooterClose").addEventListener("click",()=>{
        document.getElementById("table-"+table.id).style.background="white";
    })
}