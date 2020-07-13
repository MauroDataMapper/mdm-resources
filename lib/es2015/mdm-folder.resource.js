/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
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
export class MdmFolderResource extends MdmResource {
    //   get(id, action, options?) {
    //     if (!options) {
    //       options = {};
    //     }
    //     return this.getResource('folders', id, action, options);
    //   }
    post(id, action, options) {
        return this.postResource('folders', id, action, options);
    }
    //   put(id, action, options) {
    //     return this.putResource('folders', id, action, options);
    //   }
    //   delete(id, action, queryString) {
    //     return this.deleteResource('folders', id, action, queryString, null);
    //   }
    save(data, options) {
        const url = `${this.apiEndpoint}/folders`;
        return this.simplePost(url, data, options);
    }
    saveChildrenOf(folderId, data, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders`;
        return this.simplePost(url, data, options);
    }
    list(options = {}) {
        const url = `${this.apiEndpoint}/folders`;
        return this.simpleGet(url, options);
    }
    listChildrenOf(folderId, options = {}) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders`;
        return this.simpleGet(url, options);
    }
    remove(folderId, options = {}) {
        const url = `${this.apiEndpoint}/folders/${folderId}?permanent=${!!options.permanant}`;
        return this.simpleDelete(url, options);
    }
    removeChildOf(folderId, childId, options = {}) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}?permanent=${!!options.permanant}`;
        return this.simpleDelete(url, options);
    }
    update(folderId, data, options = {}) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simplePut(url, data, options);
    }
    updateChildOf(folderId, childId, data, options = {}) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simplePut(url, data, options);
    }
    get(folderId, options = {}) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simpleGet(url, options);
    }
    getChildOf(folderId, childId, options = {}) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simpleGet(url, options);
    }
}
//# sourceMappingURL=mdm-folder.resource.js.map