import { init, graphic } from 'echarts'
import React, { useEffect } from 'react'

import { Container } from './chart.style'

export const Chart = () => {
    useEffect(() => {
        const chartElement = document.querySelector<HTMLElement>('#chart')

        if(chartElement) {
            const chart = init(chartElement)

            chart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set' , 'Nov', 'Dez']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130, 200, 129, 290, 300, 122],
                        type: 'bar'
                    },
                    {
                        data: [120, 200, 150, 80, 70, 110, 130, 200, 129, 290, 300, 122],
                        type: 'bar'
                    },
                    {
                        data: [120, 200, 150, 80, 70, 110, 130, 200, 129, 290, 300, 122],
                        type: 'bar'
                    }
                ]
            })
        }
    }, [])

    return <Container id='chart'></Container>   
}