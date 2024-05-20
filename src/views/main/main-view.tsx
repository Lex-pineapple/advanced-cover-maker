import { Header, Sider } from '@components/layout';
import { EditorWorkplace } from '@components/layout/editor/editor-panel';

export function MainView() {
  return (
    <div className='main'>
      <Header />
      <Sider />
      <EditorWorkplace />
    </div>
  );
}
