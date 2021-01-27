import { MdmResource } from "./mdm-resource";
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from "./mdm-rest-handler";
/**
 * Controller: subscribedCatalogues
 |   GET    | /api/subscribedCatalogues/${id}                                                                                               | Action: show
 |   GET    | /api/subscribedCatalogues                                                                                                     | Action: index
 |   POST   | /api/subscribedCatalogues                                                                                                     | Action: save
 |   PUT    | /api/subscribedCatalogues/${id}                                                                                               | Action: update
 |  DELETE  | /api/subscribedCatalogues/${id}                                                                                               | Action: delete
 */
export declare class MdmSubscribedCataloguesResource extends MdmResource {
    get(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): void;
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): void;
    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions): void;
    update(id: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): void;
    remove(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): void;
}
