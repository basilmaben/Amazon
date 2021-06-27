import Product from './Product'
import './Home.css'

function Home(){
    return(
        <div className = "home">
            <img className = "home__image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_9Power/GW/Updated/Tallhero_1500x600._CB413234165_.jpg"
             alt =""/>
             <div className = "home__row">
                 <Product
                    id = "121314"
                    title = "Apple Airpods Pro"
                    price = {249.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"               
                 />
                  <Product
                    id = "121314"
                    title = "Mi Smart Band 4"
                    price = {49.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg"
                 />

                  <Product
                    id = "121314"
                    title = "Apple Airpods Pro"
                    price = {249.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
                 />
             </div>
             <div className = "home__row">
                 <Product
                    id = "121314"
                    title = "Apple Airpods Pro"
                    price = {249.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"               
                 />
                  <Product
                    id = "121314"
                    title = "Mi Smart Band 4"
                    price = {49.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg"
                 />

                  <Product
                    id = "121314"
                    title = "Apple Airpods Pro"
                    price = {249.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
                 />
                 <Product
                    id = "121314"
                    title = "Apple Airpods Pro"
                    price = {249.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
                 />
             </div>
             <div className = "home__row">
                 <Product
                    id = "121314"
                    title = "Apple Airpods Pro"
                    price = {249.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"               
                 />
                  <Product
                    id = "121314"
                    title = "Mi Smart Band 4"
                    price = {49.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg"
                 />
                 </div>
        </div>

    )
}
export default Home