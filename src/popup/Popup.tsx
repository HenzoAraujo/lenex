import Logged from "./Logged";
import Unlogged from "./Unlogged";

function Popup(){
    const isLogged = true;

    return(
      <>
      {isLogged ? <Logged /> : <Unlogged />}
      </>
    )
    
}

export default Popup