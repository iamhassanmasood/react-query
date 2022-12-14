import { useQuery } from "react-query";
import API from "../config/axios";
import { Row, Col, Card, Typography, Image } from "antd";

const { Title } = Typography;
const { Meta } = Card;

const fetchProductsList = () => API.get("products").then((res) => res.data);

const Userlist = () => {
  const { isLoading, error, data } = useQuery("Propducts", fetchProductsList);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Error: {error?.message}</h2>;

  return (
    <>
      <Row justify="center">
        <Title level={1}>Products</Title>
      </Row>
      <Row gutter={[16, 16]}>
        {data.map((item, idx) => (
          <Col lg={6} md={12} sm={24} key={idx}>
            <Card
              hoverable
              style={{ maxWidth: 400 }}
              cover={
                <Image
                  alt="example"
                  src={item.image}
                  style={{ objectFit: "contain", objectPosition: "right" }}
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
