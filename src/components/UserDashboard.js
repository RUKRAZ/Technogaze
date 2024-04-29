import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './UserDashboard.css';
import {
  ChakraProvider,
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Card,
  Spacer,
  Button,
} from '@chakra-ui/react';


import BigChartBox from "./emsFiles/bigChartBox/BigChartBox.tsx";
import ChartBox from "./emsFiles/chartBox/ChartBox.tsx";
import TopBox from "./emsFiles/topBox/TopBox.tsx";
import SideNavDark from "./sideNavDark.js";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "./emsFiles/data.ts";
import "./emsFiles/ems.scss";

export const UserDash = () => {
  return (
    <ChakraProvider>
      <SideNavDark />
        <div class="row">
            <div class="column">
                    <Container mt={3} position='relative' right='500' >
                    <Box bg={'lightgray'}  p={10} boxShadow='md' h={240} w={1190}>
                    <Heading bg='black' color={'white'} w={140} mb={10} mr={10000} position="relative"  right='10' bottom='10'>Projects</Heading>
                    <Flex align="center" justify="center">
                    <Card mr={50} p={5} position={'relative'} bottom={20} w='300px' h='180px'>
                        <Heading fontSize='30px'>Custom App</Heading>
                        <Text p={2}>
                        Status: In Progress
                        </Text>
                        <Text p={2}>
                        Notes: Finished Initial Setup
                        </Text>
                        <Text p={2}>
                        Manager: John, D.
                        </Text>
                    </Card>

                    <Card mr={50} p={5} position={'relative'} bottom={20} w='300px' h='180px'>
                        <Heading fontSize='30px'>Custom App</Heading>
                        <Text p={2}>
                        Status: Secure
                        </Text>
                        <Text p={2}>
                        Notes: Network Secured
                        </Text>
                        <Text p={2}>
                        Manager: Employee A, Employee 
                        </Text>
                    </Card>
                    </Flex>
                    </Box>
                </Container>


                <Container mt={5} position='relative' right='500'>
                    <Box bg={'lightgray'}  h={350} w={1190} boxShadow='md'>
                    <Heading bg='black' color={'white'} w={160} mb={10} mr={10000} position="relative"  right='0' bottom='0'>Analytics</Heading>
                    <Flex align="center" justify="center">
                    <ChartBox {...chartBoxUser} />
                    </Flex>
                    </Box>
                </Container>


                <Container mt={5} position='relative' right='500'>
                <Box bg={'lightgray'}  h={250} w={1520}boxShadow='md'>
                <Heading bg='black' color={'white'} w={220} mb={10} mr={10000} position="relative"  right='0' bottom='0' fontSize={'lg'}>Projects recommendation  </Heading>
                <Flex align="center" justify="center">
                <Card>
                    <Heading>UI/UX Development</Heading>
                </Card>
                <Spacer />
                <Card>
                    <Heading w='400px' m={6} p={1}>Web Development</Heading>
                </Card>
                </Flex>
                </Box>
                </Container>
            </div>
            <div class="column">
                <div class="dot"></div>
                <p>user name</p>

                <Container mt={5} position='relative' right='500'>
                <Box bg={'lightgray'}  h={503} w={300}boxShadow='md'>
                <Heading bg='black' color={'white'} w={115} mb={10} mr={10000} position="relative"  right='0' bottom='0' fontSize={'lg'}>To-DO</Heading>
                <Flex align="center" justify="center">
                <Spacer />
                </Flex>
                </Box>
                </Container>

                {/* Add Link to Services Page */}
                <Container mt={5} position='relative' right='500'>
                  <Link to="/services">
                    <Button colorScheme="blue" variant="solid">View Products</Button>
                  </Link>
                </Container>
            </div>
        </div>

    </ChakraProvider>
  );
}

export default UserDash;
