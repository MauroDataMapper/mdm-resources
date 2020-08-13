import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: edit
 |   GET    | /api/${resourceDomainType}/${resourceId}/edits                                                        | Action: index
 */
export declare class MdmEditResource extends MdmResource {
    status(resourceDomainType: any, resourceId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
