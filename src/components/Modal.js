import restart from "../assets/restart.svg"

const Modal = ({setShowModal, gameText})=>{
    return(
        <div onClick = {()=>{}} style={{width:"100vw", height:"100vh", backgroundColor:"rgba(0,0,0,0.5)", position:"absolute", top:0, left:0}}>
            <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{backgroundColor:"white", padding:"5%", borderRadius:"30%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <h3>{gameText}</h3>
                    <button style={{margin:"5px 0"}} onClick={(e)=>{e.preventDefault(); window.location.reload(false);
setShowModal(false)}}>
                        <img src={restart} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;