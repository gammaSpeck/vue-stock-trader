import VueRouter from "vue-router";
import { routes } from "./routes";

/** Cool setting to make #fragments work */
const scrollBehavior = (to, from, savedPos) => {
  if (savedPos) return savedPos;
  if (to.hash) return { selector: to.hash };

  return { x: 0, y: 0 };
};

// const middleware = (to, from, next) => {
//   next();
// };

export const setupRouter = Vue => {
  Vue.use(VueRouter);
  // mode: history will use correct routes without starting #
  const router = new VueRouter({ routes, mode: "history", scrollBehavior });
  // router.beforeEach(middleware);
  return router;
};
