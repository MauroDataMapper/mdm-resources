import { MdmResource } from './mdm-resource';
/**
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 */
export declare class MdmNamespacesResource extends MdmResource {
    get(metadataId?: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
