import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';





class NorthwestTerritories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            northwestTerritoriesData: {
                labels: ["Yellowknife", 'Inuvik', 'Hay River'],
                datasets: [
                  {
                    label: 'Population',
                    data: [18352, 3403, 2806],
                    backgroundColor: [
                      'rgba(34, 5, 255, 0.6)',
                      'rgba(255, 5, 246, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(5, 255, 163, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(221, 255, 5, 0.6)'
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
                  data={this.state.northwestTerritoriesData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Centres In Northwest Territories',
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
 
export default NorthwestTerritories;