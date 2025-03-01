import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {NumberFormater} from "../../../utils";

const MajorOutBarChart = ({data}) => {

    const options = {
        credits: {
            enabled: false
        },
        chart: {
            type: 'bar',
            backgroundColor: '#5cdcd2',
            height: '340px'
        },
        title: {
            text: 'GASTOS MAYORES',
            align: 'right'
        },
        xAxis: {
            categories: data.map(item => item.name),
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            lineWidth: 0,
            labels: {
                enabled: false
            },
            tickLength: 0
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return NumberFormater.format(this.y); // Display the category name as the label
                    },
                    style: {
                        fontSize: '1em',
                        color: '#000',
                        textOutline: 'none',
                        opacity: 1
                    },
                },
                colorByPoint: true, // Set colorByPoint to true
                colors: ['#ff4141', '#f57900', '#fce94f', '#73d216', '#729fcf', '#5c3566'] // Define the colors for each column
            }
        },
        legend: {
            enabled: false // Set to false to hide the legend
        },
        series: [{
            name: 'Value',
            data: data.map(item => item.total_amount),
            color: '#d3712c'
        }],
        accessibility: {
            enabled: false
        }
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default MajorOutBarChart;