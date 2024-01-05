"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import LandingPage from "./components/LandingPage";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(LandingPage, {
  name: "LandingPage",
});
