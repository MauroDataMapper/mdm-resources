import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: userImageFile
 |   GET    | /api/userImageFiles/${id}                                                                             | Action: show
 */
export declare class MdmUserImageFileResource extends MdmResource {
    get(userId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
