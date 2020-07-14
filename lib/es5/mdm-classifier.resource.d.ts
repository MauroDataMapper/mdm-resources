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
    save(data: any): any;
    saveChildrenOf(classifierId: any, data: any): any;
    addToCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, data: any): any;
    list(queryStringParams?: any): any;
    listChildrenOf(classifierId: any, queryStringParams?: any): any;
    listCatalogueItemsFor(classifierId: any, queryStringParams?: any): any;
    listForCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any): any;
    remove(classifierId: any, queryStringParams?: any): any;
    removeChildOf(classifierId: any, childId: any, queryStringParams?: any): any;
    removeFromCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, queryStringParams?: any): any;
    update(classifierId: any, data: any): any;
    updateChildOf(classifierId: any, childId: any, data: any): any;
    get(classifierId: any, queryStringParams?: any): any;
    getChildOf(classifierId: any, childId: any, queryStringParams?: any): any;
    getFromCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, queryStringParams?: any): any;
}
