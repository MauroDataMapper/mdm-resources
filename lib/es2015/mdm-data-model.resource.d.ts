import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: dataModel
 |   GET    | /api/dataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/dataModels/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/dataModels/providers/exporters                                                                                                  | Action: exporterProviders
 |   GET    | /api/dataModels/types                                                                                                                | Action: types
 |   POST   | /api/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/clean                                                                                     | Action: deleteAllUnusedDataClasses
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/clean                                                                                       | Action: deleteAllUnusedDataTypes
 |   GET    | /api/folders/${folderId}/dataModels                                                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |   PUT    | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |  DELETE  | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   PUT    | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   GET    | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   POST   | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   GET    | /api/dataModels/${dataModelId}/hierarchy                                                                                             | Action: hierarchy
 |   PUT    | /api/dataModels/${dataModelId}/newModelVersion                                                                                       | Action: newModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newDocumentationVersion                                                                               | Action: newDocumentationVersion
 |   PUT    | /api/dataModels/${dataModelId}/finalise                                                                                              | Action: finalise
 |   POST   | /api/folders/${folderId}/dataModels                                                                                                  | Action: save
 |   PUT    | /api/folders/${folderId}/dataModels/${dataModelId}                                                                                   | Action: changeFolder
 |   PUT    | /api/dataModels/${dataModelId}/folder/${folderId}                                                                                    | Action: changeFolder
 |   GET    | /api/dataModels/${dataModelId}/suggestLinks/${otherModelId}                                                                          | Action: suggestLinks
 |   GET    | /api/dataModels/${dataModelId}/diff/${otherModelId}                                                                                  | Action: diff
 |   GET    | /api/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                        | Action: exportModel
 |   GET    | /api/dataModels                                                                                                                      | Action: index
 |  DELETE  | /api/dataModels                                                                                                                      | Action: deleteAll
 |  DELETE  | /api/dataModels/${id}                                                                                                                | Action: delete
 |   PUT    | /api/dataModels/${id}                                                                                                                | Action: update
 |   GET    | /api/dataModels/${id}                                                                                                                | Action: show
 |   PUT    | /api/dataModels/${dataModelId}/newBranchModelVersion                                                                                 | Action: newBranchModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newForkModel                                                                                          | Action: newForkModel
 |   GET    | /api/dataModels/${dataModelId}/latestModelVersion                                                                                    | Action: latestModelVersion
 |   GET    | /api/dataModels/${dataModelId}/latestFinalisedModel                                                                                  | Action: latestFinalisedModel

 */
export declare class MdmDataModelResource extends MdmResource {
    defaultDataTypes(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    importers(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exporters(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    types(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    importModels(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exportModels(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeAllUnusedDataClasses(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeAllUnusedDataTypes(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listInFolder(folderId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReadByAuthenticated(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReadByAuthenticated(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReadByEveryone(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReadByEveryone(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    search(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    hierarchy(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newModelVersion(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newDocumentationVersion(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    finalise(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newBranchModelVersion(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    newForkModel(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    addToFolder(folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateDataModelInFolder(folderId: string, dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateFolderWithDataModel(dataModelId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    suggestLinks(dataModelId: string, otherModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    diff(dataModelId: string, otherModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exportModel(dataModelId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeAll(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    latestModelVersion(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    latestFinalisedModel(dataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
