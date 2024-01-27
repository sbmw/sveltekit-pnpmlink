import { logAndRedirectFromLoad } from "my-package";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    logAndRedirectFromLoad(event);
    return {};
};
