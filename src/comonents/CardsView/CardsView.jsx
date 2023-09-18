/* eslint-disable react/prop-types */
import { ShopCard } from '../ShopCard/ShopCard'

export const CardsView = ({data, module}) => {
  return (
    <>
        {data.map((item, index) => (
            <ShopCard key={index} data={item} module={module}/>
        ))}
    </>
        
  )
}
