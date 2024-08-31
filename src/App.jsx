import { useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import { 
  Box,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Grid,
  GridItem,
  Card,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Flex,
  Divider,
  UnorderedList,
  ListItem,
  Input
} from '@chakra-ui/react'; 

import Sidebar from './components/Sidebar/index.js'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function App() { 

const [isSidebarOpen, setSidebarOpen] = useState(false) 
const variants = useBreakpointValue({ base: smVariant, md: mdVariant }) 

const toggleSidebar = () => setSidebarOpen(!isSidebarOpen) 

	return ( 
 		<> 
		 <Sidebar 
 			 variant={variants.navigation} 
 			 isOpen={isSidebarOpen} 
 			 onClose={toggleSidebar} 
 		 /> 
 		 <Box ml={!variants?.navigationButton && 240}> 
 			 <Header 
 				 showSidebarButton={variants?.navigationButton} 
 				 onShowSidebar={toggleSidebar} 
 		 /> 
			<Box p="5">
			    <Grid templateColumns="repeat(4, 1fr)" gap={6} mb="6">
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Get
			                        </StatLabel>
			                        <StatNumber color="white">
			                            No-Due
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            23.36%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Move to
			                        </StatLabel>
			                        <StatNumber color="white">
			                            Hostel
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            14.85%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Explore
			                        </StatLabel>
			                        <StatNumber color="white">
			                            HR System
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="decrease">
			                            </StatArrow>
			                            1.12%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Get
			                        </StatLabel>
			                        <StatNumber color="white">
			                            Feedbacks
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            5.12%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			    </Grid>
			    <Grid templateColumns="repeat(4, 1fr)" gap={6} mb="6">
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Visits
			                        </StatLabel>
			                        <StatNumber color="white">
			                            345,670
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            23.36%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Users
			                        </StatLabel>
			                        <StatNumber color="white">
			                            16,890
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            14.85%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Revenue
			                        </StatLabel>
			                        <StatNumber color="white">
			                            $1,230,670
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="decrease">
			                            </StatArrow>
			                            1.12%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Expenses
			                        </StatLabel>
			                        <StatNumber color="white">
			                            $480,783
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            5.12%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			    </Grid>
			    <Grid templateColumns="repeat(12,1fr)" gap={6}>
			        <GridItem colSpan={{base:12,lg:4}}>
			            <Card overflow="hidden" variant="outline">
			                <Image alt="Work" src="https://shanmugha.edu.in/wp-content/uploads/2021/10/Shanmughagrouplogo.svg?1724912535" objectFit="cover" maxW="100%">
			                </Image>
			                <Stack>
			                    <CardBody>
			                        <Heading size="md">
			                            Dash
			                        </Heading>
			                        <Text py="2">
			                            This project is about integrating a new chat system to slack platform.
			                        </Text>
			                        <Stack direction="row" mt="3">
			                            <Badge colorScheme="green">
			                                IOS App
			                            </Badge>
			                            <Badge colorScheme="red">
			                                Desktop App
			                            </Badge>
			                        </Stack>
			                    </CardBody>
			                    <CardFooter>
			                        <Button type="button" variant="solid" size="sm" fdprocessedid="pklhbj">
			                            Attach File
			                        </Button>
			                    </CardFooter>
			                </Stack>
			            </Card>
			        </GridItem>
			        <GridItem colSpan={{base:12,lg:8}}>
			            <Input placeholder="Filled" variant="filled" fdprocessedid="wl4n7i">
			            </Input>
			        </GridItem>
			    </Grid>
			</Box>
		 <Footer></Footer> 
	 </Box> 
		 </> 
 	 ) 
}
 
