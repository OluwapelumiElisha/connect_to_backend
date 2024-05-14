import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import GenericFromInput from '@/shared/GenericFromInput'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { input } from '@/Component/ShadCnForm/input'
import { useSubmitForm } from '../hooks/useSubmitForm'


const FromCom = () => {
 const { onSubmit, form, handleChange, imageSrc } = useSubmitForm();
  return (
    <>
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {
          input.map((input,i)=>{
          return(
            <GenericFromInput key={i} form={form} {...input}/>
          )
          })
        }
         
            <div className="flex">
              <input onChange={handleChange} type="file" className="" />
              <img
                className="w-[100px] h-[100px] rounded-full shadow object-cover"
                src={imageSrc}
                alt=""
              />
            </div>
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
    </div>
    </>
  )
}


export default  FromCom