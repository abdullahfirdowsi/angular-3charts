import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { MOCK_DATA, CountryData } from '../../models/chart-data.interface';

@Component({
  selector: 'app-echarts-bubble',
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [provideEcharts()],
  template: `
    <div class="chart-container">
      <h2 class="chart-title">Population Demographics - ECharts</h2>
      <div
        echarts
        [options]="chartOptions"
        class="chart"
      ></div>
    </div>
  `,
  styles: [`
    .chart-container {
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      width: 100%;
    }

    .chart-title {
      text-align: center;
      color: #333;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e0e0e0;
    }

    .chart {
      height: 400px;
      width: 100%;
    }
  `]
})
export class EchartsBubbleComponent implements OnInit {
  chartOptions: EChartsOption = {};

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart() {
    const seriesData = MOCK_DATA.map((country: CountryData, index: number) => [
      country.income,
      country.lifeExpectancy,
      Math.sqrt(country.population / 1000000), // Scale population for bubble size
      country.name,
      country.population,
      country.color
    ]);

    this.chartOptions = {
      backgroundColor: 'white',
      title: {
        text: 'Income vs Life Expectancy by Population',
        left: 'center',
        textStyle: {
          fontSize: 18,
          fontWeight: 500,
          color: '#2c3e50',
          fontFamily: 'Inter, sans-serif'
        }
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        top: '20%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: 'Average Income (USD)',
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 500
        },
        axisLabel: {
          formatter: (value: number) => '$' + value.toLocaleString()
        },
        splitLine: {
          lineStyle: {
            color: '#e0e0e0'
          }
        }
      },
      yAxis: {
        type: 'value',
        name: 'Life Expectancy (Years)',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 500
        },
        splitLine: {
          lineStyle: {
            color: '#e0e0e0'
          }
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const data = params.data;
          return `
            <div style="padding: 10px;">
              <h3 style="margin: 0 0 10px 0; color: ${data[5]};">${data[3]}</h3>
              <p style="margin: 5px 0;"><strong>Income:</strong> $${data[0].toLocaleString()}</p>
              <p style="margin: 5px 0;"><strong>Life Expectancy:</strong> ${data[1].toFixed(1)} years</p>
              <p style="margin: 5px 0;"><strong>Population:</strong> ${data[4].toLocaleString()}</p>
            </div>
          `;
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          fontFamily: 'Inter, sans-serif'
        }
      },
      series: [{
        type: 'scatter',
        symbolSize: (data: any) => Math.max(data[2] * 2, 20),
        itemStyle: {
          color: (params: any) => params.data[5],
          borderColor: 'white',
          borderWidth: 2
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        },
        data: seriesData
      }]
    };
  }
}