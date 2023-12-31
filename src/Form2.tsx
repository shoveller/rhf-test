import {FormEventHandler} from "react";

const Form2 = () => {
  const onValid: FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget);
      const { password } =Object.fromEntries(formData.entries())
      alert(password)
  }

  return (
    <form onSubmit={onValid}>
        <input name="password" />
        <button type="submit">서브밋</button>
        <button type="reset">리셋</button>
    </form>
  )
}

export default Form2
