import { ListItem, Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import style from "./BenefitItem.module.css";

type BenefitItemProps = {
  icon: string;
  title: string;
  description?: string;
};

export const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <ListItem sx={{ justifyContent: "center" }}>
      <Stack
        alignItems={"center"}
        color={"secondary"}
        gap={"8px"}
        position={"relative"}
      >
        <div className={style.benefitImage}>
          <Image src={icon} alt="brain icon" fill unoptimized />
        </div>
        <Box color={"secondary"}>
          <Typography
            textAlign={"center"}
            fontWeight={500}
            fontSize={20}
            style={{ maxWidth: "200px" }}
          >
            {title}
          </Typography>
        </Box>
        <Typography textAlign={"center"}>{description}</Typography>
      </Stack>
    </ListItem>
  );
};
