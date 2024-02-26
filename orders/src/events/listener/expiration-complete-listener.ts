import {Listener, ExpirationCompleteEvent, Subjects, OrderStatus} from "@pogmicro/common";
import {queueGroupName} from "./queue-group-name";
import {Message} from "node-nats-streaming";
import {Order} from "../../models/order";
import {OrderCancelledPublisher} from "../publisher/order-cancelled-publisher";

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
    queueGroupName = queueGroupName
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete

    async onMessage(data: ExpirationCompleteEvent['data'], msg: Message) {
        const order = await Order.findById(data.orderId).populate('ticket')

        if (!order) {
            throw new Error('Order not found!')
        }

        order.set({
            status: OrderStatus.Cancelled,
            ticket: null
        })
        await new OrderCancelledPublisher(this.client).publish({
            id: order.id,
            version: order.version,
            ticket: {
                id: order.ticket.id
            }
        })
        msg.ack()
    }
}