import { Box, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./CampTypeItem.module.css";

const CampTypeItem = (props: {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}) => {
  const { imgSrc, title, description, link } = props;
  return (
    <ListItem className={styles.listItem}>
      <Image
        src={imgSrc}
        alt={title}
        fill
        style={{ borderRadius: "10px" }}
        unoptimized
      />

      <Box
        sx={{ backgroundColor: "#000000B2" }}
        position={"absolute"}
        display={"flex"}
        gap={"8px"}
        width={"100%"}
        borderRadius={"0 0 10px 10px"}
        flexDirection={"column"}
        padding={"24px 18px"}
        bottom={0}
      >
        <Typography fontWeight={600} variant="body1" color={"white"}>
          {title}
        </Typography>
        <Typography color={"white"} variant="subtitle1">
          {description}
        </Typography>
        <Link href={link}>
          <Typography color={"white"} variant="body2">
            Vezi mai mult
          </Typography>
        </Link>
      </Box>
    </ListItem>
  );
};

export default CampTypeItem;
