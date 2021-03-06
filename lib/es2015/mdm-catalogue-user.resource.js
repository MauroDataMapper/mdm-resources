import { MdmResource } from './mdm-resource';
/**
 * Controller: catalogueUser
 |   POST   | /api/admin/catalogueUsers/adminRegister                                                                             | Action: adminRegister
 |   GET    | /api/admin/catalogueUsers/pendingCount                                                                              | Action: pendingCount
 |   GET    | /api/admin/catalogueUsers/pending                                                                                   | Action: pending
 |   GET    | /api/admin/catalogueUsers/userExists/${emailAddress}                                                                | Action: userExists
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/rejectRegistration                                                     | Action: rejectRegistration
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/approveRegistration                                                    | Action: approveRegistration
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/adminPasswordReset                                                     | Action: adminPasswordReset
 |   GET    | /api/catalogueUsers/search                                                                                          | Action: search
 |   POST   | /api/catalogueUsers/search                                                                                          | Action: search
 |   GET    | /api/catalogueUsers/resetPasswordLink/${emailAddress}                                                               | Action: sendPasswordResetLink
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/resetPassword                                                                | Action: resetPassword
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/changePassword                                                               | Action: changePassword
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/userPreferences                                                              | Action: updateUserPreferences
 |   GET    | /api/catalogueUsers/${catalogueUserId}/userPreferences                                                              | Action: userPreferences
 |   GET    | /api/userGroups/${userGroupId}/catalogueUsers                                                                       | Action: index
 |   POST   | /api/catalogueUsers                                                                                                 | Action: save
 |   GET    | /api/catalogueUsers                                                                                                 | Action: index
 |  DELETE  | /api/catalogueUsers/${id}                                                                                           | Action: delete
 |   PUT    | /api/catalogueUsers/${id}                                                                                           | Action: update
 |   GET    | /api/catalogueUsers/${id}                                                                                           | Action: show
 |   GET    | /api/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers                                 | Action: index
 |   GET    | /api/catalogueUsers/${catalogueUserId}/apiKeys                                                                      | Action: List all API Keys
 |   POST   | /api/catalogueUsers/${catalogueUserId}/apiKeys                                                                      | Action: Add an API Key
 |   DELETE | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}                                                            | Action: Delete an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/enable                                                     | Action: Enable an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/disable                                                    | Action: Disable an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/refresh/${noOfDays}                                        | Action: Refresh an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/refresh/${expiresInDays}                                  | Action: Change expiry day
 */
export class MdmCatalogueUserResource extends MdmResource {
    adminRegister(data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/adminRegister`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    pendingCount(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pendingCount`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    pending(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pending`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    exists(emailAddress, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/userExists/${emailAddress}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    reject(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/rejectRegistration`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    approve(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/approveRegistration`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    adminPasswordReset(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/adminPasswordReset`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    search(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }
    resetPasswordLink(emailAddress, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/resetPasswordLink/${emailAddress}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    resetPassword(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/resetPassword`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    changePassword(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/changePassword`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    updateUserPreferences(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    userPreferences(catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    listInUserGroup(userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    update(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    listInContainerUserGroup(containerDomainType, containerId, userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    listApiKeys(catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    saveApiKey(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    removeApiKey(catalogueUserId, apiKey, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}`;
        return this.simpleDelete(url, restHandlerOptions);
    }
    enableApiKey(catalogueUserId, apiKey, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/enable`;
        return this.simplePut(url, restHandlerOptions);
    }
    disableApiKey(catalogueUserId, apiKey, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/disable`;
        return this.simplePut(url, restHandlerOptions);
    }
    refreshApiKey(catalogueUserId, apiKey, noOfDays, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/refresh/${noOfDays}`;
        return this.simplePut(url, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-catalogue-user.resource.js.map