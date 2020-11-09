import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataValues                                                                        | Action: index
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: get
 |   POST   | /api/referenceData/${referenceDataModelId}/referenceDataValues                                                                        | Action: save
 |   PUT    | /api/referenceData/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: update
 |   DELETE | /api/referenceData/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: delete
 */
export declare class MdmReferenceDataValueResource extends MdmResource {
    list(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(referenceDataModelId: string, referenceDataValueId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    search(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
