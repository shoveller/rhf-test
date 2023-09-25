import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <p><Link to="/form1">폼 사용법 1</Link></p>
            <p><Link to="/form2">폼 사용법 2</Link></p>
            <p><Link to="/form3">폼 사용법 3</Link></p>
            <p><Link to="/form4">폼 사용법 4</Link></p>
            <p><Link to="/form5">폼 사용법 5</Link></p>
            <p><Link to="/form6">폼 사용법 6</Link></p>
            <p><Link to="/initialValues">초깃값 설정</Link></p>
            <Outlet />
        </>
    )
}

export default App
