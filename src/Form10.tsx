import {useController, useForm} from "react-hook-form";

type FormType = {
    password: string
}

const Form10 = () => {
    const methods = useForm<FormType>({
        defaultValues: {
            password: '초기 password'
        }
    })
    const onValid = (data: { password: string }) => alert(data.password)
    const {
        field
    } = useController({
        control: methods.control,
        name: 'password'
    })
    return (
        <form onSubmit={methods.handleSubmit(onValid, on)}>
            <input onChange={field.onChange}
                   onBlur={field.onBlur}
                   disabled={field.disabled}
                   value={field.value}
                   name={field.name}
                   ref={field.ref}
            />
            <button type="submit">서브밋</button>
            <button type="reset"
                    onClick={() => methods.reset({
                        password: '새로운 password'
                    })}
            >리셋</button>
        </form>
    )
}

export default Form10
