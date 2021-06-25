/*
Copyright 2021 University of Oxford

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

import { Uuid } from "mdm-common.model";

export interface MergeItem
{
    path: string;
    fieldName: string;
    sourceValue? : string;
    targetValue? : string;
    commonAncestorValue? : string,
    isMergeConflict : boolean,
    isSourceModificationAndTargetDeletion? : boolean;
    type: MergeType
}

export interface Merge
{
    sourceID: Uuid;
    targetId: Uuid;
    path:string;
    label:string;
    count:number;
    diffs: Array<MergeItem>;
}

export enum MergeType
{
    Creation,
    Deletion,
    Modification
}