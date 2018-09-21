import React from 'react';
import { Button, Card, Row, Col, Input, Icon } from 'react-materialize';

function ExerciseInput(props) {
    return(
        <div>
            <Row>
                <Input s={4} onChange={props.updateExercise} type='select' label="Select Exercises" defaultValue='1'>
                <option value={0}>Choose an exercise</option>
                {props.exerciseData.map(exercises => <option value={exercises.id} key={exercises.id}>{exercises.name}</option>)}
                </Input>
                <Input s={3} label="Reps"  onChange={props.updateReps} />
                <Input s={4} label="Frequency"  onChange={props.updateFreq} />
                
            </Row>
        </div>
    )
}

export default ExerciseInput;