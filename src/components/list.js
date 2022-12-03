import '../styles/list.css'

export const List = ({infos,updateInfos,deleteInfos}) => {
  const updateInfo = (e,info) => {
    e.preventDefault()
    updateInfos(info.id)
  }
  return(
    <div className="marketInfos">
      {
      infos.map((info) => 
      <div className="marketInfo"  key={info.id} onClick={(e)=>updateInfo(e,info)} >
        <span>{info.name}</span>
        <span>$ {info.price}/kg</span>
        <span>{info.origin}</span>
        <span className="deduction"onClick={()=>deleteInfos(info.id)}>x</span>      
      </div>

      )
      }
    </div>

  )
}