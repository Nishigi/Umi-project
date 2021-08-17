import React, { useState, useEffect, useCallback } from "react";
import { history, useSelector, useDispatch } from "umi";
import { Button } from "antd";
export default () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const list = useSelector(model => model.user.list)

    useEffect(() => {
        dispatch({ type: 'user/getList', payload: {} })
    }, [])

    const skip = useCallback((ele) => {
        history.push('info/' + ele.id)
    }, [])
    // console.log(list);
    return (
        <div>
            <div>list react----{count}</div>
            <Button style={{ marginRight: '10px', marginLeft: '10px' }} onClick={() => setCount(count - 1)}>-</Button>
            <Button type='primary' onClick={() => setCount(count + 1)}>+</Button>
            <hr />

            {
                list.map(ele => (<div key={ele.id} onClick={() => skip(ele)}>
                    <span >{ele.id}</span>
                        --------
                    <span>{ele.name}</span>
                </div>
                ))
            }
        </div>
    )
}