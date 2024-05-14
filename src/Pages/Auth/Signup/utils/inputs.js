export const inputs = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your First name",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your Last name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your  Email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
      required: true,
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
      placeholder: "Enter your Phone Number",
      required: true,
    },
  ];