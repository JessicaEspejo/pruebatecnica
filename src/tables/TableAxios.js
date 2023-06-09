import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";


export const TableAxios = () => {
//1 - configuramos Los hooks
const [products, setProducts] = useState( [] )

//2 - fcion para mostrar los datos con axios
const endpoint = 'https://us17.api.mailchimp.com/3.0/'

const getData = async () => {
    await axios.get().then((response) => {
        const data = response.data
        console.log(data)
        setProducts(data)
    })
}
console.log(endpoint)
useEffect( ()=>{
    getData()
}, [])

//3 - Definimos las columns
const columns = [
    {
        name: "id",
        label: "ID"
    },
    {
        name: "title",
        label: "TITLE"
    },
    {
        name: "price",
        label: "PRICE"
    }
]
//4 - renderizamos la datatable
        return (
            <MUIDataTable 
            title={"Show data with Axios"}
            data={products}
            columns={columns}
            />
        )

}