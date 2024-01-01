import Card from "@/components/cards/Card";
import React from "react";

type VerificationStatusProps = {
  identityVerified: boolean;
  paymentVerified: boolean;
  phoneVerified: boolean;
  emailVerified: boolean;
};

const VerificationStatus: React.FC<VerificationStatusProps> = ({
  identityVerified,
  paymentVerified,
  phoneVerified,
  emailVerified,
}) => {
  return (
    <Card headline="Verification">
      <div>
        <h2 className="text-lg font-bold mb-2">Verification Status</h2>

        <div className="flex items-center mb-2">
          <span className="mr-2">Identity Verification:</span>
          {identityVerified ? (
            <span className="text-green-500">Verified</span>
          ) : (
            <button className="text-blue-500">Verify</button>
          )}
        </div>

        <div className="flex items-center mb-2">
          <span className="mr-2">Payment Verification:</span>
          {paymentVerified ? (
            <span className="text-green-500">Verified</span>
          ) : (
            <button className="text-blue-500">Verify</button>
          )}
        </div>

        <div className="flex items-center mb-2">
          <span className="mr-2">Phone Verification:</span>
          {phoneVerified ? (
            <span className="text-green-500">Verified</span>
          ) : (
            <button className="text-blue-500">Verify</button>
          )}
        </div>

        <div className="flex items-center">
          <span className="mr-2">Email Verification:</span>
          {emailVerified ? (
            <span className="text-green-500">Verified</span>
          ) : (
            <button className="text-blue-500">Verify</button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default VerificationStatus;
