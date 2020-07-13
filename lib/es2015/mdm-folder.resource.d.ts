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
    save(data: any, options?: any): any;
    saveChildrenOf(folderId: any, data: any, options?: any): any;
    list(options?: {}): any;
    listChildrenOf(folderId: any, options?: {}): any;
    remove(folderId: any, options?: any): any;
    removeChildOf(folderId: any, childId: any, options?: any): any;
    update(folderId: any, data: any, options?: {}): any;
    updateChildOf(folderId: any, childId: any, data: any, options?: {}): any;
    get(folderId: any, options?: {}): any;
    getChildOf(folderId: any, childId: any, options?: {}): any;
}
