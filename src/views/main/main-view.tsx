import { Header, Sider } from '@components/layout';
import { EditorPanel } from '@components/layout/editor/editor-panel';

export function MainView() {
  return (
    <div className='main'>
      <Header />
      <Sider />
      <EditorPanel />
    </div>
  );
}
