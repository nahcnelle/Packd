import React, { useEffect, useState } from "react";

import ItemEditInput from "../item-table-components/ItemUpdate";
import ItemEditQuantity from "../item-table-components/ItemEditQuantity";
import ItemRemove from "../item-table-components/ItemRemove";
import ItemAdd from "../item-table-components/ItemAdd";
import ListRemove from "./ListRemove";

import "../css-files/ListItemsView.css";

const ListItemsView = ({list, lists, setLists}) => {
    const [items, setItems] = useState([]);
    const list_name = list.description;
    const list_id = list.list_id;

    const getLists = async () => {
        try {
            const response = await fetch("http://localhost:8000/allitems");
            const jsonData = await response.json();

            setItems(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getLists();
    }, []);

    // console.log(items, "bef÷ore");
    // items.filter(item => item.list_id == list_id);
    // console.log(items, "after");

    return (
        <div>
            <h3 className="d-flex justify-content-center">
                <div className="list-name">{list_name}</div>
                <div className="remove-btn"><ListRemove list={list} lists={lists} setLists={setLists} /></div>
                
            </h3>
        
            <ItemAdd list_id={list_id} className="item-add"/>

            <table className="table text-center mx-5">
                <thead>
                <tr className="headers">
                    <th className="checkbox-header"></th>
                    <th className="quantity-header">Quantity</th>
                    <th className="item-header">Item</th>
                    <th className="remove-header">Remove</th>
                </tr>
                </thead>
                <tbody>
                    {items.sort((a, b) => a.item_id-b.item_id).map(item => (
                        <tr key={item.item_id}>
                        <td><input className="checkbox form-check-input me-1" type="checkbox" value="" aria-label="..." /></td>
                        <td className="edit-quantity"><ItemEditQuantity items={item} list_id={list_id}/></td>
                        <td className="edit-input"><ItemEditInput items={item} list_id={list_id}/></td>
                        <td><ItemRemove item={item} items={items} setItems={setItems}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default ListItemsView;