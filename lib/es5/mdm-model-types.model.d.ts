import { Classifier } from './mdm-classifier.model';
import { CatalogueItem, CatalogueItemDomainType, CatalogueItemReference, Payload, QueryParameters, Uuid, Version } from './mdm-common.model';
export interface Authority {
    id: Uuid;
    label: string;
    url?: string;
}
declare const securableActions: readonly ['show', 'update', 'changeFolder', 'delete', 'disable', 'index', 'save', 'comment', 'editDescription', 'softDelete', 'newDocumentationVersion', 'newBranchModelVersion', 'finalise', 'createNewVersions', 'newForkModel', 'newModelVersion', 'mergeInto', 'readByEveryone', 'readByAuthenticated'];
/**
 * Type alias to define available securable actions a catalogue item can perform.
 */
export declare type SecurableAction = typeof securableActions[number];
/**
 * Represents a Mauro entity that is securable and has a set of actions defined by the permissions of a user/session.
 */
export interface Securable {
    /**
     * A list of available actions that can be performed on this entity.
     *
     * @see {@link SecurableAction} - Type definition
     */
    availableActions: SecurableAction[];
}
/**
 * Represents a Mauro entity that is changed over time.
 */
export interface Historical {
    /**
     * The date and time this entity was last updated.
     */
    lastUpdated?: string;
}
/**
 * Represents a Mauro entity that can be branched for version control.
 */
export interface Branchable {
    /**
     * The name of the branch this entity applies to.
     */
    branchName?: string;
}
/**
 * Represents a Mauro entity that can be versioned.
 */
export interface Versionable {
    /**
     * The model version of this entity, if applicable.
     */
    modelVersion?: Version;
    /**
     * A custom tag assigned to this version of this entity, if applicable.
     */
    modelVersionTag?: string;
    /**
     * The documentation of this entity, if applicable.
     */
    documentationVersion?: Version;
}
/**
 * Represents a Mauro entity that can be finalised, such as a Data Model.
 */
export interface Finalisable {
    /**
     * Determine if this catalogue item is finalised or still in draft form.
     */
    finalised: boolean;
    /**
     * Gets the date/time this catalogue item was finalised. If still in draft form,
     * this will be undefined/not included.
     */
    dateFinalised?: string;
}
export interface Modelable extends CatalogueItem {
    label: string;
    description?: string;
    deleted?: boolean;
}
export interface ModelableDetail {
    authority?: Authority;
    author?: string;
    organisation?: string;
    aliases?: string[];
    classifiers?: Classifier[];
}
export interface SecurableModel extends Securable {
    readableByEveryone?: boolean;
    readableByAuthenticatedUsers?: boolean;
}
export interface ModelRemoveParameters {
    permanent: boolean;
}
export declare type ModelRemoveQueryParameters = ModelRemoveParameters & QueryParameters;
/**
 * Payload for endpoints that finalise a model type.
 */
export interface FinalisePayload extends Payload {
    /**
     * Define how to advance the version of the finalised model.
     */
    versionChangeType: 'Major' | 'Minor' | 'Patch' | 'Custom';
    /**
     * If {@link versionChangeType} is `Custom`, sets the custom version number to use for the finalised model.
     *
     * Has no affect for any other {@link versionChangeType}.
     */
    version?: Version;
    /**
     * Set an optional tag name to the finalised version.
     */
    versionTag?: string;
}
export interface ModelCreatePayload extends Payload {
    folder: Uuid;
    label: string;
    author: string;
    organisation: string;
    description?: string;
    classifiers?: CatalogueItemReference[];
}
export interface ModelUpdatePayload extends Payload {
    id: Uuid;
    domainType: CatalogueItemDomainType;
    label?: string;
    author?: string;
    organisation?: string;
    description?: string;
    aliases?: string[];
    classifiers?: Classifier[];
}
/**
 * Payload describing how to fork a model.
 */
export interface ForkModelPayload extends Payload {
    /**
     * The new label for the forked model.
     */
    label: string;
    /**
     * State whether permissions from the source model should be copied across to the
     * forked model.
     */
    copyPermissions?: boolean;
    /**
     * State whether data flows from the source model should be copied across to the
     * forked model.
     */
    copyDataFlows?: boolean;
}
/**
 * Payload describing how to start a new version of a model.
 */
export interface VersionModelPayload extends Payload {
}
/**
 * Payload describing how to start a new branch for a model.
 */
export interface BranchModelPayload extends Payload {
    /**
     * The new branch name for the branched model.
     */
    branchName: string;
}
export {};
