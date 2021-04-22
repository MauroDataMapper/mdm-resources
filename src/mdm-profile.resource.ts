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
import { QueryParameters } from 'mdm-common.model';
import { MdmResource, ModelDomainType } from './mdm-resource';
import {
    IMdmRestHandlerOptions,
} from './mdm-rest-handler';

/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/profiles                                           | Action: profiles
 */
export class MdmProfileResource extends MdmResource {
    usedProfiles(
        catalogueItemDomainType: string | ModelDomainType,
        catalogueItemId: string,
        queryStringParams?: QueryParameters,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profiles/used`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    unusedProfiles(
        catalogueItemDomainType: string | ModelDomainType,
        catalogueItemId: string,
        queryStringParams?: QueryParameters,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profiles/unused`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    otherMetadata(
        catalogueItemDomainType: string | ModelDomainType,
        catalogueItemId: string,
        queryStringParams?: QueryParameters,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profiles/otherMetadata`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    profile(
        catalogueItemDomainType: string | ModelDomainType,
        catalogueItemId: string,
        profileNamespace: string,
        profileName: string,
        profileVersion?: string,
        queryStringParams?: QueryParameters,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        let url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
        if (profileVersion) {
            url += `/${profileVersion}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    saveProfile(
        catalogueItemDomainType: string | ModelDomainType,
        catalogueItemId: string,
        profileNamespace: string,
        profileName: string,
        data: string,
        profileVersion?: string,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        let url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
        if (profileVersion) {
            url += `/${profileVersion}`;
        }
        return this.simplePost(url, data, restHandlerOptions);
    }
    deleteProfile(
        catalogueItemDomainType: string | ModelDomainType,
        catalogueItemId: string,
        profileNamespace: string,
        profileName: string,
        profileVersion?: string,
        queryStringParams?: QueryParameters,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        let url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
        if (profileVersion) {
            url += `/${profileVersion}`;
        }

        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    validateProfile(
        profileNamespace: string,
        profileName: string,
        catalogueItemDomainType: string | ModelDomainType,
        id: string,
        data: string,
    )
    {
        const url = `${this.apiEndpoint}/profiles/${profileNamespace}/${profileName}/${catalogueItemDomainType}/${id}/validate`;
        return this.simplePost(url,data);
    }

    providerDynamic()
        {
            const url = `${this.apiEndpoint}/profiles/providers/dynamic`;
            return this.simpleGet(url);
        }

}
