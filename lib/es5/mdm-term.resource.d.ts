import { MdmResource } from './mdm-resource';
/**
 * Controller: term
 |   GET    | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   POST   | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/tree/${termId}?                                                  | Action: tree                                    |
 |   POST   | /api/terminologies/${terminologyId}/terms                                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms                                                                  | Action: index                                   |
 |   GET    | /api/codeSets/${codeSetId}/terms                                                                           | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: show
 *
 * Controller: termRelationship
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships            | Action: index                                   |
 |   POST   | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: index                                   |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${id}      | Action: show                                    |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: show
 */
export declare class MdmTermResource extends MdmResource {
    search(terminologyId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    tree(terminologyId: any, termId?: any, queryStringParams?: any, restHandlerOptions?: any): any;
    save(terminologyId: any, data: any, restHandlerOptions?: any): any;
    list(terminologyId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(terminologyId: any, termId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(terminologyId: any, termId: any, data: any, restHandlerOptions?: any): any;
    get(terminologyId: any, termId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    addTermRelationships(terminologyId: any, termId: any, data: any, restHandlerOptions?: any): any;
    termRelationships(terminologyId: any, termId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeTermRelationship(terminologyId: any, termId: any, termRelationshipId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateTermRelationship(terminologyId: any, termId: any, termRelationshipId: any, data: any, restHandlerOptions?: any): any;
    getTermRelationship(terminologyId: any, termId: any, termRelationshipId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
