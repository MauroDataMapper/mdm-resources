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
    save(terminologyId: any, data: any): any;
    list(terminologyId: any, queryStringParams?: any): any;
    remove(terminologyId: any, termRelationshipTypeId: any, queryStringParams?: any): any;
    update(terminologyId: any, termRelationshipTypeId: any, data: any): any;
    get(terminologyId: any, termRelationshipTypeId: any, queryStringParams?: any): any;
}
