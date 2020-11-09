import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataElements                                                                        | Action: index
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: get
 |   POST   | /api/referenceData/${referenceDataModelId}/referenceDataElements                                                                        | Action: save
 |   PUT    | /api/referenceData/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: update
 |   DELETE | /api/referenceData/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: delete
 */
export declare class MdmReferenceDataElementResource extends MdmResource {
    list(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(referenceDataModelId: string, referenceDataElementId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(referenceDataModelId: string, referenceDataElementId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(referenceDataModelId: string, referenceDataElementId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
