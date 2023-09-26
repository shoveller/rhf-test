import {useController, useForm} from "react-hook-form";

type FormType = {
    id: string
    password: string
}

const Form11 = () => {
    const methods = useForm<FormType>({
        defaultValues: {
            id: '초기 id',
            password: '초기 password'
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
            <input {...methods.register('id')}
                   defaultValue={methods.formState.defaultValues?.id}
            />
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
                        id: '새로운 id',
                        password: '새로운 password'
                    })}
            >리셋</button>
        </form>
    )
}

export default Form11
