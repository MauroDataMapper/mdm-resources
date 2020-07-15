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
 * Controller: dataElement
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}/suggestLinks/${otherDataModelId}             | Action: suggestLinks
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: index
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/dataElements                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${dataElementId}      | Action: copyDataElement
 */
export class MdmDataElementResource extends MdmResource {
    //   private catalogueItem: MdmCatalogueItemResource;

    //   constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    //   }

    //   get(dataModelId, dataClassId, id, action, options) {
    //     if (!options) {
    //       options = {};
    //     }
    //     // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
    //     //   return this.catalogueItem.get(id, action, options.contentType);
    //     // }

    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('dataElements', id, options);
    //         case 'annotations': return this.catalogueItem.listAnnotations('dataElements', id, options);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('dataElements', id, options);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataElements', id, options);
    //     }

    //     return this.getResource(`dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/`, id, action, options);
    //   }

    //   put(dataModelId, dataClassId, id, action, options) {
    //     return this.putResource(`dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/`, id, action, options);
    //   }

    //   delete(dataModelId, dataClassId, id) {
    //     return this.deleteResource(`dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/`, id);
    //   }

    suggestLinks(dataModelId, dataClassId, dataElementId, otherDataModelId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}/suggestLinks/${otherDataModelId}`;
        return this.simpleGet(url, queryStringParams);
    }

    save(dataModelId, dataClassId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements`;
        return this.simplePost(url, data);
    }

    list(dataModelId, dataClassId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements`;
        return this.simpleGet(url, queryStringParams);
    }

    listWithDataType(dataModelId, dataTypeId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/dataElements`;
        return this.simpleGet(url, queryStringParams);
    }

    remove(dataModelId, dataClassId, dataElementId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    update(dataModelId, dataClassId, dataElementId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
        return this.simplePut(url, data);
    }

    get(dataModelId, dataClassId, dataElementId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
        return this.simpleGet(url, queryStringParams);
    }

    copyDataElement(dataModelId, dataClassId, otherDataModelId, otherDataClassId, dataElementId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${dataElementId}`;
        return this.simplePost(url, data);
    }
}
