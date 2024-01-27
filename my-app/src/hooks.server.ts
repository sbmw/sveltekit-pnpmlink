import type { Handle } from "@sveltejs/kit";
import { logAndRedirectFromHook } from "my-package";

export const handle: Handle = async ({ event, resolve }) => {
    logAndRedirectFromHook(event);

    return await resolve(event);
};
