import { MdmResource } from './mdm-resource';
/**
 * Controller: codeSet
 |   GET    | /api/codeSets/providers/importers                                                                          | Action: importerProviders                       |
 |   GET    | /api/codeSets/providers/exporters                                                                          | Action: exporterProviders                       |
 |   POST   | /api/codeSets/import/${importerNamespace}/${importerName}/${importerVersion}                               | Action: importModels                            |
 |   POST   | /api/codeSets/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModels                            |
 |  DELETE  | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |   PUT    | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |  DELETE  | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/newModelVersion                                                                 | Action: newModelVersion                         |
 |   PUT    | /api/codeSets/${codeSetId}/newDocumentationVersion                                                         | Action: newDocumentationVersion                 |
 |   PUT    | /api/codeSets/${codeSetId}/finalise                                                                        | Action: finalise                                |
 |   POST   | /api/folders/${folderId}/codeSets                                                                          | Action: save                                    |
 |   GET    | /api/folders/${folderId}/codeSets                                                                          | Action: index                                   |
 |  DELETE  | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/folder/${folderId}                                                              | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/diff/${otherModelId}                                                            | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/codeSets/${codeSetId}                                                             | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                  | Action: exportModel                             |
 |   GET    | /api/codeSets                                                                                              | Action: index                                   |
 |  DELETE  | /api/codeSets                                                                                              | Action: deleteAll                               |
 |  DELETE  | /api/codeSets/${id}                                                                                        | Action: delete                                  |
 |   PUT    | /api/codeSets/${id}                                                                                        | Action: update                                  |
 |   GET    | /api/codeSets/${id}                                                                                        | Action: show
 */
export declare class MdmCodeSetResource extends MdmResource {
    importers(queryStringParams?: any, restHandlerOptions?: any): any;
    exporters(queryStringParams?: any, restHandlerOptions?: any): any;
    importModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: any): any;
    exportModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: any): any;
    newModelVersion(codeSetId: any, data: any, restHandlerOptions?: any): any;
    newDocumentationVersion(codeSetId: any, data: any, restHandlerOptions?: any): any;
    finalise(codeSetId: any, data?: any, restHandlerOptions?: any): any;
    addCodeSetsToFolder(folderId: any, data: any, restHandlerOptions?: any): any;
    listCodeSetsInFolder(folderId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeTerm(codeSetId: any, termId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    alterTerm(codeSetId: any, termId: any, data: any, restHandlerOptions?: any): any;
    alterFolder(codeSetId: any, folderId: any, data: any, restHandlerOptions?: any): any;
    diff(codeSetId: any, otherModelId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    exportModel(codeSetId: any, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: any, restHandlerOptions?: any): any;
    list(queryStringParams?: any, restHandlerOptions?: any): any;
    removeAll(queryStringParams?: any, restHandlerOptions?: any): any;
    remove(codeSetId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(codeSetId: any, data: any, restHandlerOptions?: any): any;
    get(codeSetId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    terms(codeSetId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeReadByAuthenticated(codeSetId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateReadByAuthenticated(codeSetId: any, data?: any, restHandlerOptions?: any): any;
    removeReadByEveryone(codeSetId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateReadByEveryone(codeSetId: any, data?: any, restHandlerOptions?: any): any;
}
