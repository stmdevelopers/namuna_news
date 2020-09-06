import React from 'react';

const CategoriesTransList = (props) => {
    return (
        <tbody>
            {props.categoriesTrans.map((categoryTrans, index) => {
                return (
                    <tr key={categoryTrans.id} className={`row-${categoryTrans.id}`}>
                        <td>{((props.activePage-1)*props.itemsCountPerPage)+(index+1)}</td>
                        <td>{categoryTrans.title == null ? '-': categoryTrans.title}</td>
                        <td>{ categoryTrans.category.slug }</td>
                        <td>{ categoryTrans.language.language }</td>
                        <td className="action">
                            <button type="button" onClick={props.onEditCategoryTrans.bind(null, categoryTrans.id)} className="btn btn-info btn-sm">Edit</button>
                            <button type="button" onClick={()=>props.showConfirmBox( categoryTrans.id)}  className="btn btn-danger btn-sm nm-delete-btn">Delete</button>
                            
                            {props.confirmText==categoryTrans.id ? (
                                <span className="confirm tooltip-text">Are you sure?&nbsp; 
                                    <a onClick={props.deleteCategoryTrans.bind(null, categoryTrans.id)} href="# ">Yes</a> &nbsp;
                                    <a href="# " onClick={props.hideConfirmBox.bind(null)}>No</a>
                                </span>
                            ): null}
                        </td>
                        
                    </tr>
                )
            })}
            
        </tbody>
    );
};

export default CategoriesTransList;