import React, { useState, useEffect } from 'react';
import '../../../styles/css/inRoom.css'
import InputColor from 'react-input-color';
import Plot from 'react-plotly.js';
const InRoom = () => {
    const [rangeRandValue, setRangeRandValue] = useState({
        max: 11,
        min: 5,
        cont: 5
    });
    const rand = () => Math.floor(Math.random() * (rangeRandValue.max - rangeRandValue.min)) + rangeRandValue.min;
    const [colorSelect, setColorSelect] = useState('#049DE0');
    const [velocity, setVelocity] = useState(1000);
    const initialTypesGraph = [
        {
            id: 0,
            options: {
                fill: 'tozeroy',
                type: 'scatter',
                mode: 'lines',
                line: {color: colorSelect}
            }
        },
        {
          id: 1,
          options: {
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: colorSelect}
          }
        }
        
    ];
    const hidenBarOptionGraph = () => {
        document.querySelector('.modebar-container').style.display = 'none';
    }
    const [typesGraph, setTypesGraph] = useState(initialTypesGraph);
    const initialDataPoints = {
        y: [rand(), rand(), rand()],
        x: [0],
        name: 'Forex'
    }
    const initialState = {
        dataPoints: initialDataPoints, 
        optionsGraph:  typesGraph[0].options,
        layout: {
            datarevision: 0,
        },
        revision: 1
    }
    const [state, setState] = useState(initialState);
    const shiftArray = (array, item) => {
        let newArray = [...array, item];
        if(array.length >= 20) {
            newArray.shift();
        } 
        return newArray;

    }
    const increaseGraphic = () => {
        const {  dataPoints, revision } = state;
        setState({
            ...state,
            dataPoints: {
                y: shiftArray(dataPoints.y, rand()),
                x: [...dataPoints.x, dataPoints.x.length + 1]
            },
            revision: revision + 1,
            layout : {datarevision: revision + 1}
        });
    }

    const changeOptGraph = ({target}) => {
        setState({
            ...state,
            optionsGraph: typesGraph[target.value].options
        })
    }
    const updateTypesGraph = () => {
        const tempTypesGraph = typesGraph;
        tempTypesGraph[1].options.marker.color = colorSelect;
        tempTypesGraph[0].options.line.color = colorSelect;
        setTypesGraph(tempTypesGraph);
    }
    const handleStateColor = (color) => {
        setColorSelect(color.hex);
        updateTypesGraph()
      };
    const changeVelocity = ({ target }) => setVelocity(target.value);
    const changeRangeValue = () => {
        let { cont, max, min } =  rangeRandValue;
        let newRange = {
            cont: cont - 1, 
            max,
            min 
        }
        if(newRange.cont === 0) {
            newRange.cont = 5;
            const directionLine = Math.floor(Math.random() * 2);
            if(directionLine) {
                newRange.min = newRange.max;
                newRange.max = newRange.max  + 5;
            } else {
                if(max === 5) {
                    newRange.max = 5;
                    newRange.min = 1;
                }  else if( max === -24 ) {
                    newRange.max = -19;
                    newRange.min = -14;
                }
                else {
                    newRange.min = newRange.max - 10;
                    newRange.max = newRange.max -5;
                }
            }
        } 
        setRangeRandValue(newRange);
    }
    useEffect(() => {
        hidenBarOptionGraph();
        const stateInterval = setInterval(() => {
            changeRangeValue();
            increaseGraphic();
        }, velocity);
        // const rangeValuesInterval = setInterval(() => {
        //     if(directionLine) {
        //         const randomDirectiom = Math.floor(Math.random() * 2 );
        //         s
        //     }
        // }, velocity * 2);
        return () => clearInterval(stateInterval);
    })

    let line1 = Object.assign(state.dataPoints, state.optionsGraph)
    return (
        <div className="containerInRoom">
            <p className="titleRoom">Sala Gamma</p>
            <div className="containerOptGraph">
                <div className="containerOpt">
                    <p className="titleFilters">Filters</p>
                    <div className="groupControl">
                        <label className="lblSelect">Type of graph</label>
                        <select className="select" onChange={changeOptGraph}>
                            <option value="0"> Area </option>
                            <option value="1"> Line</option>
                        </select>
                    </div>
                    <div className="groupControl">
                    <label className="lblSelect">Velocity</label>
                        <select className="select" value={velocity} onChange={changeVelocity}>
                            <option value={1000}> 1 Second </option>
                            <option value={5000}> 5 Seconds </option>
                            <option value={15000}> 15 Seconds </option>
                            <option value={30000}> 30 Seconds </option>
                            <option value={100000}> 1 Minute</option>
                            <option value={500000}> 5 Minutes</option>
                            <option value={1000000}> 10 Minutes</option>
                        </select>
                    </div>
                    <div className="groupControl">
                        <label className="lblSelect">Color Picker</label>
                        <InputColor
                            initialHexColor={colorSelect}
                            onChange={handleStateColor}
                            placement="right"
                        />
                    </div>
                </div>
                <div className="containerGraph">
                    <Plot
                        data={[line1]}
                        layout={state.layout}
                        revision={state.revision}
                        graphDiv="graph"
                        style={{width: "100%"}}
                    />
                </div>
            </div>
        </div>
    )
}

export default InRoom;