import {Publisher, Subjects, TicketUpdatedEvent} from '@pogmicro/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
