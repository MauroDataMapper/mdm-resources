import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';
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
    saveToEnumeratedType(dataModelId: any, enumerationTypeId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listForEnumeratedType(dataModelId: any, enumerationTypeId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveToDataType(dataModelId: any, dataTypeId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listForDataType(dataModelId: any, dataTypeId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeFromEnumeratedType(dataModelId: any, enumerationTypeId: any, enumerationValueId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateInEnumeratedType(dataModelId: any, enumerationTypeId: any, enumerationValueId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getFromEnumeratedType(dataModelId: any, enumerationTypeId: any, enumerationValueId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeFromDataType(dataModelId: any, dataTypeId: any, enumerationValueId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateInDataType(dataModelId: any, dataTypeId: any, enumerationValueId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getFromDataType(dataModelId: any, dataTypeId: any, enumerationValueId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
