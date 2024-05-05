import { useFormContext } from '@contexts/app-context/form-context';

import { Editor } from './editor';

export function EditorPanel() {
  const {
    dimensions: [storeDimensions],
  } = useFormContext();

  return <Editor size={storeDimensions} />;
}
