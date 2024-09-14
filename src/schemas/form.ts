import * as yup from 'yup';
import { InferType } from 'yup';

export const formSchema = yup.object().shape({
  author: yup.string(),
  title: yup.string(),
  year: yup.number(),
  series: yup.string(),
});

export type formSchemaType = InferType<typeof formSchema>;
