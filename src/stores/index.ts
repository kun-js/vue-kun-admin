import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist);

export default pinia;
