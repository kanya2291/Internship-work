import { Link ,Outlet } from 'react-router-dom'
function Products(){
    return(
        <div>
            <div>
            <input type="search"  placeholder="search product"/>
            </div>
            <nav>
            <Link to='features' >Features</Link>
            <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </div>
    )
}
export default Products