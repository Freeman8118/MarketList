import React, { useState } from "react";
import { List } from "./list";
import { Input } from "./input";
import "../styles/index.css"

const marketInfos = [{
  name:"Apple",
  price:"3.99",
  origin:"California",
  id:"0"
},{
  name:"Orange",
  price:"1.55",
  origin:"Texas",
  id:"1"
},{
  name:"Tomato",
  price:"1.99",
  origin:"California",
  id:"2"
}]

export const Todo = () => {
const [infos,setInfos] = useState(marketInfos)
const [update,setUpdate] = useState({
  name:"",
  price:"",
  origin:"",
  id:""
})
const updateInfos = (id) => {
  const updateInfo = infos.find((info) => {
    return id === info.id
  })
  setUpdate(updateInfo)
}

const deleteInfos = (id) => {
   const newInfos = infos.filter((info) => {
    return info.id !== id
  })
  setInfos(newInfos)
}


  return(
    <div className="market">
      <List infos={infos}  deleteInfos={deleteInfos} updateInfos={updateInfos}/>
      <Input infos={infos} setInfos={setInfos} update={update} setUpdate={setUpdate} />
    </div>
  )
}
