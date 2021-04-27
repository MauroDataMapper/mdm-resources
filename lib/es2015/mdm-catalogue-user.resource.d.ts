import { MdmRequestOptions, QueryParameters, ContainerDomainType } from './mdm-common.model';
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
export declare class MdmCatalogueUserResource extends MdmResource {
    adminRegister(data: any, restHandlerOptions?: MdmRequestOptions): any;
    pendingCount(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    pending(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    exists(emailAddress: any, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    reject(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    approve(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    adminPasswordReset(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    search(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    resetPasswordLink(emailAddress: any, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    resetPassword(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    changePassword(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    updateUserPreferences(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    userPreferences(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listInUserGroup(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    save(data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listInContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listApiKeys(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveApiKey(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    removeApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: MdmRequestOptions): any;
    enableApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: MdmRequestOptions): any;
    disableApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: MdmRequestOptions): any;
    refreshApiKey(catalogueUserId: string, apiKey: string, noOfDays: number, restHandlerOptions?: MdmRequestOptions): any;
}
