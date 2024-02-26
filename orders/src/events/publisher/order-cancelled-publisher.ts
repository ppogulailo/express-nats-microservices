import {Publisher, Subjects} from "@pogmicro/common";
import {OrderCancelledEvent, OrderCreatedEvent} from "@pogmicro/common/build";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}