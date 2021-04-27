import { RequestOptions, QueryParameters } from 'mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: delete
 */
export declare class MdmReferenceDataElementResource extends MdmResource {
    list(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    get(referenceDataModelId: string, referenceDataElementId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    update(referenceDataModelId: string, referenceDataElementId: string, data: any, restHandlerOptions?: RequestOptions): any;
    remove(referenceDataModelId: string, referenceDataElementId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
