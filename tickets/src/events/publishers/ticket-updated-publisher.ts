import {Publisher, Subjects, TicketUpdatedEvent} from "@pogmicro/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
