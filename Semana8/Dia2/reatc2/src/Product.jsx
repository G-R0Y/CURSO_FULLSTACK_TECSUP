import { productos1 } from "./productos.js"

function Product() {
    const datos = productos1.map((info,i) => {
        return (
            <div key={i}>

                <div className="card" >
                    <img src={info.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{info.title}</h5>
                        <p className="card-text">{info.description}</p>
                        <div className="d-flex justify-content-between">
                            <p> ${info.price}</p>
                            <p>rate: {info.rating.rate}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="d-flex justify-content-center gap-5" >
            {datos}
        </div>
    )
}
export default Product;