import { init } from 'echarts'
import React, { useEffect } from 'react'

import { Container } from './chart.style'


export const Chart2 = ({ sum }: any) => {

    useEffect(() => {
        const chartElement = document.querySelector<HTMLElement>('#chart')

        if(chartElement) {
            const chart = init(chartElement)

            chart.setOption({
                title: {
                    text: 'Despesas por Categoria R$'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                },
                xAxis: {
                    type: 'category',
                    data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set' , 'Out', 'Nov', 'Dez']
                },
                legend: {},
                yAxis: {
                    type: 'value'
                },
                series: [
                    {data: [
                        sum?.sumJanT.home,
                        sum?.sumFevT.home,
                        sum?.sumMarT.home,
                        sum?.sumAprT.home,
                        sum?.sumMayT.home,
                        sum?.sumJunT.home,
                        sum?.sumJulT.home,
                        sum?.sumAugT.home,
                        sum?.sumSepT.home,
                        sum?.sumOctT.home,
                        sum?.sumNovT.home,
                        sum?.sumDecT.home
                    ],
                    type: 'bar',
                    name: 'Moradia',
                    markPoint: {
                        label: {
                            color: '#fff',
                            fontWeight: 'bold'
                        },
                        data: [
                            { 
                                type: 'max', 
                                name: 'Max' 
                            },
                            { 
                                type: 'min', 
                                name: 'Min' 
                            }
                        ]
                    },
                    markLine: {
                        data: [{ 
                            type: 'average', 
                            name: 'Média Receita' 
                        }]
                    },
                    itemStyle: {
                        color: '#fde910'
                    }
                    },
                    {
                        data: [
                            sum?.sumJanT.education, 
                            sum?.sumFevT.education, 
                            sum?.sumMarT.education, 
                            sum?.sumAprT.education, 
                            sum?.sumMayT.education, 
                            sum?.sumJunT.education, 
                            sum?.sumJulT.education, 
                            sum?.sumAugT.education, 
                            sum?.sumSepT.education, 
                            sum?.sumOctT.education, 
                            sum?.sumNovT.education, 
                            sum?.sumDecT.education
                        ],
                        type: 'bar',
                        name: 'Educação/Cultura',
                        markPoint: {
                            label: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            data: [
                                { 
                                    type: 'max', 
                                    name: 'Max' 
                                },
                                { 
                                    type: 'min', 
                                    name: 'Min' 
                                }
                            ]
                        },
                        markLine: {
                            data: [{ 
                                type: 'average', 
                                name: 'Média Despesa',
                            }]
                        },
                        itemStyle: {
                            color: '#4ee44e'
                        }
                    },
                    {
                        data: [
                            sum?.sumJanT.food, 
                            sum?.sumFevT.food, 
                            sum?.sumMarT.food, 
                            sum?.sumAprT.food, 
                            sum?.sumMayT.food, 
                            sum?.sumJunT.food, 
                            sum?.sumJulT.food, 
                            sum?.sumAugT.food, 
                            sum?.sumSepT.food, 
                            sum?.sumOctT.food, 
                            sum?.sumNovT.food, 
                            sum?.sumDecT.food
                        ],
                        type: 'bar',
                        name: 'Alimentação',
                        markPoint: {
                            label: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            data: [
                                { 
                                    type: 'max', 
                                    name: 'Max' 
                                },
                                { 
                                    type: 'min', 
                                    name: 'Min' 
                                }
                            ]
                        },
                        markLine: {
                            data: [{ 
                                type: 'average', 
                                name: 'Média Total' }]
                        },
                        itemStyle: {
                            color: '#0C6FF9'
                        }
                    },
                    {
                        data: [
                            sum?.sumJanT.health, 
                            sum?.sumFevT.health, 
                            sum?.sumMarT.health, 
                            sum?.sumAprT.health, 
                            sum?.sumMayT.health, 
                            sum?.sumJunT.health, 
                            sum?.sumJulT.health, 
                            sum?.sumAugT.health, 
                            sum?.sumSepT.health, 
                            sum?.sumOctT.health, 
                            sum?.sumNovT.health, 
                            sum?.sumDecT.health
                        ],
                        type: 'bar',
                        name: 'Saúde',
                        markPoint: {
                            label: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            data: [
                                { 
                                    type: 'max', 
                                    name: 'Max' 
                                },
                                { 
                                    type: 'min', 
                                    name: 'Min' 
                                }
                            ]
                        },
                        markLine: {
                            data: [{ 
                                type: 'average', 
                                name: 'Média Total' }]
                        },
                        itemStyle: {
                            color: '#e61919'
                        }
                    },
                    {
                        data: [
                            sum?.sumJanT.transport, 
                            sum?.sumFevT.transport, 
                            sum?.sumMarT.transport, 
                            sum?.sumAprT.transport, 
                            sum?.sumMayT.transport, 
                            sum?.sumJunT.transport, 
                            sum?.sumJulT.transport, 
                            sum?.sumAugT.transport, 
                            sum?.sumSepT.transport, 
                            sum?.sumOctT.transport, 
                            sum?.sumNovT.transport, 
                            sum?.sumDecT.transport
                        ],
                        type: 'bar',
                        name: 'Transporte',
                        markPoint: {
                            label: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            data: [
                                { 
                                    type: 'max', 
                                    name: 'Max' 
                                },
                                { 
                                    type: 'min', 
                                    name: 'Min' 
                                }
                            ]
                        },
                        markLine: {
                            data: [{ 
                                type: 'average', 
                                name: 'Média Total' }]
                        },
                        itemStyle: {
                            color: '#6f00ff'
                        }
                    },
                    {
                        data: [
                            sum?.sumJanT.leisure, 
                            sum?.sumFevT.leisure, 
                            sum?.sumMarT.leisure, 
                            sum?.sumAprT.leisure, 
                            sum?.sumMayT.leisure, 
                            sum?.sumJunT.leisure, 
                            sum?.sumJulT.leisure, 
                            sum?.sumAugT.leisure, 
                            sum?.sumSepT.leisure, 
                            sum?.sumOctT.leisure, 
                            sum?.sumNovT.leisure, 
                            sum?.sumDecT.leisure
                        ],
                        type: 'bar',
                        name: 'Lazer',
                        markPoint: {
                            label: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            data: [
                                { 
                                    type: 'max', 
                                    name: 'Max' 
                                },
                                { 
                                    type: 'min', 
                                    name: 'Min' 
                                }
                            ]
                        },
                        markLine: {
                            data: [{ 
                                type: 'average', 
                                name: 'Média Total' }]
                        },
                        itemStyle: {
                            color: '#ffa500'
                        }
                    },
                    {
                        data: [
                            sum?.sumJanT.clothing, 
                            sum?.sumFevT.clothing, 
                            sum?.sumMarT.clothing, 
                            sum?.sumAprT.clothing, 
                            sum?.sumMayT.clothing, 
                            sum?.sumJunT.clothing, 
                            sum?.sumJulT.clothing, 
                            sum?.sumAugT.clothing, 
                            sum?.sumSepT.clothing, 
                            sum?.sumOctT.clothing, 
                            sum?.sumNovT.clothing, 
                            sum?.sumDecT.clothing
                        ],
                        type: 'bar',
                        name: 'Vestuário',
                        markPoint: {
                            label: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            data: [
                                { 
                                    type: 'max', 
                                    name: 'Max' 
                                },
                                { 
                                    type: 'min', 
                                    name: 'Min' 
                                }
                            ]
                        },
                        markLine: {
                            data: [{ 
                                type: 'average', 
                                name: 'Média Total' }]
                        },
                        itemStyle: {
                            color: '#2F4F4F'
                        }
                    },
                    {
                        data: [
                            sum?.sumJanT.other, 
                            sum?.sumFevT.other, 
                            sum?.sumMarT.other, 
                            sum?.sumAprT.other, 
                            sum?.sumMayT.other, 
                            sum?.sumJunT.other, 
                            sum?.sumJulT.other, 
                            sum?.sumAugT.other, 
                            sum?.sumSepT.other, 
                            sum?.sumOctT.other, 
                            sum?.sumNovT.other, 
                            sum?.sumDecT.other
                        ],
                        type: 'bar',
                        name: 'Outros',
                        markPoint: {
                            label: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            data: [
                                { 
                                    type: 'max', 
                                    name: 'Max' 
                                },
                                { 
                                    type: 'min', 
                                    name: 'Min' 
                                }
                            ]
                        },
                        markLine: {
                            data: [{ 
                                type: 'average', 
                                name: 'Média Total' }]
                        },
                        itemStyle: {
                            color: '#8B4513'
                        }
                    }
                ]
            })
        }
    }, [sum])

    return <Container id='chart'></Container>   
}