/*
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginScreen from "@/app/login";

describe("LoginScreen", () => {
  it("deve renderizar os componentes principais", () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    expect(getByPlaceholderText("Username")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();

    expect(getByText("Login")).toBeTruthy();
  });

  it("deve exibir mensagens de erro se os campos estiverem vazios", () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);

    const loginButton = getByText("Login");
    fireEvent.press(loginButton);

    expect(getByText("Username é obrigatório")).toBeTruthy();
    expect(getByText("Senha é obrigatória")).toBeTruthy();
  });

  it("deve limpar mensagens de erro ao digitar nos campos", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <LoginScreen />
    );

    const loginButton = getByText("Login");
    fireEvent.press(loginButton);

    expect(getByText("Username é obrigatório")).toBeTruthy();
    expect(getByText("Senha é obrigatória")).toBeTruthy();

    const usernameInput = getByPlaceholderText("Username");
    fireEvent.changeText(usernameInput, "example");

    expect(queryByText("Username é obrigatório")).toBeNull();
  });
});
*/