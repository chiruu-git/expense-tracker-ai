import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'; // Removed Legend from import
import { useMemo } from 'react';

ChartJS.register(ArcElement, Tooltip);

const ExpenseChart = ({ expenses }) => {
  // Memoize data calculation for performance
  const chartData = useMemo(() => {
    const categories = [...new Set(expenses.map(e => e.category))];
    const categoryTotals = categories.map(category =>
      expenses
        .filter(e => e.category === category)
        .reduce((acc, curr) => acc + curr.amount, 0)
    );
    const colors = ['#7f5af0', '#2cb67d', '#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#ff8e72', '#a381f7', '#00a3e0', '#ffa500']; // More colors

    return {
      labels: categories,
      datasets: [
        {
          data: categoryTotals,
          backgroundColor: colors.slice(0, categories.length), // Use only as many colors as categories
          borderColor: '#242629', // Match card background
          borderWidth: 4,
        },
      ],
    };
  }, [expenses]); // Recalculate only when expenses change

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows you to control size with parent div
    cutout: '70%',
    plugins: {
      legend: {
        display: false, // Disable Chart.js default legend
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += `₹${context.parsed.toFixed(2)}`;
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <div className="custom-card h-100 d-flex flex-column">
        <h4 className="mb-3" style={{ color: 'var(--headline-color)' }}>Expense Breakdown</h4>
        {expenses.length > 0 ? (
          <div className="chart-legend-container flex-grow-1"> {/* This div now flexes content */}
            <div className="chart-wrapper"> {/* New wrapper for fixed chart size */}
              <Doughnut data={chartData} options={options} />
            </div>
            
            {/* Custom Legend */}
            <div className="custom-legend">
              {chartData.labels.map((label, index) => (
                <div key={label} className="legend-item">
                  <div 
                    className="legend-color-box" 
                    style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
                  ></div>
                  <span style={{color: 'var(--text-color)'}}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center my-5">No expense data to display.</p>
        )}
    </div>
  );
};

export default ExpenseChart;