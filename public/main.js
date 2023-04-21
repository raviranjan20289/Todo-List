


document.getElementById('myForm').addEventListener('submit',addTask)

electronicsList=document.getElementById('playing');
foodList=document.getElementById('Studying');
cosmeticsList=document.getElementById('Tourism');

window.addEventListener('DOMContentLoaded',async ()=>{
    try{
        let getReq =await axios.get("http://localhost:3000/products")
        for(let i=0;i<getReq.data.productData.length;i++){
            displayPoducts(getReq.data.productData[i])

           
        }
    }catch{
        console.log("Something went wrong CODE:ERR DOM_CONT_LOADED")
    }
})
var product=document.getElementById('TodoList')
var price=document.getElementById('Description')
var category=document.getElementById('category')

async function addProduct(e){
    try{
        
        e.preventDefault();
        let obj={
            product:product.value,
            price:price.value,
            category:category.value
        }
        console.log(product.value)
        if(price.value=='' || product.value=='' || category.value==''){
            alert("Please enter all fields")
        }
        
        else{
            let postReq= await axios.post("http://localhost:3000/add-product",obj)
            console.log(postReq)
            displayPoducts(postReq.data.productData)
            price.value=''
            product.value=''
            category.value=''
        }
    }catch{
        console.log("Something went wrong CODE:ERR ADD_PRODUCT")
    }
}



async function displayPoducts(obj){
    try{
        var li=document.createElement("li")

        var textNode=document.createTextNode(`Todo List: ${obj.TodoList}  | Description: Rs ${obj.Description} | Category: ${obj.category}`)

        li.appendChild(textNode)

        li.id=obj.id

        console.log(li)

        const editBtn=document.createElement('button')

        editBtn.className='btn btn-prod edit-btn btn-sm '

        editBtn.appendChild(document.createTextNode('Edit Product'))

        

        const delBtn=document.createElement('button')

        delBtn.className='btn btn-danger  btn-prod btn-sm '

        delBtn.appendChild(document.createTextNode('Delete Product'))

        li.appendChild(delBtn);
        li.appendChild(editBtn);
        

        li.appendChild(document.createElement("br"))
        li.appendChild(document.createElement("br"))


        if(obj.category=='Playing'){
            electronicsList.appendChild(li)
        }
        else if(obj.category=='Studying'){
            foodList.appendChild(li)
        }
        else {
            cosmeticsList.appendChild(li)
        }

        delBtn.onclick=() =>deleteProduct(obj.id);
        editBtn.onclick=()=>editProduct(obj);
        

    }catch{
        console.log("Something went wrong CODE:ERR DISP_PRODUCT")
    }
}

async function editProduct(obj){
    try{
        if(confirm("Please confirm to edit")){
            price.value=obj.price;
            product.value=obj.product;
            category.value=obj.category;


            await axios.delete(`http://localhost:3000/delete-product/${obj.id}`)

            const child=document.getElementById(obj.id)
                console.log(child)
                console.log(child.parentElement)
                if(child.parentElement===electronicsList){
                    electronicsList.removeChild(child)

                }
                else if(child.parentElement===foodList){
                    foodList.removeChild(child)
                }
                else if(child.parentElement===cosmeticsList){
                    cosmeticsList.removeChild(child)
            }
            // let objNew={
            //     product:product.value,
            //     price:price.value,
            //     category:category.value
            // }

            

            console.log("product editted successfully")

        }
    }catch(err){
        console.log("Something went wrong CODE:ERR EDIT_PRODUCT")
    }

}

async function deleteProduct(key){
    try{
        if(confirm("Press OK to confirm delete")){

            let resource=await axios.delete(`http://localhost:3000/delete-product/${key}`)

                const child=document.getElementById(key)
                console.log(child)
                console.log(child.parentElement)
                if(child.parentElement===electronicsList){
                    electronicsList.removeChild(child)

                }
                else if(child.parentElement===foodList){
                    foodList.removeChild(child)
                }
                else if(child.parentElement===cosmeticsList){
                    cosmeticsList.removeChild(child)
            }

        }
    }catch{
      console.log("Something went wrong CODE:ERR DEL_PRODUCT")
    }
}