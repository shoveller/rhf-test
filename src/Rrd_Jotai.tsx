import {useMemo } from "react";
import {atom, useAtomValue} from "jotai";
import {useParams, useSearchParams} from "react-router-dom";

type Query = {
    s: string
}

const Rrd_Jotai = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const params = useParams<{ locale: string }>()
    const paramsAtom = useMemo(() => {
        const data = Object.fromEntries(searchParams.entries()) as Query
        const baseAtom = atom<Query | null>(null)
        baseAtom.onMount = (set) => {
            set(data)
        }

        return baseAtom
    }, [searchParams])
    const pathParamsAtom = useMemo(() => {
        const baseAtom = atom<{ locale?: string }>({ locale: '' })
        baseAtom.onMount = (set) => {
            set(params)
        }

        return baseAtom
    }, [params])
    const data = useAtomValue(paramsAtom);
    const path = useAtomValue(pathParamsAtom)


    // const ref = useRef<HTMLDivElement>(null)
    // const mountingAtom = useMemo(() => {
    //     const baseAtom = atom<HTMLDivElement | null>(
    //         (get) => get(htmlRefAtom),
    //         (get, set, arg) => set(htmlRefAtom, arg)
    //     )
    //     baseAtom.onMount = (set) => {
    //         debugger
    //         set(ref.current)
    //     }
    //     return baseAtom
    // }, [])
    // const [div] = useAtom(mountingAtom)
    // console.log(div?.innerText);
    // return (
    //     <div ref={ref}>Hello</div>
    // )
    return (
      <>
        <div>{data?.s} {path?.locale}</div>
          <button onClick={() => setSearchParams({ s: `${Number(searchParams.get('s')) + 1}` })}>+1</button>
      </>
    )
}

export default Rrd_Jotai
