import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Result
        style={{ color: "red" }}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            style={{
              backgroundColor: "#fff",
              color: "#000",
            }}
            onClick={() => navigate("/", { replace: true })}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};
export default NotFound;
