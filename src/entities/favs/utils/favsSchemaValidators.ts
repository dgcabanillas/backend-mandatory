import * as yup from "yup";

export const createFavsSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required("Email is required"),
    favs: yup.array(
      yup.object({
        title: yup
          .string()
          .max(30, "title must be at max 30 characters")
          .required("title is required"),
        description: yup
          .string()
          .max(200, "description must be at max 200 characters")
          .required("description is required"),
        link: yup
          .string()
          .required("link is required"),
      })
    ),
  })
});