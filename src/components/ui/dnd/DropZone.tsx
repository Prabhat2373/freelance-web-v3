import { useRef } from "react";
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "../../../styles/dropzone.module.css";

export function DropZoneUI({ title, description }) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  return (
    <div className={"relative mb-30 rounded-md"}>
      <Dropzone
        openRef={openRef}
        onDrop={(event) => {
          console.log("dropped", event);
        }}
        className={"border rounded-md  border-solid border-primary pb-12"}
        radius="md"
        accept={[MIME_TYPES.pdf, MIME_TYPES.png, MIME_TYPES.jpeg]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                style={{ width: rem(50), height: rem(50) }}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>{title}</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            {/* Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
            <i>.pdf</i> files that are less than 30mb in size. */}
            {description}
          </Text>
        </div>
      </Dropzone>

      <div className="w-full flex justify-center -mt-5">
        <Button
          // className={
          //   "absolute w-64 left-1/2 transform -translate-x-1/2 bottom-[-20px]"
          // }

          size="md"
          radius="xl"
          onClick={() => openRef.current?.()}
        >
          Select files
        </Button>
      </div>
    </div>
  );
}
