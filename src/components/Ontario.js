import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';





class Ontario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ontarioData: {
                labels: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London'],
                datasets: [
                  {
                    label: 'Population',
                    data: [2731571, 934243, 721599, 593638, 536917, 383822],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)'
                    ],
                  }
                ]
              }
            }
          }
          render() {
            return (
              <div className="chart">
                <Bar
                  data={this.state.ontarioData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Cities In Ontario',
                      fontSize: 30
                    },
                    legend: {
                      display: false,
                      position: 'bottom',
                      labels: {
                        fontColor: '#000'
                      }
                    },
                    layout: {
                      padding: {
                        left: 100,
                        right: 100,
                        bottom: 40,
                        top: 110
                      }
                    },
                    tooltips: {
                      enabled: true
                    }
                  }}
                />
              </div>);    
    }
}
 
export default Ontario;