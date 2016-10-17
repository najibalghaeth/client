// @flow

// This file is auto-generated by client/protocol/Makefile.
import * as gregor1 from './flow-types-gregor'
import * as keybase1 from './flow-types'
import engine from '../../engine'
import {putOnChannelMap, createChannelMap, closeChannelMap} from '../../util/saga'
import type {Exact} from './more'
import type {ChannelConfig, ChannelMap} from './saga'
export type int = number
export type int64 = number
export type uint = number
export type uint64 = number
export type long = number
export type double = number
export type bytes = any
export type RPCError = {
  code: number,
  desc: string
}
export type WaitingHandlerType = (waiting: boolean, method: string, sessionID: number) => void

// $FlowIssue we're calling an internal method on engine that's there just for us
const engineRpcOutgoing = (...args) => engine()._rpcOutgoing(...args)

type requestCommon = {
  waitingHandler?: WaitingHandlerType,
  incomingCallMap?: incomingCallMapType,
}

type requestErrorCallback = {
  callback?: ?(err: ?any) => void
}

type RPCErrorHandler = (err: RPCError) => void

type CommonResponseHandler = {
  error: RPCErrorHandler,
  result: (...rest: Array<void>) => void,
}
function _channelMapRpcHelper(channelConfig: ChannelConfig<*>, partialRpcCall: (incomingCallMap: any, callback: Function) => void): ChannelMap<*> {
  const channelMap = createChannelMap(channelConfig)
  const incomingCallMap = Object.keys(channelMap).reduce((acc, k) => {
    acc[k] = (params, response) => {
      putOnChannelMap(channelMap, k, {params, response})
    }
    return acc
  }, {})
  const callback = (error) => {
    channelMap['finished'] && putOnChannelMap(channelMap, 'finished', {error})
    closeChannelMap(channelMap)
  }
  partialRpcCall(incomingCallMap, callback)
  return channelMap
}

export const CommonMessageType = {
  none: 0,
  text: 1,
  attachment: 2,
  edit: 3,
  delete: 4,
  metadata: 5,
  tlfname: 6,
  headline: 7,
}

export const CommonTLFVisibility = {
  any: 0,
  public: 1,
  private: 2,
}

export const CommonTopicType = {
  none: 0,
  chat: 1,
  dev: 2,
}

export const LocalBodyPlaintextVersion = {
  v1: 1,
}

export const LocalHeaderPlaintextVersion = {
  v1: 1,
}

export const LocalMessageUnboxedState = {
  valid: 1,
  error: 2,
}

export const NotifyChatChatActivityType = {
  reserved: 0,
  incomingMessage: 1,
}

export function localDownloadAttachmentLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localDownloadAttachmentLocalResult) => void} & {param: localDownloadAttachmentLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.DownloadAttachmentLocal'})
}

export function localDownloadAttachmentLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localDownloadAttachmentLocalResult) => void} & {param: localDownloadAttachmentLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localDownloadAttachmentLocalRpc({...request, incomingCallMap, callback}))
}

export function localDownloadAttachmentLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localDownloadAttachmentLocalResult) => void} & {param: localDownloadAttachmentLocalRpcParam}>): Promise<localDownloadAttachmentLocalResult> {
  return new Promise((resolve, reject) => { localDownloadAttachmentLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetConversationForCLILocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetConversationForCLILocalResult) => void} & {param: localGetConversationForCLILocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getConversationForCLILocal'})
}

export function localGetConversationForCLILocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetConversationForCLILocalResult) => void} & {param: localGetConversationForCLILocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localGetConversationForCLILocalRpc({...request, incomingCallMap, callback}))
}

export function localGetConversationForCLILocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetConversationForCLILocalResult) => void} & {param: localGetConversationForCLILocalRpcParam}>): Promise<localGetConversationForCLILocalResult> {
  return new Promise((resolve, reject) => { localGetConversationForCLILocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetInboxAndUnboxLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxAndUnboxLocalResult) => void} & {param: localGetInboxAndUnboxLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getInboxAndUnboxLocal'})
}

export function localGetInboxAndUnboxLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxAndUnboxLocalResult) => void} & {param: localGetInboxAndUnboxLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localGetInboxAndUnboxLocalRpc({...request, incomingCallMap, callback}))
}

export function localGetInboxAndUnboxLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxAndUnboxLocalResult) => void} & {param: localGetInboxAndUnboxLocalRpcParam}>): Promise<localGetInboxAndUnboxLocalResult> {
  return new Promise((resolve, reject) => { localGetInboxAndUnboxLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetInboxLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxLocalResult) => void} & {param: localGetInboxLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getInboxLocal'})
}

export function localGetInboxLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxLocalResult) => void} & {param: localGetInboxLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localGetInboxLocalRpc({...request, incomingCallMap, callback}))
}

export function localGetInboxLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxLocalResult) => void} & {param: localGetInboxLocalRpcParam}>): Promise<localGetInboxLocalResult> {
  return new Promise((resolve, reject) => { localGetInboxLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetInboxSummaryForCLILocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxSummaryForCLILocalResult) => void} & {param: localGetInboxSummaryForCLILocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getInboxSummaryForCLILocal'})
}

export function localGetInboxSummaryForCLILocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxSummaryForCLILocalResult) => void} & {param: localGetInboxSummaryForCLILocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localGetInboxSummaryForCLILocalRpc({...request, incomingCallMap, callback}))
}

export function localGetInboxSummaryForCLILocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxSummaryForCLILocalResult) => void} & {param: localGetInboxSummaryForCLILocalRpcParam}>): Promise<localGetInboxSummaryForCLILocalResult> {
  return new Promise((resolve, reject) => { localGetInboxSummaryForCLILocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetMessagesLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetMessagesLocalResult) => void} & {param: localGetMessagesLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.GetMessagesLocal'})
}

export function localGetMessagesLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetMessagesLocalResult) => void} & {param: localGetMessagesLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localGetMessagesLocalRpc({...request, incomingCallMap, callback}))
}

export function localGetMessagesLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetMessagesLocalResult) => void} & {param: localGetMessagesLocalRpcParam}>): Promise<localGetMessagesLocalResult> {
  return new Promise((resolve, reject) => { localGetMessagesLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetThreadLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetThreadLocalResult) => void} & {param: localGetThreadLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getThreadLocal'})
}

export function localGetThreadLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetThreadLocalResult) => void} & {param: localGetThreadLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localGetThreadLocalRpc({...request, incomingCallMap, callback}))
}

export function localGetThreadLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetThreadLocalResult) => void} & {param: localGetThreadLocalRpcParam}>): Promise<localGetThreadLocalResult> {
  return new Promise((resolve, reject) => { localGetThreadLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localNewConversationLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localNewConversationLocalResult) => void} & {param: localNewConversationLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.newConversationLocal'})
}

export function localNewConversationLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localNewConversationLocalResult) => void} & {param: localNewConversationLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localNewConversationLocalRpc({...request, incomingCallMap, callback}))
}

export function localNewConversationLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localNewConversationLocalResult) => void} & {param: localNewConversationLocalRpcParam}>): Promise<localNewConversationLocalResult> {
  return new Promise((resolve, reject) => { localNewConversationLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localPostAttachmentLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localPostAttachmentLocalResult) => void} & {param: localPostAttachmentLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.postAttachmentLocal'})
}

export function localPostAttachmentLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localPostAttachmentLocalResult) => void} & {param: localPostAttachmentLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localPostAttachmentLocalRpc({...request, incomingCallMap, callback}))
}

export function localPostAttachmentLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localPostAttachmentLocalResult) => void} & {param: localPostAttachmentLocalRpcParam}>): Promise<localPostAttachmentLocalResult> {
  return new Promise((resolve, reject) => { localPostAttachmentLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localPostLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localPostLocalResult) => void} & {param: localPostLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.postLocal'})
}

export function localPostLocalRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localPostLocalResult) => void} & {param: localPostLocalRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => localPostLocalRpc({...request, incomingCallMap, callback}))
}

export function localPostLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localPostLocalResult) => void} & {param: localPostLocalRpcParam}>): Promise<localPostLocalResult> {
  return new Promise((resolve, reject) => { localPostLocalRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteGetInboxRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetInboxRemoteResult) => void} & {param: remoteGetInboxRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.getInboxRemote'})
}

export function remoteGetInboxRemoteRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetInboxRemoteResult) => void} & {param: remoteGetInboxRemoteRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteGetInboxRemoteRpc({...request, incomingCallMap, callback}))
}

