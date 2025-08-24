import { useUserStore } from "./useUserStore";

test("increment increases cart count", () => {
  const { increment } = useUserStore.getState();
  increment();
  expect(useUserStore.getState().cartCount).toBe(1);
});
