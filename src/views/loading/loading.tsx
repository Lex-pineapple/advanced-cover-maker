import { Loader } from '@components/animated/loader';
import { DetailedComponentProps } from '@ts/types/general.types';

import '@views/loading/loading.scss';

type LoadingProps = {
    header?: JSX.Element;
};

export function Loading(props: DetailedComponentProps<LoadingProps>) {
    return (
        <div className='loading'>
            {props.header}
            <Loader />
        </div>
    );
}
