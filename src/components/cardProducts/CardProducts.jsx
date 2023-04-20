import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const CardProducts = ({product}) => {
    
    const {_id, bandName, albumName, img, format, stock } = product;


  return (
    <div>
        <Link to={`/product/${_id}`}>
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
                src={img}
                alt="image"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <div>
                <h3 className="text-sm text-gray-700">{bandName} - {albumName}</h3>                
              </div>       
            </div>
            <div>
            <p className="flex text-sm font-medium text-gray-900 justify-center">
                {format}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
          {stock === 0 ? <h5 className="text-red-900">Sin Stock</h5> :  <Button>comprar</Button>}
          </div>
          
        </Link>
        
      </div>
  )
}

export default CardProducts