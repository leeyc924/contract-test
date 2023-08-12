/**
 * @jest-environment node
 */

import { Verifier } from "@pact-foundation/pact";
import express from 'express';
import router from '../server/router'

const app = express();
app.use(router);
const server = app.listen("8080");

describe("Pact Verification", () => {
    it("validates the expectations of ProductService", () => {
        const opts = {
            logLevel: "INFO",
            providerBaseUrl: "http://localhost:8080",
            provider: "ProductService",
            providerVersion: "1.0.0",
            providerVersionTags: ["test"],
            // pactBrokerUrl :process.env.PACT_BROKER_BASE_URL || 'https://<your_broker_name>.pactflow.io',
            // pactBrokerToken: process.env.PACT_BROKER_TOKEN || 'pact_workshop',
            stateHandlers: {
                "products exist": () => {
                },
            },
            // requestFilter: (req, res, next) => {
            //     if (!req.headers["authorization"]) {
            //         next();
            //         return;
            //     }
            //     req.headers["authorization"] = `Bearer ${new Date().toISOString()}`;
            //     next();
            // },
            // publishVerificationResult: process.env.CI || process.env.PACT_BROKER_PUBLISH_VERIFICATION_RESULTS
        };

        if (process.env.CI) {
            Object.assign(opts, {
                publishVerificationResult: true,
            });
        }

        // return new Verifier(opts).verifyProvider().then(output => {
        //     console.log(output);
        // }).finally(() => {
        //     server.close();
        // });
    })
});