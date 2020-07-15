import { MdmResource } from './mdm-resource';
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
 */
export declare class MdmDataModelResource extends MdmResource {
    defaultDataTypes(queryStringParams?: any): any;
    importers(queryStringParams?: any): any;
    exporters(queryStringParams?: any): any;
    types(queryStringParams?: any): any;
    importModels(importerNamespace: any, importerName: any, importerVersion: any, data: any): any;
    exportModels(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any): any;
    removeAllUnusedDataClasses(dataModelId: any, queryStringParams?: any): any;
    removeAllUnusedDataTypes(dataModelId: any, queryStringParams?: any): any;
    listInFolder(folderId: any, queryStringParams?: any): any;
    removeReadByAuthenticated(dataModelId: any, queryStringParams?: any): any;
    updateReadByAuthenticated(dataModelId: any, data: any): any;
    removeReadByEveryone(dataModelId: any, queryStringParams?: any): any;
    updateReadByEveryone(dataModelId: any, data: any): any;
    search(dataModelId: any, queryStringParams?: any): any;
    hierarchy(dataModelId: any, queryStringParams?: any): any;
    newModelVersion(dataModelId: any, data: any): any;
    newDocumentationVersion(dataModelId: any, data: any): any;
    finalise(dataModelId: any, data: any): any;
    addToFolder(folderId: any, data: any): any;
    updateDataModelInFolder(folderId: any, dataModelId: any, data: any): any;
    updateFolderWithDataModel(dataModelId: any, folderId: any, data: any): any;
    suggestLinks(dataModelId: any, otherModelId: any, queryStringParams?: any): any;
    diff(dataModelId: any, otherModelId: any, queryStringParams?: any): any;
    exportModel(dataModelId: any, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: any): any;
    list(queryStringParams?: any): any;
    removeAll(queryStringParams?: any): any;
    remove(dataModelId: any, queryStringParams?: any): any;
    update(dataModelId: any, data: any): any;
    get(dataModelId: any, queryStringParams?: any): any;
}
