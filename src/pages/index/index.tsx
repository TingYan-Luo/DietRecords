import React from "react";
import { AtCalendar } from "taro-ui"
import Layout from "../../components/Layout";

import './index.less'

const Index = () => {
  return (
    <Layout className='wrapper'>
      <AtCalendar />
    </Layout>
  );
};

export default Index;
