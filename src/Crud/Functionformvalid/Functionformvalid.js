import React from "react";
import { useState } from "react";

export const Functionformvalid =()=>{
    let [Name,setName]=useState("Laptop 1");
    let [Price,setPrice]=useState("19000");
    let [Image,setImg]=useState("data:image/jpeg;base64,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");
    let [arr,setArr]=useState([]);
    let [isFull,setFill]=useState(false);
    let [index,setindex]=useState();
    let [isEdit,setEdit]=useState(false);
    
    let product=(e)=>{
        if(e.target.name==='pname'){
            setName(e.target.value);
        }
        else if(e.target.name==='pprice'){
            setPrice(e.target.value);
        }
        else{
            setImg(e.target.value);
        }
    }
    let submit=(e)=>{
        e.preventDefault();
        if(Name==="" || Price==="" || Image===""){
            setFill(true);
        }
        else if(isEdit){
            let obj={Name,Price,Image};
            let data = arr.map((v,i)=>{
                return index ===i ? obj : v
            })
            setArr(data);
            setEdit(false)
        }
        else{
            let obj={Name,Price,Image};
            setArr([...arr,obj])
            // console.log([...arr,obj])
            setName("");
            setImg("");
            setPrice("");
            setFill(false)
        }
        console.log(index)
        
    }
    let del=(id)=>{
        let x=arr.filter((e,i)=>{
            return i!==id ? e:"";
        })
        setArr(x);
        console.log(id);
        console.log(x);
    }
    let edit=(e,i)=>{
        // console.log(e)
        
        setName(e.Name)
        setPrice(e.Price)
        setImg(e.Image)
        setindex(i)
        setEdit(true)
    }
    return(
        <div>
            <form>
                <div>
                    <label>Product Name:</label>
                    <input type="text" name="pname" value={Name} onChange={product}/>
                    {isFull && Name===""? <p>Please fill product name</p>:''}
                </div>
                <div>
                    <label>Product Price:</label>
                    <input type="number" name="pprice" value={Price} onChange={product}/>
                    {isFull && Price===""? <p>Please fill product price</p>:''}
                </div>
                <div>
                    <label>Product Image:</label>
                    <input type="text" value={Image} onChange={product}/>
                    {isFull && Image===""? <p>Please fill product img url</p>:''}
                </div>
                <button onClick={submit}>Submit</button>
            </form>
            <div style={{display:"flex",flexWrap:"wrap",width:"85%",margin:"auto"}}>
                {arr.map((e,i)=>{
                    return(
                        <div key={i} style={{width:"25%",flexWrap:"wrap",padding:"10px",boxShadow:"0 0 10px #000"}}>
                            <img src={e.Image} alt="product" style={{width:"100%"}}/>
                            <h3>{e.Name}</h3>
                            <h1>{e.Price}</h1>
                            <button onClick={()=>del(i)}>Delete</button>
                            <button onClick={()=>edit(e,i)}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}