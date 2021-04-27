import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
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
    list(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    get(referenceDataModelId: string, referenceDataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    update(referenceDataModelId: string, referenceDataTypeId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    remove(referenceDataModelId: string, referenceDataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
