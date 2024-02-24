import express from 'express'
import {json} from "body-parser";
import 'express-async-errors'
import cookieSession from "cookie-session";

import {errorHandler, NotFoundError, currentUser} from "@pogmicro/common";
import {createTicketRouter} from "./routes/new";
import {showTicketRouter} from "./routes/show";
import {indexTicketRouter} from "./routes";
import {updateTicketRouter} from "./routes/update";

const app = express()
app.set('trust proxy', true)


app.use(json());
app.use(cookieSession({signed: false, secure: process.env.NODE_ENV !== 'test'}))
app.use(currentUser)

app.use(indexTicketRouter)
app.use(updateTicketRouter)
app.use(showTicketRouter)
app.use(createTicketRouter)
app.all('*', async () => {
    throw new NotFoundError()
})
app.use(errorHandler)

export {app};