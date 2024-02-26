import {Publisher, Subjects} from "@pogmicro/common";
import {OrderCreatedEvent} from "@pogmicro/common/build";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated
}