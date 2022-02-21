import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Action } from '../State/index';

const Shop = () => {
    const dispatch=useDispatch();
    // const action=bindActionCreators(Action,dispatch)
    const {depositedAmount,withdrawAmount}=bindActionCreators(Action,dispatch)
    return (
        <div className="text-center mt-5">
            <h1>Buy Book Price 200 BDT</h1>
            {/* <button className='btn btn-outline-success mx-2' onClick={()=>dispatch(Action.depositedAmount(200))}> + </button>
            Add to Cart item
            <button className='btn btn-outline-success mx-2' onClick={()=>dispatch(Action.withdrawAmount(200))}> - </button> */}

            <button className='btn btn-outline-success mx-2' onClick={()=>depositedAmount(200)}> + </button>
            Add to Cart item
            <button className='btn btn-outline-success mx-2' onClick={()=>withdrawAmount(200)}> - </button>
        </div>
    );
};

export default Shop;