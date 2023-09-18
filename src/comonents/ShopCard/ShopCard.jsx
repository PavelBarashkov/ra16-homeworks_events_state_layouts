/* eslint-disable react/prop-types */
import classes from './ShopCard.module.css';

export const ShopCard = ({data, module}) => {
  return (

    <>
        {module === 'view_list' ?
             <div className={classes.list}>
                <img src={data.img} alt={data.name} />
                <div className={classes.info}>
                    <div className={classes.title}>{data.name}</div>
                    <div>${data.price}</div>
                    <div>{data.color}</div>
                    <button className={classes.btn}>ADD TO CART</button>
                </div>
                
            </div>
            :
            <div className={classes.module}>
                <img className={classes.imgModule} src={data.img} alt={data.name} />
                <div className={classes.title}>{data.name}</div>
                <div>${data.price}</div>
                <div>{data.color}</div>
            </div>
        }
    </>

  )
}
