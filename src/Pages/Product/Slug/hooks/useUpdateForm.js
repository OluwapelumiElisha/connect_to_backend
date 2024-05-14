import { toast } from "@/components/ui/use-toast";
import { publicRequest } from "@/shared/API/Request";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod"


const formSchema = z.object({
    title: z.string('Title must be a string').min(2),
    description: z.string('Description must be a string').min(5),
    price: z.any(),
    category: z.string('Category must be a string').min(2)
})

export const useUpdateForm = (product) =>{
    const [isLoading, setisLoading] = useState(false);
    const { id } = useParams()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: product
    })
    const onSubmit = async(data) =>{
        setisLoading(true)
        try {
            const res = await axios.patch(`http://localhost:4002/updateProduct/${id}`, data)
            // const res = await publicRequest.patch(`/updateProduct/${id}`)
        console.log(res);
        toast({
            title: 'Success ✅✅',
            description: 'Product Updated Successfully',
        })
        } catch (error) {
            console.log(error);
        }
    } 
    // useEffect(()=>{
    //     onSubmit()
        
    // },)

    return {
        form,
        isLoading,
        onSubmit,
        
    }
} 