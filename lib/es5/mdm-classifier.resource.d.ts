import { MdmRequestOptions, QueryParameters, ModelDomainType } from './mdm-common.model';
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
    save(data: any, restHandlerOptions?: MdmRequestOptions): any;
    saveChildrenOf(classifierId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    addToCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listChildrenOf(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listCatalogueItemsFor(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listForCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeChildOf(classifierId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeFromCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(classifierId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    updateChildOf(classifierId: string, childId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    getChildOf(classifierId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    getFromCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByAuthenticated(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByAuthenticated(classifierId: string, data?: any, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByEveryone(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByEveryone(classifierId: string, data?: any, restHandlerOptions?: MdmRequestOptions): any;
}
