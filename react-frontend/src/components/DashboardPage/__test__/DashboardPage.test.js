import React from "react";
import { render, screen } from "@testing-library/react";

import DashboardPage from "../DashboardPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders dashboard page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DashboardPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("dashboard-datatable")).toBeInTheDocument();
    expect(screen.getByRole("dashboard-add-button")).toBeInTheDocument();
});
