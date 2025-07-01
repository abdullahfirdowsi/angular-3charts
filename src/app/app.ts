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
        <h1>Population Demographics Dashboard</h1>
        <p>Comparing three popular charting libraries: Highcharts, ECharts, and Chart.js</p>
      </header>
      
      <main class="charts-grid">
        <app-highcharts-bubble></app-highcharts-bubble>
        <app-echarts-bubble></app-echarts-bubble>
        <app-chartjs-bubble></app-chartjs-bubble>
      </main>
      
      <footer class="app-footer">
        <p>Each chart displays the relationship between average income, life expectancy, and population size across different countries.</p>
      </footer>
    </div>
    
    <router-outlet />
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .app-header {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      padding: 40px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .app-header h1 {
      font-size: 3rem;
      font-weight: 700;
      margin: 0 0 16px 0;
      background: linear-gradient(45deg, #fff, #f0f0f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .app-header p {
      font-size: 1.2rem;
      margin: 0;
      opacity: 0.9;
    }

    .charts-grid {
      display: grid;
      gap: 30px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .app-footer {
      text-align: center;
      color: white;
      margin-top: 40px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .app-footer p {
      margin: 0;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .app-container {
        padding: 10px;
      }
      
      .app-header h1 {
        font-size: 2rem;
      }
      
      .app-header p {
        font-size: 1rem;
      }
    }
  `]
})
export class App {
  protected title = 'angular-3charts';
}