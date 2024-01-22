import { RiArticleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Articles(){
    return (
        <>
        <div id="side-menu">
           <Link to={`/add-article`}> <div id="side-menu-item"><RiArticleLine/>New Article</div></Link>
        </div>
        <div class="bg-box">
        Articles
        </div>
        
        </>
    )
}