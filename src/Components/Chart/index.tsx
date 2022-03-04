import { init } from 'echarts'
import React, { useEffect } from 'react'

import { Container } from './chart.style'


export const Chart = ({ sum }: any) => {

    useEffect(() => {
        const chartElement = document.querySelector<HTMLElement>('#chart')

        if(chartElement) {
            const chart = init(chartElement)

            chart.setOption({
                title: {
                    text: 'Resumo Anual R$'
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
                        sum?.sumJanT.income, 
                        sum?.sumFevT.income, 
                        sum?.sumMarT.income, 
                        sum?.sumAprT.income, 
                        sum?.sumMayT.income, 
                        sum?.sumJunT.income, 
                        sum?.sumJulT.income, 
                        sum?.sumAugT.income, 
                        sum?.sumSepT.income, 
                        sum?.sumOctT.income, 
                        sum?.sumNovT.income, 
                        sum?.sumDecT.income
                    ],
                    type: 'bar',
                    name: 'Receita',
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
                        color: '#33CC95'
                    }
                    },
                    {
                        data: [
                            sum?.sumJanT.expense, 
                            sum?.sumFevT.expense, 
                            sum?.sumMarT.expense, 
                            sum?.sumAprT.expense, 
                            sum?.sumMayT.expense, 
                            sum?.sumJunT.expense, 
                            sum?.sumJulT.expense, 
                            sum?.sumAugT.expense, 
                            sum?.sumSepT.expense, 
                            sum?.sumOctT.expense, 
                            sum?.sumNovT.expense, 
                            sum?.sumDecT.expense
                        ],
                        type: 'bar',
                        name: 'Despesa',
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
                            color: '#E52E4D'
                        }
                    },
                    {
                        data: [
                            sum?.sumJanT.total, 
                            sum?.sumFevT.total, 
                            sum?.sumMarT.total, 
                            sum?.sumAprT.total, 
                            sum?.sumMayT.total, 
                            sum?.sumJunT.total, 
                            sum?.sumJulT.total, 
                            sum?.sumAugT.total, 
                            sum?.sumSepT.total, 
                            sum?.sumOctT.total, 
                            sum?.sumNovT.total, 
                            sum?.sumDecT.total
                        ],
                        type: 'bar',
                        name: 'Total',
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
                    }
                ]
            })
        }
    }, [sum])

    return <Container id='chart'></Container>   
}