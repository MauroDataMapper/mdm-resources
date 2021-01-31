import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: userImageFile
 |  DELETE  | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: delete
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: update
 |   GET    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: show
 |   POST   | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: save
 |   GET    | /api/userImageFiles/${id}
 */
export declare class MdmUserImageFileResource extends MdmResource {
    remove(catalogueUserId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(catalogueUserId: string, data?: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(catalogueUserId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    save(catalogueUserId: string, data?: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getUserImageFile(userId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
