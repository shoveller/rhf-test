import {useForm} from "react-hook-form";

const Form3 = () => {
    const methods = useForm()

    return (
        <form onSubmit={methods.handleSubmit(data => alert(JSON.stringify(data)))}>
            <input {...methods.register('password')} />
            <button type="submit">서브밋</button>
            <button type="reset">리셋</button>
        </form>
    )
}

export default Form3
