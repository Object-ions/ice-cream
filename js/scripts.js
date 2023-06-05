let iceCream = [];


window.onload = function(){
    //creatimg an array for flavors
    iceCream = ["vanila", "chocolate", "mint", "strawberry"];

    //creating targeting and apennding to the html file
    ul = document.createElement('ul');
    ul.setAttribute('id','ice-cream');
    document.body.appendChild(ul);

    //running a loop over our array
    iceCream.forEach(function (flavor){
        //this array will create li's
        let  li = document.createElement('li')
        //will assign flavores into each element
        li.append(flavor);
        //append it to the HTML file
        document.getElementById('ice-cream').append(li);
    })

    }