import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

type FormType = {
    password: string
}

const Form12 = () => {
    const methods = useForm<FormType>({
        defaultValues: {
            password: ''
        }
    })
    const onSubmit = (data: { password: string }) => alert(data.password)
    console.log(methods.formState);
    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <label>
                <input {...methods.register('password', {
                    required: {
                        value: true,
                        message: '필숫값입니다.'
                    }
                })} />
                {
                    !methods.formState.isValid &&
                    <span>{methods.formState.errors.password?.message}</span>
                }
                <ErrorMessage name="password"
                              as="span"
                              errors={methods.formState.errors}
                />
            </label>
            <button type="submit">서브밋</button>
            <button type="reset" onClick={() => methods.reset()}>리셋</button>
        </form>
    )
}

export default Form12
