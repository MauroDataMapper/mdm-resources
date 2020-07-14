import { MdmResource } from './mdm-resource';
/**
 * Controller: folder
 |   POST   | /api/folders/${folderId}/folders                                                                      | Action: save
 |   GET    | /api/folders/${folderId}/folders                                                                      | Action: index
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
    post(id: any, action: any, options: any): any;
    save(data: any): any;
    saveChildrenOf(folderId: any, data: any): any;
    list(queryStringParams?: any): any;
    listChildrenOf(folderId: any, queryStringParams?: any): any;
    remove(folderId: any, queryStringParams?: any): any;
    removeChildOf(folderId: any, childId: any, queryStringParams?: any): any;
    update(folderId: any, data: any, queryStringParams?: any): any;
    updateChildOf(folderId: any, childId: any, data: any, queryStringParams?: any): any;
    get(folderId: any, queryStringParams?: any): any;
    getChildOf(folderId: any, childId: any, queryStringParams?: any): any;
    addCondeSets(folderId: any, data: any): any;
    codeSets(folderId: any, queryStringParams?: any): any;
    alterCodeSetFolder(codeSetId: any, folderId: any, data: any): any;
    addTerminologies(folderId: any, data: any): any;
    terminologies(folderId: any, queryStringParams?: any): any;
    alterTerminologyFolder(terminologyId: any, folderId: any, data: any): any;
}
