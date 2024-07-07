import React, { useEffect, useState } from 'react';
import { Modal, Select, Button, Input, DatePicker, InputNumber } from 'antd';
import moment from 'moment';
import axios from "axios";

const { Option } = Select;

const EmployeeUpdateModal = ({ visible, onCreate, onCancel, data }) => {
    const [goldList, setGoldList] = useState([]);
    const [diamondList, setDiamondList] = useState([]);
    const [smallDiamondList, setSmallDiamondList] = useState([]);
    const [proTypeList, setProTypeList] = useState([]);
    const [proTypeId, setProTypeId] = useState(null);
    const [goldId, setGoldId] = useState(null);
    const [diamondId, setDiamondId] = useState(null);
    const [smallDiamondId, setSmallDiamondId] = useState(null);
    const [smallDiamondQuantity, setSmallDiamondQuantity] = useState(0);
    const [wagePrice, setWagePrice] = useState(0);

    const loadGoldList = async () => {
        try {
            const response = await axios.get(`/gold`);
            setGoldList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadDiamondList = async () => {
        try {
            const response = await axios.get(`/diamond`);
            setDiamondList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadSmallDiamondList = async () => {
        try {
            const response = await axios.get(`/diamond_small`);
            setSmallDiamondList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadProTypeList = async () => {
        try {
            const response = await axios.get(`/proType`);
            setProTypeList(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        if (data) {
            setProTypeId(data.ProTypeID);
            setGoldId(data.GoldID);
            setDiamondId(data.DiamondID);
            setSmallDiamondId(data.DiamondSmallID);
            setSmallDiamondQuantity(data.DiaSmallQuantity);
            setWagePrice(data.WagePrice);
        }
    }, [data]);

    useEffect(() => {
        loadGoldList();
        loadDiamondList();
        loadSmallDiamondList();
        loadProTypeList();
    }, []);

    const handleUpdateProduct = () => {
        try {
            axios.put(`/product/${data.ProductID}`, {
                ProTypeID: proTypeId,
                GoldID: goldId,
                DiamondID: diamondId,
                DiaSmallID: smallDiamondId,
                DiaSmallQuantity: smallDiamondQuantity,
                WagePrice: wagePrice
            }).then((response) => {
                console.log(response);
                onCreate();
            });
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Modal
            visible={visible}
            title="Update Product"
            okText="Update"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={handleUpdateProduct}
        >
            <div style={{ marginBottom: 16 }}>
                <label>ProType:</label>
                {proTypeList.length > 0 && (
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select proType"
                        onChange={(value) => setProTypeId(value)}
                        value={proTypeId}
                    >
                        {proTypeList.map((proType) => (
                            <Option key={proType.ProTypeID} value={proType.ProTypeID}>
                                {proType.ProTypeName}
                            </Option>
                        ))}
                    </Select>
                )}
            </div>
            <div style={{ marginBottom: 16 }}>
                <label>Gold:</label>
                {goldList.length > 0 && (
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select gold"
                        onChange={(value) => setGoldId(value)}
                        value={goldId}
                    >
                        {goldList.map((gold) => (
                            <Option key={gold.GoldID} value={gold.GoldID}>
                                {gold.GoldName}
                            </Option>
                        ))}
                    </Select>
                )}
            </div>
            <div style={{ marginBottom: 16 }}>
                <label>Diamond:</label>
                {diamondList.length > 0 && (
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select diamond"
                        onChange={(value) => setDiamondId(value)}
                        value={diamondId}
                    >
                        {diamondList.map((diamond) => (
                            <Option key={diamond.DiamondID} value={diamond.DiamondID}>
                                {diamond.DiamondName}
                            </Option>
                        ))}
                    </Select>
                )}
            </div>
            <div style={{ marginBottom: 16 }}>
                <label>Small Diamond:</label>
                {smallDiamondList.length > 0 && (
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select diamond"
                        onChange={(value) => setSmallDiamondId(value)}
                        value={smallDiamondId}
                    >
                        {smallDiamondList.map((diamond) => (
                            <Option key={diamond.DiaSmallID} value={diamond.DiaSmallID}>
                                {diamond.DiaSmallID}
                            </Option>
                        ))}
                    </Select>
                )}
            </div>
            <div style={{ marginBottom: 16 }}>
                <label>Small Diamond Quantity:</label>
                <InputNumber style={{ width: '100%' }} min={1} max={20} value={smallDiamondQuantity} onChange={(value) => setSmallDiamondQuantity(value)} />
            </div>
            <div style={{ marginBottom: 16 }}>
                <label>Wage Price:</label>
                <InputNumber style={{ width: '100%' }} min={1} value={parseFloat(wagePrice)} onChange={(value) => setWagePrice(value)} />
            </div>
        </Modal>
    );
};

export default EmployeeUpdateModal;
