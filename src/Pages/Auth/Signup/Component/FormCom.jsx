import { Form } from '@/components/ui/form'
import React from 'react'
import GenericFormInput from '@/shared/GenericFromInput'
import { Button } from '@/components/ui/button'
import { useSignUpPage } from '../hooks/useSignUp'
import { inputs } from '../utils/inputs'

const FormCom = () => {
    const { onSubmit, form, loading } = useSignUpPage()
  return (
    <div>
       <div className="md:max-w-[500px] mx-auto ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {inputs.map((elem, i) => (
            <GenericFormInput  key={i + elem.name} form={form} {...elem} />
          ))}
          <Button disabled={loading} type="submit">
            {loading ? "loading..." : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
    </div>
  )
}

export default FormCom
