import {useForm} from "react-hook-form";

type FormType = { password: string }

const getDefaultValue = () => {
    return new Promise<FormType>((resolve) => {
        setTimeout(() => {
            resolve({
                password: '초깃값'
            })
        }, 2000)
    })
}

const InitialValues = () => {
    const methods = useForm<FormType>({
        defaultValues: () => getDefaultValue()
    })
    const onSubmit = (data: FormType) => alert(data.password)

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <input {...methods.register('password')} />
            <button type="submit">서브밋</button>
            <button type="reset" onClick={() => methods.reset()}>리셋</button>
        </form>
    )
}

export default InitialValues
