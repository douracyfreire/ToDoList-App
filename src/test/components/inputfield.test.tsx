/*
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import InputField from "@/components/inputfield";

describe("InputField Component", () => {
  it("deve renderizar o placeholder corretamente", () => {
    const { getByPlaceholderText } = render(
      <InputField placeholder="Digite algo" value="" onChangeText={() => {}} />
    );

    expect(getByPlaceholderText("Digite algo")).toBeTruthy();
  });


  it("deve exibir a mensagem de erro quando fornecida", () => {
    const { getByText } = render(
      <InputField placeholder="Digite algo" value="" onChangeText={() => {}} errorMessage="Erro encontrado" />
    );

    expect(getByText("Erro encontrado")).toBeTruthy();
  });

  it("deve ocultar a mensagem de erro quando não fornecida", () => {
    const { queryByText } = render(
      <InputField placeholder="Digite algo" value="" onChangeText={() => {}} />
    );

    expect(queryByText("Erro encontrado")).toBeNull();
  });
});
*/