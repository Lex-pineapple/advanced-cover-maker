import React from 'react';
import { Input } from '@components/form';

export function FormMain() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
