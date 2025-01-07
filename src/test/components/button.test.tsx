/*
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "@/components/button";

describe("Button Component", () => {
  it("deve renderizar o título corretamente", () => {
    const { getByText } = render(<Button title="Testar" onPress={() => {}} />);
    
    expect(getByText("Testar")).toBeTruthy();
  });

  it("deve chamar a função onPress ao clicar no botão", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Pressionar" onPress={onPressMock} />
    );

    const button = getByText("Pressionar");
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });

  it("não deve chamar onPress quando disabled é true", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Desabilitado" onPress={onPressMock} disabled />
    );

    const button = getByText("Desabilitado");
    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
*/