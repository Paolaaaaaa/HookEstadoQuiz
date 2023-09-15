
import {useState} from "react"




export default function Navbar(Props){

    function fetch_data(){
        fetch("./pages/page_"+String(page)+".json").then((res) => {
            if (!res.ok) {
              throw new Error('El json está malo');
            }
            return res.json();
          });
      }
    const [page,  setPage] = useState(0);

    const render_1_page = () => {
        let data=fetch_data(page);
        console.log(data);
        return data;
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
        <h3>Usted está en la página: {page}</h3>
        <di>
            <p1>{render_1_page()}</p1>
        </di>
        </div>
        </div>
    
 
    
    
    );
}



