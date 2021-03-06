import { RequestSettings, QueryParameters } from './mdm-common.model';
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
    remove(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    update(catalogueUserId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    get(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    save(catalogueUserId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    getUserImageFile(userId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
