import { NearContract, NearBindgen, call, view, near } from "near-sdk-js";

// Define the default message
const DEFAULT_MESSAGE = "Hello";

@NearBindgen
class StatusMessage extends NearContract {
  // Define the constructor, which initializes the contract with a default message
  constructor() {
    // Used to give access to methods and properties of the parent or sibling class
    super();
    // Default the status records to
    this.message = DEFAULT_MESSAGE;
  }

  // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
  @view
  get_greeting() {
    env.log(`current greeting is ${this.message}`);
    return this.message;
  }

  // Public method - accepts a greeting, such as "howdy", and records it
  @call
  set_greeting(message) {
    let account_id = near.signerAccountId();
    env.log(`Saving greeting ${message}`);
    this.message = message;
  }
}
