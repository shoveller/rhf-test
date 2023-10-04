import {useForm} from "react-hook-form";

type FormType = {
    password: string
}

const Form5 = () => {
    const methods = useForm<FormType>({
        defaultValues: {
            password: '초깃값'
        }
    })
    const onValid = (data: { password: string }) => alert(data.password);
    const {
        onChange,
        onBlur,
        ref,
        name,
        min,
        max,
        maxLength,
        minLength,
        pattern,
        required,
        disabled,
    } = methods.register('password')
    return (
        <form onSubmit={methods.handleSubmit(onValid)}>
            <input onChange={onChange}
                   onBlur={onBlur}
                   ref={ref}
                   name={name}
                   min={min}
                   max={max}
                   maxLength={maxLength}
                   minLength={minLength}
                   pattern={pattern}
                   required={required}
                   disabled={disabled}
                   defaultValue={methods.formState.defaultValues?.password}
            />
            <button type="submit">서브밋</button>
            <button type="reset">리셋</button>
        </form>
    )
}

export default Form5
