/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import PieChartDonut from "examples/Charts/PieChart/configs";
// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import Emoji from "layouts/dashboard/components/Projects copy";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import moment from 'moment';
import { useEffect, useState } from "react";
import { Button, Card, Pagination, PaginationItem, Rating } from "@mui/material";
import io from "socket.io-client";
import PieChart from "examples/Charts/PieChart";
import GuageChart from "examples/Charts/PieChart copy";
import RealtimeBarChart from "layouts/dashboard/components/RealtimeChart/RealtimeBarChart"
import RealtimeChart from './components/RealtimeChart/RealtimeChart';
import RealtimeChartFake from './components/RealtimeChart/RealtimeChartFake'
import RealtimeChartEmoji from './components/RealtimeChart/RealtimeChartEmoji';
import demoHeatmap from 'assets/images/demoHeatmap.png'

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;
  const [data, setData] = useState({ x: new Date().getTime(), y: 0 });
  const currentDate = moment().format('DD/MM/YYYY');
  const [listCustomerVip, setListCustomerVip] = useState(['Nguyễn Hoàng Quang Huy', 'Đỗ Nhật Thảo Linh', 'Nguyễn Đặng Bảo Hân', 'Phạm Trà Vinh', 'Lê Thanh Mai']);
  const [listCustomerNew, setListCustomerNew] = useState(['Nguyễn Hoàng Quang Huy', 'Đỗ Nhật Thảo Linh', 'Nguyễn Đặng Bảo Hân', 'Phạm Trà Vinh', 'Lê Thanh Mai', 'Nguyễn Hoàng Quang Huy', 'Đỗ Nhật Thảo Linh', 'Nguyễn Đặng Bảo Hân']);
  const [totalEmoij, setTotalEmoij] = useState({
    negative: 10,
    positive: 20,
    neutral: 100
  });
  const [totalCustomerVisit, setTotalCustomerVisit] = useState();
  const [statisticsGender, setStatisticsGender] = useState({ male: 10, female: 5 })
  const [statisticsAge, setStatisticsAge] = useState({ child: 1, adult: 20, middle_age: 10, elderly: 1 })

  const sales = {
    labels: ["Nam", "Nữ"],
    datasets: { label: "gender", data: [statisticsGender.male, statisticsGender.female] },
  }
  const tasks = {
    labels: ["Trẻ em", "người lớn", "Trung niên", "người già"],
    datasets: { label: "age", data: [statisticsAge.child, statisticsAge.adult, statisticsAge.middle_age, statisticsAge.elderly] },
  }
  const [interactiveStaff, setInteractiveStaff] = useState("80%")

  const generateRandomPercentage = () => {
    const minPercentage = 75;
    const maxPercentage = 85;
    const randomPercentage = Math.random() * (maxPercentage - minPercentage) + minPercentage;
    return randomPercentage.toFixed(0); // Làm tròn đến 2 chữ số thập phân (vd: 84.52%)
  };

  const [returningCustomers, setReturningCustomers] = useState(0)

  useEffect(() => {
    let countNumberCustomer = 0
    const timer = setInterval(() => {
      setInteractiveStaff(generateRandomPercentage);
      setReturningCustomers((pre) => {
        return pre + 0.00001819444 * 1000
      })
      const currentHour = new Date().getHours();
      // if (currentHour >= 8 && currentHour < 9) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.084
      //   })
      // } else if (currentHour >= 9 && currentHour < 10) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.139
      //   })
      // } else if (currentHour >= 10 && currentHour < 11) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.25
      //   })
      // } else if (currentHour >= 11 && currentHour < 12) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.334
      //   })
      // } else if (currentHour >= 12 && currentHour < 13) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.0138
      //   })
      // } else if (currentHour >= 13 && currentHour < 14) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.027
      //   })
      // } else if (currentHour >= 14 && currentHour < 15) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.084
      //   })
      // } else if (currentHour >= 15 && currentHour < 16) {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.222
      //   })
      // } else {
      //   setTotalCustomerVisit(prev => {
      //     return prev + 0.084
      //   })
      // }
      //thay đổi tên khách hàng mới
      if (countNumberCustomer >= 10) {
        const data = listCustomerNew;
        const lastItem = data.pop();
        data.unshift(lastItem);
        setListCustomerNew(data)
        countNumberCustomer = 0
      } else {
        countNumberCustomer = countNumberCustomer + 1
      }
      // thay đổi số lượng giới tính
      // setStatisticsGender(prevState => {
      //   const { male, female } = prevState;
      //   const maleIncrease = Math.floor(Math.random() * 3) + 1; // Tăng male từ 1 đến 3
      //   const femaleIncrease = Math.floor(Math.random() * 2) + 1; // Tăng female từ 1 đến 2

      //   return { male: male + maleIncrease, female: female + femaleIncrease };
      // });

      // // thay đổi số lượng độ tuổi
      // setStatisticsAge(prevState => {
      //   const { child, adult, elderly, middle_age } = prevState;
      //   const childIncrease = Math.floor(Math.random() * 1) + 1; // Tăng male từ 1 đến 4
      //   const adultIncrease = Math.floor(Math.random() * 4) + 1; // Tăng female từ 1 đến 2
      //   const elderlyIncrease = Math.floor(Math.random() * 1) + 1; // Tăng male từ 1 đến 2
      //   const middle_ageIncrease = Math.floor(Math.random() * 2) + 1; // Tăng female từ 1 đến 2
      //   return { child: child + childIncrease, adult: adult + adultIncrease, elderly: elderly + elderlyIncrease, middle_age: middle_age + middle_ageIncrease };
      // });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [])

  useEffect(()=>{
    const totalCustomerVisitLocal = localStorage.getItem('totalCustomerVisit')
    if(totalCustomerVisitLocal){
      setTotalCustomerVisit(parseInt(totalCustomerVisitLocal))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('totalCustomerVisit',(totalCustomerVisit?.toString()))
  },[totalCustomerVisit])

  useEffect(() => {
    const socket = io("http://192.168.160.28:2004", {
      withCredentials: true,
      extraHeaders: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      },
      transports: ["polling", "websocket"],
    });

    socket.on("send-data-client", (data) => {
      const newTimestamp = new Date().getTime();
      let customersInTheStore = data.total_in - data.total_out;
      if (customersInTheStore < 0) {
        customersInTheStore = 0
      }
      setData({ x: newTimestamp, y: customersInTheStore });
      setTotalCustomerVisit(data.total_in);
      setStatisticsGender(data.gender);
      setStatisticsAge(data.age);
      setTotalEmoij(data.emoji)
    });

    // Cleanup function
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
  }, [data])

  return (
    <DashboardLayout>
      <Footer />
      <MDBox py={1} >
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={6}>
                <Card>
                  <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                    Thống kê số lượng khách hàng
                    <RealtimeBarChart />
                  </div>
                </Card>

              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Card>                  <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                  Thống kê lưu lượng khách hàng
                  <RealtimeChart data={data} />
                  {/* <RealtimeChartFake data={data}/> */}
                </div></Card>
              </Grid>
            </Grid>
            <Grid container spacing={1} mt={0.2}>
              <Grid item xs={12} md={6} lg={12}>
                <Card>
                  <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                    Bản đồ khu vực gian hàng
                    {/* <img src={demoHeatmap} /> */}
                    <div style={{ background: "#CFC8CF", width: "100%", height: '466px', padding:"2% 5%", borderRadius: '12px', display: 'flex', justifyContent: 'space-between', overflow: 'hidden' }}>
                      <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                        <div style={{ width: '50%' }}>
                          <div style={{ width: '99%',backgroundColor:'#577CB6', height: '40%', margin: '2px', display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}>
                            MOTOROLA
                          </div>
                          <div style={{ width: '99%',backgroundColor:'#8758B6', height: '60%', margin: '2px', display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}>
                            Union Community
                          </div>
                        </div>
                        <div style={{ width: '50%' }}>
                          <div style={{ width: '99%',backgroundColor:'#B558AB', height: '60%', margin: '2px', display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}>
                            HTI-HTSC
                          </div>
                          <div style={{ width: '99%',backgroundColor:'#5760B6', height: '40%', margin: '2px', display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}>
                            Techpro
                          </div>
                        </div>
                      </div>
                      <div style={{ width: '25%',backgroundColor:'#B57658', height: '100%', margin: '2px', display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}>
                        Tran Duy
                      </div>
                      <div style={{ width: '25%', height: '100%' }}>
                        <div style={{ width: '99%',backgroundColor:'#B55873', height: '40%', margin: '2px', display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}>
                          Hebei Dikai
                          Piping
                        </div>
                        <div style={{ width: '99%',backgroundColor:'#6B58B6', height: '60%', margin: '2px', display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}>
                          Phuc Dai An
                        </div>
                      </div>
                    </div>
                  </div></Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Grid item xs={12} md={12} lg={12} mb={1.5}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                  <Card >
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Ngày hôm nay
                      <p style={{ fontSize: '24px', fontWeight: "bold", color: '#CCA97D', lineHeight: '70px' }}>Hài lòng</p>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card >
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Tổng Khách hàng
                      <p style={{ fontSize: '30px', fontWeight: "bold", color: '#87B9F4', lineHeight: '70px' }}>{Math.round(totalCustomerVisit)}</p>
                    </div>
                  </Card >
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card >
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Tổng Nhân viên
                      <p style={{ fontSize: '30px', fontWeight: "bold", color: '#B87BD2', lineHeight: '70px' }}>22</p>
                    </div>
                  </Card >
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} mb={1.5}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                  <Card >
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Ngày hôm nay
                      <RealtimeChartEmoji data={totalEmoij} />
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card >
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Khách hàng quay lại
                      <p style={{ fontSize: '30px', fontWeight: "bold", color: '#87B9F4', lineHeight: '100px' }}>{Math.round(returningCustomers)}</p>
                    </div>
                  </Card >
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card >
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Nhân viên tương tác
                      <p style={{ fontSize: '30px', fontWeight: "bold", color: '#B87BD2', lineHeight: '100px' }}>{interactiveStaff}%</p>
                    </div>
                  </Card >
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} mb={1.5}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={8}>
                  <Card>
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Giới tính khách hàng
                      <PieChartDonut chart={sales} redraw />
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card>
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Khách hàng VVIP
                      {
                        listCustomerVip.map((item, index) => {
                          return (
                            <p style={{ fontSize: '12px', fontWeight: "bold", color: '#87B9F4', lineHeight: '39px' }} key={index}>{item}</p>
                          )
                        })
                      }
                      <Pagination
                        count={2}
                        renderItem={(item) => (
                          <PaginationItem
                            style={{ color: 'white' }}
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                          />
                        )}
                      />
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} mb={1.5}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={8}>
                  <Card>
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Độ tuổi khách hàng
                      <PieChartDonut chart={tasks} redraw />
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card>
                    <div style={{ display: 'grid', fontSize: '18px', alignItems: 'center', color: 'white', justifyItems: 'center', padding: '10px' }}>
                      Khách hàng VVIP
                      {
                        listCustomerNew.slice(0, 5).map((item, index) => {
                          return (
                            <p style={{ fontSize: '12px', fontWeight: "bold", color: '#87B9F4', lineHeight: '35px' }} key={index}>{item}</p>
                          )
                        })
                      }
                      <Pagination
                        count={2}
                        renderItem={(item) => (
                          <PaginationItem
                            style={{ color: 'white' }}
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                          />
                        )}
                      />
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Số lượng khách tời gian hàng"
                count={totalCustomerVisit}
                percentage={{
                  color: "info",
                  amount: amountCustomerVisit,
                  label: "so với ngày hôm qua",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Số lượng khách hàng VIP"
                count={totalVipCustomer}
                percentage={{
                  color: "success",
                  amount: amountVipCustomer,
                  label: "người so với ngày hôm qua",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="person_add"
                title="Số lượng khách hàng hạn chế"
                count={totalBlackListCustomer}
                percentage={{
                  color: "dark",
                  amount: amountBlackListCustomer,
                  label: "người so với ngày hôm qua",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>
        {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Thống kê số lượng"
                  description="Thống kê theo từng mốc thời gian"
                  date="số lượng khách tham quan khu triển lãm"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <PieChart
                  color="success"
                  title="Thống kê theo giới tính"
                  description="Thống kê danh sách khách hàng theo giới tính"
                  date={
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong >cập nhật với thời gian thực</strong>
                    </div>
                  }
                  optionChartGender={optionChartGender}
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <GuageChart
                  color="success"
                  title="Thống kê theo giới tính"
                  description="Thống kê danh sách khách hàng theo giới tính"
                  date={
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong >cập nhật với thời gian thực</strong>
                    </div>
                  }
                  optionChartGender={optionChartGender}
                  chart={totalEmoij}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="warning"
                  title="Thống kê theo độ tuổi"
                  description="Thống kê danh sách khách hàng theo độ tuổi"
                  date={
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong >cập nhật với thời gian thực</strong>
                    </div>
                  }
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Projects data={data} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <Projects data={data} />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
