import nats from 'node-nats-streaming';
import {randomBytes} from "node:crypto";

console.clear()

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222',
});

stan.on('connect', () => {
    console.log('Publisher connected to NATS');
    const subscription = stan.subscribe('ticket:created', 'queueGroup') // second param is a queue group
    subscription.on('message', (msg) => {
        const data = msg.getData()
        if (typeof data === 'string') {
            console.log(`Received event #${msg.getSequence()}, with data: ${data}`)
        }
    })
});
