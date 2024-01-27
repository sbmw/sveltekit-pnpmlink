// Reexport your entry components here
import { redirect, type RequestEvent } from "@sveltejs/kit";

export function logAndRedirectFromHook(event: RequestEvent) {
    console.log("PATH " + event.url.pathname);

    if (event.url.pathname === "/login") {
        redirect(307, "https://github.com/login");
    }
}

export function logAndRedirectFromLoad(event: RequestEvent) {
    console.log("PATH " + event.url.pathname);

    redirect(307, "https://google.com");
}
