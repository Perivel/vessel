"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnAny = void 0;
const foundation_1 = require("foundation");
const event_stream_1 = require("../event-stream/event-stream");
const domain_event_handler_priority_enum_1 = require("../subscriber/domain-event-handler-priority.enum");
const event_aggregate__type_1 = require("../event-emitter/event-aggregate..type");
function OnAny(priority = domain_event_handler_priority_enum_1.DomainEventHandlerPriority.MEDIUM, label = foundation_1.UUID.V4().id(), stopPropogationOnError = false) {
    return function (parentCls, funcName, descriptor) {
        const func = descriptor.value;
        const handlerPriority = Number(priority);
        const eventName = event_aggregate__type_1.EventAggregate.Any.toString();
        if (func) {
            const identifier = `${parentCls.constructor.name}.${funcName.toString()}.on-${eventName}`;
            event_stream_1.EventStream.instance().subscribe(identifier, eventName, handlerPriority, label, func, stopPropogationOnError);
        }
    };
}
exports.OnAny = OnAny;
