import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';





class Nunavut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nunavutData: {
                labels: ["Iqaluit", 'Rankin Inlet', 'Arviat', 'Pangnirtung', 'Cambridge Bay', 'Baker Lake'],
                datasets: [
                  {
                    label: 'Population',
                    data: [6254, 2577, 1810, 1425, 1375, 1165],
                    backgroundColor: [
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(5, 9, 255, 0.6)',
                      'rgba(5, 255, 25, 0.6)',
                      'rgba(255, 113, 5, 0.6)'
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
                  data={this.state.nunavutData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Centres In Nunavut',
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
 
export default Nunavut;