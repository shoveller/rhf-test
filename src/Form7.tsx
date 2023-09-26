import {useController, useForm} from "react-hook-form";

type FormType = {
    password: string
}

const Form7 = () => {
    const methods = useForm<FormType>({
        defaultValues: {
            password: '초깃값'
        }
    })
    const onSubmit = (data: { password: string }) => alert(data.password)
    const {
        field
    } = useController({
        control: methods.control,
        name: 'password'
    })
    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <input onChange={field.onChange}
                   onBlur={field.onBlur}
                   disabled={field.disabled}
                   value={field.value}
                   name={field.name}
                   ref={field.ref}
            />
            <button type="submit">서브밋</button>
            <button type="reset">리셋</button>
        </form>
    )
}

export default Form7
