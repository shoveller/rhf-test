import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {rest, setupWorker} from 'msw';
import Form1 from "./Form1.tsx";
import Form2 from "./Form2.tsx";
import Form3 from "./Form3.tsx";
import Form4 from "./Form4.tsx";
import Form5 from "./Form5.tsx";
import Form6 from "./Form6.tsx";
import Form7 from "./Form7.tsx";
import Form8 from "./Form8.tsx";
import Form9 from "./Form9.tsx";
import Form10 from "./Form10.tsx";
import Form11 from "./Form11.tsx";
import Form12 from "./Form12.tsx";
import Rrd_Jotai from "./Rrd_Jotai.tsx";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="rrd_jotai/:locale" element={<Rrd_Jotai/>}/>
        <Route path="form1" element={<Form1/>}/>
        <Route path="form2" element={<Form2/>}/>
        <Route path="form3" element={<Form3/>}/>
        <Route path="form4" element={<Form4/>}/>
        <Route path="form5" element={<Form5/>}/>
        <Route path="form6" element={<Form6/>}/>
        <Route path="form7" element={<Form7/>}/>
        <Route path="form8" element={<Form8/>}/>
        <Route path="form9" element={<Form9/>}/>
        <Route path="form10" element={<Form10/>}/>
        <Route path="form11" element={<Form11/>}/>
        <Route path="form12" element={<Form12/>}/>
    </Route>
))

setupWorker(
    rest.get('/init', (_, res, ctx) => {
        return res(
            ctx.delay(3000),
            ctx.status(200),
            ctx.json({
                password: '비동기 초깃값'
            })
        )
    })
).start()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
