import {nanoid} from 'nanoid'
import '../styles/input.css'
export const Input = ({setInfos,infos,update,setUpdate}) =>{

  const updateAdd = (e) => {
    if(update.name&&update.price&&update.origin){
      if(e.target.value === "Add"){
        const newUpdate = {
          name:update.name,
          price:update.price,
          origin:update.origin,
          id:nanoid()
        }
        infos = [...infos,newUpdate]
      }else{
        const newUpdate = {
          name:update.name,
          price:update.price,
          origin:update.origin,
          id:update.id
        }
        let index = infos.findIndex(info => info.id === update.id)
        infos.splice(index,1,newUpdate)
      }
    }
      setInfos(infos)
      setUpdate({
        name:'',
        price:'',
        origin:'',
        id:''
      })
      console.log(infos);
}


  return(
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}  >
        <ul>
          <li>
            <label for='name'>Name:</label>
            <input type="text" value={update.name} onChange={e=>{setUpdate({
              ...update,
              name:e.target.value
            })}}/>
          </li>
          <li>
            <label for='price'>Price:</label>
            <input type="text" value={update.price}  onChange={e=>{setUpdate({
              ...update,
              price:e.target.value
            })}} />
          </li>       
          <li>
            <label for='origin'>Origin:</label>
            <input type="text" value={update.origin}  onChange={e=>{setUpdate({
              ...update,
              origin:e.target.value
            })}} />
          </li>
          <li>
          <input id="button" type="submit" value={update.id?"Update":"Add"} onClick={updateAdd}></input>
          </li>
        </ul>
      </form>
    </div>

    
  )
}