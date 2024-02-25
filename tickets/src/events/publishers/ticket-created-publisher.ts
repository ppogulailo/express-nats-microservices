import {Publisher, Subjects, TicketCreatedEvent} from "@pogmicro/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated
}
