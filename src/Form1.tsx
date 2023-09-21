import {FormEventHandler, KeyboardEventHandler, useRef} from "react";

function Form1() {
    const ref = useRef<HTMLInputElement>(null)
    const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            alert(ref.current?.value);
        }
    }
    const handleSubmit = () => {
        alert(ref.current?.value);
    }
    const handleReset = () => {
        if (ref.current) {
            ref.current.value = ''
        }
    }
    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <input name="password" ref={ref} onKeyUp={onKeyUp}/>
            <button onClick={handleSubmit}>서브밋</button>
            <button onClick={handleReset}>리셋</button>
        </form>
    )
}

export default Form1
