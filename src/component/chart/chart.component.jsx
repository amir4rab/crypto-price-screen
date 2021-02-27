import React, { useRef, useEffect, useCallback } from 'react';
import {Chart} from 'chart.js';

const ChartCoponent = ({ dataArr }) => {
    const canvasEl = useRef(null);

    console.log(dataArr);

    const makeChart = useCallback(() => {
        console.log(canvasEl.current.getContext('2d'));
        // const prices = dataArr.map(coin => )

        const canvas = canvasEl.current.getContext('2d');

        Chart.defaults.global.legend.display = false;

        const settings = {
            type: 'line',
            data: {
                labels: [...dataArr.history],
                datasets: [{
                    data: [...dataArr.history],
                    backgroundColor: [
                        'rgba(00, 00, 00, 0.2)'
                    ],
                    borderColor: [
                        'rgba(00, 00, 00, 0.2)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                hover: {
                    animationDuration: 0
                },
                responsiveAnimationDuration: 0,
                elements: {
                    point: {
                        radius: 0,
                        pointStyle: 'line',
                    },
                    line: {
                        tension: 0
                    }
                },
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                },
            }
        }

        new Chart( canvas , settings );
    },[dataArr.history])

    useEffect(_=>{
        makeChart();
    },[makeChart]);

    return (
        <div>
            <canvas ref={canvasEl}></canvas>
        </div>
    );
}

export default ChartCoponent;