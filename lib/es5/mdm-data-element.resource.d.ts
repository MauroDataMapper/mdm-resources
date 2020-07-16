import { MdmResource } from './mdm-resource';
/**
 * Controller: dataElement
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}/suggestLinks/${otherDataModelId}             | Action: suggestLinks
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: index
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/dataElements                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${dataElementId}      | Action: copyDataElement
 */
export declare class MdmDataElementResource extends MdmResource {
    suggestLinks(dataModelId: any, dataClassId: any, dataElementId: any, otherDataModelId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    save(dataModelId: any, dataClassId: any, data: any, restHandlerOptions?: any): any;
    list(dataModelId: any, dataClassId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    listWithDataType(dataModelId: any, dataTypeId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(dataModelId: any, dataClassId: any, dataElementId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(dataModelId: any, dataClassId: any, dataElementId: any, data: any, restHandlerOptions?: any): any;
    get(dataModelId: any, dataClassId: any, dataElementId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    copyDataElement(dataModelId: any, dataClassId: any, otherDataModelId: any, otherDataClassId: any, dataElementId: any, data: any, restHandlerOptions?: any): any;
}
