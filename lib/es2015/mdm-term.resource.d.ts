import { RequestOptions, QueryParameters } from 'mdm-common.model';
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
    search(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    tree(terminologyId: string, termId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    save(terminologyId: string, data: any, restHandlerOptions?: RequestOptions): any;
    list(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(terminologyId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(terminologyId: string, termId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(terminologyId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    addTermRelationships(terminologyId: string, termId: string, data: any, restHandlerOptions?: RequestOptions): any;
    termRelationships(terminologyId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, data: any, restHandlerOptions?: RequestOptions): any;
    getTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
