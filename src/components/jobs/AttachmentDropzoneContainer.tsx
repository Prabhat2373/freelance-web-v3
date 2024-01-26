import React from "react";
import { DropZoneUI } from "../ui/dnd/DropZone";
import { Text } from "@mantine/core";
import Asterisk from "../inputs/ui/Asterisk";

const AttachmentDropzoneContainer = () => {
  return (
    <div>
      <Text>
        Attachments <Asterisk />
      </Text>
      <div className="my-10">
        <DropZoneUI
          description={`Drag&apos;n&apos;drop files here to upload. We can accept only 
            pdf files that are less than 30mb in size.`}
          title="Upload Attachment"
        />
      </div>
    </div>
  );
};

export default AttachmentDropzoneContainer;
