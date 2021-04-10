import * as cdk from "@aws-cdk/core";
import * as iam from "@aws-cdk/aws-iam";

export class RaspberryPiUser extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new iam.User(this, "User", {
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AWSCodeDeployFullAccess"),
      ],
    });
  }
}
