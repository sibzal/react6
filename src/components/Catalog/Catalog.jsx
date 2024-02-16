import Card from "../Card/Card"
import {catalog} from '../../data.js'

export default function Catalog (){
    return (
        <div className="catalog-content">
            {
                catalog.map((card,index)=>{
                    return(
                        <Card key={index} {...card}/>
                    )
                })


            }
        </div>
    )
}