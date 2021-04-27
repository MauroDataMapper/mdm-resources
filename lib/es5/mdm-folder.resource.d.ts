import { RequestOptions, QueryParameters } from 'mdm-common.model';
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
    search(folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    searchByGet(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    save(data: any, restHandlerOptions?: RequestOptions): any;
    saveChildrenOf(folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    listChildrenOf(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeChildOf(folderId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(folderId: string, data: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateChildOf(folderId: string, childId: string, data: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    get(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    getChildOf(folderId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    addCondeSets(folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    codeSets(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    alterCodeSetFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    addTerminologies(folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    terminologies(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    alterTerminologyFolder(terminologyId: string, folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    removeReadByAuthenticated(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByAuthenticated(folderId: string, data?: any, restHandlerOptions?: RequestOptions): any;
    removeReadByEveryone(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByEveryone(folderId: string, data?: any, restHandlerOptions?: RequestOptions): any;
}
