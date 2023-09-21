import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <p><Link to="/form1">폼 사용법 1</Link></p>
            <p><Link to="/form2">폼 사용법 2</Link></p>
            <p><Link to="/form3">폼 사용법 3</Link></p>
            <Outlet />
        </>
    )
}

export default App