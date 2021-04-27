import { RequestOptions, QueryParameters } from './mdm-common.model';
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
    saveToEnumeratedType(dataModelId: string, enumerationTypeId: string, data: any, restHandlerOptions?: RequestOptions): any;
    listForEnumeratedType(dataModelId: string, enumerationTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    saveToDataType(dataModelId: string, dataTypeId: string, data: any, restHandlerOptions?: RequestOptions): any;
    listForDataType(dataModelId: string, dataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeFromEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateInEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, data: any, restHandlerOptions?: RequestOptions): any;
    getFromEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeFromDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateInDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, data: any, restHandlerOptions?: RequestOptions): any;
    getFromDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
