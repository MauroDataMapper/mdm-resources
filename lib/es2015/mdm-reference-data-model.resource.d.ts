import { QueryParameters, RequestOptions } from 'mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/referenceDataModels/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/referenceDataModels/providers/exporters                                                                                                  | Action: exporterProviders
 |   POST   | /api/referenceDataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/referenceDataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModel
 |   GET    | /api/referenceDataModels                                                                                                                      | Action: index
 |  DELETE  | /api/referenceDataModels/${id}                                                                                                                | Action: delete
 |   PUT    | /api/referenceDataModels/${id}                                                                                                                | Action: update
 |   GET    | /api/referenceDataModels/${id}                                                                                                                | Action: show
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/folder/${folderId}                                                                           | Action: changeFolder
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newModelVersion                                                                              | Action: newModelVersion
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newDocumentationVersion                                                                      | Action: newDocumentationVersion
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/finalise                                                                                     | Action: finalise
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newBranchModelVersion                                                                        | Action: newBranchModelVersion
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newForkModel                                                                                 | Action: newForkModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestModelVersion                                                                           | Action: latestModelVersion
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestFinalisedModel                                                                         | Action: latestFinalisedModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/modelVersionTree                                                                             | Action: modelVersionTree

 */
export declare class MdmReferenceDataModelResource extends MdmResource {
    defaultDataTypes(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    importModels(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: RequestOptions): any;
    exportModels(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: RequestOptions): any;
    removeReadByAuthenticated(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByAuthenticated(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    removeReadByEveryone(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByEveryone(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    search(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    exportModel(referenceDataModelId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    moveReferenceDataModelToFolder(referenceDataModelId: string, folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    undoSoftDelete(referenceDataModelId: string, restHandlerOptions?: RequestOptions): any;
    finalise(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    newBranchModelVersion(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    newForkModel(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    latestModelVersion(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    latestFinalisedModel(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    modelVersionTree(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
