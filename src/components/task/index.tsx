import React from "react";
import Styles from "./styles";
import Icons from "@/assets/icons";

interface TaskItemProps{
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete:() => void;
}

export default function TaskItem({
  text, completed, onToggle, onDelete,
} : TaskItemProps){

  return(
    <Styles.Container completed = {completed}>
      <Styles.Toggle onPress={onToggle}>
      {completed ? <Icons.CheckCircleFill /> : <Icons.CircleRegular />}
      </Styles.Toggle>

      <Styles.TaskText numberOfLines={3} completed = {completed}>{text}</Styles.TaskText>

      <Styles.Delete onPress={onDelete}>
        <Icons.Trash />
      </Styles.Delete>
    </Styles.Container>
  );
}