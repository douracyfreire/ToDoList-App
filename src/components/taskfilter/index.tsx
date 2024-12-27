import React from "react";
import Styles from "./styles";
import { colors } from "@/styles/theme";

interface TaskFilterProps{
  totalCreated: number;
  totalCompleted: number;
  activeFilter: "created" | "completed";
  onFilterChange: (filter: "created" | "completed") => void;
}

export default function TaskFilter({
  totalCreated, totalCompleted, activeFilter, onFilterChange,
} : TaskFilterProps){

  return(
    <Styles.Container>
      <Styles.FilterButton onPress={() => onFilterChange("created")}>
        <Styles.FilterText>Tarefas criadas</Styles.FilterText>
        <Styles.Badge 
          color={colors.purple.light}
          textColor={colors.purple.dark}
        >{totalCreated}</Styles.Badge>
      </Styles.FilterButton>

      <Styles.FilterButton 
        onPress={() => onFilterChange("completed")}
      >
        <Styles.FilterText>Concluídas</Styles.FilterText>
        <Styles.Badge 
          color={colors.green.light}
          textColor={colors.green.dark}
        >{totalCompleted}</Styles.Badge>
      </Styles.FilterButton>
    </Styles.Container>
  );
}