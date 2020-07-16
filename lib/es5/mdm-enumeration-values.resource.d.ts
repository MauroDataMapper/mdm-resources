import { MdmResource } from './mdm-resource';
/**
 * Controller: enumerationValue
 |   POST   | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: index
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: show
 */
export declare class MdmEnumerationValuesResource extends MdmResource {
    saveToEnumeratedType(dataModelId: any, enumerationTypeId: any, data: any, restHandlerOptions?: any): any;
    listForEnumeratedType(dataModelId: any, enumerationTypeId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    saveToDataType(dataModelId: any, dataTypeId: any, data: any, restHandlerOptions?: any): any;
    listForDataType(dataModelId: any, dataTypeId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeFromEnumeratedType(dataModelId: any, enumerationTypeId: any, enumerationValueId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateInEnumeratedType(dataModelId: any, enumerationTypeId: any, enumerationValueId: any, data: any, restHandlerOptions?: any): any;
    getFromEnumeratedType(dataModelId: any, enumerationTypeId: any, enumerationValueId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeFromDataType(dataModelId: any, dataTypeId: any, enumerationValueId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateInDataType(dataModelId: any, dataTypeId: any, enumerationValueId: any, data: any, restHandlerOptions?: any): any;
    getFromDataType(dataModelId: any, dataTypeId: any, enumerationValueId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
