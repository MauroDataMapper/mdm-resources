import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
import { MdmTermResource } from './mdm-term.resource';
import { RequestOptions, QueryParameters } from 'mdm-common.model';
/**
 * Controller: terminology
 |   GET    | /api/terminologies/providers/importers                                                                     | Action: importerProviders                       |
 |   GET    | /api/terminologies/providers/exporters                                                                     | Action: exporterProviders                       |
 |   POST   | /api/terminologies/import/${importerNamespace}/${importerName}/${importerVersion}                          | Action: importModels                            |
 |   POST   | /api/terminologies/export/${exporterNamespace}/${exporterName}/${exporterVersion}                          | Action: exportModels                            |
 |  DELETE  | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |   PUT    | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |  DELETE  | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/newModelVersion                                                        | Action: newModelVersion                         |
 |   PUT    | /api/terminologies/${terminologyId}/newDocumentationVersion                                                | Action: newDocumentationVersion                 |
 |   PUT    | /api/terminologies/${terminologyId}/finalise                                                               | Action: finalise                                |
 |   GET    | /api/terminologies/${terminologyId}/tree                                                                   | Action: tree                                    |
 |   POST   | /api/folders/${folderId}/terminologies                                                                     | Action: save                                    |
 |   GET    | /api/folders/${folderId}/terminologies                                                                     | Action: index                                   |
 |   PUT    | /api/terminologies/${terminologyId}/folder/${folderId}                                                     | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/diff/${otherModelId}                                                   | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/terminologies/${terminologyId}                                                    | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}         | Action: exportModel                             |
 |   GET    | /api/terminologies                                                                                         | Action: index                                   |
 |  DELETE  | /api/terminologies                                                                                         | Action: deleteAll                               |
 |  DELETE  | /api/terminologies/${id}                                                                                   | Action: delete                                  |
 |   PUT    | /api/terminologies/${id}                                                                                   | Action: update                                  |
 |   GET    | /api/terminologies/${id}                                                                                   | Action: show                                    |
 |   PUT    | /api/terminologies/${terminologyId}/newBranchModelVersion                                                  | Action: newBranchModelVersion                   |
 |   PUT    | /api/terminologies/${terminologyId}/newForkModel                                                           | Action: newForkModel                            |
 |   GET    | /api/terminologies/${terminologyId}/latestModelVersion                                                     | Action: latestModelVersion                      |
 |   GET    | /api/terminologies/${terminologyId}/latestFinalisedModel                                                   | Action: latestFinalisedModel                    |
 |   GET    | /api/terminologies/${terminologyId}/modelVersionTree                                                       | Action: modelVersionTree                        |
 */
export declare class MdmTerminologyResource extends MdmResource {
    terms: MdmTermResource;
    private catalogueItem;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    importModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestOptions): any;
    exportModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestOptions): any;
    newModelVersion(terminologyId: string, data: any, restHandlerOptions?: RequestOptions): any;
    newDocumentationVersion(terminologyId: string, data: any, restHandlerOptions?: RequestOptions): any;
    finalise(terminologyId: string, data: any, restHandlerOptions?: RequestOptions): any;
    newBranchModelVersion(terminologyId: string, data: any, restHandlerOptions?: RequestOptions): any;
    newForkModel(terminologyId: string, data: any, restHandlerOptions?: RequestOptions): any;
    tree(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    moveTerminologyToFolder(terminologyId: string, folderId: string, data: any, restHandlerOptions?: RequestOptions): any;
    diff(terminologyId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    exportModel(terminologyId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(terminologyId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    termRelationships(terminologyId: string, termRelationshipTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    getTermRelationship(terminologyId: string, termRelationshipTypeId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeReadByAuthenticated(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByAuthenticated(terminologyId: string, data?: any, restHandlerOptions?: RequestOptions): any;
    removeReadByEveryone(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateReadByEveryone(terminologyId: string, data?: any, restHandlerOptions?: RequestOptions): any;
    latestModelVersion(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    latestFinalisedModel(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    modelVersionTree(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    undoSoftDelete(terminologyId: string, restHandlerOptions?: RequestOptions): any;
}
