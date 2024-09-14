import { Editor } from '@components/editor';
import { Form } from '@components/form';
import { Panel } from '@components/panel';

import styles from './main.module.scss';

export function Main() {
  return (
    <div className={styles.root}>
      <Form />
      <Panel />
      <Editor />
    </div>
  );
}
