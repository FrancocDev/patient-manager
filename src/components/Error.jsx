import React from "react";

export default function Error(props){
    return(<div className="bg-red-600 text-white text-center p-1 font-bold rounded-md uppercase">{props.children}</div>)
}