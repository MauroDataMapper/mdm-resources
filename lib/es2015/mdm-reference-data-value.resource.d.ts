import { RequestOptions, QueryParameters } from 'mdm-common.model';
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
    list(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    get(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    update(referenceDataModelId: string, referenceDataValueId: string, data: any, restHandlerOptions?: RequestOptions): any;
    remove(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    search(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
}
