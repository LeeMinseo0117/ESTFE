import SimpleRouter from "./components/SimpleRouter";
import React, { useState } from "react";

export default function App() {
  const [userRole, setUserRole] = useState("guest");
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    const roles = ["guest", "user", "admin"];
    const randomRole = roles[Math.floor(Math.random() * 3)];
    setUserRole(randomRole);
    setIsLoading(false);
  }, 2000);
  return (
    <div>
      <h1>사용자 대시보드</h1>
      <SimpleRouter userRole={userRole} isLoading={isLoading} />
    </div>
  );
}
