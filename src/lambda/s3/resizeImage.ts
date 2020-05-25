import {SNSHandler,  SNSEvent } from 'aws-lambda'
import 'source-map-support/register'



export const handler: SNSHandler = async (event: SNSEvent) => {
    console.log('Processing SNS Resize Image event ', JSON.stringify(event))

    
}