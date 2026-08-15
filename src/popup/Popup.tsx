import Logged from "./Logged";
import Unlogged from "./Unlogged";

function Popup(){
    const isLogged = false;

    return(
      <>
      {isLogged ? <Logged /> : <Unlogged />}
      </>
    )
    
}

export default Popup