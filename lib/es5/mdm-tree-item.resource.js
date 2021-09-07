var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { MdmResource } from './mdm-resource';
/**
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 |   GET    | /api/tree/${containerDomainType}/search/${searchTerm}                                                 | Action: search
 |   GET    | /api/tree/${containerDomainType}                                                                      | Action: index
 |   GET    | /api/tree/${containerDomainType}/${catalogueItemDomainType}/${catalogueItemId}                        | Action: show
 */
/**
 * MDM resource for tree item management.
 *
 * Mauro represents all models and entities under a related tree, for instance:
 *
 * * Folders contain models
 * * Models contain data classes
 * * Terminologies contain terms
 * * And so on.
 *
 * Use this resource to fetch child items for the following container types:
 *
 * * {@link ContainerDomainType.FOLDERS} for the main model tree.
 * * {@link ContainerDomainType.CLASSIFIERS} for all models listed under classifications.
 */
var MdmTreeItemResource = /** @class */ (function (_super) {
    __extends(MdmTreeItemResource, _super);
    function MdmTreeItemResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Request a tree structure of models that are marked as deleted. **Note:** this endpoint is only accessible to an administrator.
     *
     * @param containerDomainType State the container domain type to inspect.
     * @param modelDomainType State the model domain type to inspect.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
     *
     * `403 Forbidden` - user is not an administrator.
     *
     * @description Only models marked as deleted can be returned. Any models _permanantly_ deleted cannot be retrieved.
     */
    MdmTreeItemResource.prototype.deletedModels = function (containerDomainType, modelDomainType, query, options) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/deleted";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a tree structure of models with a model version that has been superseded. **Note:** this endpoint is only accessible to an administrator.
     *
     * @param containerDomainType State the container domain type to inspect.
     * @param modelDomainType State the model domain type to inspect.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmTreeItemResource.prototype.modelSupersededModels = function (containerDomainType, modelDomainType, query, options) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/modelSuperseded";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a tree structure of models with a documentation version that has been superseded. **Note:** this endpoint is only accessible to an administrator.
     *
     * @param containerDomainType State the container domain type to inspect.
     * @param modelDomainType State the model domain type to inspect.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmTreeItemResource.prototype.documentationSupersededModels = function (containerDomainType, modelDomainType, query, options) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/documentationSuperseded";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a full text search against the Mauro model tree.
     *
     * @param containerDomainType State the container domain type to search.
     * @param searchTerm Provide the term(s) to search for.
     * @param query Additional search parameters to filter the search results.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
     *
     * @see {@link TreeItemSearchParameters}
     */
    MdmTreeItemResource.prototype.search = function (containerDomainType, searchTerm, query, options) {
        var url = this.apiEndpoint + "/tree/" + containerDomainType + "/search/" + searchTerm;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request the top level tree structure of model entities within the Mauro instance.
     *
     * @param containerDomainType State the container domain type to inspect.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
     *
     * @see {@link MdmTreeItemResource.get}
     */
    MdmTreeItemResource.prototype.list = function (containerDomainType, query, options) {
        var url = this.apiEndpoint + "/tree/" + containerDomainType;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request children model entities within the Mauro instance for a given parent entity.
     *
     * @param containerDomainType State the container domain type to inspect.
     * @param modelDomainType State the model domain type to inspect.
     * @param id The unique identifier of the parent entity to fetch children for.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
     *
     * @see {@link MdmTreeItemResource.list}
     */
    MdmTreeItemResource.prototype.get = function (containerDomainType, modelDomainType, id, query, options) {
        var url = this.apiEndpoint + "/tree/" + containerDomainType + "/" + modelDomainType + "/" + id;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request the complete expanded tree of an entity in one operation.
     *
     * @param modelDomainType State the model domain type to inspect.
     * @param id The unique identifier of the parent entity to fetch children for.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link MdmTreeItemResponse} containing a {@link MdmTreeItem} node. If the tree item contains any children,
     * these will be returned also under {@link MdmTreeItem.children}.
     *
     * @see {@link MdmTreeItemResource.list}
     */
    MdmTreeItemResource.prototype.getExpandedTree = function (modelDomainType, id, query, options) {
        var url = this.apiEndpoint + "/tree/full/" + modelDomainType + "/" + id;
        return this.simpleGet(url, query, options);
    };
    /**
   * `HTTP GET` - Request the children of the folder
   *   *
   * @param id The unique identifier of the folder to fetch children for.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmTreeItemResponse} containing a {@link MdmTreeItem} node. If the tree item contains any children,
   * these will be returned also under {@link MdmTreeItem.children}.
   *
   * @see {@link MdmTreeItemResource.list}
   */
    MdmTreeItemResource.prototype.getFolder = function (id, query, options) {
        var url = this.apiEndpoint + "/tree/folders/" + id;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - get all the ancestor items from the tree for a given catalogue tree item.
     *
     * @param containerDomainType State the container domain type to inspect.
     * @param modelDomainType State the model domain type to inspect.
     * @param id The unique identifier of the entity to fetch ancestors for.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link MdmTreeItemResponse} containing a {@link MdmTreeItem} with children down to
     * the original tree item.
     */
    MdmTreeItemResource.prototype.ancestors = function (containerDomainType, modelDomainType, id, query, options) {
        var url = this.apiEndpoint + "/tree/" + containerDomainType + "/" + modelDomainType + "/" + id + "/ancestors";
        return this.simpleGet(url, query, options);
    };
    return MdmTreeItemResource;
}(MdmResource));
export { MdmTreeItemResource };
//# sourceMappingURL=mdm-tree-item.resource.js.map