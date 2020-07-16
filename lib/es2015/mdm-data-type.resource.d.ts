import { MdmResource } from './mdm-resource';
/**
 * Controller: dataType
 |   POST   | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}                                                           | Action: copyDataType
 */
export declare class MdmDataTypeResource extends MdmResource {
    save(dataModelId: any, data: any, restHandlerOptions?: any): any;
    list(dataModelId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(dataModelId: any, dataTypeId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(dataModelId: any, dataTypeId: any, data: any, restHandlerOptions?: any): any;
    get(dataModelId: any, dataTypeId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    copyDataType(dataModelId: any, otherDataModelId: any, dataTypeId: any, data: any, restHandlerOptions?: any): any;
}
