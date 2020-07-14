import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
import { MdmTermResource } from './mdm-term.resource';
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
 |   GET    | /api/terminologies/${id}                                                                                   | Action: show
 */
export declare class MdmTerminologyResource extends MdmResource {
    private catalogueItem;
    terms: MdmTermResource;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    importers(queryStringParams?: any): any;
    exporters(queryStringParams?: any): any;
    importModels(namespace: any, name: any, version: any, data: any): any;
    exportModels(namespace: any, name: any, version: any, data: any): any;
    newModelVersion(terminologyId: any, data: any): any;
    newDocumentationVersion(terminologyId: any, data: any): any;
    finalise(terminologyId: any, data: any): any;
    tree(terminologyId: any, queryStringParams: any): any;
    alterFolder(terminologyId: any, folderId: any, data: any): any;
    diff(terminologyId: any, otherModelId: any, queryStringParams?: any): any;
    exportModel(terminologyId: any, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: any): any;
    list(queryStringParams?: any): any;
    removeAll(queryStringParams?: any): any;
    remove(terminologyId: any, queryStringParams?: any): any;
    update(terminologyId: any, data: any): any;
    get(terminologyId: any, queryStringParams?: any): any;
    termRelationships(terminologyId: any, termRelationshipTypeId: any, queryStringParams: any): any;
    getTermRelationship(terminologyId: any, termRelationshipTypeId: any, termRelationshipId: any, queryStringParams?: any): any;
}
