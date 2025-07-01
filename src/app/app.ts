import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighchartsBubbleComponent } from './components/highcharts-bubble/highcharts-bubble.component';
import { EchartsBubbleComponent } from './components/echarts-bubble/echarts-bubble.component';
import { ChartjsBubbleComponent } from './components/chartjs-bubble/chartjs-bubble.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HighchartsBubbleComponent,
    EchartsBubbleComponent,
    ChartjsBubbleComponent
  ],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>Chart Comparison Dashboard</h1>
        <p>Comparing Highcharts, ECharts, and Chart.js</p>
      </header>
      
      <main class="charts-grid">
        <app-highcharts-bubble></app-highcharts-bubble>
        <app-echarts-bubble></app-echarts-bubble>
        <app-chartjs-bubble></app-chartjs-bubble>
      </main>
    </div>
    
    <router-outlet />
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: white;
      padding: 20px;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .app-header {
      text-align: center;
      color: #333;
      margin-bottom: 40px;
      padding: 30px 20px;
      background: white;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }

    .app-header h1 {
      font-size: 2.5rem;
      font-weight: 600;
      margin: 0 0 10px 0;
      color: #333;
    }

    .app-header p {
      font-size: 1rem;
      margin: 0;
      color: #666;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      max-width: 800px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .app-container {
        padding: 15px;
      }
      
      .app-header h1 {
        font-size: 2rem;
      }
      
      .charts-grid {
        gap: 20px;
      }
    }
  `]
})
export class App {
  protected title = 'angular-3charts';
}