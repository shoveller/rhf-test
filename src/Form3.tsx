import {useForm} from "react-hook-form";

const Form3 = () => {
    const {register ,reset, handleSubmit} = useForm<{ password: string }>()
    const onSubmit = (data: { password: string }) => alert(data.password)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('password')} />
            <button type="submit">서브밋</button>
            <button type="reset" onClick={() => reset()}>리셋</button>
        </form>
    )
}

export default Form3
