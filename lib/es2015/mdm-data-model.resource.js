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
export class MdmDataModelResource extends MdmResource {
    constructor(resourcesConfig, restHandler) {
        super(resourcesConfig, restHandler);
        this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    }
    get(id, action, options) {
        if (!options) {
            options = {};
        }
        // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
        //   return this.catalogueItem.get(id, action, options.contentType);
        // }
        switch (action) {
            case 'metadata': return this.catalogueItem.listMetadata('dataModels', id, options);
            case 'annotations': return this.catalogueItem.listAnnotations('dataModels', id, options);
            case 'classifiers': return this.catalogueItem.listClassifiers('dataModels', id, options);
            case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataModels', id, options);
        }
        return this.getResource('dataModels', id, action, options);
    }
    post(id, action, options) {
        return this.postResource('dataModels', id, action, options);
    }
    put(id, action, options) {
        return this.putResource('dataModels', id, action, options);
    }
    delete(id, action, queryString, resource) {
        return this.deleteResource('dataModels', id, action, queryString, resource);
    }
    export(dataModels, exporter, contentType) {
        if (dataModels && dataModels.length === 1) {
            const URL = `/dataModels/${dataModels[0].id}/export/${exporter.namespace}/${exporter.name}/${exporter.version}`;
            return this.exportGet(dataModels, exporter, contentType, URL);
            //
            //  var deferred;
            // // deferred = $q.defer();
            //  var url = this.backendURL + url ;
            //  this.restHandler.restHandler({
            //      url: url,
            //      method:"GET",
            //      withCredentials: true,
            //      responseType : 'arraybuffer'
            //  }).then(function(response){
            //      var file = new Blob([ response ], {type : contentType});
            //      deferred.resolve(file);
            //  },function(response){
            //      deferred.reject(response);
            //  });
            //  return deferred.promise;
        }
        const url = `/dataModels/export/${exporter.namespace}/${exporter.name}/${exporter.version}`;
        return this.exportPost(dataModels, exporter, contentType, url);
        //  var deferred;
        // // deferred = $q.defer();
        //  url = this.backendURL + url;
        //
        //  restHandler({
        //      url: url,
        //      method: "POST",
        //      withCredentials: true,
        //      responseType: 'arraybuffer',
        //      data: dataModels.map(function(dataModel){return dataModel.id;})
        //  }).then(function (response) {
        //      var file = new Blob([response], {type: contentType});
        //      deferred.resolve(file);
        //  }, function (response) {
        //      deferred.reject(response);
        //  });
        //
        //  return deferred.promise;
    }
    import(importPath, formData) {
        const url = `${this.apiEndpoint}/dataModels/import/${importPath}`;
        return this.simplePost(url, {
            method: 'POST',
            withCredentials: true,
            data: formData
        });
    }
}
//# sourceMappingURL=mdm-data-model.resource.js.map