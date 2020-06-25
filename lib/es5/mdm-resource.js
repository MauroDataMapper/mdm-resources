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
import { DefaultMdmRestHandler } from './mdm-rest-handler';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmValidator } from './mdm-validator';
var MdmResource = /** @class */ (function () {
    function MdmResource(resourcesConfig, restHandler) {
        if (resourcesConfig === void 0) { resourcesConfig = new MdmResourcesConfiguration(); }
        if (restHandler === void 0) { restHandler = new DefaultMdmRestHandler(); }
        this.resourcesConfig = resourcesConfig;
        this.restHandler = restHandler;
        this.apiEndpoint = this.resourcesConfig.apiEndpoint;
    }
    MdmResource.prototype.getResource = function (name, id, action, options) {
        if (!options) {
            options = {};
        }
        if (name && name[name.length - 1] === '/') {
            name = name.substr(0, name.length - 1);
        }
        if (options.filters &&
            options.filters[options.filters.length - 1] === '&') {
            options.filters = options.filters.substr(0, options.filters.length - 1);
        }
        if (options.filters &&
            options.filters[options.filters.length - 1] === '&') {
            options.filters = options.filters.substr(1, options.filters.length);
        }
        id = !id ? '' : id + '/';
        action = !action ? '' : action;
        var pagination = !options.pageSize ? '' : 'offset=' + options.pageIndex + '&max=' + options.pageSize;
        var sort = !options.sortBy ? '' : '&sort=' + options.sortBy + '&order=' + (!options.sortType ? 'asc' : options.sortType);
        var filters = !options.filters ? '' : '&' + options.filters;
        var all = !options.all ? '' : '&all=true';
        var qStr = '';
        if (options.queryStringParams) {
            for (var n in options.queryStringParams) {
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
    };
    MdmResource.prototype.postResource = function (name, id, action, options, more) {
        if (!options) {
            options = {};
        }
        if (name && name[name.length - 1] === '/') {
            name = name.substr(0, name.length - 1);
        }
        id = !id ? '' : id + '/';
        action = !action ? '' : action;
        var pagination = !options.pageSize ? '' : 'offset=' + options.pageIndex + '&max=' + options.pageSize;
        var sort = !options.sortBy ? '' : '&sort=' + options.sortBy + '&order=' + (!options.sortType ? 'asc' : options.sortType);
        var filters = !options.filters ? '' : '&' + options.filters;
        var qStr = '';
        if (options.queryStringParams) {
            for (var n in options.queryStringParams) {
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
        return this.request(name + '/' + id + action + pagination + sort + filters + qStr, 'POST', options.resource, options.contentType, more);
    };
    MdmResource.prototype.putResource = function (name, id, action, options) {
        if (!options) {
            options = {};
        }
        if (name && name[name.length - 1] === '/') {
            name = name.substr(0, name.length - 1);
        }
        id = !id ? '' : id + '/';
        action = !action ? '' : action;
        var pagination = !options.pageSize
            ? ''
            : 'offset=' + options.pageIndex + '&max=' + options.pageSize;
        var sort = !options.sortBy
            ? ''
            : '&sort=' +
                options.sortBy +
                '&order=' +
                (!options.sortType ? 'asc' : options.sortType);
        var filters = !options.filters ? '' : '&' + options.filters;
        var qStr = '';
        if (options.queryStringParams) {
            for (var n in options.queryStringParams) {
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
        return this.request(name + '/' + id + action + pagination + sort + filters + qStr, 'PUT', options.resource, options.contentType);
    };
    MdmResource.prototype.deleteResource = function (name, id, action, queryString, resource) {
        if (name && name[name.length - 1] === '/') {
            name = name.substr(0, name.length - 1);
        }
        id = !id ? '' : id + '/';
        action = !action ? '' : action;
        queryString = !queryString ? '' : '?' + queryString;
        return this.request(name + '/' + id + action + queryString, 'DELETE', resource, null);
    };
    MdmResource.prototype.request = function (url, HTTP, resource, contentType, more) {
        if (url && url[0] === '/') {
            url = url.substr(1);
        }
        var options = {
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
    };
    MdmResource.prototype.exportGet = function (dataModels, exporter, contentType, url) {
        var more = {
            responseType: 'arraybuffer'
        };
        return this.request(url, 'GET', null, contentType, more);
    };
    MdmResource.prototype.exportPost = function (dataModels, exporter, contentType, url) {
        var more = {
            responseType: 'arraybuffer'
        };
        return this.request(url, 'POST', null, contentType, more);
    };
    MdmResource.prototype.simplePost = function (url, content) {
        return this.restHandler.process(url, content);
    };
    return MdmResource;
}());
export { MdmResource };
//# sourceMappingURL=mdm-resource.js.map