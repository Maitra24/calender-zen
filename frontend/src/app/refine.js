import { Refine } from "@refinedev/core";
import { SimpleRestDataProvider } from "@refinedev/simple-rest";
import { Layout, NotificationProvider, OffLayoutGrid } from "@refinedev/core";
import axios from "axios";

const apiUrl = "http://localhost:3000/events";

export default function App() {
  return (
    <Refine
      dataProvider={new SimpleRestDataProvider(apiUrl, axios)}
      resources={[
        {
          name: "events",
          list: "/events",
          create: "/events",
          edit: "/events/:id",
          show: "/events/:id",
        },
      ]}
      DashboardPage={() => (
        <Layout>
          <OffLayoutGrid />
        </Layout>
      )}
    >
      <NotificationProvider />
    </Refine>
  );
}
