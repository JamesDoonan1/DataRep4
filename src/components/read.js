import { useEffect, useState } from "react";
import Books from "./books";
//promise based http client
import axios from "axios";

function Read() {


    const [data, setData] = useState([])

    //Accepts a function that contains imperative, possibly effectful code.
    useEffect(
        () => {
            //Async development
            //Get method - Promise
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                //Data has come back - so what do we do with the response - CALL BACK FUNCTION
                .then(
                    (response) => {
                        setData(response.data.books);
                    }
                )
                //A catch method incase there is an error - CALL BACK FUNCTION
                .catch(
                    (error)=>{
                        console.log(error);
                    }
                )
        }, []
    );
    return (
        <div>
            <h3>Hello from READ component</h3>
            {/* Books is child of Read */}
            <Books myBooks={data}></Books>
        </div>
    );
}
export default Read;

