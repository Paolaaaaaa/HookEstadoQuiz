
import {useState} from "react"
import Records from './pages/page_0.json'



export default function Navbar(Props){

    
    const [page,  setPage] = useState(0);

    const render_1_page = () => {
        
        return Records[page];
      };

    const handle_next_page = () => {
        page !== 4 ?  setPage(page+1): console.log("already in 4");
      };
    const handle_prev_page = () => {
        page !== 0? setPage(page-1):console.log("already in 0");
      };
    const handle_restart_page = () => {
        page !== 0? setPage(0): console.log("already in 0") ;
      };
    return (
    <div>
    <nav className="nav">
        <ul>
            <li className="active">
                <button onClick={handle_restart_page}> Restart</button>
            </li>
            <li className="active">
                <button onClick={handle_prev_page}>Prev</button>
            </li>
            <li className="active">
                <button onClick={handle_next_page}>Next</button>
            </li>
        </ul>
        </nav>


        <div className="page_info" color="black">
        <h4>Usted está en la página: {page}</h4>
        <h4>Paola Andrea Campiño, 202020785</h4>

        <div className="Title_quest">
            <h1 >{render_1_page()["Title"]}</h1>
        </div>

        <div className="Response">
            <h3>{render_1_page()["Response"]}</h3>
            
        </div>

        <div className="img_div">
                <img src={render_1_page()["Image"]} width="500" height=""  />
            </div>
        </div>
        </div>
    
 
    
    
    );
}



