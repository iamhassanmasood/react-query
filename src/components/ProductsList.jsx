import { useQuery } from "react-query";
import API from "../config/axios";
import { Row, Col, Card, Typography } from "antd";

const { Title } = Typography;
const { Meta } = Card;

const Userlist = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    API.get("products").then((res) => res.data)
  );
  if (isLoading) return <>Loading...............</>;
  if (error) return <>Error</>;
  console.log(data, "data is here");
  return (
    <>
      <Row justify="center">
        <Title level={1}>Products</Title>
      </Row>
      <Row gutter={[16, 16]}>
        {data.map((item, idx) => (
          <Col span={6}>
            <Card
              hoverable
              key={idx}
              cover={
                <img
                  alt="example"
                  src={item.image}
                  maxHeigh={280}
                  maxWidth={240}
                />
              }
            >
              <Meta title={item.title} description={item.price} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Userlist;
