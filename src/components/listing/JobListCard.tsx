import React, { HTMLAttributes } from "react";
import PinterestIcon from "../icons/jobs/TwitterIcon";
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Paper,
  Text,
  Tooltip,
  rem,
} from "@mantine/core";
import IconLocation from "../icons/IconLocation";
import moment from "moment";
import {
  IconLocationFilled,
  IconMapPinFilled,
  IconPencil,
} from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
export interface IJobCardProps extends HTMLAttributes<HTMLElement> {
  data: any;
  hideOptions?: boolean;
  withClient?: boolean;
}

const JobListCard = ({
  data,
  withClient,
  hideOptions,
  ...props
}: IJobCardProps) => {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
      className="my-3"
    >
      {/* <div className="w-full border border-border-primary rounded-md shadow-md py-4 px-5 my-2"> */}
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div>
              <PinterestIcon />
            </div>
            <div className="flex flex-col">
              <Text>{data?.job_title}</Text>
              <div className="flex items-center gap-2">
                <Text c={"dimmed"} color="gray">
                  {data?.client?.company_name ?? "Pinterest Studio"}
                </Text>
                <span className="text-gray">•</span>
                <Badge variant="light" color="pink">
                  {data?.payment_mode ?? "NA"}
                </Badge>
                <span className="text-gray">•</span>
                <Badge variant="light" color="blue">
                  {data?.experience_level?.name ?? "NA"}
                </Badge>
                <span className="text-gray">•</span>

                <Text c={"dimmed"} color="gray">
                  ${data?.payment_amount ?? "1,600-$1,800 USD"}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-end flex-col">
            <Text size="md" className="flex gap-1 items-center">
              <IconMapPinFilled className="w-5 h-5" />{" "}
              {data?.location || "Remote"}
            </Text>
            <Text c={"dimmed"} size="sm" className="text-gray font-semibold">
              {moment(data?.createdAt).fromNow()}
            </Text>
          </div>
        </div>
        <div className="grid grid-cols-8 py-2">
          <div className="col-span-6">
            <div className="w-3/4">
              <Text size="sm" mt="sm" c="dimmed" truncate="end">
                {data?.job_description ?? "-"}
              </Text>
            </div>
          </div>
          <div className="grid col-span-2 items-end justify-end">
            {withClient ? (
              <Group gap={0} justify="flex-end">
                <Tooltip label="Update Job Post" withArrow>
                  <ActionIcon variant="subtle" color="gray">
                    <IconPencil
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Tooltip>
                <Tooltip label="Delete Job Post" withArrow>
                  <ActionIcon variant="subtle" color="red">
                    <IconTrash
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Tooltip>
              </Group>
            ) : (
              <Button>Apply</Button>
            )}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default JobListCard;
