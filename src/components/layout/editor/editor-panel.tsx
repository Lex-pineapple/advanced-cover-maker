import { useFormContext } from '@contexts/app-context/form-context';
import { FormContextType } from '@ts/types/form.types';

import { Editor } from './editor';

export function EditorWorkplace() {
  const formContext: FormContextType = useFormContext();

  const {
    dimensions: [storeDimensions, setStoreDimensions],
  } = formContext.settingData;

  return (
    <div className='editor-workplace'>
      <Editor size={storeDimensions} />
    </div>
  );
}
