import React from 'react'
import { useLogin } from '../hooks/useLogin'
// import { Form } from 'react-router-dom'
import GenericFormInput from '@/shared/GenericFromInput'
import { logininp } from '../uils/inp'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

const FormCom = () => {
  const { onSubmit, form, loading, } = useLogin()
  return (
    <div>
       <div className="md:max-w-[500px] mx-auto ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {logininp.map((elem, i) => (
            <GenericFormInput  key={i + elem.name} form={form} {...elem} />
          ))}
          {/* <Button disabled={loading} type="submit">
            {loading ? "loading..." : "Login"}
          </Button> */}
          <Button disabled={loading} type="submit">
            {loading ? "loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
    </div>
  
  )
}

export default FormCom
