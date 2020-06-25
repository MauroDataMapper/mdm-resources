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

export class MdmDataClassResource extends MdmResource {
  private catalogueItem: MdmCatalogueItemResource;

  constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    super(resourcesConfig, restHandler);
    this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
  }

  get(dataModel, parentDataClass, id, action, options) {
    if (!options) {
      options = {};
    }
    if (
      ['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1
    ) {
      return this.catalogueItem.get(id, action, options.contentType);
    }

    if (parentDataClass) {
      return this.getResource(`dataModels/${dataModel}/dataClasses/${parentDataClass}/dataClasses/`, id, action, options);
    } else {
      return this.getResource(`dataModels/${dataModel}/dataClasses/`, id, action, options);
    }
  }

  post(dataModelId, id, action, options) {
    return this.postResource(`dataModels/${dataModelId}/dataClasses/`, id, action, options);
  }

  put(dataModelId, parentDataClassId, id, action, options) {
    if (parentDataClassId) {
      return this.putResource(`dataModels/${dataModelId}/dataClasses/${parentDataClassId}/dataClasses/`, id, action, options);
    } else {
      return this.putResource(`dataModels/${dataModelId}/dataClasses/`, id, action, options);
    }
  }

  delete(dataModelId, parentDataClassId, id) {
    if (parentDataClassId) {
      return this.deleteResource(`dataModels/${dataModelId}/dataClasses/${parentDataClassId}/dataClasses/`, id);
    } else {
      return this.deleteResource(`dataModels/${dataModelId}/dataClasses/`, id);
    }
  }
}
