import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    title: z.string().min(1)
})

const Form = () => {
    const formRef = useRef()
    const { register,
        handleSubmit,
        formState: { errors }, 
    } = useForm({
        resolver:zodResolver(formSchema)
    })
    console.log(errors, 'errors');
    function onSubmit(data) {
        console.log(data);
        alert('Form is successfully Submited')
    }
  return (
    <div>
      <form ref={formRef} action="" className='container my-3' onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Title" {...register('title')} />
        {errors.title && <p className='text-red-400'>{errors.title.message}</p>}
        <Input {...register('email')}  type="Email" placeholder="Email" className="my-3"/>
        {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
        <Input {...register('password')} type="Password" placeholder="Password"/>
        {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
        <Button className="bg-orange-400 mt-3"> Submit </Button>
      </form>
    </div>
  )
}

export default Form

