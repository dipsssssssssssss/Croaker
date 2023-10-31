import { describe, expect, it } from "vitest";
import { validateEmail } from "../helpers";


// You need to write more tests for email (incorrect/correct)
//incorrect ones
describe('helpers - validateEmail', () => {
    it('fails if email is empty string', () => {
        expect(validateEmail('')).equal(false);
    });
})
it('returns false for an email without "@" symbol', () => {
    expect(validateEmail('dipshikaemail.com')).toBe(false);

});
it('returns false for an email with spaces', () => {
    expect(validateEmail('dipshika @email. com')).toBe(false);
});

it('returns false for an email without a local part', () => {
    expect(validateEmail('@dipshika.com')).toBe(false);
});

//correct ones
it('returns true for a valid email', () => {
    expect(validateEmail('dipshika@email.com')).toBe(true);
});

it('returns true for a valid email with a single-character local part', () => {
    expect(validateEmail('m@dipshika.com')).toBe(true);
});

it('returns true for a valid email with mixed case', () => {
    expect(validateEmail('dIPShika@email.cOm')).toBe(true);
});
