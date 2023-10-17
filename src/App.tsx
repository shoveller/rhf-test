import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <p><Link to="/rrd_jotai/en?s=1">jotai 의 onMount</Link></p>
            <p><Link to="/form1">제어 컴포넌트 이용하기</Link></p>
            <p><Link to="/form2">비제어 컴포넌트 이용하기</Link></p>
            <p><Link to="/form3">초깃값 설정하기</Link></p>
            <p><Link to="/form4">비동기 초깃값 설정하기</Link></p>
            <p><Link to="/form5">비 제어 컴포넌트 통합하기</Link></p>
            <p><Link to="/form6">비 제어 컴포넌트 리셋하기</Link></p>
            <p><Link to="/form7">useContoller 로 제어 컴포넌트 통합하기</Link></p>
            <p><Link to="/form8">Contoller 로 제어 컴포넌트 통합하기</Link></p>
            <p><Link to="/form9">제어 컴포넌트 리셋하기</Link></p>
            <p><Link to="/form10">새로운 값으로 제어 컴포넌트 리셋하기</Link></p>
            <p><Link to="/form11">새로운 값으로 비제어 컴포넌트 리셋하기</Link></p>
            <p><Link to="/form12">비제어 컴포넌트의 벨리데이션 처리하기</Link></p>
            <Outlet />
        </>
    )
}

export default App
