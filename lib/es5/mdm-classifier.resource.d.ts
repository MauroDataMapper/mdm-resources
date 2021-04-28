import { RequestSettings, QueryParameters, ModelDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: classifier
 |   POST   | /api/classifiers/${classifierId}/classifiers                                                          | Action: save
 |   GET    | /api/classifiers/${classifierId}/classifiers                                                          | Action: index
 |  DELETE  | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |   PUT    | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |  DELETE  | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   PUT    | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   GET    | /api/classifiers/${classifierId}/catalogueItems                                                       | Action: catalogueItems
 |  DELETE  | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: delete
 |   PUT    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: update
 |   GET    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: show
 |   POST   | /api/classifiers                                                                                      | Action: save
 |   GET    | /api/classifiers                                                                                      | Action: index
 |  DELETE  | /api/classifiers/${id}                                                                                | Action: delete
 |   PUT    | /api/classifiers/${id}                                                                                | Action: update
 |   GET    | /api/classifiers/${id}                                                                                | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: show
 */
export declare class MdmClassifierResource extends MdmResource {
    save(data: any, restHandlerOptions?: RequestSettings): any;
    saveChildrenOf(classifierId: string, data: any, restHandlerOptions?: RequestSettings): any;
    addToCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    listChildrenOf(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    listCatalogueItemsFor(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    listForCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    remove(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeChildOf(classifierId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeFromCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    update(classifierId: string, data: any, restHandlerOptions?: RequestSettings): any;
    updateChildOf(classifierId: string, childId: string, data: any, restHandlerOptions?: RequestSettings): any;
    get(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getChildOf(classifierId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getFromCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeReadByAuthenticated(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByAuthenticated(classifierId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    removeReadByEveryone(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByEveryone(classifierId: string, data?: any, restHandlerOptions?: RequestSettings): any;
}
