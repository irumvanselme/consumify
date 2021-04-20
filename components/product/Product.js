import Button from "../common/Button";

export default function Product({ product }){
    return (
        <div className="flex bg-gray-200 p-5 mb-5" style={{height: "200px"}}>
            <div className="w-2/12 text-center">
                <img src={product.images[0]} className="h-full" alt={product.name} />
            </div>
            <div className="w-10/12 flex justify-between ">
                <div>
                    <h1 className="text-lg font-bold">{ product.name }</h1>
                    <p className="mt-3 w-10/12">{product.description}</p>
                    <div className="mt-3">Ratings here</div>
                </div>
                <div className="w-3/12">
                    <Button>View more</Button>
                </div>
            </div>
        </div>
    )
}