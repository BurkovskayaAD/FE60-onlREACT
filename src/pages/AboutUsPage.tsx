import { Link, Outlet } from "react-router-dom";

function AboutUsPage() {
    return ( 
        <>
        <Outlet/>
            <div> ABOUT US PAGE </div>
            <Link to="/aboutus/contact">Link</Link>
            
        </>
        
     );
}

export default AboutUsPage;