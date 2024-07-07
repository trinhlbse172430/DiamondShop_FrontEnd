import React, { useEffect, useState } from 'react';
import { Modal, Select, Button, Input, DatePicker, InputNumber } from 'antd';
import moment from 'moment';
import axios from "axios";

const { Option } = Select;

const ProductCreateModal = ({ visible, onCreate, onCancel }) => {
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
    const [productName, setProductName] = useState("");

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
        if (visible) {
            setProTypeId(null);
            setGoldId(null);
            setDiamondId(null);
            setSmallDiamondId(null);
            setSmallDiamondQuantity(1);
            setWagePrice(1);
        }
    }, [visible]);

    useEffect(() => {
        loadGoldList();
        loadDiamondList();
        loadSmallDiamondList();
        loadProTypeList();
    }, []);

    //check all input
    // useEffect(() => {
    //     console.log('smallDiamondID: ', smallDiamondId)
    // }, [proTypeId, goldId, diamondId, smallDiamondId, smallDiamondQuantity, wagePrice]);


    const handleCreateProduct = () => {
        //check all input
        if (!proTypeId || !goldId || !diamondId || !smallDiamondId || !smallDiamondQuantity || !wagePrice) {
            alert("Please fill all fields");
            return;
        }
        let ProductIdNumber = 0;
        let ProductID = "";
        try {
            axios.get(`/product`).then((response) => {
                if (response.data.length === 0) {
                    ProductID = "PT001";
                    ProductIdNumber = 1;
                } else {
                    ProductIdNumber = parseInt(response.data[response.data.length - 1].ProductID.slice(3)) + 1;
                    if (ProductIdNumber < 10) {
                        ProductID = "PT00" + ProductIdNumber;
                    } else if (ProductIdNumber < 100) {
                        ProductID = "PT0" + ProductIdNumber;
                    } else {
                        ProductID = "PT" + ProductIdNumber;
                    }
                }
                axios.post(`/product`, {
                    ProductID: ProductID,
                    ProTypeID: proTypeId,
                    GoldID: goldId,
                    DiamondID: diamondId,
                    DiamondSmallID: smallDiamondId,
                    DiaSmallQuantity: smallDiamondQuantity,
                    WagePrice: wagePrice.toString(),
                    Currency: "VND",
                    ProductName: productName
                }).then((response) => {
                    console.log(response);
                    onCreate();
                });
            });
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Modal
            visible={visible}
            title="Create product"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={handleCreateProduct}
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
                <label>Product Name:</label>
                <Input placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} />
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
                <InputNumber style={{ width: '100%' }} min={1} max={20} defaultValue={1} onChange={(value) => setSmallDiamondQuantity(value)} />
            </div>
            <div style={{ marginBottom: 16 }}>
                <label>Wage Price:</label>
                <InputNumber style={{ width: '100%' }} min={1} defaultValue={1} onChange={(value) => setWagePrice(value)} />
            </div>
        </Modal>
    );
};

export default ProductCreateModal;
