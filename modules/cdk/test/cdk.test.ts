import { SynthUtils } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { RaspberryPiUser } from "../src/raspberry-pi-user";

test("RaspberryPiUser", () => {
  const app = new cdk.App();

  const target = new RaspberryPiUser(app, "Target");

  expect(SynthUtils.toCloudFormation(target)).toMatchSnapshot();
});
