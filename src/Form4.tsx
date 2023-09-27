import {useForm} from "react-hook-form";

type FormType = {
    password: string
}

const defaultValues =  () => fetch('/init').then<FormType>(res => res.json())

const Form4 = () => {
    const methods = useForm<FormType>({
        defaultValues
    })
    const onValid = (data: { password: string }) => alert(data.password)
    return (
        <form onValid={methods.handleSubmit(onValid)}>
            <input {...methods.register('password')} />
            <button type="submit">서브밋</button>
            <button type="reset">리셋</button>
        </form>
    )
}

export default Form4
