import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceData/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/referenceData/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/referenceData/providers/exporters                                                                                                  | Action: exporterProviders
 |   POST   | /api/referenceData/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/referenceData/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/referenceData/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |   PUT    | /api/referenceData/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |  DELETE  | /api/referenceData/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   PUT    | /api/referenceData/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   GET    | /api/referenceData/${referenceDataModelId}/search                                                                                       | Action: search
 |   POST   | /api/referenceData/${referenceDataModelId}/search                                                                                       | Action: search
 |   GET    | /api/referenceData/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModel
 |   GET    | /api/referenceData                                                                                                                      | Action: index
 |  DELETE  | /api/referenceData/${id}                                                                                                                | Action: delete
 |   PUT    | /api/referenceData/${id}                                                                                                                | Action: update
 |   GET    | /api/referenceData/${id}                                                                                                                | Action: show
 |   PUT    | /api/referenceData/${referenceDataModelId}/folder/${folderId}                                                                           | Action: changeFolder

 */
export declare class MdmReferenceDataModelResource extends MdmResource {
    defaultDataTypes(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    importers(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exporters(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    importModels(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exportModels(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReadByAuthenticated(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReadByAuthenticated(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReadByEveryone(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReadByEveryone(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    search(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    exportModel(referenceDataModelId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    moveReferenceDataModelToFolder(referenceDataModelId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
