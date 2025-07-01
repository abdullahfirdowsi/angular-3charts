import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { MOCK_DATA, CountryData } from '../../models/chart-data.interface';

// Register Chart.js components
Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend,
  Title
);

@Component({
  selector: 'app-chartjs-bubble',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="chart-container">
      <h2 class="chart-title">Population Demographics - Chart.js</h2>
      <div class="chart">
        <canvas
          baseChart
          [data]="bubbleChartData"
          [options]="bubbleChartOptions"
          [type]="bubbleChartType"
        ></canvas>
      </div>
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
      position: relative;
    }
  `]
})
export class ChartjsBubbleComponent implements OnInit {
  public bubbleChartType: 'bubble' = 'bubble';
  public bubbleChartData: ChartConfiguration<'bubble'>['data'] = { datasets: [] };
  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {};

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart() {
    const datasets = MOCK_DATA.map((country: CountryData) => ({
      label: country.name,
      data: [{
        x: country.income,
        y: country.lifeExpectancy,
        r: Math.sqrt(country.population / 1000000) * 2 // Scale population for bubble size
      }],
      backgroundColor: country.color + '80', // Add transparency
      borderColor: country.color,
      borderWidth: 2,
      hoverBackgroundColor: country.color,
      hoverBorderColor: 'white',
      hoverBorderWidth: 3,
      population: country.population
    }));

    this.bubbleChartData = {
      datasets: datasets
    };

    this.bubbleChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
        plugins: {
        title: {
          display: true,
          text: 'Income vs Life Expectancy by Population',
          font: {
            size: 18,
            weight: 500,
            family: 'Inter, sans-serif'
          },
          color: '#333'
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              family: 'Inter, sans-serif'
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          titleColor: '#2c3e50',
          bodyColor: '#2c3e50',
          borderColor: '#ccc',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            title: (context) => {
              return context[0].dataset.label || '';
            },
            label: (context) => {
              const dataset = context.dataset as any;
              const point = context.parsed;
              return [
                `Income: $${point.x.toLocaleString()}`,
                `Life Expectancy: ${point.y.toFixed(1)} years`,
                `Population: ${dataset.population.toLocaleString()}`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Average Income (USD)',
            font: {
              size: 14,
              weight: 500,
              family: 'Inter, sans-serif'
            }
          },
          ticks: {
            callback: function(value) {
              return '$' + (value as number).toLocaleString();
            }
          },
          grid: {
            color: '#e0e0e0'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Life Expectancy (Years)',
            font: {
              size: 14,
              weight: 500,
              family: 'Inter, sans-serif'
            }
          },
          grid: {
            color: '#e0e0e0'
          }
        }
      },
      interaction: {
        intersect: false
      },
      elements: {
        point: {
          hoverRadius: 8
        }
      }
    };
  }
}