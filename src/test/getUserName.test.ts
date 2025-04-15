import { getUsername } from "../lib/getUserName";
import { User } from "../interface/User";

describe("getUsername", () => {
  it("should return the username when a valid user object is provided", () => {
    const user: User = { name: "testUser" };
    const result = getUsername(user);
    expect(result).toBe("testUser");
  });

  it("should return undefined when the user object does not have a name property", () => {
    const user = {} as User;
    const result = getUsername(user);
    expect(result).toBeUndefined();
  });

  // it('should throw an error when the input is null', () => {
  //     expect(() => getUsername(null as unknown as User)).toThrow('Invalid user object');
  // });

  // it('should throw an error when the input is undefined', () => {
  //     expect(() => getUsername(undefined as unknown as User)).toThrow('Invalid user object');
  // });

  // it('should throw an error when the input is not an object', () => {
  //     expect(() => getUsername(123 as unknown as User)).toThrow('Invalid user object');
  //     expect(() => getUsername('string' as unknown as User)).toThrow('Invalid user object');
  //     expect(() => getUsername(true as unknown as User)).toThrow('Invalid user object');
  // });
});
