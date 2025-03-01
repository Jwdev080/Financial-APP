import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {NumberFormater} from "../../../utils";

const PendingPaymentBarChart = ({data, title}) => {
    const options = {
        chart: {
            type: 'bar',
            backgroundColor: '#5cdcd2',
            height: '340px'
        },
        accessibility: {
            enabled: false
        },
        title: {
            text: title,
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
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false // Set to false to hide the legend
        },
        series: [{
            name: 'Value',
            data: data.map(item => item.total_amount),
            color: '#d3712c'
        }]
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

export default PendingPaymentBarChart;