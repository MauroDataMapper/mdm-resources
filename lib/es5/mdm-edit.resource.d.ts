import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: edit
 |   GET    | /api/${resourceDomainType}/${resourceId}/edits                                                        | Action: index
 */
export declare class MdmEditResource extends MdmResource {
    status(resourceDomainType: any, resourceId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
