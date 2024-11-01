/*
Copyright 2020-2024 University of Oxford and NHS England

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
import {
  RequestSettings,
  QueryParameters,
  ModelDomainType
} from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: annotation
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: delete
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: delete
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show
 *
 */

/**
 * @deprecated Use {@link MdmCatalogueItemResource} and the annotation endpoints there instead.
 */
export class MdmAnnotationResource extends MdmResource {
  /**
   * @deprecated Use {@link MdmCatalogueItemResource.saveAnnotations} instead.
   */
  save(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  /**
   * @deprecated Use {@link MdmCatalogueItemResource.saveAnnotationChildren} instead.
   */
  saveChildren(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    annotationId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  /**
   * @deprecated Use {@link MdmCatalogueItemResource.listAnnotations} instead.
   */
  list(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated Use {@link MdmCatalogueItemResource.listAnnotationChildren} instead.
   */
  listChildren(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    annotationId?: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated Use {@link MdmCatalogueItemResource.removeAnnotation} instead.
   */
  remove(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    annotationId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated Use {@link MdmCatalogueItemResource.removeAnnotationChild} instead.
   */
  removeChild(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    annotationId: string,
    childId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated Use {@link MdmCatalogueItemResource.getAnnotation} instead.
   */
  get(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    annotationId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated Use {@link MdmCatalogueItemResource.getAnnotationChild} instead.
   */
  getChild(
    catalogueItemDomainType: string | ModelDomainType,
    catalogueItemId: string,
    annotationId: string,
    childId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }
}
