import { RequestSettings, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: delete
 */
export declare class MdmReferenceDataValueResource extends MdmResource {
    list(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    get(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
    update(referenceDataModelId: string, referenceDataValueId: string, data: any, restHandlerOptions?: RequestSettings): any;
    remove(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    search(referenceDataModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
}
