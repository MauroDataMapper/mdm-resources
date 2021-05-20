/*
Copyright 2021 University of Oxford

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

/*
Controller: versionedFolder
 |   POST   | /api/versionedFolders/${versionedFolderId}/versionedFolders                                                                                                                      | Action: save
 |   GET    | /api/versionedFolders/${versionedFolderId}/versionedFolders                                                                                                                      | Action: index
 |   POST   | /api/folders/${folderId}/versionedFolders                                                                                                                                        | Action: save
 |   GET    | /api/folders/${folderId}/versionedFolders                                                                                                                                        | Action: index
 |   GET    | /api/versionedFolders/${versionedFolderId}/search                                                                                                                                | Action: search
 |   POST   | /api/versionedFolders/${versionedFolderId}/search                                                                                                                                | Action: search
 |  DELETE  | /api/versionedFolders/${versionedFolderId}/readByAuthenticated                                                                                                                   | Action: readByAuthenticated
 |   PUT    | /api/versionedFolders/${versionedFolderId}/readByAuthenticated                                                                                                                   | Action: readByAuthenticated
 |  DELETE  | /api/versionedFolders/${versionedFolderId}/readByEveryone                                                                                                                        | Action: readByEveryone
 |   PUT    | /api/versionedFolders/${versionedFolderId}/readByEveryone                                                                                                                        | Action: readByEveryone
 |  DELETE  | /api/versionedFolders/${versionedFolderId}/versionedFolders/${id}                                                                                                                | Action: delete
 |   PUT    | /api/versionedFolders/${versionedFolderId}/versionedFolders/${id}                                                                                                                | Action: update
 |   GET    | /api/versionedFolders/${versionedFolderId}/versionedFolders/${id}                                                                                                                | Action: show
 |  DELETE  | /api/folders/${folderId}/versionedFolders/${id}                                                                                                                                  | Action: delete
 |   PUT    | /api/folders/${folderId}/versionedFolders/${id}                                                                                                                                  | Action: update
 |   GET    | /api/folders/${folderId}/versionedFolders/${id}                                                                                                                                  | Action: show
 |   POST   | /api/versionedFolders                                                                                                                                                            | Action: save
 |   GET    | /api/versionedFolders                                                                                                                                                            | Action: index
 |  DELETE  | /api/versionedFolders/${id}                                                                                                                                                      | Action: delete
 |   PUT    | /api/versionedFolders/${id}                                                                                                                                                      | Action: update
 |   GET    | /api/versionedFolders/${id}                                                                                                                                                      | Action: show               
*/

/**
 * MDM resource for the management of Versioned Folders in Mauro.
 */
export class MdmVersionedFolderResource extends MdmResource {

}