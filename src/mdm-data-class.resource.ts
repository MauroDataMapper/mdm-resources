/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
import { MdmResource } from './mdm-resource';
import { MdmCatalogueItemResource } from './mdm-catalogue-item.resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';

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
export class MdmDataClassResource extends MdmResource {
    //   private catalogueItem: MdmCatalogueItemResource;

    //   constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    //   }

    //   get(dataModel, parentDataClass, id, action, options) {
    //     if (!options) {
    //       options = {};
    //     }
    //     // if (
    //     //   ['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1
    //     // ) {
    //     //   return this.catalogueItem.get(id, action, options.contentType);
    //     // }

    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('dataClasses', id, options);
    //         case 'annotations': return this.catalogueItem.listAnnotations('dataClasses', id, options);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('dataClasses', id, options);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataClasses', id, options);
    //     }

    //     if (parentDataClass) {
    //       return this.getResource(`dataModels/${dataModel}/dataClasses/${parentDataClass}/dataClasses/`, id, action, options);
    //     } else {
    //       return this.getResource(`dataModels/${dataModel}/dataClasses/`, id, action, options);
    //     }
    //   }

    //   post(dataModelId, id, action, options) {
    //     return this.postResource(`dataModels/${dataModelId}/dataClasses/`, id, action, options);
    //   }

    //   put(dataModelId, parentDataClassId, id, action, options) {
    //     if (parentDataClassId) {
    //       return this.putResource(`dataModels/${dataModelId}/dataClasses/${parentDataClassId}/dataClasses/`, id, action, options);
    //     } else {
    //       return this.putResource(`dataModels/${dataModelId}/dataClasses/`, id, action, options);
    //     }
    //   }

    //   delete(dataModelId, parentDataClassId, id) {
    //     if (parentDataClassId) {
    //       return this.deleteResource(`dataModels/${dataModelId}/dataClasses/${parentDataClassId}/dataClasses/`, id);
    //     } else {
    //       return this.deleteResource(`dataModels/${dataModelId}/dataClasses/`, id);
    //     }
    //   }

    addChildDataClass(dataModelId, dataClassId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses`;
        return this.simplePost(url, data);
    }

    listChildDataClasses(dataModelId, dataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses`;
        return this.simpleGet(url, queryStringParams);
    }

    search(dataModelId, dataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/search`;
        return this.simpleGet(url, queryStringParams);
    }

    content(dataModelId, dataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/content`;
        return this.simpleGet(url, queryStringParams);
    }

    removeChildDataClass(dataModelId, dataClassId, childDataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    updateChildDataClass(dataModelId, dataClassId, childDataClassId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
        return this.simplePut(url, data);
    }

    getChildDataClass(dataModelId, dataClassId, childDataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
        return this.simpleGet(url, queryStringParams);
    }

    copyChildDataClass(dataModelId, dataClassId, otherDataModelId, otherDataClassId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
        return this.simplePost(url, data);
    }

    save(dataModelId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses`;
        return this.simplePost(url, data);
    }

    list(dataModelId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses`;
        return this.simpleGet(url, queryStringParams);
    }

    all(dataModelId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/allDataClasses`;
        return this.simpleGet(url, queryStringParams);
    }

    remove(dataModelId, dataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    update(dataModelId, dataClassId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
        return this.simplePut(url, data);
    }

    get(dataModelId, dataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
        return this.simpleGet(url, queryStringParams);
    }

    copyDataClass(dataModelId, otherDataModelId, otherDataClassId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
        return this.simplePost(url, data);
    }
}
