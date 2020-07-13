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
import { IMdmRestHandler, DefaultMdmRestHandler } from './mdm-rest-handler';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmValidator } from './mdm-validator';

export class MdmResource {
  private restHandler: IMdmRestHandler;
  private resourcesConfig: MdmResourcesConfiguration;
  protected apiEndpoint: string|URL;
  protected defaultRequestOptions;

  constructor(resourcesConfig = new MdmResourcesConfiguration(), restHandler: IMdmRestHandler = new DefaultMdmRestHandler()) {
    this.resourcesConfig = resourcesConfig;
    this.restHandler = restHandler;
    this.apiEndpoint = this.resourcesConfig.apiEndpoint;
    this.defaultRequestOptions = this.resourcesConfig.defaultHttpRequestOptions;
  }

  getResource(name, id, action, options?): any {
    if (!options) {
      options = {};
    }
    if (name && name[name.length - 1] === '/') {
      name = name.substr(0, name.length - 1);
    }

    if (
      options.filters &&
      options.filters[options.filters.length - 1] === '&'
    ) {
      options.filters = options.filters.substr(0, options.filters.length - 1);
    }
    if (
      options.filters &&
      options.filters[options.filters.length - 1] === '&'
    ) {
      options.filters = options.filters.substr(1, options.filters.length);
    }

    id = !id ? '' : id + '/';
    action = !action ? '' : action;
    let pagination = !options.pageSize ? '' : 'offset=' + options.pageIndex + '&max=' + options.pageSize;
    const sort = !options.sortBy ? '' : '&sort=' + options.sortBy + '&order=' + (!options.sortType ? 'asc' : options.sortType);
    const filters = !options.filters ? '' : '&' + options.filters;
    const all = !options.all ? '' : '&all=true';
    let qStr = '';

    if (options.queryStringParams) {
      for (const n in options.queryStringParams) {
        if (options.queryStringParams.hasOwnProperty(n)) {
          if (!MdmValidator.isEmpty(options.queryStringParams[n])) {
            qStr += '&' + n + '=' + options.queryStringParams[n];
          }
        }
      }
    }

    if (pagination || sort || filters || all || qStr) {
      pagination = '?' + pagination;
    }

    return this.request(name + '/' + id + action + pagination + sort + filters + all + qStr, 'GET', options.resource, options.contentType);
  }

  postResource(name, id, action, options, more?): any {
    if (!options) {
      options = {};
    }
    if (name && name[name.length - 1] === '/') {
      name = name.substr(0, name.length - 1);
    }
    id = !id ? '' : id + '/';
    action = !action ? '' : action;
    let pagination = !options.pageSize ? '' : 'offset=' + options.pageIndex + '&max=' + options.pageSize;
    const sort = !options.sortBy ? '' : '&sort=' + options.sortBy + '&order=' + (!options.sortType ? 'asc' : options.sortType);
    const filters = !options.filters ? '' : '&' + options.filters;
    let qStr = '';

    if (options.queryStringParams) {
      for (const n in options.queryStringParams) {
        if (options.queryStringParams.hasOwnProperty(n)) {
          if (!MdmValidator.isEmpty(options.queryStringParams[n])) {
            qStr += '&' + n + '=' + options.queryStringParams[n];
          }
        }
      }
    }
    if (pagination || sort || filters || qStr) {
      pagination = '?' + pagination;
    }
    return this.request(
      name + '/' + id + action + pagination + sort + filters + qStr,
      'POST',
      options.resource,
      options.contentType,
      more
    );
  }

  putResource(name, id, action, options) {
    if (!options) {
      options = {};
    }
    if (name && name[name.length - 1] === '/') {
      name = name.substr(0, name.length - 1);
    }
    id = !id ? '' : id + '/';
    action = !action ? '' : action;
    let pagination = !options.pageSize
      ? ''
      : 'offset=' + options.pageIndex + '&max=' + options.pageSize;
    const sort = !options.sortBy
      ? ''
      : '&sort=' +
      options.sortBy +
      '&order=' +
      (!options.sortType ? 'asc' : options.sortType);
    const filters = !options.filters ? '' : '&' + options.filters;
    let qStr = '';

    if (options.queryStringParams) {
      for (const n in options.queryStringParams) {
        if (options.queryStringParams.hasOwnProperty(n)) {
          if (!MdmValidator.isEmpty(options.queryStringParams[n])) {
            qStr += '&' + n + '=' + options.queryStringParams[n];
          }
        }
      }
    }

    if (pagination || sort || filters || qStr) {
      pagination = '?' + pagination;
    }
    return this.request(
      name + '/' + id + action + pagination + sort + filters + qStr,
      'PUT',
      options.resource,
      options.contentType
    );
  }

  deleteResource(name, id, action?, queryString?, resource?) {
    if (name && name[name.length - 1] === '/') {
      name = name.substr(0, name.length - 1);
    }
    id = !id ? '' : id + '/';
    action = !action ? '' : action;
    queryString = !queryString ? '' : '?' + queryString;

    return this.request(
      name + '/' + id + action + queryString,
      'DELETE',
      resource,
      null
    );
  }

  request(url, HTTP, resource, contentType, more?): any {
    if (url && url[0] === '/') {
      url = url.substr(1);
    }

    const options: any = {
      url: this.apiEndpoint + '/' + url,
      method: HTTP,
      withCredentials: true,
      headers: {
        'Content-Type': contentType
          ? contentType
          : 'application/json; charset=utf-8'
      }
    };
    if (resource) {
      options.data = resource;
    }
    if (more && more.login === true) {
      options.login = true;
    }
    if (more && more.ignoreAuthModule === true) {
      options.ignoreAuthModule = true;
    }
    if (more && more.responseType) {
      options.responseType = more.responseType;
    }

    return this.restHandler.process(options.url, options);
  }

  exportGet(dataModels, exporter, contentType, url): any {
    const more: any = {
      responseType: 'arraybuffer'
    };
    return this.request(url, 'GET', null, contentType, more);
  }

  exportPost(dataModels, exporter, contentType, url): any {
    const more: any = {
      responseType: 'arraybuffer'
    };
    return this.request(url, 'POST', null, contentType, more);
  }

  simplePost(url, data = {}, options: any = {}) {
    const opts = {...this.defaultRequestOptions, body: data, ...options, method: 'POST'};
    return this.restHandler.process(url, opts);
  }

  simpleGet(url, options: any = {}) {
    const opts = {...this.defaultRequestOptions, ...options, method: 'GET'};
    return this.restHandler.process(url, opts);
  }

  simpleDelete(url, options: any = {}) {
    const opts = {...this.defaultRequestOptions, ...options, method: 'DELETE'};
    return this.restHandler.process(url, opts);
  }

  simplePut(url, data = {}, options: any = {}) {
    const opts = {...this.defaultRequestOptions, body: data, ...options, method: 'PUT'};
    return this.restHandler.process(url, opts);
  }
}
