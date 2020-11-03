import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
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
}
