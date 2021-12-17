import "mocha/mocha.css";
import mocha from "mocha/mocha-es2018";
import chai, { assert } from "chai";

import { checkNameisString } from "../views/CommunityCreateView";


mocha.setup("bdd");
it('Is a string ', function () {
  assert.isString(checkNameisString());
});

mocha.run();
