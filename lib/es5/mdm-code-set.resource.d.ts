import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
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
    importers(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exporters(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    importModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exportModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newModelVersion(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newDocumentationVersion(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    finalise(codeSetId: string, data?: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newBranchModelVersion(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newForkModel(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    addCodeSetsToFolder(folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listCodeSetsInFolder(folderId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeTerm(codeSetId: string, termId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    alterTerm(codeSetId: string, termId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    moveCodeSetToFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    diff(codeSetId: string, otherModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exportModel(codeSetId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeAll(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    terms(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReadByAuthenticated(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReadByAuthenticated(codeSetId: string, data?: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReadByEveryone(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReadByEveryone(codeSetId: string, data?: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    latestModelVersion(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    latestFinalisedModel(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    modelVersionTree(codeSetId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    undoSoftDelete(codeSetId: string, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
