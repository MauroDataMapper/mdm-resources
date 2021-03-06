import { RequestSettings, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: termRelationshipType
 |   POST   | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}
 */
export declare class MdmTermRelationshipTypeResource extends MdmResource {
    save(terminologyId: string, data: any, restHandlerOptions?: RequestSettings): any;
    list(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    remove(terminologyId: string, termRelationshipTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    update(terminologyId: string, termRelationshipTypeId: string, data: any, restHandlerOptions?: RequestSettings): any;
    get(terminologyId: string, termRelationshipTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
