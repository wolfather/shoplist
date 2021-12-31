import { Link } from 'react-router-dom';

export default function Header(props) {
    return(<>
        <div>
            <Link to='/shopcart'>shopcart</Link>
        </div>
        <h1>Shopping</h1>
    </>);
}