import { sayHello } from '../src/say-hello';

describe("test suite", () => {
  test("say hello", () => {
    expect(sayHello("somebody")).toBe("hello somebody");
  });
});
