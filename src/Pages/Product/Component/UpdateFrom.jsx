import { input } from '@/Component/ShadCnForm/input'
import { Form } from '@/components/ui/form'
import GenericFormInput from '@/shared/GenericFromInput'
import React from 'react'
import { useUpdateForm } from '../Slug/hooks/useUpdateForm'
import { Button } from '@/components/ui/button'

const UpdateFrom = ({product}) => {
  const { onSubmit, form, isLoading } = useUpdateForm(product)
  return (
    <div>
      <h1 className='text-center text-5xl'>Update Product</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {
            input.map((elem,i)=>{
              return(
                <GenericFormInput {...elem} key={i} form={form}/>
              )
            })
          }
          <Button type='submit'>Submit</Button>
        </form>
        </Form>
    </div>
  )
}

export default UpdateFrom
