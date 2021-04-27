import { RequestOptions, QueryParameters } from 'mdm-common.model';
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
 |   GET    | /api/codeSets/${id}                                                                                        | Action: show                                    |
 |   PUT    | /api/codeSets/${codeSetId}/newBranchModelVersion                                                           | Action: newBranchModelVersion                   |
 |   PUT    | /api/codeSets/${codeSetId}/newForkModel                                                                    | Action: newForkModel                            |
 |   GET    | /api/codeSets/${codeSetId}/latestModelVersion                                                              | Action: latestModelVersion                      |
 |   GET    | /api/codeSets/${codeSetId}/latestFinalisedModel                                                            | Action: latestFinalisedModel                    |
 |   GET    | /api/codeSets/${codeSetId}/modelVersionTree                                                                | Action: modelVersionTree                        |
 */
export declare class MdmCodeSetResource extends MdmResource {
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    importModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestOptions): any;
    exportModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestOptions): any;
    newModelVersion(codeSetId: string, data: any, restHandlerOptions?: RequestOptions): any;
    newDocumentationVersion(codeSetId: string, data: any, restHandlerOptions?: RequestOptions): any;
    finalise(codeSetId: string, data?: any, restHandlerOptions?: RequestOptions): any;
    newBranchModelVersion(codeSetId: string, data: any, restHandlerOptions?: RequestOptions): any;
    newForkModel(codeSetId: string, data: any, restHandlerOptions?: RequestOptions): any;
    addCodeSetsToFolder(folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    listCodeSetsInFolder(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeTerm(codeSetId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    alterTerm(codeSetId: string, termId: string, data: any, restHandlerOptions?: RequestOptions): any;
    moveCodeSetToFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    diff(codeSetId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    exportModel(codeSetId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(codeSetId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    terms(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeReadByAuthenticated(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByAuthenticated(codeSetId: string, data?: any, restHandlerOptions?: RequestOptions): any;
    removeReadByEveryone(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByEveryone(codeSetId: string, data?: any, restHandlerOptions?: RequestOptions): any;
    latestModelVersion(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    latestFinalisedModel(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    modelVersionTree(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    undoSoftDelete(codeSetId: string, restHandlerOptions?: RequestOptions): any;
}
