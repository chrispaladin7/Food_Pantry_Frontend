import React, { ChangeEventHandler, useState } from 'react'
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse

const foodOptions = [
    {
        "_id": 1,
        "name": "fish",
        "value": 'fish_preferences'
    },
    {
        "_id": 2,
        "name": "egg",
        "value": 'egg_preferences'
    },
    {
        "_id": 3,
        "name": "dairy",
        "value": 'dairy_preferences'
    },
    {
        "_id": 4,
        "name": "peanut",
        "value": 'peanut_preferences'
    }
]

function CheckBox(props: any) {

    const [Checked, setChecked] = useState<any []>([])

    const handletoggle = (value: any) => { 
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
     }

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                {foodOptions.map((value, index) => (
                    <React.Fragment  key={index} >
                        <input type="checkbox" value={value.value}  id={value.name} onChange={() => handletoggle(value.name)}/>
                        <label htmlFor={value.name} className="check-box-search"><span>{value.name}</span></label>

                    </React.Fragment >
                ))
                }
            </Collapse>
        </div>
    )
}

export default CheckBox