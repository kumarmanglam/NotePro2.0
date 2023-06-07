import EditCard from '../EditCard';
import { MODAL_SEARCH_PARAMS } from './searchParams';

export const MODAL_COMPONENTS = {
  [MODAL_SEARCH_PARAMS.notes]: <EditCard mode={MODAL_SEARCH_PARAMS.notes} />,
  [MODAL_SEARCH_PARAMS.archive]: (
    <EditCard mode={MODAL_SEARCH_PARAMS.archive} />
  ),
  [MODAL_SEARCH_PARAMS.trash]: <EditCard mode={MODAL_SEARCH_PARAMS.trash} />,
};
