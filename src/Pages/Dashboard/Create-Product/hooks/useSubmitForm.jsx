import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  price: z.string(),
  category: z.string().min(2),
});

export const useSubmitForm = () => {
  const [imageSrc, setimageSrc] = useState();
  const [imageFile, setimageFile] = useState();
  const navigate = useNavigate();
  const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  console.log(form.formState.errors);
  async function onSubmit(data) {
    if (!imageFile) return alert("Please Upload an Image");

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);

    console.log(data, "hhhhh");

    try {
      const res = await fetch("http://localhost:4002/Postproduct", {
        method: "POST",
        body: formData,
        // body: formData
      });
      console.log(res);
      const dta = await res.json()
      console.log(dta);
      toast({
        title: "Success ✅✅",
        description: "Product Created Successfully",
      });
      // if (datares.error) {
      //  toast({
      //    title: "Error ❌❌",
      //    description: datares.error.message,
      //  })

      // }

      navigate("/product");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error ❌❌",
        description: error.error.message,
      });
    }
  }
  function handleChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      setimageFile(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        setimageSrc(reader.result);
      };
    }
  }
  return { onSubmit, form, handleChange, imageSrc };
};
