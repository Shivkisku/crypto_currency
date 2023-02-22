import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import millify from 'millify';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  return (
    <div className="homepage">
      <Title level={2} className="homepage__heading">Global Crypto Stats</Title>
      {isFetching ? (
        <Loader />
      ) : (
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} />
          </Col>
          <Col span={12}>
            <Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
          </Col>
        </Row>
      )}
      <div className="homepage__heading-container">
        <Title level={2} className="homepage__title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="homepage__show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="homepage__heading-container">
        <Title level={2} className="homepage__title">
          Latest Crypto News
        </Title>
        <Title level={3} className="homepage__show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </div>
  );
};

export default Homepage;
