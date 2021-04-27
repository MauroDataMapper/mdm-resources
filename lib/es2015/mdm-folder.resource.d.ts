import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: folder
 |   POST   | /api/folders/${folderId}/folders                                                                      | Action: save
 |   GET    | /api/folders/${folderId}/folders                                                                      | Action: index
 |   GET    | /api/folders/${folderId}/search                                                                       | Action: search
 |   POST   | /api/folders/${folderId}/search                                                                       | Action: search
 |  DELETE  | /api/folders/${folderId}/readByAuthenticated                                                          | Action: readByAuthenticated
 |   PUT    | /api/folders/${folderId}/readByAuthenticated                                                          | Action: readByAuthenticated
 |  DELETE  | /api/folders/${folderId}/readByEveryone                                                               | Action: readByEveryone
 |   PUT    | /api/folders/${folderId}/readByEveryone                                                               | Action: readByEveryone
 |  DELETE  | /api/folders/${folderId}/folders/${id}                                                                | Action: delete
 |   PUT    | /api/folders/${folderId}/folders/${id}                                                                | Action: update
 |   GET    | /api/folders/${folderId}/folders/${id}                                                                | Action: show
 |   POST   | /api/folders                                                                                          | Action: save
 |   GET    | /api/folders                                                                                          | Action: index
 |  DELETE  | /api/folders/${id}                                                                                    | Action: delete
 |   PUT    | /api/folders/${id}                                                                                    | Action: update
 |   GET    | /api/folders/${id}                                                                                    | Action: show
 */
export declare class MdmFolderResource extends MdmResource {
    search(folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    searchByGet(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    save(data: any, restHandlerOptions?: MdmRequestOptions): any;
    saveChildrenOf(folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listChildrenOf(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeChildOf(folderId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(folderId: string, data: any, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateChildOf(folderId: string, childId: string, data: any, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    get(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    getChildOf(folderId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    addCondeSets(folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    codeSets(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    alterCodeSetFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    addTerminologies(folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    terminologies(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    alterTerminologyFolder(terminologyId: string, folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByAuthenticated(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByAuthenticated(folderId: string, data?: any, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByEveryone(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByEveryone(folderId: string, data?: any, restHandlerOptions?: MdmRequestOptions): any;
}
