import {Controller, useForm} from "react-hook-form";

type FormType = {
    password: string
}

const Form8 = () => {
    const methods = useForm<FormType>({
        defaultValues: {
            password: '초깃값'
        }
    })
    const onValid = (data: { password: string }) => alert(data.password)
    return (
        <form onSubmit={methods.handleSubmit(onValid)}>
            <Controller name="password"
                        control={methods.control}
                        render={({field}) => {
                            return (
                                <input onChange={field.onChange}
                                       onBlur={field.onBlur}
                                       disabled={field.disabled}
                                       value={field.value}
                                       name={field.name}
                                       ref={field.ref}
                                />
                            )
                        }}
            />
            <button type="submit">서브밋</button>
            <button type="reset">리셋</button>
        </form>
    )
}

export default Form8
