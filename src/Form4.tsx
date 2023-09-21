import {FieldValues, FormProvider, useForm, SubmitHandler, SubmitErrorHandler, FieldPath , useFormContext} from "react-hook-form";
import {PropsWithChildren} from "react";

type RHFormType<FormType extends FieldValues> = {
  onValid: SubmitHandler<FormType>
  onInvalid: SubmitErrorHandler<FormType>
}

const RHForm = <FormType extends FieldValues>({ children, onValid, onInvalid }: PropsWithChildren<RHFormType<FormType>>) => {
  const methods = useForm<FormType>()

  return (
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onValid, onInvalid)}>{children}</form>
      </FormProvider>
  )
}

type RHInputType<FormType extends FieldValues> = {
  name: FieldPath<FormType>
}

const RHInput = <FormType extends FieldValues>({ name }: RHInputType<FormType>) => {
  const { register } = useFormContext<FormType>();

  return <input {...register(name)} />
}

const SubmitButton = <FormType extends FieldValues>({ children }: PropsWithChildren<FormType>) => {
  return <button type="submit">{children}</button>
}

const ResetButton = <FormType extends FieldValues>({ children }: PropsWithChildren<FormType>) => {
  const { reset } = useFormContext<FormType>()

  return <button type="reset" onClick={() => reset()}>{children}</button>
}

type FormType = {
  password?: string
}

const Form4 = () => {
  const onValid = (data: FormType) => alert(data.password)

  return (
      <RHForm<FormType> onValid={onValid} onInvalid={alert}>
        <RHInput<FormType> name="password" />
        <SubmitButton>서브밋</SubmitButton>
        <ResetButton<FormType>>리셋</ResetButton>
      </RHForm>
  )
}

export default Form4
