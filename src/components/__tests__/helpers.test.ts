import { describe, expect, it } from "vitest";
import { validateEmail } from "../helpers";


// You need to write more tests for email (incorrect/correct)
describe('helpers - validateEmail', () => {
    it('fails if email is empty string', () => {
        expect(validateEmail('')).equal(false);
    });
})