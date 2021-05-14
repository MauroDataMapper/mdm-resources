import { RequestSettings, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 */
export declare class MdmNamespacesResource extends MdmResource {
    get(metadataId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
