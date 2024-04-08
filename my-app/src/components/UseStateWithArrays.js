import React, {useState} from 'react';

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }
    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length - 1;
            })
        )
    }

    // Example code for impure functions, never update the state 
    // directly or use impure functions like push / pop 
    // can lead to unexpected bugs and no re-renders
    // const buggyPushNums = () => {
    //     nums.push(nums.length + 1);
    //     setNums(nums);
    //     console.log(nums);
    // }

    return (
        <div>
            <h2>Array created and controlled with useState hook</h2>
            <button onClick={addNums}>Add Item</button>
            <button onClick={removeNum}>Remove Item</button>
            {/* <button onClick={buggyPushNums}>Buggy Push Item</button> */}
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default UseStateWithArrays;