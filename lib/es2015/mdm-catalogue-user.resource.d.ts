import { RequestOptions, QueryParameters, ContainerDomainType } from './mdm-common.model';
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
    adminRegister(data: any, restHandlerOptions?: RequestOptions): any;
    pendingCount(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    pending(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    exists(emailAddress: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    reject(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    approve(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    adminPasswordReset(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    search(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    resetPasswordLink(emailAddress: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    resetPassword(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    changePassword(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    updateUserPreferences(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    userPreferences(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    listInUserGroup(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    save(data: any, restHandlerOptions?: RequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    listInContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    listApiKeys(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    saveApiKey(catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    removeApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: RequestOptions): any;
    enableApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: RequestOptions): any;
    disableApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: RequestOptions): any;
    refreshApiKey(catalogueUserId: string, apiKey: string, noOfDays: number, restHandlerOptions?: RequestOptions): any;
}
