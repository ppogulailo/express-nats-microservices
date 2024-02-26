import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from '@pogmicro/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}