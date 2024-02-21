import { afterAll, beforeAll } from "vitest";

import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { getApiHost } from "../../src/middleware/context/utils";

const handlers = [
    http.get(`${getApiHost()}/api/books?q=Mano`, () => {
        return HttpResponse.json(
            [
                {
                    id: 1,
                    author: "Ursula K. Leguin",
                    title: "La Mano Izquierda de la Oscuridad",
                    isbn: "9781234567897",
                    available: true
                }
            ]
        );
    })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
