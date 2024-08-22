import { Space, Table, Button } from 'antd';
import React, { useState, useEffect } from 'react';

const CartTable = ({ setTotal }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    const handleIncrease = (record) => {
        const updatedCart = cart.map(item => {
            if (item.id === record.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDecrease = (record) => {
        const updatedCart = cart.map(item => {
            if (item.id === record.id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemove = (record) => {
        const updatedCart = cart.filter(item => item.id !== record.id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <Space size="small">
                    <Button className='quantity-button' onClick={() => handleDecrease(record)}>-</Button>
                    {text}
                    <Button className='quantity-button' onClick={() => handleIncrease(record)}>+</Button>
                </Space>
            ),
        },
        {
            title: 'Tổng',
            dataIndex: 'total',
            key: 'total',
            render: (text, record) => (
                <span>{(parseFloat(record.price.replace('$', '')) * record.quantity).toFixed(2)}$</span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="small">
                    <a onClick={() => handleRemove(record)}>Remove</a>
                </Space>
            ),
        },
    ];

    const data = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: true }}
            rowKey="id"
            summary={() => {
                let total = 0;
                data.forEach(item => {
                    total += parseFloat(item.price.replace('$', '')) * item.quantity;
                });
                total = total.toFixed(2);
                setTotal(total);
                return (
                    <>
                        {data.length > 0 && (
                            <Table.Summary.Row>
                                <Table.Summary.Cell className="cart-sum" colSpan={3}>Tổng cộng</Table.Summary.Cell>
                                <Table.Summary.Cell className="cart-sum-value">{total}$</Table.Summary.Cell>
                            </Table.Summary.Row>
                        )}
                    </>
                );
            }}
        />
    )
}

export default CartTable;
