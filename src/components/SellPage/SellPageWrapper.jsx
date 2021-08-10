import React ,{useState} from "react";
import SellPage from "./SellPage";

function SellPageWrapper () {
    const [data,setData] = useState({});
    return (
        <SellPage setData= {(obj)=> setData(obj)}/>
    )
}
export default SellPageWrapper;