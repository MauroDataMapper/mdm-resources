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

export class MdmTermResource extends MdmResource {
  private catalogueItem: MdmCatalogueItemResource;

  constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    super(resourcesConfig, restHandler);
    this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
  }

  get(terminologyId, id, action, options: any = {}) {
    // if (['metadata', 'annotations', 'classifiers'].includes(action)) {
    //   return this.catalogueItem.get(id, action, options.contentType);
    // }

    switch(action) {
        case 'metadata': return this.catalogueItem.listMetadata('terms', id, options);
        case 'annotations': return this.catalogueItem.listAnnotations('terms', id, options);
        case 'classifiers': return this.catalogueItem.listClassifiers('terms', id, options);
        case 'semanticLinks': return this.catalogueItem.listSemanticLinks('terms', id, options);
    }

    return this.getResource(this.makeUrl(terminologyId), id, action, options);
  }

  put(terminologyId, id, action, options) {
    return this.putResource(this.makeUrl(terminologyId), id, action, options);
  }

  post(terminologyId, id, action, options) {
    return this.postResource(this.makeUrl(terminologyId), id, action, options);
  }

  delete(terminologyId, id) {
    return this.deleteResource(this.makeUrl(terminologyId), id);
  }

  makeUrl(terminologyId: string) {
    return `terminologies/${terminologyId}/terms/`;
  }
}
