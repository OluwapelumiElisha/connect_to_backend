import { toast } from "@/components/ui/use-toast";
import { useCurrentUser } from "@/shared/hook/useCurrentUser";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";


const formSchema = z.object({
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  gender: z.enum(["male", "female"]).optional(),
  phone: z.string().nonempty("Phone number is required"),
});
export const useSignUpPage = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()
  const { currentUser } = useCurrentUser()


  useEffect(() => {
    if (currentUser?.email) {
      navigate("/about");
    }
  }, [currentUser]);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  console.log(form.formState.errors);

  const onSubmit = async (data) => {
    setloading(true)
    try {
      const res = await axios.post('http://localhost:4002/signUp', data)
      console.log(res);
      toast({
        title: "Success",
        description: `${res?.data?.firstName} Welcome to Our Website pls login`,
      });
      navigate('/auth/login')
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        toast({
          title: `Hello ${data.firstName}`,
          description: 'Email Already Exit',
        });
      }
    }
    finally {
      setloading(false)
    }
  }





  return {
    loading,
    form,
    onSubmit
  }
}