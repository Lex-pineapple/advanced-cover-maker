import { Input } from '@components/form';
import { useFormContext } from '@contexts/app-context/form-context';

type FormInputs = {
  title: string;
  author: string;
  year: number;
};

export function FormMain() {
  const {
    title: [storeTitle, setStoreTitle],
  } = useFormContext();

  return (
    <form>
      <Input name='title' type='text'>
        Book title
      </Input>
      <Input name='author' type='text'>
        Author
      </Input>
      <Input name='year' type='number'>
        Year of publishing
      </Input>
      <Input name='author' type='text'>
        Author
      </Input>
      <Input name='series' type='text'>
        Series
      </Input>
    </form>
  );
}
