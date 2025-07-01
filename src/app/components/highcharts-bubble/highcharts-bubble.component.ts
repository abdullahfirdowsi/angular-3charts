import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import { MOCK_DATA, CountryData } from '../../models/chart-data.interface';

// Initialize the highcharts-more module
HighchartsMore(Highcharts);

@Component({
  selector: 'app-highcharts-bubble',
  standalone: true,
  imports: [HighchartsChartModule],
  template: `
    <div class="chart-container">
      <h2 class="chart-title">Population Demographics - Highcharts</h2>
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="chartOptions"
        class="chart"
      ></highcharts-chart>
    </div>
  `,
  styles: [`
    .chart-container {
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      margin-bottom: 30px;
    }

    .chart-title {
      text-align: center;
      color: #2c3e50;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
      border-bottom: 3px solid #3498db;
      padding-bottom: 10px;
    }

    .chart {
      height: 500px;
    }
  `]
})
export class HighchartsBubbleComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart() {
    const seriesData = MOCK_DATA.map((country: CountryData) => ({
      name: country.name,
      x: country.income,
      y: country.lifeExpectancy,
      z: Math.sqrt(country.population / 1000000), // Scale population for bubble size
      color: country.color,
      population: country.population
    }));

    this.chartOptions = {
      chart: {
        type: 'bubble',
        backgroundColor: '#fafafa',
        style: {
          fontFamily: 'Inter, sans-serif'
        }
      },
      title: {
        text: 'Income vs Life Expectancy by Population',
        style: {
          fontSize: '18px',
          fontWeight: '500',
          color: '#2c3e50'
        }
      },
      xAxis: {
        title: {
          text: 'Average Income (USD)',
          style: {
            fontSize: '14px',
            fontWeight: '500'
          }
        },
        labels: {
          formatter: function() {
            return '$' + (this.value as number).toLocaleString();
          }
        },
        gridLineWidth: 1,
        gridLineColor: '#e0e0e0'
      },
      yAxis: {
        title: {
          text: 'Life Expectancy (Years)',
          style: {
            fontSize: '14px',
            fontWeight: '500'
          }
        },
        gridLineWidth: 1,
        gridLineColor: '#e0e0e0'
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: `
          <tr><th colspan="2"><h3 style="margin:0; color: {point.color}">{point.name}</h3></th></tr>
          <tr><th>Income:</th><td>{point.x:,.0f}</td></tr>
          <tr><th>Life Expectancy:</th><td>{point.y:.1f} years</td></tr>
          <tr><th>Population:</th><td>{point.population:,.0f}</td></tr>
        `,
        footerFormat: '</table>',
        followPointer: true,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#ccc',
        borderRadius: 8,
        shadow: true
      },
      plotOptions: {
        bubble: {
          minSize: 20,
          maxSize: 80,
          marker: {
            lineWidth: 2,
            lineColor: 'white'
          }
        }
      },
      series: [{
        type: 'bubble',
        name: 'Countries',
        data: seriesData,
        showInLegend: false
      }],
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    };
  }
}