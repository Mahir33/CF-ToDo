
function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
    let listItem = jQuery('<li></li>');
    let inputVal = $("#input").val();
    listItem.append(inputVal);
    
       if (inputVal === '') {
         alert("You must write something!");
       } else {
         let list = jQuery('#list');
         list.append(listItem);
       }
    
     //2. Crossing out an item from the list of items:
       function crossOut() {
             listItem.toggleClass("strike");
         }
    
        listItem.on("dblclick",crossOut);
    
     //3(i). Adding the delete button "X": 
        let crossOutButton = jQuery('<crossOutButton></crossOutButton>');
        crossOutButton.addClass(".crossOutButton");
        crossOutButton.append("X");
        listItem.append(crossOutButton);
    
        crossOutButton.on("click", deleteListItem);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             listItem.addClass("delete")
         }
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    
    
    
    
    
    
    
    