export function remoteGetInboxRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetInboxRemoteResult) => void} & {param: remoteGetInboxRemoteRpcParam}>): Promise<remoteGetInboxRemoteResult> {
  return new Promise((resolve, reject) => { remoteGetInboxRemoteRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteGetMessagesRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetMessagesRemoteResult) => void} & {param: remoteGetMessagesRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.getMessagesRemote'})
}

export function remoteGetMessagesRemoteRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetMessagesRemoteResult) => void} & {param: remoteGetMessagesRemoteRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteGetMessagesRemoteRpc({...request, incomingCallMap, callback}))
}

export function remoteGetMessagesRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetMessagesRemoteResult) => void} & {param: remoteGetMessagesRemoteRpcParam}>): Promise<remoteGetMessagesRemoteResult> {
  return new Promise((resolve, reject) => { remoteGetMessagesRemoteRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteGetS3ParamsRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetS3ParamsResult) => void} & {param: remoteGetS3ParamsRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.getS3Params'})
}

export function remoteGetS3ParamsRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetS3ParamsResult) => void} & {param: remoteGetS3ParamsRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteGetS3ParamsRpc({...request, incomingCallMap, callback}))
}

export function remoteGetS3ParamsRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetS3ParamsResult) => void} & {param: remoteGetS3ParamsRpcParam}>): Promise<remoteGetS3ParamsResult> {
  return new Promise((resolve, reject) => { remoteGetS3ParamsRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteGetThreadRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetThreadRemoteResult) => void} & {param: remoteGetThreadRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.getThreadRemote'})
}

export function remoteGetThreadRemoteRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetThreadRemoteResult) => void} & {param: remoteGetThreadRemoteRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteGetThreadRemoteRpc({...request, incomingCallMap, callback}))
}

export function remoteGetThreadRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetThreadRemoteResult) => void} & {param: remoteGetThreadRemoteRpcParam}>): Promise<remoteGetThreadRemoteResult> {
  return new Promise((resolve, reject) => { remoteGetThreadRemoteRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteMarkAsReadRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteMarkAsReadResult) => void} & {param: remoteMarkAsReadRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.markAsRead'})
}

export function remoteMarkAsReadRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteMarkAsReadResult) => void} & {param: remoteMarkAsReadRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteMarkAsReadRpc({...request, incomingCallMap, callback}))
}

export function remoteMarkAsReadRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteMarkAsReadResult) => void} & {param: remoteMarkAsReadRpcParam}>): Promise<remoteMarkAsReadResult> {
  return new Promise((resolve, reject) => { remoteMarkAsReadRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteNewConversationRemote2Rpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemote2Result) => void} & {param: remoteNewConversationRemote2RpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.newConversationRemote2'})
}

export function remoteNewConversationRemote2RpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemote2Result) => void} & {param: remoteNewConversationRemote2RpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteNewConversationRemote2Rpc({...request, incomingCallMap, callback}))
}

export function remoteNewConversationRemote2RpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemote2Result) => void} & {param: remoteNewConversationRemote2RpcParam}>): Promise<remoteNewConversationRemote2Result> {
  return new Promise((resolve, reject) => { remoteNewConversationRemote2Rpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteNewConversationRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemoteResult) => void} & {param: remoteNewConversationRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.newConversationRemote'})
}

export function remoteNewConversationRemoteRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemoteResult) => void} & {param: remoteNewConversationRemoteRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteNewConversationRemoteRpc({...request, incomingCallMap, callback}))
}

export function remoteNewConversationRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemoteResult) => void} & {param: remoteNewConversationRemoteRpcParam}>): Promise<remoteNewConversationRemoteResult> {
  return new Promise((resolve, reject) => { remoteNewConversationRemoteRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remotePostRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remotePostRemoteResult) => void} & {param: remotePostRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.postRemote'})
}

export function remotePostRemoteRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remotePostRemoteResult) => void} & {param: remotePostRemoteRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remotePostRemoteRpc({...request, incomingCallMap, callback}))
}

export function remotePostRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remotePostRemoteResult) => void} & {param: remotePostRemoteRpcParam}>): Promise<remotePostRemoteResult> {
  return new Promise((resolve, reject) => { remotePostRemoteRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteS3SignRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteS3SignResult) => void} & {param: remoteS3SignRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.s3Sign'})
}

export function remoteS3SignRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteS3SignResult) => void} & {param: remoteS3SignRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteS3SignRpc({...request, incomingCallMap, callback}))
}

