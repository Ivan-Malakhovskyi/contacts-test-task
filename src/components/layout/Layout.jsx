import { Suspense } from "react";
import { Container, FallBack } from "./Layout.styled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container>
      <main>
        <Suspense fallback={<FallBack />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
