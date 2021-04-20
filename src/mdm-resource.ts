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
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { DefaultMdmRestHandler, IMdmDefaultHttpRequestOptions, IMdmQueryStringParams, IMdmRestHandler, IMdmRestHandlerOptions } from './mdm-rest-handler';

export class MdmResource {
  protected apiEndpoint: string;
  protected defaultRequestOptions: IMdmDefaultHttpRequestOptions;
  private restHandler: IMdmRestHandler;
  private resourcesConfig: MdmResourcesConfiguration;

  constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    this.resourcesConfig = resourcesConfig || new MdmResourcesConfiguration();
    this.restHandler = restHandler || new DefaultMdmRestHandler();
    this.apiEndpoint = this.resourcesConfig.apiEndpoint;
    this.defaultRequestOptions = this.resourcesConfig.defaultHttpRequestOptions;
  }

  simplePost(url: string, data: any, options?: IMdmRestHandlerOptions) {
    const opts: IMdmRestHandlerOptions = {...this.defaultRequestOptions, body: data, ...options, method: 'POST'};
    return this.simpleRequest(url, {}, opts);
  }

  simpleGet(url: string, queryStringParams: IMdmQueryStringParams = {}, options?: IMdmRestHandlerOptions) {
    const opts: IMdmRestHandlerOptions = {...this.defaultRequestOptions, ...options, method: 'GET'};
    return this.simpleRequest(url, queryStringParams, opts);
  }

  simpleDelete(url: string, queryStringParams: IMdmQueryStringParams = {}, options?: IMdmRestHandlerOptions) {
    const opts: IMdmRestHandlerOptions = {...this.defaultRequestOptions, ...options, method: 'DELETE'};
    return this.simpleRequest(url, queryStringParams, opts);
  }

  simplePut(url: string, data: any, options?: IMdmRestHandlerOptions) {
    const opts: IMdmRestHandlerOptions = {...this.defaultRequestOptions, body: data, ...options, method: 'PUT'};
    return this.simpleRequest(url, {}, opts);
  }

  simpleRequest(url: string, queryStringParams: IMdmQueryStringParams = {}, options?: IMdmRestHandlerOptions) {
    const queryString = this.generateQueryString(queryStringParams);
    return this.restHandler.process(`${url}${queryString}`, options);
  }

  isGuid = (stringToTest) => {
      if (stringToTest[0] === '{') {
          stringToTest = stringToTest.substring(1, stringToTest.length - 1);
      }
      const regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
      return regexGuid.test(stringToTest);
  };

  protected generateQueryString(queryStringParams: IMdmQueryStringParams = {}): string {
    const queryParams: string[] = Object.keys(queryStringParams).map(key => `${key}=${queryStringParams[key]}`);
    return (queryParams?.length > 0) ? `?${queryParams.join('&')}`: '';
  }
}

export enum ContainerDomainType {
    CLASSIFIERS = 'classifiers',
    FOLDERS = 'folders'
}

export enum ModelDomainType {
    FOLDERS = 'folders',
    DATA_MODELS = 'dataModels',
    DATA_CLASSES = 'dataClasses',
    DATA_TYPES = 'dataTypes',
    TERMINOLOGIES = 'terminologies',
    REFERENCEDATAMODELS = 'referenceDataModels',
    TERMS = 'terms',
    ALL = 'all'
}