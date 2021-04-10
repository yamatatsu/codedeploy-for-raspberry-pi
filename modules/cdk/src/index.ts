import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { RaspberryPiUser } from "./raspberry-pi-user";

const app = new cdk.App();
new RaspberryPiUser(app, "TvKesu-RaspberryPiUser", {});
