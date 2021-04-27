import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: userImageFile
 |  DELETE  | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: delete
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: update
 |   GET    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: show
 |   POST   | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: save
 |   GET    | /api/userImageFiles/${id}
 */
export declare class MdmUserImageFileResource extends MdmResource {
    remove(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(catalogueUserId: string, data?: any, restHandlerOptions?: MdmRequestOptions): any;
    get(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    save(catalogueUserId: string, data?: any, restHandlerOptions?: MdmRequestOptions): any;
    getUserImageFile(userId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
