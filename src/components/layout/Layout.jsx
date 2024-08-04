import { Suspense } from "react";
import { Container, FallBack } from "./Layout.styled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <Container>
        <Suspense fallback={<FallBack />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};
