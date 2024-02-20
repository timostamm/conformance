// Copyright 2023-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// source: connectrpc/conformance/v1/server_compat.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var connectrpc_conformance_v1_config_pb = require('../../../connectrpc/conformance/v1/config_pb.js');
goog.object.extend(proto, connectrpc_conformance_v1_config_pb);
goog.exportSymbol('proto.connectrpc.conformance.v1.ServerCompatRequest', null, global);
goog.exportSymbol('proto.connectrpc.conformance.v1.ServerCompatResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.connectrpc.conformance.v1.ServerCompatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.connectrpc.conformance.v1.ServerCompatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.connectrpc.conformance.v1.ServerCompatRequest.displayName = 'proto.connectrpc.conformance.v1.ServerCompatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.connectrpc.conformance.v1.ServerCompatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.connectrpc.conformance.v1.ServerCompatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.connectrpc.conformance.v1.ServerCompatResponse.displayName = 'proto.connectrpc.conformance.v1.ServerCompatResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.connectrpc.conformance.v1.ServerCompatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.connectrpc.conformance.v1.ServerCompatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocol: jspb.Message.getFieldWithDefault(msg, 1, 0),
    httpVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    useTls: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    clientTlsCert: msg.getClientTlsCert_asB64(),
    messageReceiveLimit: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.connectrpc.conformance.v1.ServerCompatRequest}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.connectrpc.conformance.v1.ServerCompatRequest;
  return proto.connectrpc.conformance.v1.ServerCompatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.connectrpc.conformance.v1.ServerCompatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.connectrpc.conformance.v1.ServerCompatRequest}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.connectrpc.conformance.v1.Protocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 2:
      var value = /** @type {!proto.connectrpc.conformance.v1.HTTPVersion} */ (reader.readEnum());
      msg.setHttpVersion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseTls(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setClientTlsCert(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMessageReceiveLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.connectrpc.conformance.v1.ServerCompatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.connectrpc.conformance.v1.ServerCompatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getHttpVersion();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUseTls();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getClientTlsCert_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getMessageReceiveLimit();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional Protocol protocol = 1;
 * @return {!proto.connectrpc.conformance.v1.Protocol}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.getProtocol = function() {
  return /** @type {!proto.connectrpc.conformance.v1.Protocol} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.connectrpc.conformance.v1.Protocol} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatRequest} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional HTTPVersion http_version = 2;
 * @return {!proto.connectrpc.conformance.v1.HTTPVersion}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.getHttpVersion = function() {
  return /** @type {!proto.connectrpc.conformance.v1.HTTPVersion} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.connectrpc.conformance.v1.HTTPVersion} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatRequest} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.setHttpVersion = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool use_tls = 4;
 * @return {boolean}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.getUseTls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatRequest} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.setUseTls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bytes client_tls_cert = 5;
 * @return {!(string|Uint8Array)}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.getClientTlsCert = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes client_tls_cert = 5;
 * This is a type-conversion wrapper around `getClientTlsCert()`
 * @return {string}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.getClientTlsCert_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getClientTlsCert()));
};


/**
 * optional bytes client_tls_cert = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getClientTlsCert()`
 * @return {!Uint8Array}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.getClientTlsCert_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getClientTlsCert()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatRequest} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.setClientTlsCert = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint32 message_receive_limit = 6;
 * @return {number}
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.getMessageReceiveLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatRequest} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatRequest.prototype.setMessageReceiveLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.connectrpc.conformance.v1.ServerCompatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.connectrpc.conformance.v1.ServerCompatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pemCert: msg.getPemCert_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.connectrpc.conformance.v1.ServerCompatResponse}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.connectrpc.conformance.v1.ServerCompatResponse;
  return proto.connectrpc.conformance.v1.ServerCompatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.connectrpc.conformance.v1.ServerCompatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.connectrpc.conformance.v1.ServerCompatResponse}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPemCert(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.connectrpc.conformance.v1.ServerCompatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.connectrpc.conformance.v1.ServerCompatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPemCert_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatResponse} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatResponse} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes pem_cert = 3;
 * @return {!(string|Uint8Array)}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.getPemCert = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes pem_cert = 3;
 * This is a type-conversion wrapper around `getPemCert()`
 * @return {string}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.getPemCert_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPemCert()));
};


/**
 * optional bytes pem_cert = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPemCert()`
 * @return {!Uint8Array}
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.getPemCert_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPemCert()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.connectrpc.conformance.v1.ServerCompatResponse} returns this
 */
proto.connectrpc.conformance.v1.ServerCompatResponse.prototype.setPemCert = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


goog.object.extend(exports, proto.connectrpc.conformance.v1);
