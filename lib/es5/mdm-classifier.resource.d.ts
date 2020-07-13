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
    save(data: any, options?: any): any;
    saveChildrenOf(classifierId: any, data: any, options?: any): any;
    addToCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, data: any, options?: {}): any;
    list(options?: {}): any;
    listChildrenOf(classifierId: any, options?: {}): any;
    listCatalogueItemsFor(classifierId: any, options?: {}): any;
    listForCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, options?: {}): any;
    remove(classifierId: any, options?: {}): any;
    removeChildOf(classifierId: any, childId: any, options?: {}): any;
    removeFromCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, options?: {}): any;
    update(classifierId: any, data: any, options?: {}): any;
    updateChildOf(classifierId: any, childId: any, data: any, options?: {}): any;
    get(classifierId: any, options?: {}): any;
    getChildOf(classifierId: any, childId: any, options?: {}): any;
    getFromCatalogueItem(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, options?: {}): any;
}
