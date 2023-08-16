const url = "http://localhost:2000";
// Read Todos from database & stored in state
const getData = async(setData)=>{
    console.log("hii");
    try {
        const res = await fetch(`${url}/getdata`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        setData(data);
    }catch (error) {
        console.log(`My GetData Error in React ${error}`);
    }
}
// Stored Todos in database
const addTodo = async (inputItem,setInputItem,setData)=>{
    const text = inputItem;
    if(!text){
        alert("Enter an item");
    }
    else{
        try {
            const res = await fetch(`${url}/savedata`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    text:text
                })
            });
            getData(setData);
            setInputItem("");
            console.log(res)
        } catch (error) {
            console.log(`My StoreData Error in React ${error}`);
        }}
};
// Delete Todos into the database
const DeleteTodo = async (id,setData)=>{
    try {
        const res = await fetch(`${url}/delete`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id:id
            })
        });
        getData(setData);
        if(res.status === 200){
            alert("Do You Want To Delete Todo ?");
        }else{
            alert("Todo Is Not Deleted");
        }
    } catch (error) {
        console.log(`My StoreData Error in React ${error}`);
    }
}
// Edit Todos into the database
const EditTodo = async (todoId, inputItem, setIsUpdate, setInputItem, setData)=>{
    const id = todoId; 
    const text = inputItem;
    try {
        const res = await fetch(`${url}/edit`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id:id,
                text
            })
        });
        console.log(res);
        getData(setData);
        setIsUpdate(false);
        setInputItem("");
      
    } catch (error) {
        console.log(`My EditData Error in React ${error}`);
    }
}
export { getData , addTodo , DeleteTodo ,EditTodo }