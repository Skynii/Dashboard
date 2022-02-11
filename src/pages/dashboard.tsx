import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import dynamic from 'next/dynamic';

import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar";
import { theme } from "../styles/theme";

//carregar componente de forma dinamica, SSR está desligado
const Chart = dynamic(() => import('react-apexcharts'), {
        ssr:false,
})


const options={
        chart: {
                toolbar:{
                        show:false,
                },
                zoom:{
                        enabled:false,
                },
                foreColor: theme.colors.gray[500],
        },
        grid:{
                show:false,
        },
        dataLabels: {
                enabled:false,
        },
        tooltip:{
                enabled:false,
        },
        xaxis:{
                type:'datetime',
                axisBorder:{
                        color: theme.colors.gray[600]
                },
                axisTicks:{
                        color: theme.colors.gray[600]
                },
                categories:[
                   '2022-02-11T00:00:00.000Z',
                   '2022-02-12T00:00:00.000Z',      
                   '2022-02-13T00:00:00.000Z', 
                   '2022-02-14T00:00:00.000Z',
                   '2022-02-15T00:00:00.000Z',
                   '2022-02-16T00:00:00.000Z',
                   '2022-02-17T00:00:00.000Z',

                ],
        },
        fill:{
                opacity: 0.3,
                type:'gradient',
                gradient:{
                        shade:'dark',
                        opacityFrom:0.7
                }

        }
};

const series=[
        { name: 'series1', 
        data:[51,62,20,41,52,30,16]}
]

export default function Dashboard(){
        return (
                <Flex direction="column" h="100vh">
                        <Header/>

                        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                                <Sidebar/>

                                <SimpleGrid flex="1" gap="4" align="flex-start" minChildWidth="320px" >
                                        <Box
                                         p="8"
                                         bg="gray.800"
                                         borderRadius={8}
                                          pb="4"
                                         >
                                           <Text fontSize="lg" mb="4">Inscritos da Semana</Text> 
                                           <Chart options={options} series={series} type="area" height={168} />     
                                        </Box>
                                        
                                        <Box
                                         p="8"
                                         bg="gray.800"
                                         borderRadius={8}
                                          pb="4"
                                         >

                                           <Text fontSize="lg" mb="4">Taxa de abertura</Text> 
                                           <Chart options={options} series={series} type="area" height={168} />     
                                        </Box>                                        
                                </SimpleGrid>

                        </Flex>
               </Flex>
        )
}