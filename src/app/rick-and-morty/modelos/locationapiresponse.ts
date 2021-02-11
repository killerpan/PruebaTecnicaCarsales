import { PagingInfo } from './paginginfo';
import { Location } from './location';

export class LocationApiResponse {
  info!: PagingInfo;
  results!: Location[];
}
