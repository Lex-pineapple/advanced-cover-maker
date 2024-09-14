import { Editor } from '@components/editor';
import { Form } from '@components/form';
import { Panel } from '@components/panel';

export function Main() {
  return (
    <div>
      <Form />
      <Panel />
      <Editor />
    </div>
  );
}
