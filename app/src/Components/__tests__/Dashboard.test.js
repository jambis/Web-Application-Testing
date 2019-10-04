import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../Dashboard";

afterEach(cleanup);

describe("Strikes", () => {
  test("Clicks Strike button and increases strikes by 1", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("strikeButton"));
    expect(getByTestId("strikeCount")).toHaveTextContent("1");
  });

  test("Clicks Strike button 3 times and resets strikes to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("strikeButton"));
    expect(getByTestId("strikeCount")).toHaveTextContent("0");
  });
});

describe("Balls", () => {
  test("Clicks Ball button and increases balls by 1", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("ballButton"));

    expect(getByTestId("ballCount")).toHaveTextContent("1");
  });

  test("Clicks Ball button 4 times and resets balls to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("ballButton"));

    expect(getByTestId("ballCount")).toHaveTextContent("0");
  });
});

describe("Fouls", () => {
  test("Clicks Foul button and increases strike to 1", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("foulButton"));

    expect(getByTestId("strikeCount")).toHaveTextContent("1");
  });

  test("Clicks Foul button 3 times and increases strike only up to 2", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("foulButton"));
    fireEvent.click(getByTestId("foulButton"));
    fireEvent.click(getByTestId("foulButton"));

    expect(getByTestId("strikeCount")).toHaveTextContent("2");
  });
});

describe("Reset Balls and Strikes", () => {
  test("Clicks Hit button and resets both balls and strikes to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("hitButton"));

    expect(getByTestId("strikeCount")).toHaveTextContent("0");
    expect(getByTestId("ballCount")).toHaveTextContent("0");
  });

  test("Clicks Ball button 4 times and resets strike and balls to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("ballButton"));

    expect(getByTestId("strikeCount")).toHaveTextContent("0");
    expect(getByTestId("ballCount")).toHaveTextContent("0");
  });

  test("Clicks Strike button 3 times and resets strike and balls to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("strikeButton"));

    expect(getByTestId("strikeCount")).toHaveTextContent("0");
    expect(getByTestId("ballCount")).toHaveTextContent("0");
  });

  test("Clicks Out button and reset strikes and balls to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("ballButton"));
    fireEvent.click(getByTestId("outButton"));

    expect(getByTestId("strikeCount")).toHaveTextContent("0");
    expect(getByTestId("ballCount")).toHaveTextContent("0");
  });
});

describe("Outs", () => {
  test("Click Outs button and increases outs by 1", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("outButton"));

    expect(getByTestId("outCount")).toHaveTextContent("1");
  });

  test("Click Outs button 3 times and resets outs to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("outButton"));
    fireEvent.click(getByTestId("outButton"));
    fireEvent.click(getByTestId("outButton"));

    expect(getByTestId("outCount")).toHaveTextContent("0");
  });

  test("Click strike button 3 times and increases outs by 1", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("strikeButton"));
    fireEvent.click(getByTestId("strikeButton"));

    expect(getByTestId("outCount")).toHaveTextContent("1");
  });
});
