import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';





class Yukon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yukonData: {
                labels: ['Whitehorse', 'Dawson City', 'Watson Lake', 'Haines Junction'],
                datasets: [
                  {
                    label: 'Population',
                    data: [246376, 1375, 790, 613],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)'
                    ],
                  }
                ]
              }
            }
          }
          render() {
            return (
              <div className="chart">
                <Pie
                  data={this.state.yukonData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Centres In Yukon',
                      fontSize: 30
                    },
                    legend: {
                      display: true,
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
 
export default Yukon;