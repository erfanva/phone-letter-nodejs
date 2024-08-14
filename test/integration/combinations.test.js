import * as chaiModule from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app.js";

const chai = chaiModule.use(chaiHttp);

describe("Combinations Routes", () => {
  it("should return correct combinations for a phoneNumber: '23'", (done) => {
    const phoneNumber = "23";
    const expectedResponse = [
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ];

    chai
      .request(app)
      .post("/combinations")
      .send({ phoneNumber: phoneNumber })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("status").that.equals("ok");
        expect(res.body).to.have.property("data");
        expect(res.body.data).to.deep.equal(expectedResponse);
        done();
      });
  });

  it("should return a 400 error for an invalid phoneNumber", (done) => {
    chai
      .request(app)
      .post("/combinations")
      .send({ phoneNumber: "1" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("status").that.equals("error");
        expect(res.body)
          .to.have.property("message")
          .that.equals("Invalid phone number");
        done();
      });
  });
});
