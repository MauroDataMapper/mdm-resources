import { RequestOptions, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: delete
 */
export declare class MdmReferenceDataTypeResource extends MdmResource {
    list(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    get(referenceDataModelId: string, referenceDataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    update(referenceDataModelId: string, referenceDataTypeId: string, data: any, restHandlerOptions?: RequestOptions): any;
    remove(referenceDataModelId: string, referenceDataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
