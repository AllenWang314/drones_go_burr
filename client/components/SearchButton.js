import { useState } from 'react';
import Select from 'react-select';

const searchInputs = [
    { value: "person", label: "Person"},
    { value: "collapsed building", label: "Collapsed building"},
    { value: "electrical lines", label: "Electrical lines"},
    { value: "trees", label: "Trees"}
]

export default function SearchButton(props) {
    return (
        <div>
            <Select 
                options={searchInputs} 
                onChange={(option) => props.setSearchInput(option.value)}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: '#A9B8F7',
                    },
                  })}
                styles={{
                    option: (baseStyles) => ({
                        ...baseStyles,
                        color: 'black'
                      }),
                }}
            />
        </div>
    );
}