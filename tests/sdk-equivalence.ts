// Every type of this package is the one kuzzle-sdk 7.17.1 exports under the
// same name — the seed was a copy, so `kuzzle` and `kuzzle-sdk` can re-export
// these without changing a single type their users see. Type-checked by
// `npm run test:types`; a divergence fails the build.
import type * as Sdk from "kuzzle-sdk";

import type * as Own from "../src";

/** `true` only if A and B are identical types (not merely assignable). */
type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

/** Assignable both ways: for a class instance compared with an interface. */
type Mutual<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

function assert<T extends true>(): T | void {}

type Content = Own.KDocumentContent & { name: string };

// ApiKey.ts
assert<Equals<Own.ApiKey, Sdk.ApiKey>>();
// ArgsDefault.ts
assert<Equals<Own.ArgsDefault, Sdk.ArgsDefault>>();
// BaseRequest.ts
assert<Equals<Own.BaseRequest, Sdk.BaseRequest>>();
// Document.ts — `Document` is a class in the SDK, an interface here.
assert<Equals<Own.DocumentMetadata, Sdk.DocumentMetadata>>();
assert<Equals<Own.DocumentContent, Sdk.DocumentContent>>();
assert<Mutual<Own.Document, Sdk.Document>>();
assert<Mutual<Own.DocumentHit, Sdk.DocumentHit>>();
// HttpRoutes.ts
assert<Equals<Own.HttpRoutes, Sdk.HttpRoutes>>();
// JSONObject.ts
assert<Equals<Own.JSONObject, Sdk.JSONObject>>();
// KDocument.ts
assert<Equals<Own.KDocumentKuzzleInfo, Sdk.KDocumentKuzzleInfo>>();
assert<Equals<Own.KDocumentContent, Sdk.KDocumentContent>>();
assert<Equals<Own.KDocumentContentGeneric, Sdk.KDocumentContentGeneric>>();
assert<Equals<Own.KDocument<Content>, Sdk.KDocument<Content>>>();
assert<Equals<Own.KHit<Content>, Sdk.KHit<Content>>>();
// Mappings.ts
assert<Equals<Own.MappingsProperties, Sdk.MappingsProperties>>();
assert<Equals<Own.CollectionMappings, Sdk.CollectionMappings>>();
// Notification.ts
assert<Equals<Own.NotificationType, Sdk.NotificationType>>();
assert<Equals<Own.BaseNotification, Sdk.BaseNotification>>();
assert<
  Equals<Own.DocumentNotification<Content>, Sdk.DocumentNotification<Content>>
>();
assert<Equals<Own.UserNotification, Sdk.UserNotification>>();
assert<Equals<Own.ServerNotification, Sdk.ServerNotification>>();
assert<Equals<Own.Notification, Sdk.Notification>>();
// ProfilePolicy.ts
assert<Equals<Own.ProfilePolicy, Sdk.ProfilePolicy>>();
// RequestPayload.ts
assert<Equals<Own.RequestPayload, Sdk.RequestPayload>>();
// ResponsePayload.ts
assert<Equals<Own.ResponsePayload, Sdk.ResponsePayload>>();
assert<Equals<Own.ResponsePayload<Content>, Sdk.ResponsePayload<Content>>>();
// RoleRightsDefinition.ts
assert<Equals<Own.RoleRightsDefinition, Sdk.RoleRightsDefinition>>();
// mRequests.ts
assert<Equals<Own.mCreateRequest<Content>, Sdk.mCreateRequest<Content>>>();
assert<
  Equals<
    Own.mCreateOrReplaceRequest<Content>,
    Sdk.mCreateOrReplaceRequest<Content>
  >
>();
assert<Equals<Own.mReplaceRequest<Content>, Sdk.mReplaceRequest<Content>>>();
assert<Equals<Own.mUpdateRequest<Content>, Sdk.mUpdateRequest<Content>>>();
assert<Equals<Own.mUpsertRequest<Content>, Sdk.mUpsertRequest<Content>>>();
assert<Equals<Own.mDeleteRequest, Sdk.mDeleteRequest>>();
// mResponses.ts
assert<Equals<Own.mCreateResponse, Sdk.mCreateResponse>>();
assert<Equals<Own.mCreateOrReplaceResponse, Sdk.mCreateOrReplaceResponse>>();
assert<Equals<Own.mUpsertResponse, Sdk.mUpsertResponse>>();
assert<Equals<Own.mReplaceResponse, Sdk.mReplaceResponse>>();
assert<Equals<Own.mUpdateResponse, Sdk.mUpdateResponse>>();
assert<Equals<Own.mDeleteResponse, Sdk.mDeleteResponse>>();
