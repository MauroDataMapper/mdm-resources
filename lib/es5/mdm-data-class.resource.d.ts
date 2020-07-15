import { MdmResource } from './mdm-resource';
/**
 * Controller: dataClass
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: index
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/content                                                                    | Action: content
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}                        | Action: copyDataClass
 |   POST   | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: index
 |   GET    | /api/dataModels/${dataModelId}/allDataClasses                                                                                        | Action: all
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}                                                   | Action: copyDataClass

 */
export declare class MdmDataClassResource extends MdmResource {
    addChildDataClass(dataModelId: any, dataClassId: any, data: any): any;
    listChildDataClasses(dataModelId: any, dataClassId: any, queryStringParams?: any): any;
    search(dataModelId: any, dataClassId: any, queryStringParams?: any): any;
    content(dataModelId: any, dataClassId: any, queryStringParams?: any): any;
    removeChildDataClass(dataModelId: any, dataClassId: any, childDataClassId: any, queryStringParams?: any): any;
    updateChildDataClass(dataModelId: any, dataClassId: any, childDataClassId: any, data: any): any;
    getChildDataClass(dataModelId: any, dataClassId: any, childDataClassId: any, queryStringParams?: any): any;
    copyChildDataClass(dataModelId: any, dataClassId: any, otherDataModelId: any, otherDataClassId: any, data: any): any;
    save(dataModelId: any, data: any): any;
    list(dataModelId: any, queryStringParams?: any): any;
    all(dataModelId: any, queryStringParams?: any): any;
    remove(dataModelId: any, dataClassId: any, queryStringParams?: any): any;
    update(dataModelId: any, dataClassId: any, data: any): any;
    get(dataModelId: any, dataClassId: any, queryStringParams?: any): any;
    copyDataClass(dataModelId: any, otherDataModelId: any, otherDataClassId: any, data: any): any;
}
