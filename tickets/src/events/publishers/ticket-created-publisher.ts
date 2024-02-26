import {Publisher, Subjects, TicketCreatedEvent} from '@pogmicro/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
