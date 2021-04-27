import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
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
    saveToEnumeratedType(dataModelId: string, enumerationTypeId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listForEnumeratedType(dataModelId: string, enumerationTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveToDataType(dataModelId: string, dataTypeId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listForDataType(dataModelId: string, dataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeFromEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateInEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getFromEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeFromDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateInDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getFromDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
