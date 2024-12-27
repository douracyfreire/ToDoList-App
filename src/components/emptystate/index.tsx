import React from "react";
import Styles from "./styles";
import Icons from "@/assets/icons";

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

export default function EmptyState({
  title, subtitle,
} : EmptyStateProps){
  
  return(
    <Styles.Container>
      <Icons.ClipBoard />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Subtitle>{subtitle}</Styles.Subtitle>
    </Styles.Container>
  );
}