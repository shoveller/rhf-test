import {useForm} from "react-hook-form";

type FormType = {
    password: string
}

const Form3 = () => {
    const methods = useForm<FormType>({
        defaultValues: {
            password: ''
        }
    })
    const onSubmit = (data: { password: string }) => alert(data.password)
    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <input {...methods.register('password')} />
            <button type="submit">서브밋</button>
            <button type="reset" onClick={() => methods.reset()}>리셋</button>
        </form>
    )
}

export default Form3