export function remoteS3SignRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteS3SignResult) => void} & {param: remoteS3SignRpcParam}>): Promise<remoteS3SignResult> {
  return new Promise((resolve, reject) => { remoteS3SignRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteTlfFinalizeRpc (request: Exact<requestCommon & requestErrorCallback & {param: remoteTlfFinalizeRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.tlfFinalize'})
}

export function remoteTlfFinalizeRpcChannelMap (channelConfig: ChannelConfig<*>, request: $Exact<requestCommon & requestErrorCallback & {param: remoteTlfFinalizeRpcParam}>): ChannelMap<*> {
  return _channelMapRpcHelper(channelConfig, (incomingCallMap, callback) => remoteTlfFinalizeRpc({...request, incomingCallMap, callback}))
}

export function remoteTlfFinalizeRpcPromise (request: $Exact<requestCommon & requestErrorCallback & {param: remoteTlfFinalizeRpcParam}>): Promise<any> {
  return new Promise((resolve, reject) => { remoteTlfFinalizeRpc({...request, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export type Asset = {
  filename: string,
  region: string,
  endpoint: string,
  bucket: string,
  path: string,
  size: int,
  mimeType: string,
  encHash: Hash,
  key: bytes,
}

export type BodyPlaintext = 
    { version : 1, v1 : ?BodyPlaintextV1 }

export type BodyPlaintextV1 = {
  messageBody: MessageBody,
}

export type BodyPlaintextVersion = 
    1 // V1_1

export type ChatActivity = {
  ActivityType: ChatActivityType,
  IncomingMessage?: ?MessageUnboxed,
}

export type ChatActivityType = 
    0 // RESERVED_0
  | 1 // INCOMING_MESSAGE_1

export type Conversation = {
  metadata: ConversationMetadata,
  readerInfo?: ?ConversationReaderInfo,
  supersedes?: ?ConversationMetadata,
  supersededBy?: ?ConversationMetadata,
  maxMsgs?: ?Array<MessageBoxed>,
}

export type ConversationID = uint64

export type ConversationIDTriple = {
  tlfid: TLFID,
  topicType: TopicType,
  topicID: TopicID,
}

export type ConversationInfoLocal = {
  id: ConversationID,
  triple: ConversationIDTriple,
  tlfName: string,
  topicName: string,
  visibility: TLFVisibility,
}

export type ConversationLocal = {
  error?: ?string,
  info: ConversationInfoLocal,
  readerInfo: ConversationReaderInfo,
  maxMessages?: ?Array<MessageUnboxed>,
}

export type ConversationMetadata = {
  idTriple: ConversationIDTriple,
  conversationID: ConversationID,
  isFinalized: bool,
}

export type ConversationReaderInfo = {
  mtime: gregor1.Time,
  readMsgid: MessageID,
  maxMsgid: MessageID,
}

export type DownloadAttachmentLocalRes = {
  rateLimits?: ?Array<RateLimit>,
}

export type EncryptedData = {
  v: int,
  e: bytes,
  n: bytes,
}

export type GenericPayload = {
  Action: string,
}

export type GetConversationForCLILocalQuery = {
  markAsRead: boolean,
  MessageTypes?: ?Array<MessageType>,
  Since?: ?string,
  limit: UnreadFirstNumLimit,
  conversationId: ConversationID,
}

export type GetConversationForCLILocalRes = {
  conversation: ConversationLocal,
  messages?: ?Array<MessageUnboxed>,
  rateLimits?: ?Array<RateLimit>,
}

export type GetConversationMetadataRemoteRes = {
  conv: Conversation,
  rateLimit?: ?RateLimit,
}

export type GetInboxAndUnboxLocalRes = {
  conversations?: ?Array<ConversationLocal>,
  pagination?: ?Pagination,
  rateLimits?: ?Array<RateLimit>,
}

export type GetInboxByTLFIDRemoteRes = {
  convs?: ?Array<Conversation>,
  rateLimit?: ?RateLimit,
}

export type GetInboxLocalQuery = {
  tlfName?: ?string,
  topicName?: ?string,
  convID?: ?ConversationID,
  topicType?: ?TopicType,
  tlfVisibility?: ?TLFVisibility,
  before?: ?gregor1.Time,
  after?: ?gregor1.Time,
  oneChatTypePerTLF?: ?boolean,
  unreadOnly: boolean,
  readOnly: boolean,
}

export type GetInboxLocalRes = {
  conversationsUnverified?: ?Array<Conversation>,
  pagination?: ?Pagination,
  rateLimits?: ?Array<RateLimit>,
}

export type GetInboxQuery = {
  convID?: ?ConversationID,
  topicType?: ?TopicType,
  tlfID?: ?TLFID,
  tlfVisibility?: ?TLFVisibility,
  before?: ?gregor1.Time,
  after?: ?gregor1.Time,
  oneChatTypePerTLF?: ?boolean,
  unreadOnly: boolean,
  readOnly: boolean,
}

export type GetInboxRemoteRes = {
  inbox: InboxView,
  rateLimit?: ?RateLimit,
}

export type GetInboxSummaryForCLILocalQuery = {
  topicType: TopicType,
  after: string,
  before: string,
  visibility: TLFVisibility,
  unreadFirst: boolean,
  unreadFirstLimit: UnreadFirstNumLimit,
  activitySortedLimit: int,
}

export type GetInboxSummaryForCLILocalRes = {
  conversations?: ?Array<ConversationLocal>,
  rateLimits?: ?Array<RateLimit>,
}

export type GetMessagesLocalRes = {
  messages?: ?Array<MessageUnboxed>,
  rateLimits?: ?Array<RateLimit>,
}

export type GetMessagesRemoteRes = {
  msgs?: ?Array<MessageBoxed>,
  rateLimit?: ?RateLimit,
}

export type GetThreadLocalRes = {
  thread: ThreadView,
  rateLimits?: ?Array<RateLimit>,
}

export type GetThreadQuery = {
  markAsRead: boolean,
  messageTypes?: ?Array<MessageType>,
  before?: ?gregor1.Time,
  after?: ?gregor1.Time,
}

export type GetThreadRemoteRes = {
  thread: ThreadViewBoxed,
  rateLimit?: ?RateLimit,
}

export type Hash = bytes

export type HeaderPlaintext = 
    { version : 1, v1 : ?HeaderPlaintextV1 }

export type HeaderPlaintextV1 = {
  conv: ConversationIDTriple,
  tlfName: string,
  tlfPublic: boolean,
  messageType: MessageType,
  prev?: ?Array<MessagePreviousPointer>,
  sender: gregor1.UID,
  senderDevice: gregor1.DeviceID,
  bodyHash: Hash,
  headerSignature?: ?SignatureInfo,
}

export type HeaderPlaintextVersion = 
    1 // V1_1

export type InboxView = {
  conversations?: ?Array<Conversation>,
  pagination?: ?Pagination,
}

export type LocalSource = {
  source: keybase1.Stream,
  filename: string,
  size: int,
}

export type MarkAsReadRes = {
  rateLimit?: ?RateLimit,
}

export type MessageAttachment = {
  object: Asset,
  preview?: ?Asset,
  metadata: bytes,
}

export type MessageBody = 
    { messageType : 1, text : ?MessageText }
  | { messageType : 2, attachment : ?MessageAttachment }
  | { messageType : 3, edit : ?MessageEdit }
  | { messageType : 4, delete : ?MessageDelete }
  | { messageType : 5, metadata : ?MessageConversationMetadata }
  | { messageType : 7, headline : ?MessageHeadline }

export type MessageBoxed = {
  serverHeader?: ?MessageServerHeader,
  clientHeader: MessageClientHeader,
  headerCiphertext: EncryptedData,
  bodyCiphertext: EncryptedData,
  keyGeneration: int,
}

export type MessageClientHeader = {
  conv: ConversationIDTriple,
  tlfName: string,
  tlfPublic: boolean,
  messageType: MessageType,
  supersedes: MessageID,
  prev?: ?Array<MessagePreviousPointer>,
  sender: gregor1.UID,
  senderDevice: gregor1.DeviceID,
}

export type MessageConversationMetadata = {
  conversationTitle: string,
}

export type MessageDelete = {
  messageID: MessageID,
}

export type MessageEdit = {
  messageID: MessageID,
  body: string,
}

export type MessageHeadline = {
  headline: string,
}

export type MessageID = uint

export type MessagePlaintext = {
  clientHeader: MessageClientHeader,
  messageBody: MessageBody,
}

export type MessagePreviousPointer = {
  id: MessageID,
  hash: Hash,
}

export type MessageServerHeader = {
  messageID: MessageID,
  supersededBy: MessageID,
  ctime: gregor1.Time,
}

export type MessageText = {
  body: string,
}

export type MessageType = 
    0 // NONE_0
  | 1 // TEXT_1
  | 2 // ATTACHMENT_2
  | 3 // EDIT_3
  | 4 // DELETE_4
  | 5 // METADATA_5
  | 6 // TLFNAME_6
  | 7 // HEADLINE_7

export type MessageUnboxed = 
    { state : 1, valid : ?MessageUnboxedValid }
  | { state : 2, error : ?MessageUnboxedError }

export type MessageUnboxedError = {
  errMsg: string,
  messageID: MessageID,
  messageType: MessageType,
}

export type MessageUnboxedState = 
    1 // VALID_1
  | 2 // ERROR_2

export type MessageUnboxedValid = {
  clientHeader: MessageClientHeader,
  serverHeader: MessageServerHeader,
  messageBody: MessageBody,
  senderUsername: string,
  senderDeviceName: string,
  headerHash: Hash,
}

export type NewConversationLocalRes = {
  conv: ConversationLocal,
  rateLimits?: ?Array<RateLimit>,
}

export type NewConversationRemoteRes = {
  convID: ConversationID,
  rateLimit?: ?RateLimit,
}

export type NewMessagePayload = {
  Action: string,
  convID: ConversationID,
  message: MessageBoxed,
}

export type NotifyChatNewChatActivityRpcParam = Exact<{
  uid: keybase1.UID,
  activity: ChatActivity
}>

export type Pagination = {
  next: bytes,
  previous: bytes,
  num: int,
  last: boolean,
}

export type PostLocalRes = {
  rateLimits?: ?Array<RateLimit>,
}

export type PostRemoteRes = {
  msgHeader: MessageServerHeader,
  rateLimit?: ?RateLimit,
}

export type RateLimit = {
  name: string,
  callsRemaining: int,
  windowReset: int,
  maxCalls: int,
}

export type S3Params = {
  bucket: string,
  objectKey: string,
  accessKey: string,
  acl: string,
  regionName: string,
  regionEndpoint: string,
  regionBucketEndpoint: string,
}

export type SignatureInfo = {
  v: int,
  s: bytes,
  k: bytes,
}

export type TLFID = bytes

export type TLFVisibility = 
    0 // ANY_0
  | 1 // PUBLIC_1
  | 2 // PRIVATE_2

export type ThreadID = bytes

export type ThreadView = {
  messages?: ?Array<MessageUnboxed>,
  pagination?: ?Pagination,
}

export type ThreadViewBoxed = {
  messages?: ?Array<MessageBoxed>,
  pagination?: ?Pagination,
}

export type TopicID = bytes

export type TopicType = 
    0 // NONE_0
  | 1 // CHAT_1
  | 2 // DEV_2

export type UnreadFirstNumLimit = {
  NumRead: int,
  AtLeast: int,
  AtMost: int,
}

export type localDownloadAttachmentLocalRpcParam = Exact<{
  conversationID: ConversationID,
  messageID: MessageID,
  sink: keybase1.Stream,
  preview: boolean
}>

export type localGetConversationForCLILocalRpcParam = Exact<{
  query: GetConversationForCLILocalQuery
}>

export type localGetInboxAndUnboxLocalRpcParam = Exact<{
  query?: ?GetInboxLocalQuery,
  pagination?: ?Pagination
}>

export type localGetInboxLocalRpcParam = Exact<{
  query?: ?GetInboxLocalQuery,
  pagination?: ?Pagination
}>

export type localGetInboxSummaryForCLILocalRpcParam = Exact<{
  query: GetInboxSummaryForCLILocalQuery
}>

export type localGetMessagesLocalRpcParam = Exact<{
  conversationID: ConversationID,
  messageIDs?: ?Array<MessageID>
}>

export type localGetThreadLocalRpcParam = Exact<{
  conversationID: ConversationID,
  query?: ?GetThreadQuery,
  pagination?: ?Pagination
}>

export type localNewConversationLocalRpcParam = Exact<{
  tlfName: string,
  topicType: TopicType,
  tlfVisibility: TLFVisibility,
  topicName?: ?string
}>

export type localPostAttachmentLocalRpcParam = Exact<{
  conversationID: ConversationID,
  clientHeader: MessageClientHeader,
  attachment: LocalSource,
  preview?: ?LocalSource
}>

export type localPostLocalRpcParam = Exact<{
  conversationID: ConversationID,
  msg: MessagePlaintext
}>

export type remoteGetInboxRemoteRpcParam = Exact<{
  query?: ?GetInboxQuery,
  pagination?: ?Pagination
}>

export type remoteGetMessagesRemoteRpcParam = Exact<{
  conversationID: ConversationID,
  messageIDs?: ?Array<MessageID>
}>

export type remoteGetS3ParamsRpcParam = Exact<{
  conversationID: ConversationID
}>

export type remoteGetThreadRemoteRpcParam = Exact<{
  conversationID: ConversationID,
  query?: ?GetThreadQuery,
  pagination?: ?Pagination
}>

export type remoteMarkAsReadRpcParam = Exact<{
  conversationID: ConversationID,
  msgID: MessageID
}>

export type remoteNewConversationRemote2RpcParam = Exact<{
  idTriple: ConversationIDTriple,
  TLFMessage: MessageBoxed
}>

export type remoteNewConversationRemoteRpcParam = Exact<{
  idTriple: ConversationIDTriple
}>

export type remotePostRemoteRpcParam = Exact<{
  conversationID: ConversationID,
  messageBoxed: MessageBoxed
}>

export type remoteS3SignRpcParam = Exact<{
  version: int,
  payload: bytes
}>

export type remoteTlfFinalizeRpcParam = Exact<{
  tlfID: TLFID
}>

type localDownloadAttachmentLocalResult = DownloadAttachmentLocalRes

type localGetConversationForCLILocalResult = GetConversationForCLILocalRes

type localGetInboxAndUnboxLocalResult = GetInboxAndUnboxLocalRes

type localGetInboxLocalResult = GetInboxLocalRes

type localGetInboxSummaryForCLILocalResult = GetInboxSummaryForCLILocalRes

type localGetMessagesLocalResult = GetMessagesLocalRes

type localGetThreadLocalResult = GetThreadLocalRes

type localNewConversationLocalResult = NewConversationLocalRes

type localPostAttachmentLocalResult = PostLocalRes

type localPostLocalResult = PostLocalRes

type remoteGetInboxRemoteResult = GetInboxRemoteRes

type remoteGetMessagesRemoteResult = GetMessagesRemoteRes

type remoteGetS3ParamsResult = S3Params

type remoteGetThreadRemoteResult = GetThreadRemoteRes

type remoteMarkAsReadResult = MarkAsReadRes

type remoteNewConversationRemote2Result = NewConversationRemoteRes

type remoteNewConversationRemoteResult = NewConversationRemoteRes

type remotePostRemoteResult = PostRemoteRes

type remoteS3SignResult = bytes

export type rpc =
    localDownloadAttachmentLocalRpc
  | localGetConversationForCLILocalRpc
  | localGetInboxAndUnboxLocalRpc
  | localGetInboxLocalRpc
  | localGetInboxSummaryForCLILocalRpc
  | localGetMessagesLocalRpc
  | localGetThreadLocalRpc
  | localNewConversationLocalRpc
  | localPostAttachmentLocalRpc
  | localPostLocalRpc
  | remoteGetInboxRemoteRpc
  | remoteGetMessagesRemoteRpc
  | remoteGetS3ParamsRpc
  | remoteGetThreadRemoteRpc
  | remoteMarkAsReadRpc
  | remoteNewConversationRemote2Rpc
  | remoteNewConversationRemoteRpc
  | remotePostRemoteRpc
  | remoteS3SignRpc
  | remoteTlfFinalizeRpc
export type incomingCallMapType = Exact<{
  'keybase.1.NotifyChat.NewChatActivity'?: (
    params: Exact<{
      uid: keybase1.UID,
      activity: ChatActivity
    }> /* ,
    response: {} // Notify call
    */
  ) => void
}>
