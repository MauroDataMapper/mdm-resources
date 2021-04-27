import { QueryParameters, MdmRequestOptions } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 * |   GET    | /api/referenceDataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 * |   GET    | /api/referenceDataModels/providers/importers                                                                                                  | Action: importerProviders
 * |   GET    | /api/referenceDataModels/providers/exporters                                                                                                  | Action: exporterProviders
 * |   POST   | /api/referenceDataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 * |   POST   | /api/referenceDataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 * |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 * |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 * |   POST   | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModel
 * |   GET    | /api/referenceDataModels                                                                                                                      | Action: index
 * |  DELETE  | /api/referenceDataModels/${id}                                                                                                                | Action: delete
 * |   PUT    | /api/referenceDataModels/${id}                                                                                                                | Action: update
 * |   GET    | /api/referenceDataModels/${id}                                                                                                                | Action: show
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/folder/${folderId}                                                                           | Action: changeFolder
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newModelVersion                                                                              | Action: newModelVersion
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newDocumentationVersion                                                                      | Action: newDocumentationVersion
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/finalise                                                                                     | Action: finalise
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newBranchModelVersion                                                                        | Action: newBranchModelVersion
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newForkModel                                                                                 | Action: newForkModel
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestModelVersion                                                                           | Action: latestModelVersion
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestFinalisedModel                                                                         | Action: latestFinalisedModel
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/modelVersionTree                                                                             | Action: modelVersionTree
 *
 */
export declare class MdmReferenceDataModelResource extends MdmResource {
    defaultDataTypes(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    importModels(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: MdmRequestOptions): any;
    exportModels(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByAuthenticated(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByAuthenticated(referenceDataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByEveryone(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByEveryone(referenceDataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    search(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    exportModel(referenceDataModelId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(referenceDataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    moveReferenceDataModelToFolder(referenceDataModelId: string, folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    undoSoftDelete(referenceDataModelId: string, restHandlerOptions?: MdmRequestOptions): any;
    finalise(referenceDataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    newBranchModelVersion(referenceDataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    newForkModel(referenceDataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    latestModelVersion(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    latestFinalisedModel(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    modelVersionTree(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
