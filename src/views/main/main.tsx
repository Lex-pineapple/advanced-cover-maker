import { Editor } from '@components/editor';
import { Form } from '@components/form';
import { Panel } from '@components/panel';

import styles from './main.module.scss';
import { Sidebar } from '@components/sidebar';

export function Main() {
  return (
    <div className={styles.root}>
      <Sidebar className={styles.sidebar} />
      <Form className={styles.form} />
      <Panel className={styles.panel} />
      <Editor className={styles.editor} />
    </div>
  );
}
