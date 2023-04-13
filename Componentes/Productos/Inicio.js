import React from "react"
import { useEffect,useState } from "react";


export default function Inicio() {
    let[datos,setDatos]=useState([]);
    const traerInfo=async()=>{
       let localhostinfo=await fetch("http://localhost:4001/getProductosnode")
        .then((res)=>res.json())
        .then((data)=>setDatos(data))
        .catch((error)=> console.log(error))
        return info
    }
    useEffect(()=>{
        traerInfo()
        setTimeout(()=>{console.log(datos)},3000)
    },[])
 return(
    <div className="row card">
        {datos.map((dato)=>{
            return<Inicio key={datos.indexOf(dato)} info={dato}/>
        })}
    </div>
 )






}

 


