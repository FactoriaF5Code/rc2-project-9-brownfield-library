import { afterAll, beforeAll } from "vitest";

import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

const handlers = [
    http.get("http://localhost:9001/api/books?q=Mano", () => {
        return HttpResponse.json({
            results: [
                { authod: "Ursula K. Leguin", title: "La Mano Izquierda de la Oscuridad", isbn: "9781234567897", year: "1969" },
                { authod: "Ursula K. Leguin", title: "Los desposeídos", isbn: "9780425032794", year: "1974" }
            ]
        });
    })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => { server.resetHandlers() });
