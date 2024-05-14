import { toast } from "@/components/ui/use-toast";
import { useCurrentUser } from "@/shared/hook/useCurrentUser";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";




const formSchema = z.object({
  // const navigate 
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
   
  });

  export const useLogin = () =>{
   const { currentUser } = useCurrentUser()
    const [loading, setloading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
      if (currentUser?.email) {
        navigate("/about");
      }
    }, [currentUser]);
    // const [, set] = useState();
    const form = useForm({
      resolver: zodResolver(formSchema),
    });
    const  onSubmit = async (data) => {
      // console.log(data);
      setloading(true)
      
 
      try {
          const res = await axios.post('http://localhost:4002/Login', data)
          console.log(res, 'dfgdfgf');
          localStorage.setItem('token', res.data.token)
          console.log(currentUser);
          toast({
               title: "Success ✅✅",
              description: `You are Logged in`,
            });
            
            navigate('/about')
      } catch (error) {
          console.log(error);
          if(error){
              toast({
                  title: 'Hello',
                  description:  `${error?.response?.data?.message}`,
                });
          }
      }
      finally{
          setloading(false)
      }
    }
    return{
      onSubmit,
      form,
      loading,
      
    }
  }

