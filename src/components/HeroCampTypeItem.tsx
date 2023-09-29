import theme from "@/styles/theme";
import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./HeroCampTypeItem.module.css";

type ActivityItemProps = {
  text: string;
  imageSrc: string;
};

const ActivityItem: React.FC<ActivityItemProps> = (campType) => {
  return (
    <Stack
      key={campType.text}
      className={styles.heroCampTypeItem}
      direction={"column"}
      alignItems={"center"}
      gap={theme.spacing(2)}
    >
      <Image
        src={campType.imageSrc}
        alt={campType.text}
        className={styles.heroCampTypeItemImage}
        quality={100}
        width={180}
        height={180}
      />
      <Typography fontWeight={900} textAlign={"center"} variant="body1">
        {campType.text}
      </Typography>
    </Stack>
  );
};

export default ActivityItem;
