import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { input } from './input'
import { Input } from '@/components/ui/input'
import GenericFromInput from '@/shared/GenericFromInput'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'


const ShadCnForm = () => {
  const { toast } = useToast();
    const formSchema = z.object({
        title:z.string().min(2.),
        description: z.string().min(2),
        price:z.string(),
        category: z.string().min(2),
        image: z.string().url()
      
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
          
        }  
    })
    console.log(form.formState.errors);
  async  function onSubmit(data) {
    console.log(data);
    toast({
      title: "Success ✅✅",
      description: "Product Created Successfully",
    });
    try {
       const res = await fetch("http://localhost:4002/Postproduct",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
       })
       const datares = await res.json()
       console.log(datares);
      //  setreaction(Math.random())
  
    } catch (error) {
      console.log(error);
    }
   

        
        alert('Form Submitted')

    }
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    {/* <FecthProduct reaction={reaction}/> */}
    </>
  )
}


export default  ShadCnForm
//   <FormField
          //   control={form.control}
          //   name={input.name}
          //   render={({ field }) => (
          //     <FormItem>
          //       <FormLabel>{input.label}</FormLabel>
          //       <FormControl>
          //         <Input placeholder={input.placeholder} {...field} />
          //       </FormControl>
          //       <FormDescription>
          //        {input.description}
          //       </FormDescription>
          //       <FormMessage />
          //     </FormItem>
          //   )}
          // />