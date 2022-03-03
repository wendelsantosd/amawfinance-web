import { init, graphic } from 'echarts'
import React, { useEffect } from 'react'

import { Container } from './chart.style'

export const Chart = () => {
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
                legend: {
                    
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130, 200, 129, 290, 300, 1000],
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
                        data: [120, 200, 150, 80, 70, 110, 130, 200, 129, 290, 300, 122],
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
                        data: [120, 200, 150, 80, 70, 110, 130, 200, 129, 290, 300, 122],
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
    }, [])

    return <Container id='chart'></Container>   
}